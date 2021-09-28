const boton = document.getElementById("boton") ;
const precioTotal = document.getElementById("precioTotal")
const carrito = []

// const carritoEnLS = JSON.parse( localStorage.getItem('carrito'))

// if (carritoEnLS !== null) {
//     carrito = carritoEnLS
// }

// === Api MP===

const finalizarCompra = async () => {

    const productoMp = carrito.map ( (prod) => {
        return {
            title: prod.nombre,
            description: "Dummy description",
            picture_url: "",
            category_id: prod.item,
            quantity: prod.cantidad,
            currency_id: "ARS",
            unit_price: prod.precio 
        }
    })
    
    fetch(url, {
        method:`POST`,
        headers: {
            Authorization: `Bearer TEST-1798136906201393-092723-253789fa0237b6302f09005006f4296a-86270132`,

        },            
        body: {
            items: [{
                
            }]
        }
    })
}