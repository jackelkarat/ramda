'use strict';

const R = require('ramda');
const studients_data = require('./studients_data');
// console.log(studients_data);

const getNames = R.map(student => student.name, studients_data)
// console.log(getNames);

const getClass = R.filter(student => student.class == "cd", studients_data).map(student => student.name)
// console.log(getClass);

const add = R.add(10)
console.log(add(10)) // 20

console.log(R.add(10,20)); // 30

const subtract = R.subtract(10)
console.log(subtract(2)) // 8

const minus = R.subtract(R.__, 10) // il passe en minus
console.log(minus(2)) // -8

const multiply = R.multiply(2);
console.log(R.map(multiply, [2,6,9])); // [ 8, 24, 36 ]
console.log(multiply(4)); // 8


const divide = R.divide(10);
console.log(R.map(divide, [30,20,10])); // [ 0.3333333333333333, 0.5, 1 ]
console.log(divide(1)); // 10

console.log('R.equals');
const equals3 = R.equals(3);
console.log(R.all(equals3)([3, 3, 3, 3])) //=> true;
console.log(R.all(equals3)([3, 3, 1, 3])) //=> false;

console.log('R.all');
const array = [10, 20, 30, 40, 50];
const checkArray = x => x < 60;
console.log(R.all(checkArray, array)) //=> true;
console.log(R.all(R.equals(10), array)) //=> false;

console.log('R.gte');
console.log(R.gte(50, 40, 30, 20, 10)) //=> true; du plus grand au plus petit
console.log(R.gte('z','a')) //=> true
console.log(R.gte('a','z')) //=> false

console.log('R.lte');
console.log(R.lte(10, 20, 30, 40, 50)) //=> true; du plus grand au plus petit
console.log(R.lte('z','a')) //=> false 
console.log(R.lte('a','z')) //=> true

console.log('R.always');
console.log(R.always(10)(56456)); //=> 10; toujours renverra le premier

console.log('R.and');
console.log(R.and(true, true)); //=> true
console.log(R.and(true, false)); //=> false
console.log(R.and(false, false)); //=> false

 console.log('R.any');
 console.log(R.any(R.equals(11),[11,20,30])); //=> true, parce que au moin 1 est egal a 11

 console.log('R.aperture'); // va creer l'array selon  aperture que l'on a demander
 console.log(R.aperture(2, [1, 2, 3, 4, 5])); //=> [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ] ]
 console.log(R.aperture(3, [1, 2, 3, 4, 5])); //=> [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ] ]

 console.log('R.append, R.prepend');
 console.log(R.append(12, [1, 2, 3, 4, 5])); //=> va ajouter a la fin notre element dans l'array
 console.log(R.prepend(12, [1, 2, 3, 4, 5])); //=> va ajouter au debut notre element dans l'array
 
 console.log('Math.max');
 console.log(Math.max(1, 2, 3, 4, 5)); //=> 5; va nous anooncer le max

 console.log('R.apply');
 console.log(R.apply(Math.max, [1, 2, 3, 4, 5]));  //=> 5; permet d'utiliser des fonction de javascript

 
 const p1 = {age : 20}
 const p2 = {age : 30}
 const p3 = {age : 40}

 // va nous sorted par l'age selon acendant ou descendant
 console.log('R.ascend');
 const ascend = R.ascend(R.prop('age'));
 console.log(R.sort(ascend, [p2, p1, p3])); //[ { age: 20 }, { age: 30 }, { age: 40 } ]

 console.log('R.descend');
 const descend = R.descend(R.prop('age'));
 console.log(R.sort(descend, [p2, p1, p3])); //[ { age: 40 }, { age: 30 }, { age: 20 } ]

 function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession +".");
}
console.log(theFunction("John", "fireman"));
console.log(theFunction.apply(this, ["John", "fireman"])); // demande un array
console.log(theFunction.call(this, "John", "fireman")); // demande une liste

