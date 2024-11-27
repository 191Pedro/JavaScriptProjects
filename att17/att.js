let inv = document.getElementById('invert')
let cf = document.getElementById('cf')
let fc = document.getElementById('fc')
let ccf = document.getElementById('calccf')
let cfc = document.getElementById('calcfc')
inv.addEventListener('click', () =>{
    cf.classList.toggle('change')
    fc.classList.toggle('change')
    ccf.classList.toggle('change')
    cfc.classList.toggle('change')
})

let r = document.getElementById('result')

function att1(){
    let a = +document.getElementById('av').value;
    let b = (5 * (a - 32) / 9)
    r.innerText = a.toFixed(2).replace('.' , ',') + 'º Fahrenheit é igual a ' + b.toFixed(2).replace('.' , ',') + 'º Celsius.'
}
function att2(){
    let a = +document.getElementById('av').value;
    let b = a * 1.8 + 32
    r.innerText = a.toFixed(2).replace('.' , ',') + 'º Celsius é igual a ' + b.toFixed(2).replace('.' , ',') + 'º Fahrenheit.'
}