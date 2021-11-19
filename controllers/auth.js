const {response} = require("express");
const User = require ("../models/User");
const bcrypt = require('bcryptjs');
const {generarJWT} = require ("../helpers/jwt");

// 1)

const createUser = async (req, res=response) => {

    /* req: esto es lo que solicita la persona, usuario que usa my web, o lo que por ejemplo escribe en un formulario, es lo que me envían del fornt*/
    /* va a haber un proceso en el medio donde se hace la comunicacion con la base de datos y luego sale una res. */
    /* res -- todo ok, se sigue trabajando, res -- todo mal no se puede conectar a la DB. La respuesta sale del Back para el usuario.*/

    // esto se usará para hacar las validaciones. 
    const { email, password}= req.body


    // 1 VALIDACIÓN: tomo el email de arriba y con el findOne, veo si en la DB existe un email igual. 
    try {
        let user = await User.findOne ({email:email});

        if(user){
            return res.status(400).json({
                on:false,
                msg: "There exist alredy an user with that Email"
            })
        } 


        // si esa promesa pasa ( no hay un usuario con esa email) se crearía uno nuevo en la DB
        user = new User(req.body);

        //encryptar password, tmb usaré lo que importe arriba del req. video 334
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(password, salt);


        await user.save();

        // Generte token JWT, ya tengo el usuario. Ahora le doy el token
        const token =  await generarJWT(user.id, user.name); //salen del req. 


        /*res: esto es lo que yo programado, mi backend responde*/
        return res.status(201).json({
            ok:true ,
            msg: user.id,
            name: user.name,
            token: token

        
    })
        
    } catch (error) { 
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "There was an error, talk to the administration, Please. :)"
        })
             
    }


}



// 2)

const loginUser = async  (req, res=response) => {

    // este es el email y el pasword que escrie el usuario
    const { email, password}= req.body;

    // veo si el usuario existe, si existe luego con el if ve si la contraseña machea, si no exista salta al catch y tira el error.

    try {
        let user = await User.findOne ({email:email});

        if(!user){
            return res.status(400).json({
                on:false,
                msg: "This user does not exist"
            })
        } 

    // se que el usuario existe, confirmar password. compara el que escribe, con el que tengo en la DB.

    const validPassword = bcrypt.compareSync(password, user.password );

    if(!validPassword){
        return res.status(400).json({
            ok: false,
            msg: "Email or password incorrect"
        });
    }


    // Generar nuestro JWT   

    const token =  await generarJWT(user.id, user.name);
    
    return res.json({
        ok:true,
        uid : user.id,
        name: user.name,
        token:token
       
    })
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "There was an error, talk to the administration, Please. :)"
        })
    } 

}



// 3)

const renewToken = async(req, res=response) => {

    const {uid, name} = req;

    const token =  await generarJWT(uid, name);

    return res.json({
        ok:true,
       token
    })

}




module.exports = {
    createUser:createUser,
    loginUser:loginUser,
    renewToken:renewToken
}





 /* if(name.length<3 ){       ///// import poner return /////
        return res.status(400).json( {
            "ok":false,
            "msg": "Name fild has to have at least 5 characters"
        })
    } lo saco por que uso express-validator */ 