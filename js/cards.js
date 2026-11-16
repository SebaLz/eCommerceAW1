// cards de producto reciben un producto con titulo, descripcion, precio, imagen y devuelve el <article> con la info
function crearCard(producto) {
    const card = document.createElement('article')
    card.className = 'producto'
    card.innerHTML = `
        <img class="imagen-producto" src="${raiz}${producto.imagen}" alt="${producto.titulo}">
        <h2>${producto.titulo}</h2>
        <p>${producto.descripcion}</p>
        <p class="precio">$${producto.precio.toLocaleString('es-AR')}</p>
        <div class="cantidad">
            <button type="button" class="btn-menos" aria-label="Disminuir cantidad">-</button>
            <span class="valor-cantidad">1</span>
            <button type="button" class="btn-mas" aria-label="Aumentar cantidad">+</button>
        </div>
        <button type="button" class="btn-agregar">Añadir al carrito</button>
    `

    const valor = card.querySelector('.valor-cantidad')
    const btnAgregar = card.querySelector('.btn-agregar')
    let cantidad = 1

    card.querySelector('.btn-mas').addEventListener('click', () => {
        cantidad++
        valor.textContent = cantidad
    })
    card.querySelector('.btn-menos').addEventListener('click', () => {
        if (cantidad > 1) {
            cantidad--
            valor.textContent = cantidad
        }
    })

    // guarda el producto en el carrito (localStorage) y avisa en el botón
    btnAgregar.addEventListener('click', () => {
        agregarAlCarrito(producto.id, cantidad)
        btnAgregar.textContent = '¡Agregado!'
        setTimeout(() => { btnAgregar.textContent = 'Añadir al carrito' }, 1000)
        cantidad = 1
        valor.textContent = cantidad
    })

    return card
}
