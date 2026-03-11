// function in a variable
var sayHello = function() {
    alert('hello world!');
}
var numberArray = [1,2,3];
var animals = new Array("cat","dog","mouse", "lion");
// object
var person = {
    name: 'Barack Hussein Obama II',
    age: '51',
    title: '44th President of the United States'
}
const sym1 = Symbol(4);
console.log(sym1);
const sym2 = Symbol(4);
console.log(sym2);
if(sym1 === sym2){
    console.log("true");
} else {
    console.log("false");
}