// 3 - Crie um sistema que receba um número por input e gera a tabuada dele, a cada número entrado a tabuada anterior deve ser limpa.

// desestruturação de array
const [valor] = document.getElementsByName('valor')
const resultado = document.getElementById('resultado')

function gerar() {
    const tabuada = Number(valor.value)

    resultado.innerText = ''

    for(let x = 0; x <= 10; x++) {
        resultado.innerHTML += `<p> ${x} x ${tabuada} = ${x * tabuada} </p>`
    }
}


// resultado.innerText += `<p> ${x} x ${tabuada} = ${x * tabuada} </p>`

// const linha = document.createElement('p')
// const valor = document.createTextNode(`${x} x ${tabuada} = ${x * tabuada}`)
// linha.appendChild(valor)
// resultado.appendChild(linha)
