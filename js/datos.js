// trae el array de productos desde data/productos.json
function cargarProductos() {
    return fetch(raiz + 'data/productos.json').then(respuesta => respuesta.json())
}

// el carrito es un array de { id, cantidad } guardado en localStorage para guardar y despes cargar en el carrito propiamente
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || []
}

function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarContador()
}

// si el producto ya estaba en el carrito suma la cantidad, si no lo agrega
function agregarAlCarrito(id, cantidad) {
    const carrito = obtenerCarrito()
    const existente = carrito.find(item => item.id === id)
    if (existente) {
        existente.cantidad += cantidad
    } else {
        carrito.push({ id: id, cantidad: cantidad })
    }
    guardarCarrito(carrito)
}

function eliminarDelCarrito(id) {
    guardarCarrito(obtenerCarrito().filter(item => item.id !== id))
}

function cantidadTotal() {
    return obtenerCarrito().reduce((total, item) => total + item.cantidad, 0)
}

// actualiza el contador de stock en la navbar
function actualizarContador() {
    const contador = document.querySelector('.contador-carrito')
    if (contador) contador.textContent = cantidadTotal()
}
