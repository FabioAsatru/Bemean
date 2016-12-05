const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema={

    name:String
}

const pokemonSchema = new Schema(_schema);

const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const Suissamon = new PokemonModel({name: 'suissamon'});

//SAVE
/*
Suissamon.save(function (err, data) {
    if(err) return console.log("errro: " , err);
    return console.log("inseriu:", data);
})
*/

//Create
PokemonModel.create({name:'Mewtwo'}, function functionName(err, data) {
    if(err) return console.log('Erro:', err);
    return console.log('Inseriu', data);

})


module.exports = PokemonModel;
