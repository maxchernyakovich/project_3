
let btnClick = document.querySelector('.btn_1'),
    btnClickPlusTen = document.querySelector('.btn_2'),
    textClick = document.querySelector('.text_1'),
    textClickPlusTen = document.querySelector('.text_2');

btnClick.addEventListener('click', function() {
     
     let sum = event.target.value++;
     textClick.textContent = `${sum}`;
});

console.log(textClick);


btnClickPlusTen.addEventListener('click', function() {
     let sum = +textClick.textContent + 10;
     textClickPlusTen.textContent = `${sum}`;
});