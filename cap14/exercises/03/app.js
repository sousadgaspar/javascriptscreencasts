function time (name, action) {
  let start = Date.now();
  action();
  console.log(name, "took", Date.now() - start, 'ms');
}

time("naive", () => {
  let target = document.getElementById("one");

  while (target.offsetWidth < 2000) {
    target.appendChild(document.createTextNode("X"));
  }
});


time("clever", function () {
  let target = document.getElementById("two");
  target.appendChild(document.createTextNode("XXXXX"));

  let total = Math.ceil(2000 / (target.offsetWidth / 5));

  target.firstChild.nodeValue = "X".repeat(total);
});