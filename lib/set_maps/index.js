"use strict";

var myArray = [11, 22, 34, 65, 34];
var mySet = new Set(myArray);
mySet.add('100');
mySet.add({
  a: 1,
  b: 2
});
mySet.delete(22);
mySet.add('100');
mySet.add('200');
console.log(mySet.size);
mySet.forEach(function (val) {
  console.log(val);
});
var myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);
myMap.set('c3', 'Foo');
myMap.delete('a1');
console.log(myMap.size);
var carWeakSet = new WeakSet();
var carS1 = {
  make: 'Honda',
  model: 'Civic'
};
carWeakSet.add(carS1);
var carS2 = {
  make: 'Toyota',
  model: 'Camry'
};
carWeakSet.add(carS2);
carWeakSet.delete(carS1);
console.log(carWeakSet);
var carWeakMap = new WeakMap();
var key1 = {
  id: 1
};
var car1 = {
  make: 'Honda',
  model: 'Civic'
};
var key2 = {
  id: 2
};
var car2 = {
  make: 'Toyota',
  model: 'Camry'
};
carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);
carWeakMap.delete(key1);
console.log(carWeakMap);