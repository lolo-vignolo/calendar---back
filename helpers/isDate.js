const moment = require("moment")


// value son las que pongo como fechas start y end, ver el console log.
const isDate = (value) =>{
    console.log(value);
    
    if(!value){
        return false;
    }

//isValid es una funcion de moment
    const date = moment(value)
    if (date.isValid) {
        return true 
    } else{
        return false
    }
    
}




module.exports = {
    isDate:isDate
}