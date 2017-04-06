var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

  // for (i in companySalesData)
  // {
  //   // console.log(i);
  // var salesTelusBC = companySalesData[i].sales.reduce(function(a, b) {
  // return a + b ; })
  // }

  // console.log(salesTelusBC);
  // console.log(salesTaxRates.BC*salesTelusBC);


function sum(listOfSales) {
  var results = 0;

  for (var i = 0; i < listOfSales.length; i++){
    // console.log(listOfSales[i]);
    results+=listOfSales[i];
  }
  return results;
}





function calculateSalesTax(salesData, taxRates) {
  var results = {};
  console.log(taxRates)
  for (var i = 0;  i < salesData.length; i++){
    // console.log(salesData[i].sales);
    var province = salesData[i].province ;
    if(results[salesData[i].name]) {
      results[salesData[i].name].totalSales += sum(salesData[i].sales);
      results[salesData[i].name].totalTaxes += sum(salesData[i].sales) * taxRates[province]




    } else {
      results[salesData[i].name] = {
        totalSales: sum(salesData[i].sales),
        totalTaxes: sum(salesData[i].sales) * taxRates[province]

      }
    }
  }

  return results;
}



/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);


// var o = {};

// o.key = 'value';
// o['key'] = 'value2';

// var k = 'key';
// o.k = 'value';
// o[k] = 'value3';

// console.log(o);



