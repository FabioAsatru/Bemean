"use strict";


console.log(__dirname);
console.log(__filename);

var buffer = new Buffer('Hello World');

console.log(buffer.toString());

const time = setInterval(() => console.log("hello async"), 1000);

setTimeout(() => {
  clearInterval(time);
}, 5000);
