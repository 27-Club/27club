const PAGE_SIZE = 8;

// Pagination for "Jūsu veidlapas" section
let currentFormPage = 1;
const formListData = document.querySelector('.form-list-data');
const formPageNumEl = document.querySelector('#page-num');
const formPrevBtn = document.querySelector('#prev-page-btn');
const formNextBtn = document.querySelector('#next-page-btn');
const formDataRows = Array.from(formListData.children);
function showFormPage(page) {
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

// Pagination for "Visas veidlapas" sectionS
let currentAllFormPage = 1;

const allFormListData = document.querySelectorAll('.form-list-data')[1];
const allFormPageNumEl = document.querySelector('#page-num-all');
const allFormPrevBtn = document.querySelector('#prev-page-btn-all');
const allFormNextBtn = document.querySelector('#next-page-btn-all');
const allFormDataRows = Array.from(allFormListData.children);

function showAllFormPage(page) {
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
function prevAllFormPage() {
    if (currentAllFormPage > 1) {
        currentAllFormPage--;
        showAllFormPage(currentAllFormPage);
    }
}
function nextAllFormPage() {
    if (currentAllFormPage < Math.ceil(allFormDataRows.length / PAGE_SIZE)) {
        currentAllFormPage++;
        showAllFormPage(currentAllFormPage);
    }
}
allFormPrevBtn.addEventListener('click', prevAllFormPage);
allFormNextBtn.addEventListener('click', nextAllFormPage);
showAllFormPage(currentAllFormPage);