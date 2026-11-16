// elemntos de la navbar
const navElements = [
    { title: 'Inicio', name: 'Inicio', link: 'index.html' },
    { title: 'Equipamiento', name: 'Equipamiento', link: 'pages/equipamiento.html' },
    { title: 'Ropa deportiva', name: 'Ropa deportiva', link: 'pages/ropa-deportiva.html' },
    { title: 'Accesorios', name: 'Accesorios', link: 'pages/accesorios.html' },
    { title: 'Nutrición', name: 'Nutrición deportiva', link: 'pages/nutricion.html' },
    { title: 'Carrito', name: 'Tu carrito', link: 'pages/carrito.html' }
]

// los links del array solo se muestran si hay sesión
const navBar = `
<nav class="navbar">
    <a class="marca" href="${raiz}index.html" aria-label="LiftStore"><img src="${raiz}assets/logo.png" alt="Logo de LiftStore"></a>
    <div class="enlaces-navegacion">
        ${logueado ? navElements.map(e => {
            if (e.title === 'Carrito') {
                return `<a href="${raiz}${e.link}">${e.title} <span class="contador-carrito">${cantidadTotal()}</span></a>`
            }
            return `<a href="${raiz}${e.link}">${e.title}</a>`
        }).join('') + `<a class="cerrar-sesion" href="#" onclick="cerrarSesion()">Cerrar sesión</a>`
        : `<a href="${raiz}pages/login.html">Iniciar sesión</a><a href="${raiz}pages/registro.html">Registrarse</a>`}
    </div>
</nav>
`
// la navbar se imprime en todas las páginas tomando el <header>
document.querySelector('header').innerHTML = navBar

// si la pagina esta en alguno de los links, les aplica el título de la pagina y h1 dinamicos
// si la url termina en "/" (sin nombre de archivo) es el index
// se compara sin la extensión ".html" porque algunos servidores (Live Server) la ocultan en la url
const archivo = (window.location.pathname.split('/').pop() || 'index').replace('.html', '')
const paginaActual = navElements.find(e => e.link.split('/').pop().replace('.html', '') === archivo)

if (paginaActual) {
    document.title = `LiftStore | ${paginaActual.title}`

    const titulopag = document.getElementById('titulo-pag')
    if (titulopag) {
        titulopag.textContent = paginaActual.name
    }

    // el inicio es público, las demas paginas piden sesión
    if (!logueado && paginaActual.link !== 'index.html') {
        window.location.href = raiz + 'pages/login.html'
    }
}
