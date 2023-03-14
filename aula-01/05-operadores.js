// OPERADORES UNÁRIOS

// --- operador de coerção

const True = true
const False = false
console.log(+True) // 1
console.log(+False) // 0
console.log(-True) // -1
console.log(-False) // -0

const dez = 10
console.log(+dez) // 10
console.log(-dez) // -10

const texto = "texto"
console.log(+texto) // NaN
console.log(-texto) // NaN

console.log(String(10)) // "10"
console.log(Number('10')) // 10
console.log(Boolean('')) // false


// --- operador de relacional

const pessoa = { nome: "Dannyel" }
console.log('nome' in pessoa) 
console.log('idade' in pessoa) 

const fruta = ['abacate', 'banana']
console.log(1 in fruta)
console.log(2 in fruta)



// OPERADORES BINÁRIOS

// --- operador de aritmético

let x = 10
const y = 20

// x = x + y
// x += y
// console.log(x)

// x = x - y
// x -= y
// console.log(x)

// x = x * y
// x *= y
// console.log(x)

// x = x / y
// x /= y
// console.log(x)

// x = x ** y
// x **= y
// console.log(x)

// x = x % y
// x %= y



// --- operador de comparação
const a = 20
const b = '20'

console.log(a == b) // true
console.log(a === b) // false

console.log(a != b) // false
console.log(a !== b) // true


// --- operador lógico aritmético
const c = 10
const d = 20

console.log(c > d) // false
console.log(c < d) // true
console.log(c >= d) // false
console.log(c <= d) // true


// --- operador lógico
const e = true
const f = false


console.log(e && f) // false
console.log(e || f) // true

console.log(!e) // false
console.log(!f) // true

console.log(!!"texto") // Truthy -> true
console.log(!!"") // Falsy -> false



// OPERADORES TERNÁRIO

// --- operador lógico de decisão
console.clear()

const ehMaiorIdade = false
const ehCandidato = false

const podeEntrar = (ehMaiorIdade || ehCandidato) ? "Pode entrar" : "Não pode entrar"

console.log(podeEntrar)


// ? :