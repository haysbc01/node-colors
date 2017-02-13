var colorutil = require('./colorutil.js');

console.log(colorutil(process.argv[2], process.argv[3], process.argv[4]));

var darken = ((process.argv[2]* .8)+ ", "+ (process.argv[3]*.8) + ", "+ (process.argv[4]*.8));


console.log(darken);
