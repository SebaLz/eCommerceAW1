// en el carrito retomamos los ids y cantidades del localStorage y matchea la carga con el productos.json
const listaCarrito = document.getElementById('lista-carrito')

function mostrarCarrito() {
    if (!listaCarrito) return

    const carrito = obtenerCarrito()

    // si no hay nada en el array de carrito, muestra un mensaje
    if (carrito.length === 0) {
        listaCarrito.innerHTML = `<p class="carrito-vacio">Tu carrito está vacío.</p>`
        return
    }

    cargarProductos().then(productos => {
        listaCarrito.innerHTML = ''
        let total = 0

        // por cada item del carrito busca el producto con el mismo id y crea la fila
        for (const item of carrito) {
            const producto = productos.find(p => p.id === item.id)
            const subtotal = producto.precio * item.cantidad
            total = total + subtotal

            const fila = document.createElement('article')
            fila.className = 'item-carrito'
            fila.innerHTML = `
                <img class="imagen-carrito" src="${raiz}${producto.imagen}" alt="${producto.titulo}">
                <div>
                    <h2>${producto.titulo}</h2>
                    <p>$${producto.precio.toLocaleString('es-AR')} x ${item.cantidad}</p>
                </div>
                <p class="subtotal">$${subtotal.toLocaleString('es-AR')}</p>
                <button type="button" class="btn-eliminar">Eliminar</button>
            `

            // al eliminar borra el producto del carrito y vuelve a mostrar la lista
            fila.querySelector('.btn-eliminar').addEventListener('click', () => {
                eliminarDelCarrito(producto.id)
                mostrarCarrito()
            })

            listaCarrito.appendChild(fila)
        }

        // total y botón para vaciar
        const resumen = document.createElement('div')
        resumen.className = 'resumen-carrito'
        resumen.innerHTML = `
            <p class="total">Total: $${total.toLocaleString('es-AR')}</p>
            <button type="button" class="btn-vaciar">Vaciar carrito</button>
        `
        resumen.querySelector('.btn-vaciar').addEventListener('click', () => {
            guardarCarrito([])
            mostrarCarrito()
        })
        listaCarrito.appendChild(resumen)
    })
}

mostrarCarrito()
