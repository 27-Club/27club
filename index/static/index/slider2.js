const range = document.querySelector("#slider");
const progressBar = document.querySelector("#progressBar");

range.addEventListener('input', function() {
    let value = this.value;
    progressBar.style.width = (value * 3.5) + "%";
});