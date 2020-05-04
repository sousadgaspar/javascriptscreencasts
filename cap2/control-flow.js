// Without flow control

// let theNumber = Number(prompt("Pick a number:"));

// console.log("Your number is the squared root of " + String(theNumber*theNumber));


// with flow control
let theNumber = Number(prompt("Pick a number again:"));

if(!Number.isNaN(theNumber)) {

  console.log("Your number is the squred root of " + String(theNumber*theNumber));

}
else {
  console.log("hey you did not give me a number.")
}