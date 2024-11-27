function att(){
    let dvd = +document.getElementById('av').value
    let dvs = +document.getElementById('bv').value
    let quo = dvd / dvs
    let res = dvd % dvs

    let r = document.getElementById('result');
    let r2 = document.getElementById('result2');
    r.innerText = 'O quociente é ' + Math.floor(quo)
    r2.innerText = 'O resto é ' + res
}