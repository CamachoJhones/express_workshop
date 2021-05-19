module.exports=(req /**Informacion de la peticion */, 
    res /**Objeto que permite responder peticiones */, next) =>{
// const pokemon =pokedex.pokemon;
res.status(200).json({code:1 , message: "Bienvenido al Pokedex"});
}