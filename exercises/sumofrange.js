

function returnArray( start, end ) {

  let listOfNumbers = [];
  listOfNumbers.push(start);

  let incrementor = 1;
  for(let i=start; i <  end; i++) {

    listOfNumbers.push(start + incrementor);

    incrementor++;
  }

  return listOfNumbers;

}


function sumArray(...numbers) {

  let sum = 0;

  for(let number of numbers) {

    sum += number;

  }

  return sum;

}

console.log(returnArray(1, 10));

console.log(sumArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));