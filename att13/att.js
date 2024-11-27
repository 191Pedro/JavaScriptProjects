function att(){
    let nm = document.getElementById('name').value;
    let ag = +document.getElementById('age').value;

    let r = document.getElementById('result');
    let r2 = document.getElementById('result2');
    let rnm = document.getElementById('resultname');
    let rag = document.getElementById('resultage');

    rnm.innerText = nm
    rag.innerText = ag
    r.innerText = ', você tem '
    if (ag >= 18){
        r2.innerText = ' anos, você é maior de idade.'
    }
    else{
        r2.innerText = ' anos, você é menor de idade.'
    }
}