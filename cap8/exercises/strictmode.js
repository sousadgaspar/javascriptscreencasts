// When using strict mode you have to declare let, otherwise the program do not run as the example below.
function youCanSpotProblem (){
  "use strict";

  for (let counter = 0; counter < 3; counter++) {
    console.log(counter);
  }
}

youCanSpotProblem();


// Class person
function Person () {
  "use strict";
  
  let name;
  let age;
  let bornDate;

  function Person(name) {
    this.name = name;
  }

  function getName () {
    console.log(this.name);
  }

}


let Iulian = new Person();

Iulian.getName();