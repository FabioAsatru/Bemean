const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
  name: String
}

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = {};

PokemonModel.findOne(query, function (err, data) {
    if(err) return console.log('Erro:', data);
    return console.log('Buscou:', data);

})
