
var Mouse = require('./mouse');
var Cat = require('./cat');


var mickey = new Mouse('White');
var jerry = new Mouse('Orange');

console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);