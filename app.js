'use strict';
console.log('Sup');

// var hoursString = [];
function CreateCoffeeShop(newName, minFootTraffic, maxFootTraffic, estimatedSalesPerHour, dailySchduleArray){
  this.location = newName;
  this.minCust = minFootTraffic;
  this.maxCust = maxFootTraffic;
  this.avgSale = estimatedSalesPerHours;
  this.ScheduleDujour = dailySchduleArray;
  //this.hoursString = [];//store hours in a list, generated via footTrafficSimulation
  this.hoursFootTraffic = [];//IF WE CAN GENERATE THE ABOVE ARRAY INSIDE cookieTotalsSimulation (and not footTrafficSimulation), WE WON'T NEED THIS ARRAY AS A PROPERTY
  this.hoursSalesString = [];

}//end of CreateCoffeeShop constructor
// footTrafficSimulation: function(){
// listTotalHoursMethod(this.scheduleDujour, this.hoursString);//sets the hoursFootTraffic array
CreateCoffeeShop.prototype.listTotalHoursMethod = function() {
  var x = 0;
  var hoursString = [];
  console.log('hours')
  // var hoursString = [];
  // for (var i = 0; i < scheduleDujour.length; i++) {//calculating number of iterations of hours between all start and end times(ie. 06:00-10:00 & 13:00-19:00)
  //   hoursString.length = hoursString.length + (scheduleDujour[i][1] - scheduleDujour[i][0]);//caluclate daily total hours, which will assign size of this.hoursString array; to house strings representative of each invidual hour incriment
  // }

  for (var j = 0; j < this.scheduleDujour.length; j++) {//going to loop twice, defining schedule incriment
    hoursString[x] = this.scheduleDujour[j][0];
    for (var jj = this.scheduleDujour[j][0]; jj < this.scheduleDujour[j][1] + 1; jj++) {
      // this.hoursString[j + 1] = jj;
      //console.log(jj);
      hoursString[x++] = jj;
    }
  }
  for (var i = 0; i < hoursString.length; i++) {//military to standard time am/pm
    if (hoursString[i] > 12) {
      hoursString[i] = (hoursString[i] - 12) + 'pm';
    } else if (this.hoursString[i] < 12) {
      hoursString[i] = hoursString[i] + 'am';
    } else
      hoursString[i] = hoursString[i] + 'pm';//noon time
  }

  for (var i = 0; i < hoursString.length; i++) {
    console.log(this.minCust);
    var x = randomFootTraffic(this.minCust, this.maxCust);
    // this.hoursSalesString[i] = x;
    this.hoursFootTraffic[i] = x;
    this.hoursSalesString[i] = (Math.round(x * this.AvgSale));
  }
}//END OF LIST TOTALHOURS METHOD

















var Seattle = {
  minCust: 23,
  maxCust: 65,
  AvgSale: 6.3,
  scheduleDujour: [[6, 19]],//store hours, add commas between schedule iterations,<[[6, 11],[15, 18]]>
  hoursString: [],//store hours in a list, generated via footTrafficSimulation
  hoursFootTraffic: [],
  hoursSalesString: [],

  footTrafficSimulation: function(){
    listTotalHoursMethod(this.scheduleDujour, this.hoursString);//sets the hoursFootTraffic array
  },
  cookieTotalsSimultation: function(){
    // listTotalHoursMethod(this.scheduleDujour, this.hoursString);
    // listTotalSalesMethod(this.minCust, this.maxCust, this.AvgSale, this.hoursString, this.hoursFootTraffic, this.hoursSalesString);
    listTotalSalesMethod(this.minCust, this.maxCust, this.AvgSale, this.hoursString, this.hoursFootTraffic, this.hoursSalesString);


    var domSimulation = document.getElementById('cookieSales');
    var storeSimulation = document.createElement('ul');
    storeSimulation.textContent = 'Seattle';
    for (var i = 0; i < this.hoursString.length; i++) {
      var listItemHourlyUpdate = document.createElement('li');
      listItemHourlyUpdate.textContent = this.hoursString[i] + ': ' + this.hoursSalesString[i] + ' cookies';
      storeSimulation.appendChild(listItemHourlyUpdate);

    }
    domSimulation.appendChild(storeSimulation);
  }

}
// // listTotalSalesMethod(minCust, maxCust, AvgSale, hoursString, hoursFootTraffic, hoursSalesString) 
// // listTotalHoursMethod(scheduleDujour, hoursString)
// listTotalHoursMethod(Seattle.scheduleDujour, Seattle.hoursString);
// listTotalSalesMethod(Seattle.minCust, Seattle.maxCust, Seattle.AvgSale, Seattle.hoursString, Seattle.hoursFootTraffic, Seattle.hoursSalesString);
// Seattle.listTotalHoursMethod();
// console.log(Seattle.hoursString);
// Seattle.listTotalSalesMethod();

