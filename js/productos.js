// productos en array
const productos = [
    { categoria: 'equipamiento', titulo: 'Mancuernas ajustables', descripcion: 'Entrena fuerza en cualquier espacio. 4kg a 22.5kg.', precio: 85000, imagen: 'assets/mancueraregulable.png' },
    { categoria: 'equipamiento', titulo: 'Colchoneta de entrenamiento', descripcion: 'Alta densidad para mayor comodidad. 100x50cm', precio: 18000, imagen: 'assets/colchoneta.png' },
    { categoria: 'equipamiento', titulo: 'Set de bandas elásticas', descripcion: 'Resistencia adaptable para cada rutina.', precio: 12500, imagen: 'assets/bandas.png' },

    { categoria: 'ropa-deportiva', titulo: 'Camiseta técnica', descripcion: 'Ligera y fresca para tus entrenamientos.', precio: 15000, imagen: 'assets/remera depo.png' },
    { categoria: 'ropa-deportiva', titulo: 'Short deportivo', descripcion: 'Libertad de movimiento en cada serie.', precio: 14000, imagen: 'assets/pantalon depo.png' },
    { categoria: 'ropa-deportiva', titulo: 'Hoodie LiftStore', descripcion: 'Estilo y abrigo antes y después del gym.', precio: 32000, imagen: 'assets/hoodie custom.png' },

    { categoria: 'accesorios', titulo: 'Guantes deportivos', descripcion: 'Protección y agarre para levantar peso reduciendo fricciones.', precio: 9500, imagen: 'assets/guantes.png' },
    { categoria: 'accesorios', titulo: 'Botella deportiva', descripcion: '1250ml para mantenerse hidratado.', precio: 7000, imagen: 'assets/botella depo.png' },
    { categoria: 'accesorios', titulo: 'Bolso de entrenamiento', descripcion: 'Preparado para llevar todo el equipo de entrenamiento.', precio: 28000, imagen: 'assets/bolsoentrenamiento.png' },

    { categoria: 'nutricion', titulo: 'Proteína en polvo', descripcion: 'Un apoyo práctico para tu recuperación. 25G por Scoop. 2 lbs.', precio: 45000, imagen: 'assets/proteina en polvo.png' },
    { categoria: 'nutricion', titulo: 'Barritas proteicas', descripcion: 'Energía para seguir avanzando. Rapida absorción. 20G de proteína por barra.', precio: 2500, imagen: 'assets/barritas proteicas.png' },
    { categoria: 'nutricion', titulo: 'Shaker deportivo', descripcion: 'Shaker mezclador para batidos. Capacidad: 600ml.', precio: 6000, imagen: 'assets/shaker.png' }
]
console.log(productos)
// cards de producxto recibe un producto con titulo, descripcion, precio, imagen y devuelve el <article> con la info

function crearCard(producto) {
    const card = document.createElement('article')
    card.className = 'producto'
    card.innerHTML = `
        <img class="imagen-producto" src="${producto.imagen}" alt="${producto.titulo}">
        <h2>${producto.titulo}</h2>
        <p>${producto.descripcion}</p>
        <p class="precio">$${producto.precio.toLocaleString('es-AR')}</p>
        <div class="cantidad">
            <button type="button" class="btn-menos" aria-label="Disminuir cantidad">-</button>
            <span class="valor-cantidad">1</span>
            <button type="button" class="btn-mas" aria-label="Aumentar cantidad">+</button>
        </div>
    `

    const valor = card.querySelector('.valor-cantidad')
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

    return card
}

// Las páginas de categoría tienen el div id="lista-productos" de contenedor, lo detecta e imprime el array de productos con el formato de cards como div hijo
const listaProductos = document.getElementById('lista-productos')

if (listaProductos) {
    for (const producto of productos) {
        if (producto.categoria === listaProductos.dataset.categoria) {
            listaProductos.appendChild(crearCard(producto))
        }
    }
}
