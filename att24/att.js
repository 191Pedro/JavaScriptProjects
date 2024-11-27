function att(){
    let te = +document.getElementById('tempo').value
    let di = +document.getElementById('dista').value

    let r = document.getElementById('result')
    let r2 = document.getElementById('result2')

    let vm = di / te
    let li = di / 12;
    if (te == 0 || di == 0){
        r.innerText = 'Valores inválidos'
    }
    else{
        r.innerText = 'A velocidade média da viagem é ' + vm.toFixed(2) + 'km/h'
        r2.innerText = 'A quantidade de gasolina gasta foi de ' + li.toFixed(2) + ' litros'
    }
}

const note = document.getElementById('note');
const icon = document.getElementById('icon');
const sect = document.getElementById('sect');

icon.addEventListener('click', () =>{
    note.classList.toggle('show');
    sect.classList.toggle('exp');
})