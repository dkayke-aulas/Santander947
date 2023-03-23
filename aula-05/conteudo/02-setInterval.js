/**
 * [x] setInterval // executa uma ação em milissegundos repetidamente.
 *  */

let timer = setInterval(() => {
    console.clear()
    console.log('roda a cada segundo') 
    console.log(new Date().toLocaleTimeString())
}, 1000);

const botao = document.querySelector(`button`)
botao.addEventListener(`click`, () => {
    clearInterval(timer)
})

let timer1 = setInterval(() => {
    console.log('interval 1')
}, 1000);


let timer2 = setInterval(() => {
    console.log('interval 2')
}, 1000);

clearInterval(timer1)
clearInterval(timer2)