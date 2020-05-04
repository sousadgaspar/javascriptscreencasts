//Dataset
var SCRIPTS = [
  {
    name: "Adlam",
    ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
    direction: "rtl",
    year: 1987,
    living: true,
    link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
  },
  {
    name: "Caucasian Albanian",
    ranges: [[66864, 66916], [66927, 66928]],
    direction: "ltr",
    year: 420,
    living: false,
    link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
  },
  {
    name: "Ahom",
    ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
    direction: "ltr",
    year: 1250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
  },
  {
    name: "Arabic",
    ranges: [[1536, 1541], [1542, 1548], [1549, 1563], [1564, 1565], [1566, 1567], [1568, 1600], [1601, 1611], [1622, 1648], [1649, 1757], [1758, 1792], [1872, 1920], [2208, 2229], [2230, 2238], [2260, 2274], [2275, 2304], [64336, 64450], [64467, 64830], [64848, 64912], [64914, 64968], [65008, 65022], [65136, 65141], [65142, 65277], [69216, 69247], [126464, 126468], [126469, 126496], [126497, 126499], [126500, 126501], [126503, 126504], [126505, 126515], [126516, 126520], [126521, 126522], [126523, 126524], [126530, 126531], [126535, 126536], [126537, 126538], [126539, 126540], [126541, 126544], [126545, 126547], [126548, 126549], [126551, 126552], [126553, 126554], [126555, 126556], [126557, 126558], [126559, 126560], [126561, 126563], [126564, 126565], [126567, 126571], [126572, 126579], [126580, 126584], [126585, 126589], [126590, 126591], [126592, 126602], [126603, 126620], [126625, 126628], [126629, 126634], [126635, 126652], [126704, 126706]],
    direction: "rtl",
    year: 400,
    living: true,
    link: "https://en.wikipedia.org/wiki/Arabic_script"
  },
  {
    name: "Imperial Aramaic",
    ranges: [[67648, 67670], [67671, 67680]],
    direction: "rtl",
    year: 800,
    living: false,
    link: "https://en.wikipedia.org/wiki/Aramaic_alphabet"
  },
  {
    name: "Armenian",
    ranges: [[1329, 1367], [1369, 1376], [1377, 1416], [1418, 1419], [1421, 1424], [64275, 64280]],
    direction: "ltr",
    year: 405,
    living: true,
    link: "https://en.wikipedia.org/wiki/Armenian_alphabet"
  },
  {
    name: "Avestan",
    ranges: [[68352, 68406], [68409, 68416]],
    direction: "rtl",
    year: 400,
    living: false,
    link: "https://en.wikipedia.org/wiki/Avestan_alphabet"
  },
  {
    name: "Balinese",
    ranges: [[6912, 6988], [6992, 7037]],
    direction: "ltr",
    year: 1000,
    living: true,
    link: "https://en.wikipedia.org/wiki/Balinese_script"
  },
  {
    name: "Bamum",
    ranges: [[42656, 42744], [92160, 92729]],
    direction: "ltr",
    year: 1896,
    living: true,
    link: "https://en.wikipedia.org/wiki/Bamum_script"
  },
  {
    name: "Bassa Vah",
    ranges: [[92880, 92910], [92912, 92918]],
    direction: "ltr",
    year: 1950,
    living: false,
    link: "https://en.wikipedia.org/wiki/Bassa_alphabet"
  },
  {
    name: "Batak",
    ranges: [[7104, 7156], [7164, 7168]],
    direction: "ltr",
    year: 1300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Batak_alphabet"
  },
  {
    name: "Bengali",
    ranges: [[2432, 2436], [2437, 2445], [2447, 2449], [2451, 2473], [2474, 2481], [2482, 2483], [2486, 2490], [2492, 2501], [2503, 2505], [2507, 2511], [2519, 2520], [2524, 2526], [2527, 2532], [2534, 2558]],
    direction: "ltr",
    year: 1050,
    living: true,
    link: "https://en.wikipedia.org/wiki/Bengali_alphabet"
  },
  {
    name: "Bhaiksuki",
    ranges: [[72704, 72713], [72714, 72759], [72760, 72774], [72784, 72813]],
    direction: "ltr",
    year: 1050,
    living: false,
    link: "https://en.wikipedia.org/wiki/Bhaiksuki_alphabet"
  },
  {
    name: "Bopomofo",
    ranges: [[746, 748], [12549, 12591], [12704, 12731]],
    direction: "ltr",
    year: 1918,
    living: true,
    link: "https://en.wikipedia.org/wiki/Bopomofo"
  },
  {
    name: "Brahmi",
    ranges: [[69632, 69710], [69714, 69744], [69759, 69760]],
    direction: "ltr",
    year: -250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Brahmi_script"
  },
  {
    name: "Braille",
    ranges: [[10240, 10496]],
    direction: "ltr",
    year: 1824,
    living: true,
    link: "https://en.wikipedia.org/wiki/Braille"
  },
  {
    name: "Buginese",
    ranges: [[6656, 6684], [6686, 6688]],
    direction: "ltr",
    year: 1650,
    living: true,
    link: "https://en.wikipedia.org/wiki/Lontara_script"
  },
  {
    name: "Buhid",
    ranges: [[5952, 5972]],
    direction: "ltr",
    year: 1300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Buhid_alphabet"
  },
  {
    name: "Chakma",
    ranges: [[69888, 69941], [69942, 69956]],
    direction: "ltr",
    year: 1050,
    living: true,
    link: "https://en.wikipedia.org/wiki/Chakma_alphabet"
  },
  {
    name: "Canadian Aboriginal",
    ranges: [[5120, 5760], [6320, 6390]],
    direction: "ltr",
    year: 1840,
    living: true,
    link: "https://en.wikipedia.org/wiki/Canadian_Aboriginal_syllabics"
  },
  {
    name: "Carian",
    ranges: [[66208, 66257]],
    direction: "ltr",
    year: -650,
    living: false,
    link: "https://en.wikipedia.org/wiki/Carian_alphabets"
  },
  {
    name: "Cham",
    ranges: [[43520, 43575], [43584, 43598], [43600, 43610], [43612, 43616]],
    direction: "ltr",
    year: 750,
    living: true,
    link: "https://en.wikipedia.org/wiki/Cham_alphabet"
  }
];


