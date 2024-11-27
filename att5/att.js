function att(){
    let a = +document.getElementById('sal').value;
    let b = a / 1293;

    let r = document.getElementById('result');

    if (b < 2){
        r.innerText = 'Seu salário equivale a ' + b.toFixed(2).replace('.' , ',') + ' salário mínimo.'
    }
    else{
        r.innerText = 'Seu salário equivale a ' + b.toFixed(2).replace('.' , ',') + ' salários mínimos.'
    }
}