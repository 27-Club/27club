const range = document.querySelector("#slider");
const progressBar = document.querySelector("#progressBar");
let bubble = document.querySelector(".bubble");

range.addEventListener('input', function() {
    bubble.style.opacity = "1";

    let value = this.value;
    progressBar.style.width = (value * 3.5) + "%";
    
    setBubble(range, bubble);
});


range.addEventListener('onblur', function() {
    bubble.style.display = "none";
});

function setBubble(range, bubble) {
    let val = range.value;
    bubble.innerHTML = val;
    bubble.style.left = (val * 3.5) + "%";
  }