// var storeSimulation = document.createElement('Ul');
// storeSimulation.textContent = Seattle.hoursString;

// var domSimulation = document.getElementById('cookieSales');
// var storeSimulation = document.createElement('ul');
// storeSimulation.textContent = 'Seattle';

// console.log(Seattle.hoursString.length);
// console.log(Seattle.hoursString[1]);
// for(var i = 0; i < Seattle.hoursString.length; i++){
//   var listItemHourlyUpdate = document.createElement('li');
//   listItemHourlyUpdate.textContent = Seattle.hoursString[i] + ': ' + Seattle.hoursSalesString[i];
//   storeSimulation.appendChild(listItemHourlyUpdate);

// }
// domSimulation.appendChild(storeSimulation);



// storeSimulation.textContent = Seattle.hoursSalesString;

// Seattle.footTrafficSimulation();
// Seattle.cookieTotalsSimultation();

// console.log(Seattle.hoursFootTraffic);
// console.log(Seattle.hoursSalesString);
// console.log(Seattle.hoursString);
// render

var Tokyo = {
  minCust: 3,
  maxCust: 24,
  AvgSale: 1.2,
  scheduleDujour: [[6, 19]],//store hours, add commas between schedule iterations,<[[6, 11],[15, 18]]>
  hoursString: [],
  hoursFootTraffic: [],
  hoursSalesString: [],

  footTrafficSimulation: function () {
    console.log('jkjkjk');
    listTotalHoursMethod(this.scheduleDujour, this.hoursString);
  },
  cookieTotalsSimultation: function () {
    // listTotalHoursMethod(this.scheduleDujour, this.hoursString);
    // listTotalSalesMethod(this.minCust, this.maxCust, this.AvgSale, this.hoursString, this.hoursFootTraffic, this.hoursSalesString);
    listTotalSalesMethod(this.minCust, this.maxCust, this.AvgSale, this.hoursString, this.hoursFootTraffic, this.hoursSalesString);


    var domSimulation = document.getElementById('cookieSales');
    var storeSimulation = document.createElement('ul');
    storeSimulation.textContent = 'Tokyo';
    for (var i = 0; i < this.hoursString.length; i++) {
      var listItemHourlyUpdate = document.createElement('li');
      listItemHourlyUpdate.textContent = this.hoursString[i] + ': ' + this.hoursSalesString[i] + ' cookies';
      storeSimulation.appendChild(listItemHourlyUpdate);

    }
    domSimulation.appendChild(storeSimulation);
  }

}

