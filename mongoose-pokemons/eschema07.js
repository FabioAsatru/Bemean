


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    pokemons: [{type: Schema.Types.ObjectId, ref: 'pokemons'}]
}

const data = {

    pokemons: ['583511de1008120674284449']

};


//console.log('Schema', pokemonSchema);
const pokemonSchema = new Schema(_schema);

const Model = mongoose.model('mypokemons', pokemonSchema);

const poke = new Model(data);

poke.save( (err, data) => {
    if(err) return console.log('ERRO', err);
    console.log('inseriu', data);
})



module.exports = pokemonSchema;
