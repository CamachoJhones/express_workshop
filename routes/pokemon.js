const express = require('express')
const pokemon = express.Router();
const pk = require('../pokedex.json').pokemon;



pokemon.post("/", (req, res, next)=>{
    return res.status(200).send(req.body)
});

pokemon.get('/', (req, res, next)=>{
    console.log(pk);
    //console.log("Hola " + req.params.name);   
    res.status(200).send(pk);
});
pokemon.get('/:id([0-9]{1,3})', (req, res, next)=>{
    const id = req.params.id -1;
    if (id >= 0 && id <= 150){
        res.status(200).send(pk[req.params.id -1]);
    }
    return res.status(404).send("Pokemon no encontrado");
    
});
pokemon.get('/:name([A-Za-z]+)', (req, res, next)=>
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

    const pkmn = pk.filter((p)=>{
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
    (pkmn.length>0) ? res.status(200).send(pkmn) : res.status(404).send("Pokemon no encontrado");
    
});

module.exports=pokemon;
