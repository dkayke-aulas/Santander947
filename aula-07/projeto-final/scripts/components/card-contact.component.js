const cardContact = document.createElement('div')
cardContact.classList.add('c-card-contact')

export const CardContact = (contato) => {

    cardContact.innerHTML = `
        <p>${contato.nome}</p>
        <span>${contato.id}</span>
        <a href="/?id-contact=${contato.id}#contact-details">Visualizar</a>
    `

    return cardContact.cloneNode(true)
}