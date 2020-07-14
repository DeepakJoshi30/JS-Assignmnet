/*Data Types in JavaScript:
Data types basically specify what kind of data can be stored and manipulated within a program.
There are six basic data types in JavaScript which can be divided into three main categories: primitive (or primary), composite (or reference), and special data types. String, Number, and Boolean are primitive data types. Object, Array, and Function (which are all types of objects) are composite data types. Whereas Undefined and Null are special data types.
Primitive data types can hold only one value at a time, whereas composite data types can hold collections of values and more complex entities.

1- String : The string data type is used to represent textual data (i.e. sequences of characters). Strings are created using single or double quotes surrounding one or more characters
ex: var a = 'name'

2- Number: The number data type is used to represent positive or negative numbers with or without decimal place, or numbers written using exponential notation.
eg: var a = 25;         // integer
var b = 80.5;       // floating-point number
var c = 4.25e+6;    // exponential notation, same as 4.25e6 or 4250000

3- Boolean: The Boolean data type can hold only two values: true or false. It is typically used to store values like yes (true) or no (false), on (true) or off (false), etc. 
eg:
var a = 2, b = 5, c = 10;
alert(b > a) // Output: true
alert(b > c) // Output: false

4- Undefined: The undefined data type can only have one value-the special value undefined. If a variable has been declared, but has not been assigned a value, has the value undefined.
eg:
var a;
var b = "Hello World!"
 
alert(a) // Output: undefined
alert(b) // Output: Hello World!

5-Null: This is another special data type that can have only one value-the null value. A null value means that there is no value. It is not equivalent to an empty string ("") or 0, it is simply nothing.
ex:
var a = null;
alert(a); // Output: null

Array : An array is a type of object used for storing multiple values in single variable. Each value (also called an element) in an array has a numeric position, known as its index, and it may contain data of any data type-numbers, strings, booleans, functions, objects, and even other arrays. The array index starts from 0, so that the first array element is arr[0] not arr[1].
eg:
var colors = ["Red", "Yellow", "Green", "Orange"];
var cities = ["London", "Paris", "New York"];
 
alert(colors[0]);   // Output: Red
alert(cities[2]);   // Output: New York 
*/