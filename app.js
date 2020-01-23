'use strict';

console.log('Sup soup soap');
var standardBusinessHours = timeString([[6, 19]]);
var globalSalesPerHour = [];
globalSalesPerHour.length = standardBusinessHours.length;
// console.log(globalSalesPerHour);
// this.listTotalHoursMethod();///TRYING TO BUILD INTO FUNCTION, INSTEAD
// var standardBusinessHours = [];
// console.log('standardBusinessHours');

var formSelector = document.querySelector('#localeSelector');
formSelector.addEventListener('change', handleSelector);
var createCoffeeShopForm = document.getElementById('addUpdates');
createCoffeeShopForm.addEventListener('submit', handleSubmit);

var sliderAmA = document.getElementById('rangeAmA');
var sliderAmO = document.getElementById('rangeAmO');
var sliderPmA = document.getElementById('rangePmA');
var sliderPmO = document.getElementById('rangePmO');
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
function CreateCoffeeShop(newName, minFootTraffic, maxFootTraffic, estimatedSalesPerCustomer, dailySchduleArray){//required later: ie[[6, 11],[14, 19]]
  this.location = newName;
  this.minCust = minFootTraffic;
  this.maxCust = maxFootTraffic;
  this.avgSale = estimatedSalesPerCustomer;
  // this.scheduleDujour = standardBusinessHours;
  this.scheduleDujour = dailySchduleArray;//dailySchduleArray required later: ie[[6, 11],[14, 19]]
  // this.hoursOneByOneArray = standardBusinessHours;
  this.hoursOneByOneArray = timeString(this.scheduleDujour);//store hours in a list, generated via footTrafficSimulation
  // this.hoursFootTraffic = [];//IF WE CAN GENERATE THE ABOVE ARRAY INSIDE listTotalSalesArray (and not footTrafficSimulation), WE WON'T NEED THIS ARRAY AS A PROPERTY
  this.salesEveryBusinessHour = [];
  // this.salesEveryBusinessHour = listTotalSalesArray(this.hoursOneByOneArray, this.minCust, this.maxCust, this.avgSale, this.hoursFootTraffic);//prototype or function?

  CreateCoffeeShop.allShops.push(this);
}//end of CreateCoffeeShop constructor

CreateCoffeeShop.allShops = [];

CreateCoffeeShop.prototype.listTotalSalesArray = function() {
  // var x = 0;
  // var xTotals = 0;
  // var hoursFootTraffic = [];
  // var salesEveryBusinessHour = [];//return value
  for (var i = 0; i < this.hoursOneByOneArray.length; i++) {
    var x = randomFootTraffic(this.minCust, this.maxCust);
    // this.salesEveryBusinessHour[i] = x;
    // hoursFootTraffic[i] = x;
    this.salesEveryBusinessHour[i] = (Math.round(x * this.avgSale));
    // var xTotals = this.salesEveryBusinessHour[i];
    
    for(var ii = 0; ii < standardBusinessHours.length; ii++){
        if (isNaN(globalSalesPerHour[ii])) {
        globalSalesPerHour[ii] = 0;
        // console.log(i + ' clear ii ' + ii);
      } if (this.hoursOneByOneArray[i] === standardBusinessHours[ii]) {
        globalSalesPerHour[ii] += this.salesEveryBusinessHour[i];
        ii = standardBusinessHours.length;
        // console.log(i + ' as i/././ii as' + ii);
      }
    }
      
      
      
      
    //   // )
    // // xTotals += this.salesEveryBusinessHour[i];
    // if (isNaN(globalSalesPerHour[i])){
    //   globalSalesPerHour[i] = xTotals;
    // } else {
    //   // console.log(i);
    //   globalSalesPerHour[i] = (globalSalesPerHour[i] + xTotals);
    //   // xTotals = 0;
    // // else {
    // //   globalSalesPerHour[i] = (globalSalesPerHour[i] + this.salesEveryBusinessHour[i]);

    // }
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
  // console.log(this.location);
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
    for (var ii = 0; ii < this.hoursOneByOneArray.length; ii++) {
      if(this.hoursOneByOneArray[ii] === standardBusinessHours[i]){
        listItemHourlyUpdate.textContent = this.salesEveryBusinessHour[ii];
        storeSimulation.appendChild(listItemHourlyUpdate);
        localeDailySales += this.salesEveryBusinessHour[ii];
        ii = this.hoursOneByOneArray.length;
      } else {
        listItemHourlyUpdate.textContent = '';
        storeSimulation.appendChild(listItemHourlyUpdate);
      } 
    }
  }
 
  // for (var i = 0; i < this.hoursOneByOneArray.length; i++) {
  //   var listItemHourlyUpdate = document.createElement('td');
  //   for (var ii = 0; ii < standardBusinessHours.length; ii++) {
  //     if (this.hoursOneByOneArray[i] === standardBusinessHours[ii]) {
  //       listItemHourlyUpdate.textContent = this.salesEveryBusinessHour[i];
  //       storeSimulation.appendChild(listItemHourlyUpdate);
  //       localeDailySales += this.salesEveryBusinessHour[i];
  //       ii = standardBusinessHours.length;
  //     } else {
  //       listItemHourlyUpdate.textContent = '';
  //       storeSimulation.appendChild(listItemHourlyUpdate);
  //     }
  //   } storeSimulation.appendChild(listItemHourlyUpdate);
  // }

      
      
    

  var localeDailyTotalData = document.createElement('td');
  localeDailyTotalData.textContent = localeDailySales + ' cookies';
  // this.salesEveryBusinessHour[this.salesEveryBusinessHour.length - 1] + ' cookies';
  storeSimulation.appendChild(localeDailyTotalData);
  domSimulation.appendChild(storeSimulation);
};//end render



