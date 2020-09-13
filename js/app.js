'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//-----------------------
var cookiesSeattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  total:0,
  result: [],
  randomCustNum: function(){
    return getRandomInt(this.min,this.max);
  },

  htmlEdit: function () {
    var continer = document.getElementById('myList');
    var ulEl = document.createElement('ul');
    var pEl=document.createElement('p');
    pEl.textContent=`${this.location}`;
    continer.appendChild(pEl);
    continer.appendChild(ulEl);

    for(var i=6;i<=19;i++)
    { var liEl=document.createElement('li');
      this.result.push(Math.ceil(this.avgCookies*this.randomCustNum()));
      if (i<=12)
      {
        liEl.textContent=`${i}am: ${this.result[i-6]} cookies`;
        ulEl.appendChild(liEl);
        this.total+=this.result[i-6];
      }
      else
      {
        liEl.textContent=`${i-12}pm: ${this.result[i-6]} cookies`;
        ulEl.appendChild(liEl);
        this.total+=this.result[i-6];
      }
    }
    var pEl2=document.createElement('p');
    pEl2.textContent=`Total: ${this.total} cookies`;
    continer.appendChild(pEl2);

  }

};

cookiesSeattle.htmlEdit();
//-------------------------------------------------------
var cookiesTokyo = {
  location: 'Tokyo',
  min: 3,
  max: 24,
  avgCookies: 1.2,
  total:0,
  result: [],
  randomCustNum: function(){
    return getRandomInt(this.min,this.max);
  },

  htmlEdit: function () {
    var continer = document.getElementById('myList');
    var ulEl = document.createElement('ul');
    var pEl=document.createElement('p');
    pEl.textContent=`${this.location}`;
    continer.appendChild(pEl);
    continer.appendChild(ulEl);

    for(var i=6;i<=19;i++)
    { var liEl=document.createElement('li');
      this.result.push(Math.ceil(this.avgCookies*this.randomCustNum()));
      if (i<=12)
      {
        liEl.textContent=`${i}am: ${this.result[i-6]} cookies`;
        ulEl.appendChild(liEl);
        this.total+=this.result[i-6];
      }
      else
      {
        liEl.textContent=`${i-12}pm: ${this.result[i-6]} cookies`;
        ulEl.appendChild(liEl);
        this.total+=this.result[i-6];
      }
    }
    var pEl2=document.createElement('p');
    pEl2.textContent=`Total: ${this.total} cookies`;
    continer.appendChild(pEl2);
  }

};

cookiesTokyo.htmlEdit();
//------------------------------------------------------
var cookiesDubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  avgCookies: 3.7,
  total:0,
  result: [],
  randomCustNum: function(){
    return getRandomInt(this.min,this.max);
  },

  htmlEdit: function () {
    var continer = document.getElementById('myList');
    var ulEl = document.createElement('ul');
    var pEl=document.createElement('p');
    pEl.textContent=`${this.location}`;
    continer.appendChild(pEl);
    continer.appendChild(ulEl);

    for(var i=6;i<=19;i++)
    { var liEl=document.createElement('li');
      this.result.push(Math.ceil(this.avgCookies*this.randomCustNum()));
      if (i<=12)
      {
        liEl.textContent=`${i}am: ${this.result[i-6]} cookies`;
        ulEl.appendChild(liEl);
        this.total+=this.result[i-6];
      }
      else
      {
        liEl.textContent=`${i-12}pm: ${this.result[i-6]} cookies`;
        ulEl.appendChild(liEl);
        this.total+=this.result[i-6];
      }
    }
    var pEl2=document.createElement('p');
    pEl2.textContent=`Total: ${this.total} cookies`;
    continer.appendChild(pEl2);
  }

};

cookiesDubai.htmlEdit();
//-------------------------------------------------------
var cookiesParis = {
  location: 'Paris',
  min: 20,
  max: 38,
  avgCookies:2.3,
  total:0,
  result: [],
  randomCustNum: function(){
    return getRandomInt(this.min,this.max);
  },

  htmlEdit: function () {
    var continer = document.getElementById('myList');
    var ulEl = document.createElement('ul');
    var pEl=document.createElement('p');
    pEl.textContent=`${this.location}`;
    continer.appendChild(pEl);
    continer.appendChild(ulEl);

    for(var i=6;i<=19;i++)
    { var liEl=document.createElement('li');
      this.result.push(Math.ceil(this.avgCookies*this.randomCustNum()));
      if (i<=12)
      {
        liEl.textContent=`${i}am: ${this.result[i-6]} cookies`;
        ulEl.appendChild(liEl);
        this.total+=this.result[i-6];
      }
      else
      {
        liEl.textContent=`${i-12}pm: ${this.result[i-6]} cookies`;
        ulEl.appendChild(liEl);
        this.total+=this.result[i-6];
      }
    }
    var pEl2=document.createElement('p');
    pEl2.textContent=`Total: ${this.total} cookies`;
    continer.appendChild(pEl2);
  }

};

cookiesParis.htmlEdit();
//-------------------------------------------------------
var cookiesLima = {
  location: 'Lima',
  min: 2,
  max: 	16,
  avgCookies: 4.6,
  total:0,
  result: [],
  randomCustNum: function(){
    return getRandomInt(this.min,this.max);
  },

  htmlEdit: function () {
    var continer = document.getElementById('myList');
    var ulEl = document.createElement('ul');
    var pEl=document.createElement('p');
    pEl.textContent=`${this.location}`;
    continer.appendChild(pEl);
    continer.appendChild(ulEl);

    for(var i=6;i<=19;i++)
    { var liEl=document.createElement('li');
      this.result.push(Math.ceil(this.avgCookies*this.randomCustNum()));
      if (i<=12)
      {
        liEl.textContent=`${i}am: ${this.result[i-6]} cookies`;
        ulEl.appendChild(liEl);
        this.total+=this.result[i-6];
      }
      else
      {
        liEl.textContent=`${i-12}pm: ${this.result[i-6]} cookies`;
        ulEl.appendChild(liEl);
        this.total+=this.result[i-6];
      }
    }
    var pEl2=document.createElement('p');
    pEl2.textContent=`Total: ${this.total} cookies`;
    continer.appendChild(pEl2);
  }

};

cookiesLima.htmlEdit();
