for (let i=0; i < 100; i++) {

  if (i%5==0 && i%3==0) {
    console.log("FizzBuzz");
    continue;
  }
  else if (i%5==0 && i%3!=0) {
    console.log("Buzz");
    continue;
  }
  else if (i%3==0) {
    console.log("Fizz");
    continue;
  }
  else {
    console.log(i);
  }



}