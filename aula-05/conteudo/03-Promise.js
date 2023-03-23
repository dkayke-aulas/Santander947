/**
 * [x] Promise // TODO: colocar definição
 *  */

const ehImpar = (numero) => {
    return new Promise((resolve, reject) => {
        if(numero % 2 === 0){
            reject('é par, não espero isso: '+ numero)
        }else{
            setTimeout(() => {
                resolve(`O número ${numero} é ímpar.`)
            }, 3000);
        }
    })
}

const botao = document.querySelector(`button`)
botao.addEventListener(`click`, async () => {
    const input = document.querySelector(`input`)

    // ehImpar(Number(input.value))
    // .then((banana) => {
    //     console.log(banana)
    // })
    // .catch((frase) => {
    //     console.log(frase)
    // })
    // .finally((data) => {
    //     console.log('resolvida', data)
    // })

    try {
        const resposta = await ehImpar(Number(input.value))
        console.log(resposta)
    }catch(error){
        console.log(error)
    }
})