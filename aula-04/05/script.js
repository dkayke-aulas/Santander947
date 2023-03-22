const root = document.getElementById('root')


for(let x = 0; x < 3; x++) {
    const btn = document.createElement('button')
    btn.innerText = `Botão ${x}`

    btn.addEventListener('click', () => {
        console.log('Você clicou no botão', x)
        btn.remove()
    })

    root.appendChild(btn)
}