/**
 * setTimeout (espera em ms para fazer algo)
 * Em resumo, o setTimeout é uma função que recebe 2 parâmetros, 
 * o primeiro sendo o callback do que será executado após um certo 
 * momento, o segundo parâmetro é o tempo em milissegundos ao qual 
 * refere-se o tempo de aguardo
 *  */

const botao = document.querySelector(`button`)
botao.addEventListener(`click`, () => {
    const input = document.querySelector(`input`)

    if(input.value){
        console.log(`Enviar conteudo do input`)
    }else {
        const mensagem = document.createElement(`p`)
        mensagem.innerText = `Ops! Preencha o campo.`

        document.getElementById(`root`).appendChild(mensagem)

        setTimeout(() => {
            mensagem.remove() 
            console.log('esperou 3 segundos...')
        }, 3000);
    }
})