let Dog = {
  type: "HotViller",
  legs: 4,

  //Arrow function does not concerve it this that's why I'm using anonymous function in this object
  bark: function (times){
    console.log(`the ${this.type} is barking... with ${this.legs} legs`);
    console.log("Wooau! ".repeat(times));
  },

  bite: function (times) {
    console.log("mhnhawmmm...".repeat(times))
  }

}


// create instance of class Dog

function makeDog (type) {

  let dog = Object.create(Dog);
  dog.type = type;
  return dog;

}

let bulldog = makeDog('BullDog');
bulldog.bark(2);
bulldog.bite(6);

//let husk = new Dog('Usk', 4);

// husk.bark(3);
// husk.bite(1);



//Javascript class notation

let Person = {

  teethColor: "white",

  constructor(name) {
    this.name = name;
  },

  speak(speach) {
    console.log(speach);
  },

  getName() {
    console.log(this.name);
  }
}


// Constructor keyword
class Lobisomen {
  static origin = "Nebrasca";

  constructor (name) {
    this.name = name;
  }

  setName (name) {
    this.name = name;
  }

  getName (){
    return this.name
  }

}

//let gaspar = new Person("Gaspar");

// gaspar.getName();
// gaspar.speak("Hear my voice now!");


let superMan = Object.create(Person);

console.log("Logisomen name: ");
superMan.speak("Say hi!");
superMan.teethColor = "Blue";
console.log(superMan.teethColor);


let ironMan = Object.create(Person);
ironMan.speak("I'm gonna fix the Thanos world!");
console.log(ironMan.teethColor);

//Calling the logisomen class
let lobisomen = new Lobisomen("Guerrito");
console.log(lobisomen.getName());
console.log("This lob. is camming from ", Lobisomen.origin); //Static fields are called from the class instead of the instance of the class.



// It's possible to create an object without a prototype passing null to object create
let Car = Object.create(null);
console.log("toString" in Car);



// Map object 
let ages = new Map();

ages.set("Sousa", 32);
ages.set("Tchissola", 2);
ages.set("Yordanca", 32);

console.log(ages.get("Sousa"));

console.log(ages.values());


