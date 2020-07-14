// Difference between var, let and const

// var: A var variable can be redeclared and updated. variable name can not start with number.
// example:
let points = 50;
var winner = false;
if(points > 40) {
  var winner = true;
}
// If I call:
console.log("winner");
// It now returns: true

// let: A let variable be updated but not redeclared.

// An example of trying to redeclare a let variable:
<script>
let points = 50;
let points = 60;
</script>
console.log("points");
// In the console I get an error:
// Uncaught SyntaxError: Identifier 'points' has already been declared

/* let points = 50;
points = 60;
// In console:
points
// Returns:
60 */



// const: in const you have to give the value at the time of initialization.

const country = "india";
console.log("country");
country= "UK";

const fruits = ["Banana", "Apple"]
console.log(fruits)
fruits.push('mango');
console.log(fruits);
