let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let dis = document.getElementById('dis')

plus.addEventListener('click' , ()=> {
    let inc = Number(dis.value) + 1
    dis.value = inc
})

minus.addEventListener('click' , ()=> {
    if (dis.value > 0 ) {
        let min = Number(dis.value) - 1
        dis.value = min
    }
})