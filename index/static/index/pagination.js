const PAGE_SIZE = 8;

// Pagination for "Jūsu veidlapas" section
let currentFormPage = 1;
const formListData = document.querySelector('.form-list-data-user');
const formPageNumEl = document.querySelector('#page-num');
const formPrevBtn = document.querySelector('#prev-page-btn');
const formNextBtn = document.querySelector('#next-page-btn');
const formDataRows = Array.from(formListData.children);

function showFormPage(page) {
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
function prevFormPage() {
    if (currentFormPage > 1) {
        currentFormPage--;
        showFormPage(currentFormPage);
    }
}
function nextFormPage() {
    if (currentFormPage < Math.ceil(formDataRows.length / PAGE_SIZE)) {
        currentFormPage++;
        showFormPage(currentFormPage);
    }
}
formPrevBtn.addEventListener('click', prevFormPage);
formNextBtn.addEventListener('click', nextFormPage);
showFormPage(currentFormPage);