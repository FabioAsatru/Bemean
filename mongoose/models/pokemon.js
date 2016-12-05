'use strict';

const mongoose = require('mongoose');
const util = require('util');


function pokemonHandler(){
  let Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;

  const eschema = new Schema({
      id          : ObjectId,
      name        : {type : String, trin : true},
      type        : {type : String, trin : true},
      attack      : {type : Number},
      defence     : {type : Number},
      height      : {type : Number},
      description : {type : String, trin : true}

  })

  schema.pre('find', function (next){

      this.start = Date.now();
      util.log("findiing....");
      next();
  });

  schema.post('find', function(result){
      setTimeout(function () {
        console.log('end :p');
      }, 10000).

  });


  return mongoose.model('Pokemon', schema);

}
