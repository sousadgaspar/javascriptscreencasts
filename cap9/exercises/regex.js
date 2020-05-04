
//Regex are declared in two ways

let rule = RegExp("abc");
//or 
let secondRule = /abc/;


//Testing for matches
console.log(rule.test('ab'));


//Testing numbers is perl regular expression normal
let numbers = /[0-9]/;

console.log(numbers.test("In 1999"));

// Regex shortcuts are so allowed
/*

  \d digit
  \w word
  \s space

  \D not digit
  \W not word
  \S not space
  . any charater
  + one or more characters
  * 0 ot more character
  ? make the item before optional 
  {2} repeat the element before to the number inside the brackets
    {2,5} range
    {2,} Open ended
    {,2} Up 2

  /expression/i case insesitive
  /expression/g applyed globally

  ^ Matches a pattern starting with
  [^Char] - the ^ inside square brackets means not
  $ Matches a pattern ending with

  \bpattern\b matches the pattern inside the boundaries \b

  | choice pattern

*/

let dateFormat = /(\d\d-){2}\d{4}\s\d\d:\d\d/;

console.log("The date is: ", dateFormat.test("01-30-2003 15:20"));



// The ^ sign inside square brackets means not 



// ? make the item before optional

let validate = /Neighbou?r/; // In this case the u is optional

console.log(validate.test("Neighbour"));
console.log(validate.test("Neighbor"));


let numberValidator = /\d{4}/;


console.log(numberValidator.test(1988));




// The exec method

let text = "I'm so happy today I made 100 years old.";
let rg = /\d{3}/;

let output = rg.exec(text);
console.log(output[0]);



// The match method

console.log(
  "This is the 20, 30, 40, 50 and 100".match(/\d+/g)
);

//The replace method
// The replace method is part of the String prototype method
// It's possible to use a string to replace another string
console.log("Tchissola is the best".replace('Tchissola', 'Yorssenia'));

// It's also possible to use regex in the seaching argument
console.log("Tchissola is the best".replace(/[s]/g, "C"));

//Other example
console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(/(\w+), (\w+)/g, "$2 $1"));


//Dinamic regex
let name = "Harry";
let otherText = "Harry is a suspicious character";
let regex = new RegExp("\\b(" + name + ")\\b", "gi");

console.log(otherText.replace(regex, "_$1_"));


//The seach function 
console.log("  world".search(/\S/));

console.log("xxxuxa".match(/x.*/));