//returning a function
function greaterThan(n) {

  return m => m > n;

}

let greaterThen10 = greaterThan(10);

console.log(greaterThen10(15));

//changing the behaviour of the function 
// In this example we are changing the behaviour of the Math.min function
function noisy (f) {
  return (...arguments) => {
    console.log("Calling with ", arguments);
    let result = f(...arguments);
    console.log("called with ", arguments, ", returned", result);
    return result;
  }
}

noisy(Math.min)(2, 4, 5, 12, 7);
//->2

// function that provide a new type of control flow



//repeat on some action

function repeat(number, action) {

  for (let i = 0; i < number; i++) {
    action(i);
  }

}


function logToConsole(message) {
  console.log(message);
}

repeat(4, logToConsole);


//Array high order function 
['A', 'B', 'C'].forEach(char => console.log(char));


// We can write a filter, basically we can adapt this function to filter anything. 
// In this example I adapted also the map function 
// this function simulates filter and map all toguether
function filterArray(collection, condition, action) {

  let passed = [];
  for(let element of collection) {
    if(condition(element)) {
      passed.push(action(element));
    }
  }

  return passed;
}

// Condition
let even = (n) => {
  if(n%2 == 0) return n;
}

//collection
let collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//action 
let modifiyer = (element) => {
  return String(element) + ' Element';
}

console.log(filterArray(collection, even, modifiyer));




// Reduce function 
function reduce (array, combine, start) {
  let current = start;

  for(let element of array) {
    current = combine(current, element);
  }

  return current;
}


let sum = reduce([1, 2, 3, 4, 5], (a, b) => a + b , 0);

console.log(sum);


//custom reduce function

function customReduce (collection, reduceFunction) {
  let startingPoint = 0;
  //reduceFunction(startingPoint, element);
  for(let element of collection) {
    startingPoint += element;
  }
  return startingPoint;
}

console.log("This is the custom reduce function");
console.log(customReduce(collection, (a, b) => {return a+b}));



//Native reduce function from array
console.log("This is the reduce function");
console.log(collection.reduce((a, b) => { return a+b}));

let newerScripts = SCRIPTS.filter((a) => {return a.living == true});
let avarageYear = () => {
                          allYears = [];
                          for(let script of newerScripts) {
                            allYears.push(script.year);
                          }
                          return allYears;
                        }

console.log(newerScripts);
console.log(avarageYear());


//avarage of an array
function avarage (array) {
  return array.reduce((a, b) => a + b/array.length);
}

//avarage of living and dead scripts
let avarageOfLivingScripts = Math.round(avarage(
  SCRIPTS.filter(s => s.living = true).map(s => s.year)
));

//This is the avarage of living scripts
console.log("This is the avarage of the living scripts");
console.log(avarageOfLivingScripts);


// let avarageOfTheDeadScripts = Math.round(avarage(
//   SCRIPTS.filter(s => s.living = false).map(s => s.year)
// ));

// I don't know why the script don't want to bring the dead scripts might be because they are already dead.
console.log("This is the avarage of the dead scripts");
console.log(SCRIPTS.filter(s => s.living = false).map(s => s.year));

console.log("Hi guyis".codePointAt(3));


//