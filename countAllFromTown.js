module.exports = function countAllFromTown(regNum, town){
    var list = regNum.split(',');
    var townList = [];
    var count = 0;
    for (var i=0; i<list.length; i++){
         if(list[i].includes(town)=== true){
         count++;
        townList.push(list[i].trim());
        }
    }
}
  return itemName.startsWith('CA');
