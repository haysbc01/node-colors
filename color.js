var luminosity = 0;

for(var i = 2; i < 5; i++){
   luminosity = (0.2126 * process.argv[2]) + (0.7152 * process.argv[3]) + (0.0722 * process.argv[4])

};
console.log(luminosity);

var color = function(luminosity){
if (luminosity > 155) {
  return 'light';
} else {
  return 'dark';
}
};

console.log(color(luminosity));
