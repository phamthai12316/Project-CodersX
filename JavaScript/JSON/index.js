// JSON object
// stringify - Convert an object to a JSON string.
// parse - Convert a JSON string to an object

var myDog = {name: 'Milu', age: 1, dead: false};
var myDogString = JSON.stringify(myDog);

var myCatString = '{"name": "Tom", "age": 2, "dead":true}';
var myCat = JSON.parse(myCatString)
// console.log(myDogString);
console.log(myCat.name);