const morgan=require('morgan')
const express = require('express');
const app = express(); //instancia para mandar llamar al constructor express. 
const pokemon = require('./routes/pokemon')
const user = require('./routes/user')

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
app.get("/", (req /**Informacion de la peticion */, 
                res /**Objeto que permite responder peticiones */, next) =>{
    // const pokemon =pokedex.pokemon;
    res.status(200).json({code:1 , message: "Bienvenido al Pokedex"});
});

app.use("/pokemon",pokemon);

app.use("/user", user);

app.use((req, res, next) =>{
    return res.status(404).json({code:404, message: "URL no encontrada"});
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running");
});


