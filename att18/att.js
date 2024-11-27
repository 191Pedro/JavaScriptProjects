function att() {
    let francisco = 1.5;
    let sara = 1.1;
    let anos = 0;
    
    while (francisco >= sara) {
        francisco += 0.02;
        sara += 0.03;
        anos++;
    }
    console.log(`Serão necessários ${anos} anos para que Sara seja maior que Francisco.`);
    
    let r = document.getElementById('result')
    r.innerText = 'Sara passará Francisco em ' + anos;
}