const {Schema, model} = require("mongoose");


//este es el esquema que utilizo para grabar en la base de datos


const EventSchema =  Schema({
    title: {
        type : String,
        required: true,
    },
    notes:{
        type: String,
    },
    start:{
        type: Date,
        required: true
    },
    end:{
        type: Date,
        required: true
    },
    user: {
        type:Schema.Types.ObjectId, // esto le dice a mongoose que va  aser una referencia, y la especifico abajo
        ref: "User",
        required: true

    }

  });


  

  module.exports = model ("Event", EventSchema);