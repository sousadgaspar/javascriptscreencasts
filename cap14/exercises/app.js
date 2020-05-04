
let paragraphs = document.body.getElementsByTagName("p");
document.body.insertBefore(paragraphs[0], paragraphs[2]);


function replaceImages () {
  let images = document.body.getElementsByTagName("img");

  for (let i = images.length - 1; i >= 0; i--) {
    let image = images[i];

    if(image.alt) {
      let text = document.createTextNode(image.alt);
      image.parentNode.replaceChild(text, image);
    }
  }
}



function elt(type, ...children) {
  let node = document.createElement(type);

  for (let child of children) {
    if(typeof child != "string") {
      node.appendChild(child);
    } else {
      node.appendChild(document.createTextNode(child));
    }
  }

  return node;
}

document.getElementById("quote").appendChild(
  elt("footer", "-", elt("strong", "Karl Popper"), ", preface to the second edition of ", elt("em", "The open sociaty and it enemies"), ", 1950"));