
const display = document.querySelector('.textview')
const allNumber = document.querySelectorAll('.num')
const allOperator = document.querySelectorAll('.oper')
const equal = document.querySelector('.equal')
const del = document.querySelector('.del')

let temp = '';
let operator = '';

allNumber.forEach(number=>{
    number.addEventListener('click', (e) =>{
        temp += e.target.innerText
        //console.log(temp)
        display.value = temp
    })
})

allOperator.forEach(oper=>{
    oper.addEventListener('click', (e)=>{
        operator += e.target.innerText
        display.value = temp + operator
    })
})

