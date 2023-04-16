const filterBtnUser = document.getElementById("filter-btn-user");
const filterMenuUser = document.getElementById("popup-menu-user");
const filterArrowUser = document.getElementById("filter-arrow-user");
const filterIconUser = document.getElementById("filter-icon-user");
const createdAtUser = document.getElementById("createdAt-input-user");
const titleUser = document.getElementById("title-input-user");

filterBtnUser.addEventListener('click', function() {
    filterMenuUser.classList.toggle('show');
    filterArrowUser.classList.toggle('opened');
});

document.addEventListener('click', function() {
  filterMenuUser.classList.remove('show');
})

filterBtnUser.addEventListener('click', function(e) {
  e.stopPropagation();
})

// needs to be here so that pagination can work for newly added partial html
function showUserFormPage(page) {
    let currentFormPage = 1;
    const formListData = document.querySelector('.form-list-data-user');
    const formPageNumEl = document.querySelector('#page-num');
    const formDataRows = Array.from(formListData.children);

    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    formDataRows.forEach((row, index) => {
        row.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
    });
    formPageNumEl.textContent = `${currentFormPage}`;
}

createdAtUser.addEventListener('change', function(e) {
  e.preventDefault();
  let filterValues = [];
  filterValues.push(this.value);
  
  filterIconUser.classList.add('filled');

  // ajax request that returns html from partial template 
  // and displays in "user forms" section
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
        "type": "user"
      }),
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      success: (response) => {
        console.log(response);
        $('#form-list-user').html(response);
        showUserFormPage(currentFormPage);
      },
      error: (error) => {
        console.log(error);
      }
    });
})

titleUser.addEventListener('change', function(e) {
  e.preventDefault();
  let filterValues = [];
  filterValues.push(this.value);
  
  filterIconUser.classList.add('filled');
  
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
        "type": "user"
      }),
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      success: (response) => {
        console.log(response);
        $('#form-list-user').html(response);
        showUserFormPage(currentFormPage);
      },
      error: (error) => {
        console.log(error);
      }
    });
})