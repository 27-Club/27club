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
    let min = range.min ? range.min : 0;
    let max = range.max ? range.max : 10;
    let newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
  
    // Sorta magic numbers based on size of the native UI thumb
    // bubble.style.left = `calc(${newVal / 10}% + (${8 - newVal * 0.15}px))`;
    bubble.style.left = (val * 3.4) + "%";
  }