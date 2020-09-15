'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
//---------------
var continer = document.getElementById('myList');
var tableEl = document.createElement('table');
var totalByHour=[];
var totalCustsHours=0;
//----------------------------
//Total of Total Caluclted
function totalPerHour ()
{
  for (var i=0 ;i<14;i++)
  {
    totalByHour.push(cookiesSeattle.result[i]+cookiesTokyo.result[i]+cookiesDubai.result[i]+cookiesParis.result[i]+cookiesLima.result[i]);
    totalCustsHours+=totalByHour[i];
  }

}
//---------------
//Table Header
function headerRender (){

  continer.appendChild(tableEl);
  var thEl = document.createElement('tr');
  tableEl.appendChild(thEl);
  var thEls = document.createElement('th');
  thEl.appendChild(thEls);
  for (var i = 6; i <= 19; i++) {
    thEls = document.createElement('th');
    if (i <= 12){
      thEls.textContent = `${i}:00am `;
      thEl.appendChild(thEls);
    }
    else{
      thEls.textContent = `${i-12}:00pm`;
      thEl.appendChild(thEls);
    }
  }
  thEls = document.createElement('th');
  thEl.appendChild(thEls);
  thEls.textContent = 'Daily Location Total';
}
//---------------------------
//total of total
function footerRender (){
  totalPerHour();
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var tdEls = document.createElement('td');
  trEl.appendChild(tdEls);
  tdEls.textContent='Totals';
  for (var i = 6; i <= 19; i++) {
    tdEls = document.createElement('td');

    tdEls.textContent = `${totalByHour[i-6]}`;
    trEl.appendChild(tdEls);

  }
  tdEls = document.createElement('td');
  trEl.appendChild(tdEls);
  tdEls.textContent=`${totalCustsHours}`;
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

}
//--------
//Random Customer Number
CookiesSection.prototype.randomCustNum = function () {
  return getRandomInt(this.min, this.max);
};
//--------
//Make The Table
CookiesSection.prototype.htmlEdit = function () {

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
//-------------
//Create Obects
var cookiesSeattle = new CookiesSection('Seattle', 23, 65, 6.3);
var cookiesTokyo = new CookiesSection('Tokyo', 3, 24, 1.2);
var cookiesDubai = new CookiesSection('Dubai', 11, 38, 3.7);
var cookiesParis = new CookiesSection('Paris', 20, 38, 2.3);
var cookiesLima = new CookiesSection('Lima', 2, 16, 4.6);
//------------
//Table Header call
headerRender();
//--------------------------------------------
//Call Objects Function ... Genrate Random Customer+Table body
//#1
cookiesSeattle.randomCustNum();
cookiesSeattle.htmlEdit();
//-----------#2
cookiesTokyo.randomCustNum();
cookiesTokyo.htmlEdit();
//-----------#3
cookiesDubai.randomCustNum();
cookiesDubai.htmlEdit();
//-----------#4
cookiesParis.randomCustNum();
cookiesParis.htmlEdit();
//-----------#5
cookiesLima.randomCustNum();
cookiesLima.htmlEdit();
//-----------
//Table Footer call
footerRender();
