function multipliyer (factor) {

  return (n) => n * factor;

}


let byTwo = multipliyer(2);

//console.log(byTwo(4));



function init () {

  let name = "Sousa Gaspar";

  function displayName () {
    let greeting = "Hello ";
    
    console.log(greeting + name);

  }

  displayName();

}

//init();
// -> Hello Sousa gaspar



function makeFunction () {

  let name = 'Sousa Gaspar';
  function displayName () {

    console.log(name);

  }

  return displayName;

}

let myFunction = makeFunction();

//myFunction();
//-> Sousa Gaspar