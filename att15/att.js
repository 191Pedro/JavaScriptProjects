function att(){
    let dia = +document.getElementById('dia').value;
    let mes = +document.getElementById('mes').value;
    let ano = +document.getElementById('ano').value;
    let diaa = +document.getElementById('diaa').value;
    let mesa = +document.getElementById('mesa').value;
    let anoa = +document.getElementById('anoa').value;
    let errado

    let r = document.getElementById('result')
    let r2 = document.getElementById('result2')
    let r3 = document.getElementById('result3')
    let rv = document.getElementById('resultvirgula')
    let rv2 = document.getElementById('resultvirgula2')
    let rv3 = document.getElementById('resultvirgula3')

    if (dia > 31 || diaa > 31 || mes > 12 || mesa > 12){
        errado = true
    }

    if (dia == 0 || diaa == 0 || mes == 0 || mesa == 0 || ano == 0 || anoa == 0 || errado == true){
        r.innerText = 'Valores inválidos'
    }
    else if (dia <= diaa){
        diat = diaa - dia
    }
    else{
        diat = diaa + 30 - dia
        mesa = mesa - 1
    }

    if (dia == 0 || diaa == 0 || mes == 0 || mesa == 0 || ano == 0 || anoa == 0 || errado == true){
        r.innerText = 'Valores inválidos'
    }
    else if (mes <= mesa){
        mest = mesa - mes
    }
    else{
        mest = mesa + 12 - mes
        anoa = anoa - 1
    }
    
    if (dia == 0 || diaa == 0 || mes == 0 || mesa == 0 || ano == 0 || anoa == 0 || errado == true){
        r.innerText = 'Valores inválidos'
    }
    else if (anoa < ano){
        r.innerText = 'Valores inválidos'
    }
    else if (anoa <= ano && mesa < mes || diaa < dia){
        r.innerText = 'Valores inválidos'
    }
    else{
        anot = anoa - ano
    }

    r.innerText = anot
    if (anot < 2){
        rv.innerText = ' ano, '
    }
    else{
        rv.innerText = ' anos, '
    }

    r2.innerText = mest
    if (mest < 2){
        rv2.innerText = ' mês e '
    }

    else{
        rv2.innerText = ' meses e '
    }

    r3.innerText = diat
    if (diat < 2){
        rv3.innerText = ' dia.'
    }
    else{
        rv3.innerText = ' dias.'
    }
}