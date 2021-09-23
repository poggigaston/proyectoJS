const boton = document.getElementById("boton") ;
const precioTotal = document.getElementById("precioTotal")
const carrito = []

// const carritoEnLS = JSON.parse( localStorage.getItem('carrito'))

// if (carritoEnLS !== null) {
//     carrito = carritoEnLS
// }

function agregarAlCarrito(itemId) {


    let itemEnCarrito = carrito.find(el => el.item == itemId)


    if (itemEnCarrito) {
        itemEnCarrito.cantidad += 1
    } else {
        
        const {item, nombre, precio} = stockProductos.find( el => el.item == itemId )

        carrito.push({item: item, nombre: nombre, precio: precio, cantidad: 1})
    }
}