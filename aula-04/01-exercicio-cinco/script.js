// 5 - Crie um sistema que receba três números por input e execute o cálculo da função quadrática, lembre-se:

// delta = b² - 4ac
// x' = -b + raiz de delta / 2a
// x" = -b - raiz de delta / 2a

// desestruturação de array
const [valorA, valorB, valorC] = document.getElementsByName('valor')
const root = document.getElementById('root')

function calcular() {
    const A = Number(valorA.value)
    const B = Number(valorB.value)
    const C = Number(valorC.value)
    const delta = (B ** 2) - 4 * A * C

    let textoDoResultado
  
    if(delta < 0) {
        textoDoResultado = "Não existe resultado"
    }
    else if (delta > 0) {
        const x1 = (-B + Math.sqrt(delta)) / 2 * A 
        const x2 = (-B - Math.sqrt(delta)) / 2 * A 
        textoDoResultado = `2 raizes, x' = ${x1}, x" = ${x2}`
    }
    else {
        const x = (-B + Math.sqrt(delta)) / 2 * A 
        textoDoResultado = `1 raiz, x' = x" = ${x}`
    }

    // busca o elemento existente
    const resultadoExistente = document.getElementById('resultado')

    // verifica se existe
    if(resultadoExistente) {
        root.removeChild(resultadoExistente)
        // remove se existir
        // resultadoExistente.remove()
    }

    // criar o elemento
    const label = document.createElement('label')
    // seta o id="resultado"
    label.setAttribute('id', 'resultado')
    // criar o texto
    const resultado = document.createTextNode(textoDoResultado)
    // coloca o resultado dentro da label
    label.appendChild(resultado)
    // coloca a label no root
    root.appendChild(label)

    // limpa os inputs
    valorA.value = ""
    valorB.value = ""
    valorC.value = ""
}

