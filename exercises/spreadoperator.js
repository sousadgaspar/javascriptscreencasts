

// allow to pass any number of arguent in a funciton

function total (...numbers) {

  let total = 0;

  for(let number of numbers) {
    total += number;
  }

  return total;

}


console.log(total(2, 4, 8));



function total2 (...numbers) {

  let total = 0;

  for(let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;

}

console.log(total2(2, 4, 8));