function timeString(bracketTimeArray) {//military open time//end time array [[6, 19]] --> into standard time list array

  var x = 0;
  var standardTimeArray = [];
  // console.log(bracketTimeArray.length);
  for (var j = 0; j < bracketTimeArray.length; j++) {//going to loop thru number of schedules' start and end instances (ie. will loop thru twice for schedule: 06:00-10:00 & 13:00-19:00)
    // standardTimeArray[x] = bracketTimeArray[j][0];//Jan17<---is this line necessary?
    for (var jj = bracketTimeArray[j][0]; jj < bracketTimeArray[j][1] + 1; jj++) {//going to loop thru schedules' start and end instances, to 'fill in' all open hours
      standardTimeArray[x++] = jj;
    }
  }
    for (var i = 0; i < standardTimeArray.length; i++) {//military to standard time am/pm
      if (standardTimeArray[i] > 12) {
        standardTimeArray[i] = (standardTimeArray[i] - 12) + 'pm';
        // console.log(standardTimeArray);
      } else if (standardTimeArray[i] < 12) {
        standardTimeArray[i] = standardTimeArray[i] + 'am';
        // console.log(standardTimeArray);
      } else
        standardTimeArray[i] = standardTimeArray[i] + 'pm';//noon time
      // console.log(standardTimeArray);
    }
  
  return standardTimeArray;
}//end military to standard time


