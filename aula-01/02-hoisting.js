//  primeiro exemplo

var a
// console.log(a) // undefined
a = 10
// console.log(a) // 10

function mostrarNum() {
    // var a = undefined // é içado

    console.log(a) // undefined
    var a = 20
    console.log(a) // 20
}

// mostrarNum() // invocação da função











// segundo exemplo

function recuperaNumero() {

    function retornaNum() {
        return 10
    }

    // function retornaNum() {
    //     return 20
    // }
    
    return retornaNum()
    
    function retornaNum() {
        return 20
    }
}

// var num = recuperaNumero()
// console.log(num)








// terceiro exemplo

function recuperaString() {
    var retornaStr = undefined
    var retornaStr = undefined

    retornaStr = function() {
        return "Banana"
    }

    return retornaStr()

    retornaStr = function() {
        return "Melancia"
    }

}

var str = recuperaString()
console.log(str)

