import { CardContact } from "../components/card-contact.component.js"
import { Header } from "../components/header.component.js"
import { getAllContactsService } from "../services/contact.service.js"

const root = document.querySelector('#root')
const contacts = document.createElement('div')
contacts.setAttribute('id', 'p-contacts')

const eventos = () => {
    getAllContactsService()
        .then(({ data }) => {
            const divContatos = contacts.querySelector('#contatos')

            // data é um array de contatos, então eu tenho contato como item
            data.forEach((contato) => {
                const cardContct = CardContact(contato)
                divContatos.appendChild(cardContct)
            })
        })
        .catch((e) => {
            console.log(e)
        })
}

export const Contacts = () => {
    window.location.href = "#contacts"

    const componenteHeader = Header()
    root.append(componenteHeader)

    contacts.innerHTML = `
        <h1>Contatos</h1>
        <div id="contatos"></div>
    `

    eventos()
    return contacts
}