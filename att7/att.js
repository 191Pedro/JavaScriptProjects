function att(){
    let av = +document.getElementById('av').value;
    let bv = +document.getElementById('bv').value;

    console.log(av, bv)

    let r = document.getElementById('result');
    let r2 = document.getElementById('result2');
    let r3 = document.getElementById('result3');

    if (av == true && bv == true){
        r.innerText = av + ' é VERDADEIRO';
        r2.innerText = bv + ' é VERDADEIRO';
        r3.innerText = 'Ambos são VERDADEIROS'
    }
    else if (av == false && bv == false){
        r.innerText = av + ' é FALSO';
        r2.innerText = bv + ' é FALSO';
        r3.innerText = 'Ambos são FALSOS'
    }
    else if (av == true && bv == false){
        r.innerText = av + ' é VERDADEIRO';
        r2.innerText = bv + ' é FALSO';
        r3.innerText = 'Eles são diferentes'
    }
    else if (av == false && bv == true){
        r.innerText = av + ' é FALSO';
        r2.innerText = bv + ' é VERDADEIRO';
        r3.innerText = 'Eles são diferentes'
    }
}