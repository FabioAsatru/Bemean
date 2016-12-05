const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema={

  name: String,
  description: String,
  type: String,
  attack: Number,
  defense: Number,
  height: Number,
}

const pokemonSchema = new Schema(_schema);

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

const query = {name: /pikachu/i};
const mod = {attack: 666};

//SAVE
/*
Suissamon.save(function (err, data) {
    if(err) return console.log("errro: " , err);
    return console.log("inseriu:", data);
})
*/

//Create
Pokemon.update(query, mod, function functionName(err, data) {
    if(err) return console.log('Erro:', err);
    return console.log('Alterou: ', data);

})
