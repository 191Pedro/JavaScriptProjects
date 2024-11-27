let calc = document.getElementById('calc');
let recalc = document.getElementById('recalc');
let r = document.getElementById('result');
let text = document.getElementById('text');

function att(){
    let r = document.getElementById('result');
    calc.style.display = 'none'
    recalc.style.display = 'block'

    r.innerText = ''

    let t1 = +document.getElementById('av').value
    let v1 = t1
    let i = 0
    
    while (i < 10){
        console.log(t1)
        i++
        if (i == 10){
            r.insertAdjacentText("beforebegin", v1 + 'x' + i + '=' + t1)
            r = 0
        }
        r.insertAdjacentText("beforebegin", v1 + 'x' + i + '=' + t1 + ' / ')
        t1 = t1 + v1
    }
}
function att2(){
    calc.style.display = 'block'
    recalc.style.display = 'none'
    text.innerHTML = "<p><p id='result'>O resultado será exibido aqui</p></p>"
}