function listRender(store){
  // if (result == seattle.location){
  //   console.log('good');
  // } else {
  //   console.log('x');
  var x = 0;
  var standardTimeArray = [];
  var domSimulation = document.getElementsByTagName('article')[0];
  var domWholeBody = document.getElementById('salesDataContainer');
  // var domSalesInput = document.getElementsByClassName('salesData')[0];
  
  var domSalesInput = document.getElementsByName('newName')[0];
  domSalesInput.setAttribute('placeholder', 'New Location Name');
  var domSalesInput = document.getElementsByName('minFootTraffic')[0];
  domSalesInput.setAttribute('placeholder', store.minCust);
  var domSalesInput = document.getElementsByName('maxFootTraffic')[0];
  domSalesInput.setAttribute('placeholder', store.maxCust);
  var domSalesInput = document.getElementsByName('estimatedSalesPerCustomer')[0];
  domSalesInput.setAttribute('placeholder', store.avgSale);


  // domSalesInput.textContent = 'boogaboo';Y
  // domSalesInput.innerHTML = 'boogaboo';Y
  // domSalesInput.outerHTML = 'boogaboo';Y, Deletes InputDeviceInfo, repalces with text 
  // domSalesInput.slot = 'boogaboo';N adds attribute slot 
  // domSalesInput.toggleAttribute = 'boogaboo';N 
  // domSalesInput.shadowRoot = 'boogaboo';N 
  // domSalesInput.prefix = 'boogaboo';N 
  // domSalesInput.insertBefore= 'boogaboo';N 
  // domSalesInput.after = 'boogaboo';N 
  // domSalesInput.before = 'boogaboo';N 
  // domSalesInput.insertAdjacentText = 'boogaboo';N
  // domSalesInput.insertAdjacentElement = 'boogaboo';N
  // domSalesInput.insertAdjacentHTML = 'boogaboo';


  
  domSalesInput.appendChild;
  // domWholeBody.appendChild(domSalesInput);


  clearFormList();

  // var drDiv = document.getElementsByTagName('div')[0];
  // // var minCust = document.getElementsByName('minFootTraffic')[0];
  // var minCust = document.getElementsByTagName('input')[1];
  // var maxCust = document.getElementsByName('maxFootTraffic')[0];
  // var avgSalePerCust = document.getElementsByName('estimatedSalesPerCustomer')[0];
  // minCust.textContent = store.minCust;
  // maxCust.textContent = store.maxCust;
  // avgSalePerCust= store.avgSalePerCust;
  // drDiv.appendChild(minCust);

  
  // var domClear = document.getElementById('listAm');
  // domClear.remove();
  // var domClear = document.getElementById('listPm');
  // domClear.remove();
  // var storeSimulationAm = document.createElement('ul');
  // storeSimulationAm.setAttribute('id','listAm');
  // domSimulation.appendChild(storeSimulationAm);
  var domAM = document.getElementById('listAm');
  // var storeSimulationPm = document.createElement('ul');
  // storeSimulationPm.setAttribute('id', 'listPm');
  // domSimulation.appendChild(storeSimulationPm);
  var domPM = document.getElementById('listPm');
  for (var j = 0; j < store.scheduleDujour.length; j++) {//going to loop thru number of schedules' start and end instances (ie. will loop thru twice for schedule: 06:00-10:00 & 13:00-19:00)
  // standardTimeArray[x] = bracketTimeArray[j][0];//Jan17<---is this line necessary?
  for (var jj = store.scheduleDujour[j][0]; jj < store.scheduleDujour[j][1] + 1; jj++) {//going to loop thru schedules' start and end instances, to 'fill in' all open hours
  standardTimeArray[x++] = jj;
}

}
  // if (store.scheduleDujour[0][1] === store.scheduleDujour[1][0]){
  // sliderAmO.value = store.scheduleDujour[0][1];
  // sliderPmA.value = store.scheduleDujour[1][0];
  // } else 
  
  if (store.scheduleDujour.length < 2){
    sliderAmA.value = store.scheduleDujour[0][0];
    sliderAmO.value = 12;
    sliderPmA.value = 12;
    sliderPmO.value = store.scheduleDujour[0][1];

  } 
  if (store.scheduleDujour.length > 1){
  sliderAmA.value = store.scheduleDujour[0][0];
  sliderAmO.value = store.scheduleDujour[0][1];
  sliderPmA.value = store.scheduleDujour[1][0];
  sliderPmO.value = store.scheduleDujour[1][1];
  }




for (var i = 0; i < store.hoursOneByOneArray.length; i++) {
  var listItemHourlyUpdate = document.createElement('li');
  // if(store.hoursOneByOneArray[i] === '12pm'){
    //   // needs to be at bottom of list
    // }
    // console.log(standardTimeArray)
    if (standardTimeArray[i] > 12) {
      // console.log('x');
      listItemHourlyUpdate.textContent = store.hoursOneByOneArray[i] + ': ' + store.salesEveryBusinessHour[i] + ' cookies';
      domPM.appendChild(listItemHourlyUpdate);
    } else if (standardTimeArray[i] < 12) {
      listItemHourlyUpdate.textContent = store.hoursOneByOneArray[i] + ': ' + store.salesEveryBusinessHour[i] + ' cookies';
      domAM.appendChild(listItemHourlyUpdate);
    } else {
      listItemHourlyUpdate.textContent = store.hoursOneByOneArray[i] + ': ' + store.salesEveryBusinessHour[i] + ' cookies';
      domAM.appendChild(listItemHourlyUpdate);
    }
    // listItemHourlyUpdate.textContent = store.hoursOneByOneArray[i] + ': ' + store.salesEveryBusinessHour[i];
    // storeSimulationAm.appendChild(listItemHourlyUpdate);
    // domSimulation.appendChild(storeSimulationAm);
  }
  // var finalLoad = document.createElement('li');
  // finalLoad.textContent = 'Total: ' + globalTotals;
  // storeSimulation.appendChild(finalLoad);
  // domSimulation.appendChild(storeSimulation);
}


// var domSimulation = document.getElementById('cookieSales');
// var storeSimulation = document.createElement('ul');
// storeSimulation.textContent = this.locale;
// for (var i = 0; i < this.hoursString.length; i++) {
  //   var listItemHourlyUpdate = document.createElement('li');
  //   listItemHourlyUpdate.textContent = this.hoursString[i] + ': ' + this.hoursSalesString[i];
  //   storeSimulation.appendChild(listItemHourlyUpdate);
  // }
  // var finalLoad = document.createElement('li');
  // finalLoad.textContent = 'Total: ' + globalTotals;
  // storeSimulation.appendChild(finalLoad);
  // domSimulation.appendChild(storeSimulation);
  
  
  
  
