"use strict";

var name = 'Manisha';

function makeUpperCase(word) {
  return word.toUpperCase();
}

var template = "<h1>Welcome! ".concat(makeUpperCase('name'), "</h1>\n                <p>You are a really nice person</p>");
document.querySelector('template').innerHTML = template;