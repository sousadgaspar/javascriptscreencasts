let paragraph = document.querySelector("p");
let button = document.querySelector("button");

paragraph.addEventListener("click", () => {
  console.log("handler for paragraph");
})

button.addEventListener("click", (event) => {
  console.log("Handler for button.");
  event.stopPropagation();
})