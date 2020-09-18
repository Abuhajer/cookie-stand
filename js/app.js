'use strict';

// Global Variables
var continer = document.getElementById('myList');
var tableEl = document.createElement('table');
var sections = [];
var totalByHour;
var totalCustsHours;
//---------------
//Genrate Random Number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
//--------
//Random Customer Number
CookiesSection.prototype.randomCustNum = function () {
  return getRandomInt(this.min, this.max);
};
//----------------------------
//Total of Total Caluclter
function totalPerHour() {
  totalCustsHours = 0;
  totalByHour = [];
  var temp = 0;
  for (var i = 0; i < 14; i++) {
    for (var s = 0; s < sections.length; s++)
      temp += sections[s].result[i];

    totalByHour.push(temp);
    totalCustsHours += temp;
    temp = 0;
  }
}
//Create Object Constructor
//-----------------------
function CookiesSection(location, min, max, avgCookies) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.total = 0;
  this.result = [];
  sections.push(this);
}
//---------------
//Table Header (Header)
function headerRender() {

  continer.appendChild(tableEl);
  var thEl = document.createElement('tr');
  tableEl.appendChild(thEl);
  var thEls = document.createElement('th');
  thEl.appendChild(thEls);
  for (var i = 6; i <= 19; i++) {
    thEls = document.createElement('th');
    if (i <= 12) {
      thEls.textContent = `${i}:00am `;
      thEl.appendChild(thEls);
    }
    else {
      thEls.textContent = `${i - 12}:00pm`;
      thEl.appendChild(thEls);
    }
  }
  thEls = document.createElement('th');
  thEl.appendChild(thEls);
  thEls.textContent = 'Daily Location Total';
}
//--------
//Make The Table (body)
CookiesSection.prototype.htmlEdit = function () {
  this.randomCustNum();
  var tdEls = document.createElement('td');
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  trEl.appendChild(tdEls);
  var td = document.createElement('td');
  td.textContent = `${this.location}`;
  trEl.appendChild(td);

  for (var i = 6; i <= 19; i++) {
    var tdEl = document.createElement('td');
    this.result.push(Math.ceil(this.avgCookies * this.randomCustNum()));
    tdEl.textContent = `${this.result[i - 6]}`;
    trEl.appendChild(tdEl);
    this.total += this.result[i - 6];

  }
  tdEls.textContent = `${this.total}`;
  trEl.appendChild(tdEls);
};
//---------------------------
//Footer
function footerRender() {
  totalPerHour();
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var tdEls = document.createElement('td');
  trEl.appendChild(tdEls);
  tdEls.textContent = 'Totals';
  for (var i = 6; i <= 19; i++) {
    tdEls = document.createElement('td');

    tdEls.textContent = `${totalByHour[i - 6]}`;
    trEl.appendChild(tdEls);

  }
  tdEls = document.createElement('td');
  trEl.appendChild(tdEls);
  tdEls.textContent = `${totalCustsHours}`;
}
//------------------
//EditStore
function editStore(market, min, max, avg, i) {
  sections[i].min = min;
  sections[i].max = max;
  sections[i].avgCookies = avg;
  sections[i].total = 0;
  sections[i].result = [];
  var temp = '';
  var l = tableEl.rows.length - 1;
  for (var r = 1; r < tableEl.rows.length - 1; r++) {
    temp = tableEl.rows[r].cells[0].textContent;
    if (market === temp)
      break;
  }
  tableEl.deleteRow(r);
  tableEl.insertRow(r);
  tableEl.removeChild(tableEl.lastChild);
  sections[i].htmlEdit();
  tableEl.rows[r].innerHTML = tableEl.rows[l].innerHTML;
  tableEl.removeChild(tableEl.lastChild);
  footerRender();
}
//---------------------------------------------------------
//The Form
var nameMarket, min, max, avg;
var form = document.getElementById('form');
form.addEventListener('submit', addMarket);
var flag = true; //print footer first time

function addMarket(event) {
  event.preventDefault();// stop refresh
  nameMarket = event.target.name.value;
  min = Number(event.target.min.value);
  max = Number(event.target.max.value);
  avg = Number(event.target.avg.value);

  for (var l = 0; l < sections.length; l++) {
    if (nameMarket === sections[l].location) {
      editStore(nameMarket, min, max, avg, l);
      form.reset();
      flag = false;
      break;
    }
    else {
      flag = true;
    }
  }

  if (flag) {
    new CookiesSection(nameMarket, min, max, avg);
    tableEl.removeChild(tableEl.lastChild);
    sections[sections.length - 1].htmlEdit();
    footerRender();
    form.reset();
    flag = false;
  }

}

//-------------------------------------------------
//Create Obects
new CookiesSection('Seattle', 23, 65, 6.3);
new CookiesSection('Tokyo', 3, 24, 1.2);
new CookiesSection('Dubai', 11, 38, 3.7);
new CookiesSection('Paris', 20, 38, 2.3);
new CookiesSection('Lima', 2, 16, 4.6);
//------------

//------------
//Table Header call
headerRender();
//--------------------------------------------
//Call Objects Function ... Table body
for (var s = 0; s < sections.length; s++) {
  sections[s].htmlEdit();
}
//-----------
//Table Footer call
if (flag) {
  footerRender();
}


