// Strings, booleans and numbers are not object but they have some buildin methods.


let name = "    Sousa Gaspar   ";

console.log(name.length);
//-> 12

console.log(name.indexOf('G'));
//->6

console.log(name.slice(3, 8));

//before trim
console.log(name);

//after trim
console.log(name.trim());

//padStart
console.log(String(6).padStart(3, "0"));

//split words. like explode in php
names = name.trim().split(" ");
console.log(name.trim().split(" "));

console.log(names.join(" - "));

console.log(name.repeat(4));

