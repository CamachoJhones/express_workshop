const express = require('express');
const app = express(); //instancia para mandar llamar al constructor express. 
const { pokemon }  = require('./pokedex.json');

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
    res.status(200);
    res.send("Bienvenido al Pokedex");
});

app.get("/pokemon", (req, res, next)=>
{
    //console.log("Hola " + req.params.name);
    res.status(200);
    res.send(pokemon);
    
});
app.get('/pokemon/:id', (req, res, next)=>{
    res.status(200);
    res.send(pokemon[req.params.id -1]);

});

/*app.listen(3000, function(){

}); es lo mismo*/

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running");
});


