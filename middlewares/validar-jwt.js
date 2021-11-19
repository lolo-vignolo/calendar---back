const {response} = require("express");
const jwt = require ("jsonwebtoken");

const validarJWT = (req, res = response, next) =>{

    // de donde recibo el JWT? en este caso "POSTMAN" de key : x-token (headers)

    const token = req.header("x-token");
    
    if (!token){
        return res.status(401).json({
            ok:false,
            msg: "There is not any token in the request"
        })
    }

    try {
        
        const {uid, name} = jwt.verify (
             token,
             process.env.SECRET_JWT_SEED,
        );

        req.uid = uid;
        req.name = name;

        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok:false,
            msg: "Toke does not valid"
        })
    }


    next();

}




module.exports = {
    validarJWT
}