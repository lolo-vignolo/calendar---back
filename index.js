const express = require("express");
require("dotenv").config();
const {dbConnection} = require ("./database/config")
const cors = require ("cors");



//crear el servidor de express (configuración express)

const app = express();

//BD connection

dbConnection();

//CORS
app.use(cors());


//directorio Publico ("use" es una simple función que se ejecuta cunado alguien hace una paetición al servidor)
/* aqui dentro del static pongo el path de lo que quiero ejecutar*/
app.use(express.static("public"));


//lectura y parseo del body, */petision que venga en estado Json las proseso aqui*/ 
app.use (express.json());





//rutas
 /*(configuración de una ruta, para evitar ver el GET / que el servidor no encuenra nada)
poniendo esta ruta "/", ahora va a esperar una respuesta, sino quedará pensando,
Se trabaja en POSTMAN por que es mas util y mejor la visualización.*/

//TODO 1: auth // crear, login, renew 
/*todo lo que el arquivo exporte de lo puesto en el require, lo va a hacer en la ruta que puse "/api/auth" */
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'));
  });


//TODO 2: CRUD: Eventos




//escuchar peticiones (donde quiero verlo)

app.listen (process.env.PORT, ()=>{
    console.log(`servidor running in port ${process.env.PORT}`);
} )