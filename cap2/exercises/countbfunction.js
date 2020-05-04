

function countBs(someString) {

  bCounter = 0;

  for (let i = 0; i < someString.length; i++) {

    if(someString[i] === "B") {

      bCounter++;

    }

  }

  return bCounter;

}

function charCounter(someString, char) {

  charCounter = 0;

  for (let i = 0; i < someString.length; i++) {

    if(someString[i] === char) {

      charCounter++;

    }

  }

  return charCounter;

}


console.log(countBs("BBCbB"));

console.log(charCounter("Sousa Sintra", "S"));