'use strict';


const EventEmitter = require('events').EventEmitter;
const util = require('util');

function User(data) {
    this.data = data;
    this.on('user:save', sendMail);
    this.on('error', sendError);
    EventEmitter.call(this);
}

util.inherits(User, EventEmitter);

User.prototype.save = function () {

  if (this.data.name) {
      this.emit('user:save', this.data);
  }else {
    this.emit('error', new TypeError('User need a name'));
  }
};


function sendMail(user){

    user.pass = Math.floor(Math.random()*(100000 - 9000000)) + 9000000;
    util.log('\n \tOla ${user.name}!     \t bem vindo seu pass é ${user.pass}'
  );
}


function sendError(err) {
  throw err;
}

module.exports = User;
