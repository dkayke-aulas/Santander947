const botaoCliqueEmMim = document.getElementById('btn')
const botaoRemoveAcao = document.getElementById('btn-remove-acao')

function cliqueDoBotao() {
    console.log('Clicou em mim!')
}

function cliqueDoBotaoAcaoDois() {
    console.log('Clicou em mim DOIS!')
}

botaoCliqueEmMim.addEventListener('mouseover', cliqueDoBotaoAcaoDois)

botaoRemoveAcao.addEventListener('click', () => {
    console.log("PARAAAAAA!")
    botaoCliqueEmMim.addEventListener('click', ()=>console.log('dois'))
    // botaoCliqueEmMim.removeEventListener('click', cliqueDoBotao)
})

