const filterBtn = document.getElementById("filter-btn");
const filterMenu = document.getElementById("popup-menu");
const filterCount = document.getElementById("filter-count");
const fillterApplyBtn = document.getElementById("apply-btn");
const filterArrow = document.getElementById("filter-arrow");
const filterRadios = document.getElementsByClassName("form-check-input");

filterBtn.addEventListener('click', function() {
  filterMenu.classList.toggle('show');

  filterArrow.classList.toggle('opened');
  $("input:radio").prop("checked", false);
});

fillterApplyBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let filterValues = [];

    filterMenu.querySelectorAll('input[type="radio"]:checked').forEach(function(e) {
        filterValues.push(e.value);
    });

    // ajax request that returns html from partial template 
    // and displays in "all forms" section
    var url = "/main/";
    $.ajax({
        url: url,
        type: "POST",
        dataType: 'html',
        accepts: {
          text: "text/html; charset=utf-8"
        },
        data: JSON.stringify({"filterData": filterValues}),
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRFToken": Cookies.get("csrftoken"),
        },
        success: (response) => {
          $('#form-list').html(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
})