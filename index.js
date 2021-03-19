const bodyParser = require('body-parser');
const express = require('express');
const app = express(); //instancia para mandar llamar al constructor express. 
const { pokemon }  = require('./pokedex.json');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


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

app.post("/pokemon/", (req, res, next)=>{
    return res.status(200).send(req.body)
});

app.get('/pokemon', (req, res, next)=>
{
    //console.log("Hola " + req.params.name);   
    res.status(200).send(pokemon);
});
app.get('/pokemon/:id([0-9]{1,3})', (req, res, next)=>{
    const id = req.params.id -1;
    if (id >= 0 && id <= 150){
        res.status(200).send(pokemon[req.params.id -1]);
    }
    return res.status(404).send("Pokemon no encontrado");
    
});
app.get('/pokemon/:name([A-Za-z]+)', (req, res, next)=>
{
    const name= req.params.name;
    //FORMA de BUSQUEDA 1
    /*
    for(i=0; i<pokemon.length; i++)
    {
        if (pokemon[i].name.toUpperCase() == name.toLocaleUpperCase() ) {
            return res.status(200).send(pokemon[i]);
        }
    }
    //return res.status(404).send("Pokemon no encontrado");
    */

    //FORMA 2 
    //Filtrado de nombres que coinciden con Busqueda

    const pk = pokemon.filter((p)=>{
        /*if (p.name.toUpperCase() == name.toUpperCase())
        {
            return p;
        }*/
        //***************************************************************** */
        //Operador ternario> condicion ? valor si verdadero : valor si falso
        //return (p.name.toUpperCase() == name.toUpperCase()) ? p : null; 
        return (p.name.toUpperCase() == name.toUpperCase()) && p; 
    });
    //Comprobar tamanio de arreglo
    /*if (pk.length>0){
        return res.status(200).send(pk)
    }
    return res.status(404).send("Pokemon no encontrado");*/
    (pk.length>0) ? res.status(200).send(pk) : res.status(404).send("Pokemon no encontrado");
    
});
/*app.listen(3000, function(){
}); es lo mismo*/
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running");
});