// function clearFormForUpdate(){
//   var x = document.getElementsByClassName('newLocation').length;
// document.getElementsByClassName('newUpdate')[0].style.display = 'block';//true
// for (var i = 0; i < x; i++) {
//   document.getElementsByClassName('newLocation')[i].style.display = 'none';//false
// }
// }

// function clearFormForLocationBuild(){
//   var x = document.getElementsByClassName('newLocation').length;
//   document.getElementsByClassName('newUpdate')[0].style.display = 'none';//false
//   for (var i = 0; i < x; i++) {
//     document.getElementsByClassName('newLocation')[i].style.display = 'block';//true
//   }
// }

function clearFormList(){
  var domSimulation = document.getElementsByTagName('article')[0];
  var domClear = document.getElementById('listAm');
  domClear.remove();
  var domClear = document.getElementById('listPm');
  domClear.remove();
  var storeSimulationAm = document.createElement('ul');
  storeSimulationAm.setAttribute('id', 'listAm');
  domSimulation.appendChild(storeSimulationAm);
  var domAM = document.getElementById('listAm');
  var storeSimulationPm = document.createElement('ul');
  storeSimulationPm.setAttribute('id', 'listPm');
  domSimulation.appendChild(storeSimulationPm);
  var domPM = document.getElementById('listPm');


  // var domSalesInput = document.getElementsByName('newName')[0];
  // domSalesInput.setAttribute('placeholder', 'New Localation Name');
  // var domSalesInput = document.getElementsByName('minFootTraffic')[0];
  // domSalesInput.setAttribute('placeholder', store.minCust);
  // var domSalesInput = document.getElementsByName('maxFootTraffic')[0];
  // domSalesInput.setAttribute('placeholder', store.maxCust);
  // var domSalesInput = document.getElementsByName('estimatedSalesPerCustomer')[0];
  // domSalesInput.setAttribute('placeholder', store.avgSale);

  // event.target.newName.value = '';

  // var newName = event.target.newName.value;
  // var minFootTraffic = event.target.minFootTraffic.value;
  // var maxFootTraffic = event.target.maxFootTraffic.value;
  // var estimatedSalesPerCustomer = event.target.estimatedSalesPerCustomer.value;
}
  


function handleSelector (event){
  event.preventDefault();
  // var x = document.getElementsByClassName('newLocation').length;
  // for(var i = 0; i < x; i++){
  //   document.getElementsByClassName('newLocation')[i].style.display = 'none';
  // }
  var result = event.target.value;
  if(result === 'Spawn New Location'){
    // clearFormForLocationBuild();
    for (var i = 0; i < document.getElementsByClassName('newLocation').length; i++){
      document.getElementsByClassName('newLocation')[i].style.display = 'inline-block';
    }
    clearFormList();
  } else {
    for (var i = 0; i < document.getElementsByClassName('newLocation').length; i++) {
      document.getElementsByClassName('newLocation')[i].style.display = 'none';
    }
    switch(result){
    case (seattle.location):
      listRender(seattle);
      break;
    case (tokyo.location):
      listRender(tokyo);
      break;
    case (paris.location):
      listRender(paris);
      break;
    case (dubai.location):
      listRender(dubai);
      break;
    case (lima.location):
      listRender(lima);
      break;
    default:
      // console.log(lkjlkjjlkj);
      break;
    }
  }
}

