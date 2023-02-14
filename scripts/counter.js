let counter = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").onclick = count;
});

function count() {
  counter++;

  if (counter % 10 === 0) {
    alert("Mouse is now your friend, he likes the food alot! 🥙");
  }

  document.querySelector(".counter").innerHTML = counter;
}
