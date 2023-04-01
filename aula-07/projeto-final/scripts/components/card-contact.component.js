// import { deleteContactService } from "../services/contact.service.js"

const cardContact = document.createElement('div')
cardContact.classList.add('c-card-contact')

const eventos = (contato) => {
    const [anchorDelete] = cardContact.querySelectorAll('a')

    anchorDelete.addEventListener('click', (e) => {
        e.preventDefault()
        window.confirm(`Deseja deletar o contato ${contato.nome}?`)
    })
}

export const CardContact = (contato) => {
    cardContact.innerHTML = `
        <p>${contato.nome}</p>

        <a href="/#contacts">Deletar</a>
        <a href="/?id-contact=${contato.id}#contact-details">Visualizar</a>
    `

    eventos(contato)
    return cardContact.cloneNode(true)
}