console.log("Hello");

var Mouse = require("./mouse");
var Cat = require("./cat");

var mickey = new Mouse("black");
var jerry = new Mouse("orange");

var tom = new Cat();

tom.eat(mickey);
tom.eat(jerry);
console.log(tom);
