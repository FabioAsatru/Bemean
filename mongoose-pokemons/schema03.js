


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    name: String,
};

//console.log('Schema', pokemonSchema);
const pokemonSchema = new Schema(_schema);

const data = {name: {name: 'fabio'}};

var Model = mongoose.model('pokemons', pokemonSchema);
var poke = new Model(data);

poke.save( (err, data) => {
    if(err) return console.log('ERRO', err);
    console.log('inseriu', data);
})



module.exports = pokemonSchema;
