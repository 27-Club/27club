const filterBtnAll = document.getElementById("filter-btn-all");
const filterMenuAll = document.getElementById("popup-menu-all");
const filterArrowAll = document.getElementById("filter-arrow-all");
const filterIconAll = document.getElementById("filter-icon-all");
const createdAtAll = document.getElementById("createdAt-input-all");
const creatorAll = document.getElementById("creator-input-all");
const titleAll = document.getElementById("title-input-all");

filterBtnAll.addEventListener('click', function() {
  filterMenuAll.classList.toggle('show');

  filterArrowAll.classList.toggle('opened');
});

document.addEventListener('click', function() {
  filterMenuAll.classList.remove('show');
})

filterBtnAll.addEventListener('click', function(e) {
  e.stopPropagation();
})

// needs to be here so that pagination can work for newly added partial html
function showAllFormPage(page) {
  let currentAllFormPage = 1;
  const allFormListData = document.querySelectorAll('.form-list-data-all')[1];
  const allFormPageNumEl = document.querySelector('#page-num-all');
  const allFormDataRows = Array.from(allFormListData.children);

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  allFormDataRows.forEach((row, index) => {
      row.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
  });
  allFormPageNumEl.textContent = `${currentAllFormPage}`;
}

createdAtAll.addEventListener('change', function(e) {
  e.preventDefault();
  let filterValues = [];
  filterValues.push(this.value);
  
  filterIconAll.classList.add('filled');

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
      data: JSON.stringify({
        "filterData": filterValues,
        "type": "all"
      }),
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

creatorAll.addEventListener('change', function(e) {
  e.preventDefault();
  let filterValues = [];
  filterValues.push(this.value);
  
  filterIconAll.classList.add('filled');

  var url = "/main/";
  $.ajax({
      url: url,
      type: "POST",
      dataType: 'html',
      accepts: {
        text: "text/html; charset=utf-8"
      },
      data: JSON.stringify({
        "filterData": filterValues,
        "type": "all"
      }),
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

titleAll.addEventListener('change', function(e) {
  e.preventDefault();
  let filterValues = [];
  filterValues.push(this.value);
  
  filterIconAll.classList.add('filled');
  
  var url = "/main/";
  $.ajax({
      url: url,
      type: "POST",
      dataType: 'html',
      accepts: {
        text: "text/html; charset=utf-8"
      },
      data: JSON.stringify({
        "filterData": filterValues,
        "type": "all"
      }),
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