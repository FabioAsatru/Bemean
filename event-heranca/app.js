'use strict';

const User = require('./user.js');


const user = new User({name : 'Pompeu'});

user.save();
