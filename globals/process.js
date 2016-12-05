
'use strict';


process.nextTick(() => {
    console.log("eu sou um async");
});

console.log(process.execPath);
console.log(process.cwd());
