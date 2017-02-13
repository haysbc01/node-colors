
module.exports =  function (r,g,b){
  var luminosity = 0;

  for(var i = 2; i < 5; i++){
    luminosity = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
    return(luminosity);
}};
