"use strict";
const btnClickPlusOne = document.querySelector('.btn_1'),
      btnClickPlusTen = document.querySelector('.btn_2'),
      textClick = document.querySelector('.text_1');

function ClickBtnPlusOne() {
     let sum = textClick.textContent;
     textClick.textContent = +sum + 1;
     console.log(sum);
};
function ClickBtnPlusTen() {
     let sum = textClick.textContent;
     textClick.textContent = +sum + 10;
     console.log(sum);
};

btnClickPlusOne.addEventListener('click', ClickBtnPlusOne);
btnClickPlusTen.addEventListener('click', ClickBtnPlusTen);
