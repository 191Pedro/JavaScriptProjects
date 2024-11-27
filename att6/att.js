function att(){
    let a = +document.getElementById('av').value;
    let b = a * 1.05;
    
    let r = document.getElementById('result');

    r.innerText = 'O reajuste é de ' + b.toFixed(2).replace('.' , ',');
}