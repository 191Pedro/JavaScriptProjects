function att(){
    let name = document.getElementById('name').value;
    let na = +document.getElementById('na').value;
    let nb = +document.getElementById('nb').value;
    let nc = +document.getElementById('nc').value;
    let nd = +document.getElementById('nd').value;

    let r = document.getElementById('result')
    let si = document.getElementById('resultsi')

    let me = (na + nb + nc + nd) / 4;

    r.innerText = 'A média do aluno é ' + me + ', a situação do aluno ' + name + ' é: '

    if (me >= 7){
        si.innerText = 'Aprovado'
        si.style.color = '#dbffb2'
    }
    else{
        si.innerText = 'Reprovado'
        si.style.color = '#ffc8b2'
    }

}