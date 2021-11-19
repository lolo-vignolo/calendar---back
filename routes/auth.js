/*
Rutas relacionadas a Usuarios
HOST + /api/auth
(es como coloco esto en el DOM, establecido en index.js)
*/

const {Router} = require("express");
const router = Router();

const {check} = require("express-validator"); //se va a encargar de validar un campo en particular.

const {createUser, loginUser, renewToken} = require("../controllers/auth"); // es lo que importo del auth cotroller 
const {validarJWT} = require ("../middlewares/validar-jwt") // importo el middleware
const { validarCampos } = require("../middlewares/validar-campos");

//tanto app, como router los llamo de express, ahora si quiero ver ese ok:true
// al este "/" definido aquí le debro agregar el path establecido en el index para
// esta ruta. o sea "/api/auth" (localhost:4000/api/auth) 
//cada "/..." es un endpoint.



// "/new" me va a llevar a createUser
router.post(
    "/new",
    [ //middleware .. un middleware no es mas que una función
       check("name", "Name is required").not().isEmpty(), 
       check("email", "Should be an email").isEmail(),
       check("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
       validarCampos 
    ]
    , createUser);



router.post(
    "/",
     [
        check("email", "Should be an email").isEmail(), 
        check("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
        validarCampos
    ] ,
    loginUser );



router.get("/renew",
[
    validarJWT
],
 renewToken );


module.exports = router; 


//password 
/*min 8 char long.
At least one uppercase.
At least one lower case.
At least one special character.*/