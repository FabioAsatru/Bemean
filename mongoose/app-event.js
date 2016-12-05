'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Pokemon = require('./models/pokemon');


Pokemon.find({}, function(err, pokemon) {

    if(!err){
      console.log(pokemon);
    }else {
      throw errr;
    }

});
