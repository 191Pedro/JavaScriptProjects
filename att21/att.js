function att(){
    let min = 1;
    let max = 100;
    let na = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(na);

    let r = document.getElementById('result')
    r.innerText = na
    r.style.fontSize = '20px'
}