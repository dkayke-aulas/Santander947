// const divRoot = document.getElementById("root")

// const botao = document.createElement("button")
// const textoBotao = document.createTextNode("Clique")
// botao.appendChild(textoBotao)

// const h1 = document.createElement("h1")
// const textoH1 = document.createTextNode("Este é um nó de texto")
// h1.appendChild(textoH1)

// divRoot.appendChild(h1)
// // paragrafo aqui
// divRoot.appendChild(botao)

// const p = document.createElement("p")
// const textoP = document.createTextNode("Esse é o parágrafo")
// p.appendChild(textoP)


// divRoot.insertBefore(p, botao)

// divRoot.removeChild(h1)

const input1 = document.querySelector("#textinho1")
const input2 = document.querySelector("#textinho2")

function recuperaTexto() {
    const valor1 = Number(input1.value)
    const valor2 = Number(input2.value)

    if(Number.isNaN(valor1) || Number.isNaN(valor2)) {
        console.log("não é number")
    }
    else {
        console.log(valor1 + valor2)
    }
    // console.log(input.value)
}