var Dubai = {
  minCust: 11,
  maxCust: 38,
  AvgSale: 3.7,
  scheduleDujour: [[6, 19]],//store hours, add commas between schedule iterations,<[[6, 11],[15, 18]]>
  hoursString: [],
  hoursFootTraffic: [],
  hoursSalesString: [],

  footTrafficSimulation: function () {
    listTotalHoursMethod(this.scheduleDujour, this.hoursString);
  },
  cookieTotalsSimultation: function () {
    // listTotalHoursMethod(this.scheduleDujour, this.hoursString);
    // listTotalSalesMethod(this.minCust, this.maxCust, this.AvgSale, this.hoursString, this.hoursFootTraffic, this.hoursSalesString);
    listTotalSalesMethod(this.minCust, this.maxCust, this.AvgSale, this.hoursString, this.hoursFootTraffic, this.hoursSalesString);


    var domSimulation = document.getElementById('cookieSales');
    var storeSimulation = document.createElement('ul');
    storeSimulation.textContent = 'Dubai';
    for (var i = 0; i < this.hoursString.length; i++) {
      var listItemHourlyUpdate = document.createElement('li');
      listItemHourlyUpdate.textContent = this.hoursString[i] + ': ' + this.hoursSalesString[i] + ' cookies';
      storeSimulation.appendChild(listItemHourlyUpdate);

    }
    domSimulation.appendChild(storeSimulation);
  }

}

var Paris = {
  minCust: 20,
  maxCust: 38,
  AvgSale: 2.3,
  scheduleDujour: [[6, 19]],//store hours, add commas between schedule iterations,<[[6, 11],[15, 18]]>
  hoursString: [],
  hoursFootTraffic: [],
  hoursSalesString: [],

  footTrafficSimulation: function () {
    listTotalHoursMethod(this.scheduleDujour, this.hoursString);
  },
  cookieTotalsSimultation: function () {
    // listTotalHoursMethod(this.scheduleDujour, this.hoursString);
    // listTotalSalesMethod(this.minCust, this.maxCust, this.AvgSale, this.hoursString, this.hoursFootTraffic, this.hoursSalesString);
    listTotalSalesMethod(this.minCust, this.maxCust, this.AvgSale, this.hoursString, this.hoursFootTraffic, this.hoursSalesString);


    var domSimulation = document.getElementById('cookieSales');
    var storeSimulation = document.createElement('ul');
    storeSimulation.textContent = 'Paris';
    for (var i = 0; i < this.hoursString.length; i++) {
      var listItemHourlyUpdate = document.createElement('li');
      listItemHourlyUpdate.textContent = this.hoursString[i] + ': ' + this.hoursSalesString[i] + ' cookies';
      storeSimulation.appendChild(listItemHourlyUpdate);

    }
    domSimulation.appendChild(storeSimulation);
  }

}

var Lima = {
  minCust: 2,
  maxCust: 16,
  AvgSale: 4.6,
  scheduleDujour: [[6, 19]],//store hours, add commas between schedule iterations,<[[6, 11],[15, 18]]>
  hoursString: [],
  hoursFootTraffic: [],
  hoursSalesString: [],

  footTrafficSimulation: function () {
    listTotalHoursMethod(this.scheduleDujour, this.hoursString);
  },
  cookieTotalsSimultation: function () {
    // listTotalHoursMethod(this.scheduleDujour, this.hoursString);
    // listTotalSalesMethod(this.minCust, this.maxCust, this.AvgSale, this.hoursString, this.hoursFootTraffic, this.hoursSalesString);
    listTotalSalesMethod(this.minCust, this.maxCust, this.AvgSale, this.hoursString, this.hoursFootTraffic, this.hoursSalesString);


    var domSimulation = document.getElementById('cookieSales');
    var storeSimulation = document.createElement('ul');
    storeSimulation.textContent = 'Lima';
    for (var i = 0; i < this.hoursString.length; i++) {
      var listItemHourlyUpdate = document.createElement('li');
      listItemHourlyUpdate.textContent = this.hoursString[i] + ': ' + this.hoursSalesString[i] + ' cookies';
      storeSimulation.appendChild(listItemHourlyUpdate);

    }
    domSimulation.appendChild(storeSimulation);
  }

}

function randomFootTraffic(min, max){
  return Math.round(Math.random() * (max - min)) + min;
  // console.log(Math.round(Math.random(0) * (max - min)) + min);
}

