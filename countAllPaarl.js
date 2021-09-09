module.exports = function (countAllPaarl) {
var paarl = regNumbersString.split(',');
  
for (var i=0; i<paarl.length; i++){
     if(paarl[i].includes('CJ'))
       arr.push(paarl[i].trim());
}
    console.log(arr);
return arr;
}