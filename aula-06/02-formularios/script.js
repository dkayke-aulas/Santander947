const formLogin = document.querySelector('[name="login"]')

formLogin.addEventListener('submit', (evento) => {
    evento.preventDefault()

    // const inputSalvar = document.querySelector('#salvar')
    // console.log(inputSalvar.value)

    // const form = document.forms.login
    // console.log(form.usuario.value)
    // console.log(form.senha.value)

    const fd = new FormData(formLogin)

    const salvarSenha = fd.get('salvar-senha')
    fd.append('salvarsenha', salvarSenha)

    fd.delete('salvar-senha')
    
    const entradas = Object.fromEntries(fd)
    
    console.log(entradas)

    for(let entradas of fd) {
        // console.log(`o valor do campo ${entradas[0]} é igual a ${entradas[1]}`)
    }

})


// const submeter = () => {
//     console.log('SUBMETEU MEU FORM!')
// }





Crie um formulário que possua os seguintes dados:

1. Nome completo
4. E-mail
2. Telefone
3. Tipo de telefone
 - casa
 - trabalho
 - celular
5. Endereço
 - logradouro
 - cidade
 - estado
 - cep
 - país

O formulário deve ser preenchido com os valores padrões abaixo, via JavaScript:

```js
const dados = {
    nome: "Ada Lovelace",
    email: "ada@email.com,
    telefones: [
        { 
            numero: "(11) 99123-4567",
            tipo: "casa"
        }
    ],
    endereco: {
        logradouro: "Rua das programadoras",
        cidade: "Vale do silício",
        estado: "Codefornia",
        cep: "10100-100",
        pais: "Programaland"
    }
}
```

Ao ser digitado um novo nome, o valor padrão (```dados```) deve ser alterado e retornado no console.
    