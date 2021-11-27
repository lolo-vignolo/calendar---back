const { response } = require("express");
const Event = require("../models/Event");
// estos controllers, hacer la conexion y y los posteos con mi base de Datos, mientras el Schema me da la extructura. Aqui puedo crear instancias.
//con la req tomo lo que viene del usuario y la res la hago a la DB.


const getEventos = async(req, res=response) =>{

 
        const events = await Event.find()
                                  .populate("user", "name");  //con esto me trae la info del usuario tambien, segundo argumento especifica cual info quiero del usuario. El _id vendrá por default.
        res.json({
            ok:true,
            events,   
        })
    }

const crearEvento = async(req, res=response) =>{

    // uso un console.log para ver que viene del evento., osea lo que manda el usuario
    // console.log(req.body);

    const event = new Event(req.body)

    //try y catch para grabar en la DB.
    try {

        //event es una instancia con la forma del Schema, si voy a la instancia.user y le puedo
        //dar el valor de req.uid. De esta forma le doy valor a ese campo, que si voy al Schema no lo he puesto.
        // esta es mi refetencia al usuario que lo creo, a la ves este evento tiene un _id unico.
        event.user = req.uid

        //con el save(); guardo la instancia en la DB.
       const eventsvedDB =  await event.save();
       res.status(200).json({
           ok:true,
           msd: "Data saved in the DB.",
           event :  eventsvedDB 
       })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msd: "there was an Error, try again"
        })
        
    }

    }

const actualizarEvento = async(req, res=response) =>{

        // params devuelve la ultima parte de URL.
    const eventId = req.params.id;


        try {

            //esto me va a buscar entre Event y me devolvra el evento que coincide con el eventId.
            const event = await Event.findById (eventId);
            const uid = req.uid

            if (!event){
                return  res.status(404).json({
                    ok:false,
                    msg : " this ID does not exist"
                });
            }

            // el uid pertenece al usuario ver en la auth route., la otra parte pertenece al evento.
            if (event.user.toString() !== uid){
                return  res.status(401).json({
                    ok:false,
                    msg : "You do not have the autorization"
                });
            }
                // esta constante es un objeto que esta compuesta por la info que ingreso el cliente ...req.body, y el usuario .
                const nuevoEvento = { 
                     ...req.body,
                     user : uid
                }

                //tres parametros (evento a actualizas, evento nuevo, este objeto avisa que se dvuelva el evento actualizado )
                const eventactualizado = await Event.findByIdAndUpdate(eventId, nuevoEvento, {new:true} )

                return  res.status(201).json({
                    ok: true,
                    evento: eventactualizado
                })


         
            
            }catch (error) {
            console.log(error);
            res.status(500).json({
                ok:false,
                msg :"There was a problem, try again"
            })
            
        }

       
    }

const eliminarEvento = async(req, res=response) =>{

    const eventId = req.params.id

       try {
        const event = await Event.findById (eventId);
        const uid = req.uid;

        if (!event){
            return  res.status(404).json({
                ok:false,
                msg : " this ID does not exist"
            });
            
        }

        if (event.user.toString() !== uid){
            return  res.status(401).json({
                ok:false,
                msg : "You do not have the autorization"
            });
        }
        
        const eventToEliminate = await Event.findByIdAndDelete(eventId)

                res.status(201).json({
                    ok: true,
                    evento: eventToEliminate,
                    msg: "this event was deleted"
                })
        



           
       } catch (error) {
           console.log(error);
           res.status(500).json({
               ok:false,
               msg : " there was an ERROR, try again please"
           })
       }
    }
    



module.exports = {
    getEventos :getEventos,
    crearEvento: crearEvento,
    actualizarEvento: actualizarEvento,
    eliminarEvento:eliminarEvento

}