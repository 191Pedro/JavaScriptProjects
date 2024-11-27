function att(){
    let a = +document.getElementById('av').value;
    let b = +document.getElementById('bv').value;

    let r = document.getElementById('result');
    let r2 = document.getElementById('result2');
    let ra = document.getElementById('ra');
    let rb = document.getElementById('rb');
    let rc = document.getElementById('rc');


    if (a == b){
        c = a + b;
        r.innerText = a + ' é igual a ' + b + ', logo, a soma é ' + c
    }
    else{
        c = a * b;
        r.innerText = a + ' não é igual a ' + b + ', logo, seu produto é ' + c
    }
}