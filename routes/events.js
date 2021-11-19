
/*
HOST + /api/events
*/

const {Router} = require("express");
const router = Router();
const {validarJWT} = require ("../middlewares/validar-jwt");
const {getEventos, crearEvento, actualizarEvento, eliminarEvento} = require("../controllers/events");
const {check} = require("express-validator"); 
const { validarCampos } = require("../middlewares/validar-campos");
const {isDate} = require("../helpers/isDate");

// creo un reouter.use(), para no tener que pasar el validarJWT por todas las rutas,
//sino serían todas como la de abajo. Si alguna de las rutas es publica, la pongo
//por encima del router.use()

router.use(validarJWT);


//Obtener eventos
router.get("/",  getEventos);


//Crear un nuevo evento
router.post("/", 
[
    check("title", "Title es required").not().isEmpty(),
    check("start", "There should be a start date").custom(isDate),
    check("end", "There should be a end date").custom(isDate),
    validarCampos

],crearEvento);


//Actualizar evento
router.put("/:id", actualizarEvento);





//Borrar evento
router.delete("/:id",  eliminarEvento);




module.exports = router; 

// router.get("/", validarJWT, getEventos);