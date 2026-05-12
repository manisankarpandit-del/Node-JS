//using common js module system to export the functions

const searching = require('./3_searching');

console.log(searching); //it will print the exported object from the searching module, which contains the functions and variables defined in that module.

console.log(searching.linearSearch([1, 2, 3, 4, 5], 3)); //it will call the linearSearch function from the searching module and print the result, which is the index of the target value in the array.

console.log(searching.binarySearch([1, 2, 3, 4, 5], 3)); //it will call the binarySearch function from the searching module and print the result, which is the index of the target value in the array.

//imporrt export using ES6 module system and require and module.exports common js module system







