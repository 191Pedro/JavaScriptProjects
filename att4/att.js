function att(){
    let a = +document.getElementById('value').value;
    let r = document.getElementById('result');
    let ri1 = document.getElementById('resulti1');
    let r2 = document.getElementById('result2');
    let r3 = document.getElementById('result3');
    let ri2 = document.getElementById('resulti2');
    let ri3 = document.getElementById('resulti3');

    r.innerText = 'O número digitado é ' + a
    r2.innerText = 'Seu sucessor é ' + (a + 1);
    r3.innerText = 'Seu antecessor é ' + (a - 1);
}