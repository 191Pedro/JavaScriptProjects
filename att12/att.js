function att(){
    let va = +document.getElementById('value').value;
    let fm = +document.getElementById('forma').value;
    let t = +document.getElementById('tempo').value;

    let r = document.getElementById('result');

    if (fm == 1){
        let vf = va * 0.85;
        r.innerText = 'O valor final é ' + vf.toFixed(2).replace('.' , ',');
    }
    else if (fm == 2){
        let vf = va * 0.90;
        r.innerText = 'O valor final é ' + vf.toFixed(2).replace('.' , ',');
    }
    else if (fm == 3){
        let vf = va / 2;
        r.innerText = '2 parcelas de ' + vf.toFixed(2).replace('.' , ',');
    }
    else{
        let vp = va * 1.1;
        let vf = va * 1.1 * t;
        r.innerText = t + ' parcelas de ' + vp.toFixed(2).replace('.' , ',') + ', totalizando ' + vf.toFixed(2).replace('.', ',')
    }
}

const tabe = document.getElementById('tabelapay');
const seta = document.getElementById('seta');
const sect = document.getElementById('sec');

seta.addEventListener('click', () =>{
    tabe.classList.toggle('show');
    seta.classList.toggle('show');
    sect.classList.toggle('exp');
})