const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
  name: String
}

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = {name: /pikachu/i};


PokemonModel.find(query,function (err, data) {
    if(err) return console.log('Erro:', data);
    return console.log('Buscou:', data);

})

/*
const callback = function (err, data) {
    if(err) return console.log('Erro:', data);
    return console.log('Buscou:', data);
}

PokemonModel.find(query).where({attack: {$gt: 90}}).exec(callback)
*/
module.exports = PokemonModel;
