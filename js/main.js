// Traigo productos desde json

$.get("/js/datos.json", (response) => {
    productos = response    
})


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
        Swal.fire({
            position: 'top-end',
            imageUrl:  "/"+ itemEnCarrito.img,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            title: "El producto "+ itemEnCarrito.nombre + " se agrego nuevamente al carrito",
            showConfirmButton: false,
            timer: 3500
        })
    } else {
        let filtrado = productos.find( (el) => el.item == number );        
        carrito.push ({item: filtrado.item, nombre: filtrado.nombre, precio: filtrado.precio, img: filtrado.img, cantidad: 1});
        Swal.fire({
            title: 'Genial!',
            text: "El producto "+ filtrado.nombre + " se agrego correctamente al carrito",
            imageUrl: "/"+ filtrado.img,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }          
    
    sumar()
    actualizar()    
} 

// Sacar elemento al carrito

function descarga (prod) {
    let productoAEliminar = carrito.find( el => el.item == prod )
    productoAEliminar.cantidad--

    if (productoAEliminar.cantidad == 0){
        let filtrado = carrito.find( (el) => el.item == prod )
        let indice = carrito.indexOf( filtrado )
        if (indice !== -1) {
            carrito.splice(indice,1)         
        }
    }    
    actualizar()    
} 

// Para sumar el total de los elementos del carrito

function sumar(){
    carrito.forEach ( (el) => {
        precioTotal += el.precio * el.cantidad
    })    
}
         

// Actualizar

function actualizar () {    
    let listado = document.getElementById(`listado`)
    listado.innerHTML = ` `
        
    carrito.forEach ((producto) => {
        // const div = document.createElement('div')        
        
        // div.innerHTML = ` <p id="fade" >${producto.nombre} Valor $${producto.precio} Cantidad ${producto.cantidad}    <button onclick=descarga(${producto.item}) class="boton-eliminar" ><i class="fas fa-trash-alt"></i></button></p>`;

        const tr = document.createElement('tr')
        tr.className = "table"
        tr.innerHTML = `
            <th scope="row">${producto.item}</th>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}   <button onclick=descarga(${producto.item}) class="boton-eliminar" ><i class="fas fa-trash-alt"></i></button></td>
            <td>$${producto.precio}</td>
            
        `
        
        listado.appendChild(tr);       
    })

    sumar()

    let precioTotal = document.getElementById('precioTotal')
    precioTotal.innerText = carrito.reduce( (acc, el) => acc + (el.precio * el.cantidad), 0 )

    let contadorCarrito =  document.getElementById(`contadorCarrito`)

    contadorCarrito.innerText = carrito.length
    const convertido = JSON.stringify(carrito)
    localStorage.setItem("carrito", convertido)    
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

// Buscador

$('#btn-buscar').on('click', () => {
    const busqueda = $('#input-busqueda').val()
    const busquedaMinuscula = busqueda.toLowerCase()
    
    switch (busquedaMinuscula) {
        case "comunicador":
            window.location.href="comunicadores.html"
        break;

        case "comunicadores":
            window.location.href="comunicadores.html"
        break;

        case "paneles":
            window.location.href="panelesyteclado.html"
        break;

        case "panel":
            window.location.href="panelesyteclado.html"
        break;

        case "teclados":
            window.location.href="panelesyteclado.html"
        break;

        case "teclado":
            window.location.href="panelesyteclado.html"
        break;

        case "paneles y teclados":
            window.location.href="panelesyteclado.html"
        break;

        case "sensores":
            window.location.href="sensores.html"
        break;

        case "sensor":
            window.location.href="sensores.html"
        break;

        case "sirenas":
            window.location.href="sirenas.html"
        break;

        case "sirena":
            window.location.href="sirenas.html"
        break;

    default:
        busqueda != "comunicador", "comunicadores", "paneles y teclados", "paneles", "panel", "teclados" ,"teclado" ,"sirenas" ,"sensores"
            alert("No ingresaste una categoria válida, chau")
        break;    

    }
})

// Enter para buscar

$("#input-busqueda").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#btn-buscar").click();
    }
});
