let Rabit = {
  //Method: a property with a function value in it
  speack: (frase) => { 
    console.log("The rabit says ", frase);
  }
};

Rabit.speack("Im alive!");

//The this keyword
let Dog = {
    type: "HotViller",
    legs: 4,

    //Arrow function does not concerve it this that's why I'm using anonymous function in this object
    bark: function (times){
    console.log(`the ${this.type} is barking... with ${this.legs} legs`);
    console.log("Wooau! ".repeat(times));
  }
}

Dog.bark(4);

//In javascript we can implement inheritance with the Object prototype create function
// in this example a wolf is a kind of dog
let wolf = Object.create(Dog);
wolf.type = 'wolf';

wolf.bark(9);