///CALL handleSubmit to create new location, only after even 'submit', or update previous
function handleSubmit(event){
  event.preventDefault();
  var newName = event.target.newName.value;
  var minFootTraffic = event.target.minFootTraffic.value;
  var maxFootTraffic = event.target.maxFootTraffic.value;
  var estimatedSalesPerCustomer = event.target.estimatedSalesPerCustomer.value;
  
  
  
 

  var sliderArray = [[Number(sliderAmA.value), Number(sliderAmO.value)], [Number(sliderPmA.value), Number(sliderPmO.value)]]
  console.log(sliderArray);
    // sliderAmA.oninput = function () {
  //   console.log(this.value);
  //   amAlpha = this.value;
  // }
  // sliderAmO.oninput = function () {
  //   amOmega = this.value;
  // }
  // sliderPmA.oninput = function () {
  //   pmAlpha = this.value;
  // }
  // sliderPmO.oninput = function () {
  //   pmOmega = this.value;
  // }
  var booleanSearch = false;
  for (var i = 0; i < CreateCoffeeShop.allShops.length; i++){
    console.log('Line 448//' + CreateCoffeeShop.allShops[i].location);
    if (newName === CreateCoffeeShop.allShops[i].location){
      CreateCoffeeShop.allShops[i].minCust = minFootTraffic;
      CreateCoffeeShop.allShops[i].maxCust = maxFootTraffic;
      CreateCoffeeShop.allShops[i].avgSale = estimatedSalesPerCustomer;
      CreateCoffeeShop.allShops[i].scheduleDujour = sliderArray;
      CreateCoffeeShop.allShops[i].hoursOneByOneArray = timeString(CreateCoffeeShop.allShops[i].scheduleDujour);
      // this.salesEveryBusinessHour = [];
      CreateCoffeeShop.allShops[i].listTotalSalesArray();
      booleanSearch = true;
    } 
  }
  if (booleanSearch === false){
    var newCoffeeShop = new CreateCoffeeShop(newName, minFootTraffic, maxFootTraffic, estimatedSalesPerCustomer, sliderArray);
    newCoffeeShop.listTotalSalesArray();
    newCoffeeShop.render();
    listRender(CreateCoffeeShop.allShops.newName);
  }

    // if (newName !== CreateCoffeeShop.allShops[i].location){
    
    //   // var domSalesInput = document.getElementsByName('newName')[0];
    //   // domSalesInput.setAttribute('placeholder', CreateCoffeeShop.allShops);
    //   // var domSalesInput = document.getElementsByName('minFootTraffic')[0];
    //   // domSalesInput.setAttribute('placeholder', store.minCust);
    //   // var domSalesInput = document.getElementsByName('maxFootTraffic')[0];
    //   // domSalesInput.setAttribute('placeholder', store.maxCust);
    //   // var domSalesInput = document.getElementsByName('estimatedSalesPerCustomer')[0];
    //   // domSalesInput.setAttribute('placeholder', store.avgSale);      
      
    //   break;
    // } else if (newName === CreateCoffeeShop.allShops[i].location) {
    //   CreateCoffeeShop.allShops[i].minCust = minFootTraffic;
    //   CreateCoffeeShop.allShops[i].maxCust = maxFootTraffic;
    //   CreateCoffeeShop.allShops[i].avgSale = estimatedSalesPerCustomer;
    //   CreateCoffeeShop.allShops[i].scheduleDujour = sliderArray;
    //   CreateCoffeeShop.allShops[i].hoursOneByOneArray = timeString(CreateCoffeeShop.allShops[i].scheduleDujour);
    // // this.salesEveryBusinessHour = [];
    //   CreateCoffeeShop.allShops[i].listTotalSalesArray();
    //   break;
    // }
    // }
  // }
  event.target.newName.value = null;
  event.target.minFootTraffic.value = null;
  event.target.maxFootTraffic.value = null;
  event.target.estimatedSalesPerCustomer.value = null;

  var domSalesInput = document.getElementsByName('newName')[0];
  domSalesInput.setAttribute('placeholder', newName);
  var domSalesInput = document.getElementsByName('minFootTraffic')[0];
  domSalesInput.setAttribute('placeholder', minFootTraffic);
  var domSalesInput = document.getElementsByName('maxFootTraffic')[0];
  domSalesInput.setAttribute('placeholder', maxFootTraffic);
  var domSalesInput = document.getElementsByName('estimatedSalesPerCustomer')[0];
  domSalesInput.setAttribute('placeholder', estimatedSalesPerCustomer);



  // event.target.newName.value = ''

  // sliderAmA.value = 6;
  // sliderAmO.value = 12;
  // sliderPmA.value = 13;
  // sliderPmO.value = 19;

  // newCoffeeShop.listTotalSalesArray();
  // newCoffeeShop.render();
  totalsFooterRow();
}



var dubai = new CreateCoffeeShop('Dubai', 11, 38, 3.7, [[6,11],[14,19]]);
var paris = new CreateCoffeeShop('Paris', 20, 38, 2.3, [[6, 19]]);
var lima = new CreateCoffeeShop('Lima', 2, 16, 4.6, [[6, 10],[15,19]]);
var seattle = new CreateCoffeeShop('Seattle', 23, 65, 6.3, [[6, 19]]);
var tokyo = new CreateCoffeeShop('Tokyo', 23, 33, 1.5, [[8,18]]);





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