function att(){
    let a = +document.getElementById('av').value;
    let b = +document.getElementById('bv').value;
    let c = +document.getElementById('cv').value;
    let d = a + b;
    let r = document.getElementById('result');

    if (d < c){
        r.innerText = d + " é menor que " + c;
    }
    else if (d == c){
        r.innerText = d + " é igual a " + c;
    }
    else{
        r.innerText = d + " é maior que " + c;
    }
}