import { NotFound } from './scripts/pages/404.page.js'
import { ContactDetails } from './scripts/pages/contact-details.js'
import { Contacts } from './scripts/pages/contacts.page.js'
import { Login } from './scripts/pages/login.page.js'
import { Signup } from './scripts/pages/signup.page.js'

const ROUTER = {
    "#login": { component: Login, private: false },
    "#signup": { component: Signup, private: false },
    "#contacts": { component: Contacts, private: true },
    "#contact-details": { component: ContactDetails, private: true },
    "#404": { component: NotFound, private: undefined }
}

function isTokenExpired(token) {
    if(!token) return true
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp
    return (Math.floor((new Date).getTime() / 1000)) >= expiry
  }

function redirectPage() {
    const root = document.querySelector('#root')
    const route = ROUTER[window.location.hash] || ROUTER['#404']
    const token = sessionStorage.getItem('@token')
    
    if(route.private !== undefined) {
        const ehPrivadoNaoLogado = route.private === true && !token
        const ehPrivadoTokenExpirado = route.private === true && isTokenExpired(token)
    
        if(ehPrivadoNaoLogado || ehPrivadoTokenExpirado) {
            sessionStorage.removeItem('@token')
            sessionStorage.removeItem('@user')
            window.location.href = '/#login'
            return
        }
    
        const ehPublicoLogado = route.private === false && token
    
        if(ehPublicoLogado) {
            window.location.href = '/#contacts'
            return
        }
    }

    root.innerHTML = null
    root.append(route.component())
}


window.addEventListener('load', () => {

    if(!window.location.hash) {
        window.location.href = '/#login'
    }

    redirectPage()
    window.addEventListener('hashchange', redirectPage)
})



