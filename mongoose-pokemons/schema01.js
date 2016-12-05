
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/be-mean-instagram');

const Schema = mongoose.Schema;

//Criando Schema

const pokemonSchema = new Schema({
    name: String,
    description: String,
    type: String,
    attack: Number,
    defense: Number,
    height: Number
});

//console.log('Schema', pokemonSchema);
module.exports = pokemonSchema;
