// const numeros = [1, 2, 3, 4]
// // indice do array é seu tamanho - 1
// // indice do array incia-se em 0

// // console.log(3 in numeros)

// numeros[4] = 5

// // const nums = numeros
// // const nums = [numeros[0], numeros[1], numeros[2], numeros[3]]
// // nums[0] = numeros[0]
// // nums[1] = numeros[1]
// // nums[2] = numeros[2]
// // nums[3] = numeros[3]

// // SPREAD
// const nums = [...numeros]

// nums[4] = 6

// console.log(numeros)
// console.log(nums)



// ------------------



// const pessoas = ["Dannyel", 25, true]

// // const nome = pessoas[0]
// // const idade = pessoas[1]
// // const ehMaiorIdade = pessoas[2]

// // DESESTRUTURAÇÃO

// let [nome, idade, ehMaiorIdade] = pessoas

// nome = "Kassia"

// console.log(nome, idade, ehMaiorIdade)






// -----------------


// FILA - FIFO (First In, Fist Out)
// const fila = []

// const qtd = fila.push('banana') // enfileirar
// fila.push(1) // enfileirar
// fila.push("pitanga") // enfileirar
// const qtd2 = fila.push("caju", "abacate") // enfileirar

// fila.shift() // desinfileirars
// const saiu = fila.shift() // desinfileirars


// // console.log(qtd, qtd2)
// console.log(saiu)
// console.log(fila)


// PILHA - LIFO (Last In, Fist Out)
// const pilha = []

// const entrou = pilha.unshift("banana")
// pilha.unshift("maçã")
// pilha.unshift("pitanga")
// pilha.unshift("romã")

// const saiu = pilha.pop()

// console.log(saiu)

// pop, shift - removem
// push, unshift - inserem



// ---------------


// const numeros = [7, 1, 3, 5]
// const frutas = ["banana", "melancia", "caju", "abacate", "pitanga", "romã"]

// modificam o array original
// console.log([...numeros].sort()) // ordena o array original e o retorna
// console.log(frutas.splice(1, 4))

// não modificam o array original
// console.log(numeros.length) // quantidade de itens
// console.log(numeros.includes('maçã', 2)) // verifica se existe
// console.log(numeros.indexOf('maçã')) // retorna o indice do item
// console.log(numeros.concat([2, 4, 6], [8, 10])) // retorna um array novo com os valores concatenados
// console.log(frutas.slice(-1)) // a partir da posição x, retorne y elementos incluindo x e excluindo y


// console.log(frutas)


// FOREACH
// MAP
// FILTER
// FIND
// REDUCE





const itens = ["banana", "gato", "foice", "c#"]

// REST
const [fruta, animal, ferramenta, linguagem, ...sobrou] = itens

console.log(sobrou)

