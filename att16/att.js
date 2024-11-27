function att(){
    let av = +document.getElementById('av').value;
    let bv = +document.getElementById('bv').value;
    let cv = +document.getElementById('cv').value;

    let r = document.getElementById('result')

    if (av == bv && bv == cv){
        r.innerText = 'O triângulo é equilátero.'
    }
    
    else if (av == bv || av == cv || bv == cv){
        r.innerText = 'O triângulo é isóceles.'
    }
    else{
        r.innerText = 'O triângulo é escaleno.'
    }
}