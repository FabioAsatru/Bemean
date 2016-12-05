
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {

    name: String,
    description: String,
    type: String,
    attack: Number,
    defense: Number,
    height: Number,
    created_at: {type: Date, default: Date.now }

};

//console.log('Schema', pokemonSchema);
const pokemonSchema = new Schema(_schema);
const data = {name: 'Zubat'};

var Model = mongoose.model('pokemons', pokemonSchema);
var poke = new Model(data);
poke.save( (err, data) => {
    if(err) return console.log('ERRO', err);
    console.log('inseriu', data);
})



module.exports = pokemonSchema;
