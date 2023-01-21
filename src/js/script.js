// Rating Number
let rat = document.querySelector('.rating');
let thank = document.querySelector('.thank');
let ratNmbr = document.querySelector('.rating-number');
let btnRatNmbr = ratNmbr.querySelectorAll('button');
let numberSelect = document.querySelector('.selected');

for (let i = 0; i < btnRatNmbr.length; i++) {
    btnRatNmbr[i].addEventListener('click', () => {
        let actCurrent = ratNmbr.querySelectorAll('.active');
        if (actCurrent.length > 0) {
            actCurrent[0].classList.toggle('active');
        }
        btnRatNmbr[i].classList.toggle('active');
        globalThis.ratingSelected = btnRatNmbr[i].innerText;
    });
    // Button Submit
    let ratBtn = document.querySelectorAll('.rating button');
    let btnSumbit = ratBtn[ratBtn.length - 1];
    btnSumbit.addEventListener('click', () => {
        rat.style.display = 'none';
        thank.style.display = 'block';
        numberSelect.innerHTML = ratingSelected;
    });
}
