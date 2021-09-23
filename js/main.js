// Carrito

document.getElementById("boton") ;

let carrito = []

// Para recuperar carrito

const carritoEnLS = JSON.parse( localStorage.getItem('carrito'))

if (carritoEnLS !== null) {
    carrito = carritoEnLS
}

// Cargar elemento al carrito


function carga(number) {
       
    let itemEnCarrito = carrito.find( (el) => el.item == number );

    if (itemEnCarrito) {
        itemEnCarrito.cantidad +=1
        alert("El producto "+ itemEnCarrito.nombre + " se agrego correctamante al carrito")
    } else {
        let filtrado = productos.find( (el) => el.item == number );
        carrito.push ({item: filtrado.item, nombre: filtrado.nombre, precio: filtrado.precio, cantidad: 1});
        alert("El producto "+ filtrado.nombre + " se agrego correctamante al carrito")
    }
           
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<h6>Total: $<span id=${"precioTotal"}>0</span> </h6>`

    sumar()
    actualizar()
    const convertido = JSON.stringify(carrito)
    localStorage.setItem("carrito", convertido)
    const convertido2 = JSON.stringify(productos)
    localStorage.setItem("productos", convertido2)
} 



// Sacar elemento al carrito

 function descarga (prod) {
    let filtrado = carrito.find( (el) => el.item == prod )
    let indice = carrito.indexOf( filtrado )
    if (indice !== -1) {
        carrito.splice(indice,1)        
        
        const convertido = JSON.stringify(carrito)
        localStorage.setItem("carrito", convertido)
        const convertido2 = JSON.stringify(productos)
        localStorage.setItem("productos", convertido2)
          
    }
    actualizar()  
    
} 

// Para sumar el total de los elementos del carrito
function sumar(){
    carrito.forEach ( (el) => {
        precioTotal += el.precio * el.cantidad
    })   
    
}
         

// actualizar()

function actualizar () {    
    let listado = document.getElementById(`listado`)
    listado.innerHTML = ` `
        
    carrito.forEach ((producto) => {
        const div = document.createElement('div')        
        
        div.innerHTML = ` <p id="fade" >${producto.nombre} Valor $${producto.precio} Cantidad ${producto.cantidad}    <button onclick=descarga(${producto.item}) class="boton-eliminar" ><i class="fas fa-trash-alt"></i></button></p>`;
        
        listado.appendChild(div);       
    })

    sumar()

    let precioTotal = document.getElementById('precioTotal')
    precioTotal.innerText = carrito.reduce( (acc, el) => acc + (el.precio * el.cantidad), 0 )

    let contadorCarrito =  document.getElementById(`contadorCarrito`)
    contadorCarrito.innerText = carrito.length 

}

// Vaciar carrito

function vaciar (){
    let vaciado = document.getElementById("vaciar") ;
    for (let i = carrito.length; i > 0; i--) {
        carrito.pop()
        let precioTotal = document.getElementById(`precioTotal`)
        precioTotal.innerHTML = ``
        precioTotal.innerText = 0
        actualizar()
        const convertido = JSON.stringify(carrito)
        localStorage.setItem("carrito", convertido)
    }
                
    actualizar()
}
actualizar()

// Logos redes sociales

$('#idwhat').mouseenter (function () {
    $("#idwhat").addClass("animate__animated animate__rubberBand") 
})
$('#idwhat').mouseleave (function () {
    $("#idwhat").removeClass("animate__animated animate__rubberBand") 
})

$('#idface').mouseenter (function () {
    $("#idface").addClass("animate__animated animate__rubberBand") 
})
$('#idface').mouseleave (function () {
    $("#idface").removeClass("animate__animated animate__rubberBand") 
})

$('#idinsta').mouseenter (function () {
    $("#idinsta").addClass("animate__animated animate__rubberBand") 
})
$('#idinsta').mouseleave (function () {
    $("#idinsta").removeClass("animate__animated animate__rubberBand") 
})










