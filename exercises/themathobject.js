
//Math object many function related with solving math problems and consepts.

function randomPointOnCircle (radious) {
  let angle = Math.random() * 2 * Math.PI;
  return {
    x: radious * Math.cos(angle),
    y: radious * Math.sin(angle)
  };
}


console.log(randomPointOnCircle(2));

//Math radom don't genereate integer number by default
console.log(Math.random());

// To generate a full number we can round to floor or ceil
console.log(Math.ceil(Math.random() * 10));

//Math round
console.log(Math.round(5.6));