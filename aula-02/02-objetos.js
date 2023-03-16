// const obj = new Object()

// JSON

const atributo = "sexo"

const pessoa = {
    nome: "Dannyel",
    idade: 25,
    [atributo]: 'M'
}

// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa.sexo)
// console.log(pessoa[atributo])
// console.log(pessoa["sexo"])


// const pessoas = [pessoa, pessoa]
// console.log(pessoas)


// pessoa.nome = "Eduardo"
// console.log(pessoa)



// const novaPessoa = {...pessoa}

// pessoa.nome = "Juliana"
// pessoa.altura = '1.50m'

// delete pessoa.sexo

// console.log(pessoa)
// console.log(novaPessoa)




// const { idade, ...sobrou } = pessoa
// console.log(sobrou)


const postagem = {
    titulo: "Minha nova postagem",
    autor: "Eu mesmo",
    texto: "Meu textinho da postagem",
    curtidas: 25,
    data: new Date()
}


const valores = Object.values(postagem)
// console.log(valores)

const chaves = Object.keys(postagem)
// console.log(chaves)

const entradas = Object.entries(postagem)
console.log(entradas)


for(let i = 0; i < entradas.length; i++) {
    console.log(entradas[i])
}