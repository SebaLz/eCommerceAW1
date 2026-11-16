# LiftStore - Entrega Final (Aplicaciones Web 1)

Alumno: Sebastian Alcaraz 

## Links

- Proyecto publicado: [[Link Proyecto](https://sebalz.github.io/eCommerceAW1/)]
- Repositorio: [[Repo]](https://github.com/SebaLz/eCommerceAW1)

## 1. Roadmap de desarrollo

### Etapa 1 - Base del proyecto (30/08)
- Definí el rubro del gimnasio, y pensé en las categorias y productos iniciales
- Desarrollada estructura HTML de Inicio, Login, Registro y las 4 categorías (Equipamiento, Ropa deportiva, Accesorios y Nutrición).

### Etapa 2 - Estilos (22/09)
- CSS con la navbar, cards de confianza con grid y flex, y el logo como favicon.
- se dejó una paleta única (negro, rojo y gris) para todo el sitio.

### Etapa 3 - Introducción de JavaScript (20/10)
- Los productos pasan a un array y las cards se generan con JS.
- Login simulado con una variable en localStorage.
- Navbar dinámica, que muestra distintos links según haya sesión o no.
- Títulos de página dinámicos según el array.

### Etapa 4 - Entrega final (15/11)
- Reestructuración: Carpetas separadas por tipo, y el JS dividido por tarea.
- Datos: El array de productos pasa a data/productos.json y se carga con fetch.
- Sesión: El usuario ahora se guarda en sessionStorage (antes era una variable en localStorage).
- Carrito: Los productos se guardan en localStorage, con página de carrito para ver el total, eliminar productos y vaciarlo.
- Home: Sección de productos destacados filtrados desde el JSON.
- Detalles: Contador del carrito en la navbar, botones de las cards alineados y encabezados mejorados.

## 2. Tecnologías utilizadas

- HTML5 y CSS3: Como lenguaje de programación de la estructura y manejo de estilos respectivamente.
- JavaScript: Para navbar dinámica segun login, carga de productos, carrito y manejo de localStorage y sessionStorage
- JSON + API: Los productos están en un archivo JSON y se cargan con fetch. 
- sessionStorage: Guarda el usuario logueado.
- localStorage: Guarda el carrito como { id, cantidad }, para que no se pierda al recargar o cerrar el navegador.

## 3. Mejoras significativas

- Refactorización y organización de código: Estructura de carpetas, JS dividido y datos separados en JSON.
- Nueva funcionalidad: Carrito completo - Agregar con cantidad, sumar si ya existe, eliminar, vaciar, calculo del total.
- UX: contador de productos del carrito en la navbar, aviso "¡Agregado!" en el botón y mensaje de carrito vacío.
