const text = document.querySelector("#text1");

const num = 100;
let count = 0;

setInterval(counting, 15);

function counting() {
  if (count <= num) {
    count++;
    text.innerHTML = count;
  } else {
    text.innerHTML = num;
  }
}
