// [] localStorage - persistir os dados no navegador

let KEY_NOME = 'nome'
const nome = localStorage.getItem(KEY_NOME)

if(nome){
    console.log('Existe: '+ nome)
}else {
    console.log('Não existe.')
}

const botao = document.querySelector(`button`)
botao.addEventListener(`click`, () => {
    localStorage.setItem(KEY_NOME, 'Mateus')

    // localStorage.removeItem('nome')
    console.log(nome)
})