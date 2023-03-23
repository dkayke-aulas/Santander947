// [] sessionStorage - persistir os dados no navegador (tempo de vida, referente a sessão)

let KEY_NOME = 'nome'
const nome = localStorage.getItem(KEY_NOME)

if(nome){
    console.log('Existe: '+ nome)
}else {
    console.log('Não existe.')
}

const botao = document.querySelector(`button`)
botao.addEventListener(`click`, () => {
    localStorage.setItem(KEY_NOME, 'Mateus')

    // localStorage.removeItem('nome')
    console.log(nome)
})


/* 
  Ideia de prática:
  Um formulário que ao enviar 
  exibe as informações preenchidas em
  um card:

  - Buscar informações do github. https://api.github.com/users/octocat
  - Adicionar um campo para validação.
  - Adicionar contador e mostrar no card o tempo
  ou a hora que foi enviado.

  Plano de execução:

  Montar o formulário com um campo e um botão
  Mostrar validação do campo, apresentar uma mensagem
  e depois excluir ela com o setTimeOut.

  Adicionar label com o tempo de preenchimento
  fazer busca na API com fetch e apresentar os dados
  na tela

  // dica de apis publicas
  https://jsonplaceholder.typicode.com/todos
  https://viacep.com.br/ws/13319970/json/
  https://publica.cnpj.ws/cnpj/31362194000107
  https://receitaws.com.br/v1/cnpj/31362194000107
*/