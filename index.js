//Dependencies
const morgan=require('morgan')
const express = require('express');
const app = express(); //instancia para mandar llamar al constructor express. 
//Routers
const pokemon = require('./routes/pokemon')
const user = require('./routes/user')
//Middleware
const auth=require('./middleware/auth')
const notFound=require('./middleware/notFound')
const index=require('./middleware/index')
const cors= require('./middleware/cors')


app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


/* Verbos HTTP
    GET Solicita una representacion de un recurso en especifico
    POST  Enviar una entidad a un recurso especifico causando a menudo cambios en el servidor
    PATCH Realizar modificaciones parciales a un recurso
    PUT Reemplazar todas las representaciones actuales de un recurso con la carga de la peticion
    DELETE borra un recurso especifico.
*/
app.get("/", (req, res, next)=>{
    res.status(200).send("Hola");
});

app.use("/user", user);

app.use(auth);

app.use("/pokemon", pokemon);    

app.use(notFound);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running");
});


