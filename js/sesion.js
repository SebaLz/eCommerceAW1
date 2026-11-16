// fix de rutas para que puedan leer el resto de contenido de la web
const enPages = window.location.pathname.includes('/pages/')
const raiz = enPages ? '../' : './'

// usuario en sessionStorage
const usuario = JSON.parse(sessionStorage.getItem('usuario'))
const logueado = usuario !== null

// al enviar el form de login guarda el user y el correo que ingresó en el sessionStorage y manda a la pagina principal
const formLogin = document.getElementById('form-login')
formLogin?.addEventListener('submit', e => {
    e.preventDefault()
    const email = document.getElementById('email').value
    sessionStorage.setItem('usuario', JSON.stringify({ email: email }))
    window.location.href = raiz + 'index.html'
})

// cerrar sesion borra el usuario del sessionStorage y manda al login
function cerrarSesion() {
    sessionStorage.removeItem('usuario')
    window.location.href = raiz + 'pages/login.html'
}