// // function hoursDaily(dailyMilitaryHours){//MILITARY TIME TO STANDARD TIME, FOR STORE HOURS
// //   // for(var i = 0; i < dailyMilitaryHours.length; )
// //   if (dailyMilitaryHours[] > 12){
// //     var standardTimeFormat = 
// //   }
// // }
// function calculateTotalHours(hoursDaily){//can be used to define number of sales calculations expected in table
//   var hoursLength = 0;
//   for (i = 0; i < hoursDaily.length; i++) {//calculating number of iterations of hours (ie. 06:00-10:00 & 13:00-19:00)
//     hoursLength = hoursLength + (hoursDaily[i][1] - hoursDaily[i][0]);//caluclate daily hours
//   }
//   return hoursLength;
// }


  // listTotalHoursMethod: function(){
  //   var x = 0;
  //   // var hoursString = [];
  //   for (var i = 0; i < this.scheduleDujour.length; i++) {//calculating number of iterations of hours between all start and end times(ie. 06:00-10:00 & 13:00-19:00)
  //     this.hoursString.length = this.hoursString.length + (this.scheduleDujour[i][1] - this.scheduleDujour[i][0]);//caluclate daily total hours, which will assign size of this.hoursString array; to house strings representative of each invidual hour incriment
  //   }

  //   for (var j = 0; j < this.scheduleDujour.length; j++) {//going to loop twice, defining schedule incriment

  //     this.hoursString[x] = this.scheduleDujour[j][0];
  //     for (var jj = this.scheduleDujour[j][0]; jj < this.scheduleDujour[j][1] + 1; jj++) {
  //       // this.hoursString[j + 1] = jj;
  //       //console.log(jj);
  //       this.hoursString[x++] = jj;
  //       }
  //     }
  //   },

  // listTotalSalesMethod: function(){
  //   for(var i = 0; i < this.hoursString.length; i++){
  //     console.log(this.minCust);
  //     var x = randomFootTraffic(this.minCust, this.maxCust);
  //     // this.hoursSalesString[i] = x;
  //     this.hoursFootTraffic[i] = x;
  //     this.hoursSalesString[i] = (Math.round(x * this.AvgSale));
  //   }
  // }


function listTotalHoursMethod(scheduleDujour, hoursString) {
  var x = 0;
  console.log('hours')
  // var hoursString = [];
  // for (var i = 0; i < scheduleDujour.length; i++) {//calculating number of iterations of hours between all start and end times(ie. 06:00-10:00 & 13:00-19:00)
  //   hoursString.length = hoursString.length + (scheduleDujour[i][1] - scheduleDujour[i][0]);//caluclate daily total hours, which will assign size of this.hoursString array; to house strings representative of each invidual hour incriment
  // }

  for (var j = 0; j < scheduleDujour.length; j++) {//going to loop twice, defining schedule incriment

    hoursString[x] = scheduleDujour[j][0];
    for (var jj = scheduleDujour[j][0]; jj < scheduleDujour[j][1] + 1; jj++) {
      // this.hoursString[j + 1] = jj;
      //console.log(jj);
      hoursString[x++] = jj;
    }
  }
  for (var i = 0; i < hoursString.length; i++){//military to standard time am/pm
    if(hoursString[i] > 12){
      hoursString[i] = (hoursString[i] - 12) + 'pm';
    }else if(hoursString[i] < 12){
      hoursString[i] = hoursString[i] + 'am';
    }else 
      hoursString[i] = hoursString[i] + 'pm';//noon time
  }

}

function listTotalSalesMethod(minCust, maxCust, AvgSale, hoursString, hoursFootTraffic, hoursSalesString) {
  for (var i = 0; i < hoursString.length; i++) {
    console.log(minCust);
    var x = randomFootTraffic(minCust, maxCust);
    // this.hoursSalesString[i] = x;
    hoursFootTraffic[i] = x;
    hoursSalesString[i] = (Math.round(x * AvgSale));
  }
}

Seattle.footTrafficSimulation();
Seattle.cookieTotalsSimultation();
Tokyo.footTrafficSimulation();
Tokyo.cookieTotalsSimultation();

Dubai.footTrafficSimulation();
Dubai.cookieTotalsSimultation();

Paris.footTrafficSimulation();
Paris.cookieTotalsSimultation();

Lima.footTrafficSimulation();
Lima.cookieTotalsSimultation();