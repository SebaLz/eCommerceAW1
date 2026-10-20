const logueado = localStorage.getItem('logueado')

// al enviar el form de login cambia el localsotrage a logeado y manda a la pagina principal
const formLogin = document.getElementById('form-login')
formLogin?.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.setItem('logueado', 'true')
  window.location.href = './index.html';
})

// cerrar sesion borra la sesión del localstorage y manda al login
function cerrarSesion() {
    localStorage.removeItem('logueado')
    window.location.href = './login.html'
}

// elemntos de la navbar
const navElements = [
    { title: 'Inicio', name: 'Inicio', link: 'index.html' },
    { title: 'Equipamiento', name: 'Equipamiento', link: 'equipamiento.html' },
    { title: 'Ropa deportiva', name: 'Ropa deportiva', link: 'ropa-deportiva.html' },
    { title: 'Accesorios', name: 'Accesorios', link: 'accesorios.html' },
    { title: 'Nutrición', name: 'Nutrición deportiva', link: 'nutricion.html' }
]

// navbar los links del array solo se muestran si hay sesión
const navBar = `
<nav class="navbar">
    <a class="marca" href="./index.html" aria-label="LiftStore"><img src="assets/logo.png" alt="Logo de LiftStore"></a>
    <div class="enlaces-navegacion">
        ${logueado ? navElements.map(e => {
            return `<a href="${e.link}">${e.title}</a>`
        }).join('') + `<a class="cerrar-sesion" href="#" onclick="cerrarSesion()">Cerrar sesión</a>`
        : `<a href="./login.html">Iniciar sesión</a><a href="./registro.html">Registrarse</a>`}
    </div>
</nav>
`
// si la pagina esta en alguno de los links, les aplica el título de la pagina y h1 dinamicos
const paginaActual = navElements.find(e => window.location.href.includes(e.link))


if (paginaActual) {
    document.title = `LiftStore | ${paginaActual.title}`
    document.querySelector('header').innerHTML = navBar

    const titulopag = document.getElementById('titulo-pag')

  if (titulopag) {
    titulopag.textContent = paginaActual.name
  }

    // el inicio es público, las demas paginas piden sesión
    if (!logueado && paginaActual.link !== 'index.html') {
        window.location.href = './login.html'
    }
}
