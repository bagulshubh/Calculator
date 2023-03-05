let term = "";

let buttons = document.querySelectorAll('.buttons');
let display = document.querySelector('.input-display');
let ac = document.querySelector(".ac-button");
let op = document.querySelectorAll(".op");
let equal = document.querySelector('.equal');
let displayans = document.querySelector('.answer-display');


for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function displayinput(){
        term = term+buttons[i].textContent;
        display.textContent = term;
    })
}

ac.addEventListener('click',function(){
    term = "0";
    display.textContent = term;
    displayans.textContent = 'Ans';
})


for(let i = 0;i<op.length;i++){
    
    op[i].addEventListener('click',function(){
        term = term+op[i].textContent;
        display.textContent = term; 
    })
}

equal.addEventListener('click',function(){
    let ans = eval(term);
    displayans.textContent = ans;
})