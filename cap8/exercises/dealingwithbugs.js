function promptNumber (input) {
  let result = Number(input);

  //Controlling input value
  if(Number.isNaN(result)) {
    return null;
  } else {
    return result;
  }
}

console.log(promptNumber(45));



function promptDirection (input) {
  let result = input;

  if(result.toLowerCase() == "right") return "R";
  if(result.toLowerCase() == "left") return "L";
  throw new Error("Invalid direction: " + result);

}


function look (direction) {
  if (promptDirection(direction) == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}


try {
  console.log("You see", look("Which where?"));
} catch(error) {
  console.log("Something went wrong: " + error);
}


const accounts = {
  a: 100,
  b: 0,
  c: 20
};

function getAccount () {
  let accountName = "e";

  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No such account ${accountName}`);
  }
  return accountName;
}


function transfer (from, amount) {
  if(accounts[from] < amount) return;
  console.log("Before transfer money", accounts[from])
  console.log("Before transfer money", getAccount())
  accounts[from] -= amount;
  accounts[getAccount()] += amount;
  console.log("After transfer money", accounts[from])
  console.log("After transfer money", getAccount())
}


//transfer("a", 30);


function transferTwo (from, amount) { 
  if(accounts[from] < amount) return;
  let progress = 0;

  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress++;
  } finally {
      if(progress == 1) {
        accounts[from] += amount;
      }
  }
  return progress;
}

//console.log(transferTwo("a", 30));



//Selective Exception 

class InputError extends Error {};


function promptDirectionTwo (input) {
  let result = input;

  if(result.toLowerCase() == "right") return "R";
  if(result.toLowerCase() == "left") return "L";
  throw new InputError("Invalid direction: " + result);

}


promptDirectionTwo("Bad");