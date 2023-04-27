const billInput = document.getElementById('bill-input')
const peopleInput = document.getElementById('people-input')
const tipAmount = document.getElementById('tip-amount')
const totalAmount = document.getElementById('total-amount')
const submitBtn = document.querySelectorAll('.submit-btn')  
const customInput = document.querySelector('.custom-input') 
const resetBtn = document.querySelector('.reset-btn')
const dontZero = document.querySelector('.dont-zero')



// ////////////////////////////////////////////////////////////////EVENT LISTENERS

billInput.addEventListener('input', billInputFun);
peopleInput.addEventListener('input', peopleInputFun);
submitBtn.forEach(function (val) {
    val.addEventListener('click', handleClick);
})
customInput.addEventListener('input', customInputFun);
resetBtn.addEventListener('click', reset);




// ////////////////////////////////////////////
billInput.value = "0.0";
peopleInput.value = "1";
tipAmount.innerHTML = "$" + (0.0).toFixed(2);
totalAmount.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;



//////////////////////////////////////////////////////////////////// FUNCTIONS ()


function billInputFun () {
    billValue = parseFloat(billInput.value)
    calculateTip()
}

function peopleInputFun() {
    peopleValue = parseFloat(peopleInput.value)
    calculateTip()

    if(peopleValue < 1) {
        dontZero.style.display = "flex"
        peopleInput.style.border = "2px solid #E17052"
    } else {
        dontZero.style.display = "none"
        peopleInput.style.border = "none"
        calculateTip()
    }
}

function customInputFun() {
    tipValue = parseFloat(customInput.value / 100)
    
    submitBtn.forEach(function (val) {
        val.classList.remove("active-btn")
    })
    calculateTip()
}

function handleClick(event) {
    submitBtn.forEach(function(val) {
        val.classList.remove("active-btn")
        if(event.target.innerHTML == val.innerHTML) {
            val.classList.add("active-btn");
            tipValue = parseFloat(val.innerHTML)/100
        }
    })
    calculateTip()
}

function calculateTip() {
    if(peopleValue >= 1) {
        let tip = (billValue * tipValue) / peopleValue;
        let total = (billValue / peopleValue + tip);
        tipAmount.innerHTML = "$" + tip.toFixed(2);
        totalAmount.innerHTML = "$" + total.toFixed(2);
    }
}

function reset() {
    billInput.value = "0.0";
    billInputFun()
    peopleInput.value = "1";
    peopleInputFun()
    customInput.value = "";
}

