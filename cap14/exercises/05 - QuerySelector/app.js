function count (selector) {
  return document.querySelectorAll(selector).length;
}

console.log(count("p"));
console.log(count("span"));
console.log(count(".animal"));