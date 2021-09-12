module.exports = function mostProfitableDepartment(salesData1){
    const departmentList = {};
    for (var i=0; i<salesData1.length;i++){
        const product = salesData1[i];
        departmentList[product.department] = 0;
    }
    for (var i=0; i<salesData1.length;i++) {
        const product = salesData1[i];
        var dep =departmentList[product.department];
        dep += product.sales;
        departmentList[product.department] = dep;
    }
    var curSales = 0;
    var curDep = '';
    for(const depSales in departmentList) {
        const curDepSales = departmentList[depSales];
        if (curDepSales > curSales){
            curSales = curDepSales;
            curDep = depSales;
        }
    }
    return curDep;
}