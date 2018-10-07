//grab command line arguments 
//** In THIS CASE - u do not have to specify which argv it is bc u are creating a var for ALL process.argv arguments */
//the for loop is making it so we do not have to do process.argv[2]; process.argv[3]; etc. 
var nodeArg = process.argv;

//create an array that will hold all the sorted numbers
var array = [];

// Here we create a for-loop that starts with **2** so we skip the path and node command from the command line
// We will use this for loop to build an array of numbers.

for(var i = 2; i < nodeArg.length; i++) {

    //Now we need to push/add the numbers into the array
    //we need to add floats because it will convert the numbers to decminals otherwise and treat the numbers as strings
    array.push(parseFloat(nodeArg[i]));
}

//print the numbers to the terminal
// console.log(array);

//then we print the sorted numbers by making use of the javascript sort function
//sort the numbers within the array variable
console.log(array.sort(sortNumbers));

//create a function that recognizes the first number in the array as A and the second as B
//create the a and b properties first by defining it in the function 
//now create a return function so it knows that the first number (A) will always subtract the second number (B)
function sortNumbers(a,b) {
return (a-b);
}