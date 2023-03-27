const filterBtn = document.getElementById("filter-btn");
const filterMenu = document.getElementById("popup-menu");
const filterCount = document.getElementById("filter-count");


filterBtn.addEventListener('click', function() {
    filterMenu.classList.toggle('show');
});

function statCheck() {
    let total = document.querySelectorAll('input[type="checkbox"]:checked').length;
    filterCount.innerHTML = total;
}

// document.addEventListener('click', function(event) {
//     if (!filterMenu.contains(event.target) && event.target !== filterBtn) {
//         filterMenu.classList.remove('show');
//     }
// });