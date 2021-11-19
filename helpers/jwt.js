const jwt = require("jsonwebtoken");

//esto debería hacerse con un call back, pero aquí lo hacemos con una promesa. Por que es mas facil.


const generarJWT = (uid,  name ) =>{

    return new Promise((resolve,rejecct) => {
        
        const payload = {uid, name};

        jwt.sign(payload, process.env.SECRET_JWT_SEED , {
            expiresIn: "2h"
        }, (err, token)=>{
            if(err){
                console.log(err);
                rejecct("Sorry there was an ERROR")
            }else{
                resolve(token);
            }
        } )

    } ) 

}

module.exports = {
    generarJWT
}
    
