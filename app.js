'use strict';

console.log('Sup soup soap');
var standardBusinessHours = timeString([[6, 19]]);
var globalSalesPerHour = [];
globalSalesPerHour.length = standardBusinessHours.length;
// console.log(globalSalesPerHour);
// this.listTotalHoursMethod();///TRYING TO BUILD INTO FUNCTION, INSTEAD
// var standardBusinessHours = [];
// console.log('standardBusinessHours');

//one time header build
var domTableLocale = document.getElementById('cookieSales');//DOM INJECTION
var domNewTable = document.createElement('table');//or <ul>, for list
var headerRow = document.createElement('tr');
var listHeaderAlpha = document.createElement('th');
listHeaderAlpha.textContent = 'Store Locale';
domNewTable.appendChild(listHeaderAlpha);
for (var i = 0; i < standardBusinessHours.length; i++) {
  var listItemHourlyUpdate = document.createElement('th');
  listItemHourlyUpdate.textContent = '_' + standardBusinessHours[i] + '_';
  domNewTable.appendChild(listItemHourlyUpdate);
}
var listHeaderOmega = document.createElement('th');
listHeaderOmega.textContent = 'Store Totals';
domNewTable.appendChild(listHeaderOmega);
domTableLocale.appendChild(domNewTable);
//end one time header build

//NEW COFFEE LOCALE CONSTRUCTOR
function CreateCoffeeShop(newName, minFootTraffic, maxFootTraffic, estimatedSalesPerCustomer) {//dailySchduleArray required later: ie[[6, 11],[14, 19]]
  this.location = newName;
  this.minCust = minFootTraffic;
  this.maxCust = maxFootTraffic;
  this.avgSale = estimatedSalesPerCustomer;
  this.scheduleDujour = standardBusinessHours;
  // this.scheduleDujour = dailySchduleArray;//dailySchduleArray required later: ie[[6, 11],[14, 19]]
  this.hoursOneByOneArray = standardBusinessHours;
  // timeString(this.scheduleDujour);//store hours in a list, generated via footTrafficSimulation
  // this.hoursFootTraffic = [];//IF WE CAN GENERATE THE ABOVE ARRAY INSIDE listTotalSalesArray (and not footTrafficSimulation), WE WON'T NEED THIS ARRAY AS A PROPERTY
  this.salesEveryBusinessHour = [];
  // this.salesEveryBusinessHour = listTotalSalesArray(this.hoursOneByOneArray, this.minCust, this.maxCust, this.avgSale, this.hoursFootTraffic);//prototype or function?

}//end of CreateCoffeeShop constructor

CreateCoffeeShop.prototype.listTotalSalesArray = function() {
  var x = 0;
  var xTotals = 0;
  // var hoursFootTraffic = [];
  // var salesEveryBusinessHour = [];//return value
  for (var i = 0; i < this.hoursOneByOneArray.length; i++) {
    x = randomFootTraffic(this.minCust, this.maxCust);
    // this.salesEveryBusinessHour[i] = x;
    // hoursFootTraffic[i] = x;
    this.salesEveryBusinessHour[i] = (Math.round(x * this.avgSale));
    xTotals = this.salesEveryBusinessHour[i];
    // xTotals += this.salesEveryBusinessHour[i];
    if (isNaN(globalSalesPerHour[i])){
      globalSalesPerHour[i] = xTotals;
    } else {
      // console.log(i);
      globalSalesPerHour[i] = (globalSalesPerHour[i] + xTotals);
      // xTotals = 0;
    // else {
    //   globalSalesPerHour[i] = (globalSalesPerHour[i] + this.salesEveryBusinessHour[i]);

    }
  }
  // this.salesEveryBusinessHour.push(xTotals);
}//END OF LIST CreateCoffeeShop PROTOTYPE

function randomFootTraffic(min, max){
  return Math.round(Math.random() * (max - min)) + min;
  // console.log(Math.round(Math.random(0) * (max - min)) + min);
}

