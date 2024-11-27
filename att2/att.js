function att(){
    let pi = +document.getElementById('poui').value;

    let r = document.getElementById('result');
    
    if(pi % 2 === 0){
        r.innerText = pi +" é PAR";
    }
    if(pi % 2 === 1){
        r.innerText = pi + " é ÍMPAR";
    }
}