    module.exports = function findItemsOver(list, list1){
        const items1 = [];
        for (var i=0; i<list.length;i++){
            if (list[i].qty > 20);
            items1.push(list[i]);
        }
        return items1;
    }