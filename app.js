'strict-js';

var Seattle = {
  minCust: 23,
  maxCust: 65,
  AvgSale: 6.3,
  hoursDaily: [[6, 19]],//store hours
  totalSalesArray: []
  listTotalSalesMethod: function(){
    var hoursLength = 0;
    var incrimentSales_per_Hour = [];
    for (i = 0; i < this.hoursDaily.length; i++) {//
      incrimentSales_per_Hour.length = incrimentSales_per_Hour.length + (hoursDaily[i][1] - hoursDaily[i][0]);
      for (jj = hoursDaily[i][0]; jj < hoursDaily[i][1]; jj++){
        incrimentSales_per_Hour[i] = jj;
      }
    }
  }
}

var Tokyo = {
  minCust: 3,
  maxCust: 24,
  AvgSale: 1.2

}

var Dubai = {
  minCust: 
  maxCust:
  AvgSale:

}

var Paris = {
  minCust:
  maxCust:
  AvgSale:

}

var Lima = {
  minCust:
  maxCust:
  AvgSale:

}

fuction randomFootTraffic(min, max){
  var footTraffic = Math.round(Math.random(1) * (max-min)) + min;
}

// function hoursDaily(dailyMilitaryHours){//MILITARY TIME TO STANDARD TIME, FOR STORE HOURS
//   // for(var i = 0; i < dailyMilitaryHours.length; )
//   if (dailyMilitaryHours[] > 12){
//     var standardTimeFormat = 
//   }
// }
function calculateTotalHours(hoursDaily){//can be used to define number of sales calculations expected in table
  var hoursLength = 0;
  for (i = 0; i < hoursDaily.length; i++) {//calculating number of iterations of hours (ie. 06:00-10:00 & 13:00-19:00)
    hoursLength = hoursLength + (hoursDaily[i][1] - hoursDaily[i][0]);//caluclate daily hours
  }
  return hoursLength;
}