CreateCoffeeShop.prototype.render = function(){//take out header build
  // this.listTotalHoursMethod();///TRYING TO BUILD INTO FUNCTION, INSTEAD
  // var standardBusinessHours = [];
  // var standardBusinessHours = timeString([[6, 19]]);
  var localeDailySales = 0;
  // var domSimulation = document.getElementById('cookieSales');//DOM INJECTION
  var domSimulation = document.getElementsByTagName('table')[0];//DOM INJECTION
  // var storeSimulation = document.createElement('tr');//or <ul>, for list
  var storeSimulation = document.createElement('tr');//or <ul>, for list
  // var tableRow = document.createElement('tr');//in list, this isn't necessary
  var listHeader = document.createElement('th');
  listHeader.textContent = this.location;
  storeSimulation.appendChild(listHeader);
  // storeSimulation.textContent = 'Seattle';//NOW A PROPERTY OF THE STORE OBJECT
  for (var i = 0; i < standardBusinessHours.length; i++) {
    var listItemHourlyUpdate = document.createElement('td');
    listItemHourlyUpdate.textContent = this.salesEveryBusinessHour[i] + '';
    storeSimulation.appendChild(listItemHourlyUpdate);
    localeDailySales += this.salesEveryBusinessHour[i];
  }
  var localeDailyTotalData = document.createElement('td');
  localeDailyTotalData.textContent = localeDailySales + ' cookies';
  // this.salesEveryBusinessHour[this.salesEveryBusinessHour.length - 1] + ' cookies';
  storeSimulation.appendChild(localeDailyTotalData);
  domSimulation.appendChild(storeSimulation);
}//end render 



function timeString(bracketTimeArray) {//military open time//end time array [[6, 19]] --> into standard time list array

  var x = 0;
  var standardTimeArray = [];
  // console.log(bracketTimeArray.length);
  for (var j = 0; j < bracketTimeArray.length; j++) {//going to loop thru schedules' start and end instances (ie. will loop thru twice for schedule: 06:00-10:00 & 13:00-19:00)
    standardTimeArray[x] = bracketTimeArray[j][0];
    for (var jj = bracketTimeArray[j][0]; jj < bracketTimeArray[j][1] + 1; jj++) {
    standardTimeArray[x++] = jj;
    }
  
  for (var i = 0; i < standardTimeArray.length; i++) {//military to standard time am/pm
    if (standardTimeArray[i] > 12) {
      standardTimeArray[i] = (standardTimeArray[i] - 12) + 'pm';
    } else if (standardTimeArray[i] < 12) {
      standardTimeArray[i] = standardTimeArray[i] + 'am';
    } else
      standardTimeArray[i] = standardTimeArray[i] + 'pm';//noon time
  }}
  return standardTimeArray;
}//end military to standard time

var dubai = new CreateCoffeeShop('Dubai', 11, 38, 3.7);
// , [[6,19]]);
var paris = new CreateCoffeeShop('Paris', 20, 38, 2.3);
// , [[6, 19]]);
var lima = new CreateCoffeeShop('Lima', 2, 16, 4.6);
// , [[6, 19]]);
var seattle = new CreateCoffeeShop('Seattle', 23, 65, 6.3);
// , [[6, 19]]);
var tokyo = new CreateCoffeeShop('Tokyo', 23, 33, 1.5);
// , [[6, 19]]);


var createCoffeeShopForm = document.getElementById('addNewLocale');
var button = document.createElement('button');
button.textContent = 'Speak';
button.addEventListener('submit', handleSubmit);
function handleSubmit(event){
  event.preventDefault();
  var newName = event.target.newName.value;
  var minFootTraffic = event.target.minFootTraffic.value;
  var maxFootTraffic = event.target.maxFootTraffic.value;
  var estimatedSalesPerCustomer = event.target.estimatedSalesPerCustomer.value;

  var newCoffeeShop = new CreateCoffeeShop(newName,minFootTraffic,maxFootTraffic,estimatedSalesPerCustomer);
  newCoffeeShop.listTotalSalesArray();
  newCoffeeShop.render();
}








dubai.listTotalSalesArray();
paris.listTotalSalesArray();
lima.listTotalSalesArray();
seattle.listTotalSalesArray();
tokyo.listTotalSalesArray();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
totalsFooterRow();













function totalsFooterRow(){//one time footer function start
  var globalDailySales = 0;
  var domTableLocale = document.getElementsByTagName('table')[0];//DOM INJECTION
  var footerRow = document.createElement('tr');//in list, this isn't necessary
  // domNewTable.textContent = 'Seattle';//NOW A PROPERTY OF THE STORE OBJECT
  var rowHeader = document.createElement('th');
  rowHeader.textContent = 'Global Totals';
  footerRow.appendChild(rowHeader);
  for (var i = 0; i < standardBusinessHours.length; i++) {
    var listItemHourlyUpdate = document.createElement('td');
    listItemHourlyUpdate.textContent = globalSalesPerHour[i];
    globalDailySales += globalSalesPerHour[i];
    footerRow.appendChild(listItemHourlyUpdate);
  }
  // console.log(globalDailySales);
  var rowTailer = document.createElement('th');
  rowTailer.textContent = globalDailySales;
  footerRow.appendChild(rowTailer);
  domTableLocale.appendChild(footerRow);

}//one time footer function end
