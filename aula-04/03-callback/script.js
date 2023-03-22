function buscaNome() {
    return "Dannyel"
}


function sistemaFinanceiro() {
    // function inicializarSistemaFinanceiro(nome, _, sexo) {
    //     console.log(`[FINANCEIRO] BEM-VINDX, ${nome} ${sexo}`)
    // }

    // const inicializarSistemaFinanceiro = function (nome, _, sexo) {
    //     console.log(`[FINANCEIRO] BEM-VINDX, ${nome} ${sexo}`)
    // }
    
    const inicializarSistemaFinanceiro = (nome, _, sexo) => {
        console.log(`[FINANCEIRO] BEM-VINDX, ${nome} ${sexo}`)
    }

    init(inicializarSistemaFinanceiro)
}
















function sistemaAdministrativos() {
    // function inicializarSistemaAdministrativo(nome, idade, sexo) {
    //     console.log(`[ADMINISTRATIVO] EAI? BLZ?, ${nome} ${idade} ${sexo}`)
    // }

    init((nome, idade, sexo) => {
        console.log(`[ADMINISTRATIVO] EAI? BLZ?, ${nome} ${idade} ${sexo}`)
    })
}












function init(inicializacaoDoSistemaIndividual) {
    setTimeout(() => {
        console.log('carrega as informações...')
        console.log('inicializa os módulos...')

        const nome = buscaNome()
        console.log('criar a sessão do usuário...', nome)

        inicializacaoDoSistemaIndividual(nome, 26, 'M')
        console.log('-')
    }, 2000)
}


sistemaAdministrativos()

sistemaFinanceiro()