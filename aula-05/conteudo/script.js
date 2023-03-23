/**
 * [x] setTimeout // espera em ms para fazer algo
 * [x] setInterval // executa uma ação em ms repetidamente.
 * [x] Promise 
 * [x] fetch // requisições http
 *  */

// const botao = document.querySelector(`button`)
// botao.addEventListener(`click`, () => {
//     const input = document.querySelector(`input`)

//     if(input.value){
//         console.log(`Enviar conteudo do input`)
//     }else {
//         const mensagem = document.createElement(`p`)
//         mensagem.innerText = `Ops! Preencha o campo.`

//         document.getElementById(`root`).appendChild(mensagem)

//         setTimeout(() => {
//             mensagem.remove() 
//             console.log('esperou 3 segundos...')
//         }, 3000);
//     }
// })

// let timer = setInterval(() => {
//    console.log('roda a cada segundo') 
// }, 1000);

// setTimeout(() => {
//     clearInterval(timer)
// }, 5000);

// const botao = document.querySelector(`button`)
// botao.addEventListener(`click`, () => {
//     // setInterval(() => {
//     //     console.clear()
//     //     console.log('roda a cada segundo') 
//     //     console.log(new Date().toLocaleTimeString())
//     // }, 1000);

//     // clearInterval(timer)
// })

// const ehImpar = (numero) => {
//     return new Promise((resolve, reject) => {
//         if(numero % 2 === 0){
//             reject('é par, não espero isso: '+ numero)
//         }else{
//             setTimeout(() => {
//                 resolve(`O número ${numero} é ímpar.`)
//             }, 3000);
//         }
//     })
// }

// const botao = document.querySelector(`button`)
// botao.addEventListener(`click`, async () => {
//     const input = document.querySelector(`input`)

//     // ehImpar(Number(input.value))
//     // .then((banana) => {
//     //     console.log(banana)
//     // })
//     // .catch((frase) => {
//     //     console.log(frase)
//     // })
//     // .finally((data) => {
//     //     console.log('resolvida', data)
//     // })

//     try {
//         const resposta = await ehImpar(Number(input.value))
//         console.log(resposta)
//     }catch(error){
//         console.log(error)
//     }
// })

const botao = document.querySelector(`button`)
botao.addEventListener(`click`, async () => {
    const input = document.querySelector(`input`)
 

    fetch('https://api.github.com/users/'+input.value)
    .then((resposta) => {
        resposta.json()
        .then((dados) => {
            console.log(dados)
        })
    })
    // .then((dados) => console.log(dados))


    // try {
    //     const resposta = await fetch('https://api.github.com/users/'+input.value)
    //     const dados = await resposta.json()

    //     const aplicativo = document.getElementById('root')

    //     const nome = document.createElement('p')
    //     const imagem = document.createElement('img')

    //     imagem.src = dados.avatar_url
    //     nome.innerText = dados.name

    //     aplicativo.appendChild(imagem)
    //     aplicativo.appendChild(nome)

    //     console.log(dados)

    // }catch(error) {
    //     console.log(error)
    // }
})