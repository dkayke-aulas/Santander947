const root = document.querySelector("#root")
const button = document.querySelector("#btn")
const paragraph = document.querySelector("#resultado")

function gerarResposta() {
    return new Promise((resolve, reject) => {
        const random = Math.random()

        setTimeout(() => {
            if (random >= 0.5) {
                resolve({ mensagem: "SUCESSO", random })
            }
            else {
                reject({ mensagem: "ERRO", random })
            }
        }, 2000)
    })
}


let timeout;

function validarSorte1() {
    clearTimeout(timeout)

    gerarResposta()
        .then((objetoDeSucesso) => {
            paragraph.innerText = `Você está com sorte :) foi gerado o número: ${objetoDeSucesso.random}`
        })
        .catch((objetoDeErro) => {
            paragraph.innerText = `Você está com azar :( foi gerado o número: ${objetoDeErro.random}`
        })
        .finally(() => {
            timeout = setTimeout(() => {
                console.log(timeout)
                paragraph.innerText = null
            }, 3000)
        })
}

async function validarSorte() {
    
    try {
        const resposta = await gerarResposta()
        paragraph.innerText = `Você está com sorte :) foi gerado o número: ${resposta.random}`
    }
    catch(erro) {
        paragraph.innerText = `Você está com azar :( foi gerado o número: ${erro.random}`
    }

}

button.addEventListener('click', validarSorte)

