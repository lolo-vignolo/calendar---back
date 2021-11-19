const {response} = require("express");
const {validationResult} = require("express-validator");


 const validarCampos = (req, res = response, next) => {

     //manejo de errores
     const error = validationResult(req) // la validación que voy a hacer es la info del req, este error es un objeto con información sobre el error., viene de express validator

     if(!error.isEmpty()){
         return res.status(400).json({
             ok:false,
             errors:error.mapped()
         });
     }

     next();
     
 }

 module.exports = {
     validarCampos
 }