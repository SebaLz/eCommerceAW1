// Las páginas de categoría tienen el div id="lista-productos" de contenedor, lo detecta e imprime los productos de su categoría con el formato de cards
const listaProductos = document.getElementById('lista-productos')

// La home (solo con sesión) tiene el div id="destacados" donde se imprimen los 3 productos destacados
const destacados = document.getElementById('destacados')

function mostrarProductos() {
    cargarProductos().then(productos => {
        if (listaProductos) {
            for (const producto of productos) {
                if (producto.categoria === listaProductos.dataset.categoria) {
                    listaProductos.appendChild(crearCard(producto))
                }
            }
        }

        if (destacados && logueado) {
            document.getElementById('seccion-destacados').hidden = false
            // los productos con "destacado": true en el JSON
            for (const producto of productos) {
                if (producto.destacado) {
                    destacados.appendChild(crearCard(producto))
                }
            }
        }
    })
}

mostrarProductos()
