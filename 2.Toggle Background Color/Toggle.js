const mycontainer = document.getElementById("container");
const toggleButton = document.getElementById("toggleButton");
const body = document.body;

function toggleBackgroundColor() {
  body.classList.toggle("dark");
}

toggleButton.addEventListener("click", toggleBackgroundColor);
