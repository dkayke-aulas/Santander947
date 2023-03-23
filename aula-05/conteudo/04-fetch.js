// [x] fetch // requisições http

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