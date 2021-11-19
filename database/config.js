 const mongoose = require("mongoose");

 const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN); // este URL como puede cambiar lo coloco en los environments
        console.log("DB Online :)");

    } catch (error) {
        console.log(error);
        throw new Error("ERROR in the connection with the DB"); //este throw error es de JS, para decribir el error
        
    }

 }

 module.exports ={
     dbConnection
 }


 /*haciendo esta configuración y exportandola al index.js le doy coneccion a mi back con la DB
 si algo fallara, me encontraría con un error, mi back se va a encontrar corriendo en el host 4000
 por ejemplo, pero si base de datos, por eso es importante poner el catch y ver de evitar eso.*/