

//function definition with parameter
const square = function (number) {

  return number * number;

}


//basic function with no paramiter
const makeNoise = function () {

  return console.log('Plinnnnng...');

}


//There are tree different notaitions 

//as a value
let bark1 = function (times) {

  console.log("howww ".repeat(times))

}

function bark2 (times) {

  console.log("howww ".repeat(times))

}

let bark3 = (times) => {

  console.log("howww ".repeat(times))

}

// bark1(3);
// bark2(4);
// bark3(5);


// Stack Overflow

function egg() {

  return console.log("Come first .. " + chicken());

}

function chicken () {

  return console.log("Come first ..." + egg());

}


egg();