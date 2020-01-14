'strict-js';

var Seattle = {
  minCust: 23,
  maxCust: 65,
  AvgSale: 6.3,
  scheduleDujour: [[6, 19]],//store hours
  totalSalesArray: []
  listTotalSalesMethod: function(){
    var scheduleDujour = [[6, 13], [16, 21]];//store hours<hoursDaily>
    var hoursString = [];//hoursString to be appened to Dom
    var x = 0;
    for (i = 0; i < scheduleDujour.length; i++) {//calculating number of iterations of hours between all start and end times(ie. 06:00-10:00 & 13:00-19:00)
      hoursString.length = hoursString.length + (scheduleDujour[i][1] - scheduleDujour[i][0]);//caluclate daily total hours, which will assign size of hoursString array; to house strings representative of each invidual hour incriment
    }

    for (j = 0; j < scheduleDujour.length; j++) {//going to loop twice, defining schedule incriment

      hoursString[x] = scheduleDujour[j][0];
      for (jj = scheduleDujour[j][0]; jj < scheduleDujour[j][1] + 1; jj++) {
        // hoursString[j + 1] = jj;
        console.log(jj);
        hoursString[x++] = jj;
        }
      } 
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

