function att(){
    let na = +document.getElementById('na').value;
    let nb = +document.getElementById('nb').value;
    let nc = +document.getElementById('nc').value;

    let r = document.getElementById('result');

    let me = (na + nb + nc) / 3;

    r.innerText = 'A média do aluno é ' + me
}