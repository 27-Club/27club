let currentAllFormPage = 1;

const allFormListData = document.querySelectorAll('.form-list-data-all')[0];
const allFormPageNumEl = document.querySelector('#page-num-all');
const allFormPrevBtn = document.querySelector('#prev-page-btn-all');
const allFormNextBtn = document.querySelector('#next-page-btn-all');
const allFormDataRows = Array.from(allFormListData.children);

function showAllFormPage(page) {
    const allFormListData = document.querySelectorAll('.form-list-data-all')[0];
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