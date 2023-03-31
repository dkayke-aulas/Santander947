const urlBase = "http://localhost:5000/v1/"

const headers = new Headers()
headers.append('Content-Type', 'application/json')

export const getAllContactsService = async () => {
    const url = urlBase + 'contact'
    headers.append('Authorization', `${sessionStorage.getItem('@token')}`)

    const resposta = await fetch(url, {
        headers,
        method: 'GET'
    })

    return await resposta.json()
}

export const getContactService = async (id) => {
    const url = urlBase + `contact/${id}`
    headers.append('Authorization', sessionStorage.getItem('@token'))

    const resposta = await fetch(url, {
        headers,
        method: 'GET'
    })

    return await resposta.json()
}