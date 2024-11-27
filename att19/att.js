function att(){
    let t1 = 1
    let t2 = 2
    let t3 = 3
    let t4 = 4
    let t5 = 5
    let t6 = 6
    let t7 = 7
    let t8 = 8
    let t9 = 9
    let t10 = 10
    let i = 0

    let text = document.getElementById('text');
    text.style.fontSize = '14px'
    let r = document.getElementById('result');
    let r2 = document.getElementById('result2');
    let r3 = document.getElementById('result3');
    let r4 = document.getElementById('result4');
    let r5 = document.getElementById('result5');
    let r6 = document.getElementById('result6');
    let r7 = document.getElementById('result7');
    let r8 = document.getElementById('result8');
    let r9 = document.getElementById('result9');
    let r10 = document.getElementById('result10');
    r.innerText = ''
    while (i < 10){
        console.log(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10)
        i++;
        if (i == 10){
            r.insertAdjacentText("beforebegin", 1 + 'x' + i + '=' + t1)
            r2.insertAdjacentText("beforebegin", 2 + 'x' + i + '=' + t2)
            r3.insertAdjacentText("beforebegin", 3 + 'x' + i + '=' + t3)
            r4.insertAdjacentText("beforebegin", 4 + 'x' + i + '=' + t4)
            r5.insertAdjacentText("beforebegin", 5 + 'x' + i + '=' + t5)
            r6.insertAdjacentText("beforebegin", 6 + 'x' + i + '=' + t6)
            r7.insertAdjacentText("beforebegin", 7 + 'x' + i + '=' + t7)
            r8.insertAdjacentText("beforebegin", 8 + 'x' + i + '=' + t8)
            r9.insertAdjacentText("beforebegin", 9 + 'x' + i + '=' + t9)
            r10.insertAdjacentText("beforebegin", 10 + 'x' + i + '=' + t10)
            r = 0
        }
        r.insertAdjacentText("beforebegin", 1 + 'x' + i + '=' + t1 + ' / ')
        r2.insertAdjacentText("beforebegin", 2 + 'x' + i + '=' + t2 + ' / ')
        r3.insertAdjacentText("beforebegin", 3 + 'x' + i + '=' + t3 + ' / ')
        r4.insertAdjacentText("beforebegin", 4 + 'x' + i + '=' + t4 + ' / ')
        r5.insertAdjacentText("beforebegin", 5 + 'x' + i + '=' + t5 + ' / ')
        r6.insertAdjacentText("beforebegin", 6 + 'x' + i + '=' + t6 + ' / ')
        r7.insertAdjacentText("beforebegin", 7 + 'x' + i + '=' + t7 + ' / ')
        r8.insertAdjacentText("beforebegin", 8 + 'x' + i + '=' + t8 + ' / ')
        r9.insertAdjacentText("beforebegin", 9 + 'x' + i + '=' + t9 + ' / ')
        r10.insertAdjacentText("beforebegin", 10 + 'x' + i + '=' + t10 + ' / ')
        t1 = t1 + 1
        t2 = t2 + 2
        t3 = t3 + 3
        t4 = t4 + 4
        t5 = t5 + 5
        t6 = t6 + 6
        t7 = t7 + 7
        t8 = t8 + 8
        t9 = t9 + 9
        t10 = t10 + 10
    }
}

const btt = document.getElementById('button')
btt.addEventListener('click', ()=>{
    btt.classList.toggle('hidden')
})