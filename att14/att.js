function att(){
    let a = +document.getElementById('av').value;
    let b = +document.getElementById('bv').value;
    let an = b;
    let bn = a;
    a = an;
    b = bn;

    let r = document.getElementById('result');
    let r2 = document.getElementById('result2');

    r.innerText = 'Agora, o valor de A é ' + a;
    r2.innerText = 'Agora, o valor de B é ' + b;
}