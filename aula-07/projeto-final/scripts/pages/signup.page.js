const signup = document.createElement('form')
signup.setAttribute('id', 'p-signup')

const eventos = () => {
    signup.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(signup)
        const dadosDoFormulario = Object.fromEntries(fd)

        console.log(dadosDoFormulario)
        // signupService(dadosDoFormulario)
        //     .then(({data}) => {
        //         console.log(data.nome)
        //     })
        //     .catch((erro) => {
        //         console.log(erro)
        //     })
    })
}

export const Signup = () => {
    signup.innerHTML = `
        <label for="nome">Nome completo</label>
        <input type="nome" name="nome">

        <label for="email">E-mail</label>
        <input type="email" name="email">

        <label for="senha">Senha</label>
        <input type="password" name="senha">

        <button type="submit">Cadastrar</button>
    `

    eventos()
    return signup
}


{/* <fieldset>
<label for="salvar">Salvar</label>
<input type="radio" name="salvar-senha" id="salvar" value="salvar">

<label for="nao-salvar">Não salvar</label>
<input type="radio" name="salvar-senha" id="nao-salvar" value="não salvar">
</fieldset> */}