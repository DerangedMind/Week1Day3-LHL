function calculateSalesTax(salesData, taxRates) {

  var salesAndTaxes = {};

  for(var i = 0; i < salesData.length; i++) {
    var totalSales = 0;
    var company = salesData[i]

    // Ensure company exists
    checkCompanyExists(company["name"]);

    // Find total sales
    for (var sales of company["sales"]) {
      totalSales += sales; // 700
    }
    var totalTaxes = 0;

    // Find taxes
    var province = company["province"];
    var provTax = taxRates[province];
    totalTaxes = provTax * totalSales;

    salesAndTaxes[company["name"]]["totalSales"] += totalSales;
    salesAndTaxes[company["name"]]["totalTaxes"] += totalTaxes;
  }
  return salesAndTaxes;
}



function checkCompanyExists(companyName) {
  if (salesAndTaxes[companyName] === undefined) {
    salesAndTaxes[companyName] = {
      totalSales: 0,
      totalTaxes: 0
    };
    console.log("company was added", companyName);
  }
}

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

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);