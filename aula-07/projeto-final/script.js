import { NotFound } from './scripts/pages/404.page.js'
import { Login } from './scripts/pages/login.page.js'
import { Signup } from './scripts/pages/signup.page.js'

const ROUTER = {
    "#login": { component: Login, private: false, nome: 'login' },
    "#signup": { component: Signup, private: false, nome: 'signup' },
    "#404": { component: NotFound, private: false, nome: '404' }
}

function redirectPage() {
    const root = document.querySelector('#root')
    const route = ROUTER[window.location.hash] || ROUTER['#404']
    
    root.innerHTML = null
    root.append(route.component())
}


window.addEventListener('load', () => {

    if(!window.location.hash) {
        window.location.href = "#login"
    }

    redirectPage()
    window.addEventListener('hashchange', redirectPage)
})



