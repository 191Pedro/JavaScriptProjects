function att(){
    let mi = +document.getElementById('mi').value
    let ha = +document.getElementById('ha').value
    let hv = +document.getElementById('hv').value
    let di = +document.getElementById('di').value

    let r = document.getElementById('result')

    mi = mi / 60
    let sl = mi.toFixed(2) * ha * hv - (mi.toFixed(2) * ha * hv * (di * 0.01));

    r.innerText = 'O seu salário líquido é ' + sl
}