const express = require('express')
const pokemon = express.Router();
const db=require('../config/database')


pokemon.post("/", (req, res, next)=>{
    return res.status(200).send(req.body)
});

pokemon.get('/',async (req, res, next)=>{
  

    const pkmn =await db.query("SELECT * FROM pokemon");
    res.status(200).json(pkmn);
});
pokemon.get('/:id([0-9]{1,3})',async(req, res, next)=>{

    const id = req.params.id;

    const pkmns =await  db.query("select * from pokemon where pok_id='"+id+"'");
    res.status(200).json(pkmns);
    
});
pokemon.get('/:name([A-Za-z]+)', async(req, res, next)=>
{
    const name= req.params.name;
    const pkmname =await  db.query("select * from pokemon where pok_name='"+name+"'");
    res.status(200).json(pkmname);
});

module.exports=pokemon;
