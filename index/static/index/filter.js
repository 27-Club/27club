const filterBtn = document.getElementById("filter-btn");
const filterMenu = document.getElementById("popup-menu");
const filterArrow = document.getElementById("filter-arrow");
const filterIcon = document.getElementById("filter-icon");
const createdAt = document.getElementById("createdAt-input");
const creator = document.getElementById("creator-input");
const title = document.getElementById("title-input");

filterBtn.addEventListener('click', function() {
  filterMenu.classList.toggle('show');

  filterArrow.classList.toggle('opened');
});

document.addEventListener('click', function() {
  filterMenu.classList.remove('show');
})

filterBtn.addEventListener('click', function(e) {
  e.stopPropagation();
})

function showAllFormPage(page) {
  let currentAllFormPage = 1;
  const allFormListData = document.querySelectorAll('.form-list-data')[1];
  const allFormPageNumEl = document.querySelector('#page-num-all');
  const allFormDataRows = Array.from(allFormListData.children);

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  allFormDataRows.forEach((row, index) => {
      row.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
  });
  allFormPageNumEl.textContent = `${currentAllFormPage}`;
}

createdAt.addEventListener('change', function(e) {
  e.preventDefault();
  let filterValues = [];
  filterValues.push(this.value);
  
  filterIcon.classList.add('filled');

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
        $('#form-list-all').html(response);
        showAllFormPage(currentAllFormPage);
      },
      error: (error) => {
        console.log(error);
      }
    });
})

creator.addEventListener('change', function(e) {
  e.preventDefault();
  let filterValues = [];
  filterValues.push(this.value);
  
  filterIcon.classList.add('filled');

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
        $('#form-list-all').html(response);
        showAllFormPage(currentAllFormPage);
      },
      error: (error) => {
        console.log(error);
      }
    });
})

title.addEventListener('change', function(e) {
  e.preventDefault();
  let filterValues = [];
  filterValues.push(this.value);
  
  filterIcon.classList.add('filled');
  
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
        $('#form-list-all').html(response);
        showAllFormPage(currentAllFormPage);
      },
      error: (error) => {
        console.log(error);
      }
    });
})