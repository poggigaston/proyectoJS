const panelesyteclados = [
    {   item: 1,
        nombre: "PC-732G-LED",
        tipo: "CENTRAL",
        stock: 200,
        precio: 12000,
        img: "/images/Paneles y teclados/PC-732G-LED-3G-COM.jpg",
        desc: "Combo de alarma PC-732G con teclado LED y comunicador 3G-COM."
    },
    {
        "item": 2,
        nombre: "PC-900G-LED",
        tipo: "CENTRAL",
        stock: 112,
        precio: 18000,
        img: "/images/Paneles y teclados/pc-900g-led.jpg",
        desc: "Panel de alarma Garnet con WiFi embebido, 32 Zonas, 4 Particiones, incluye teclado LED."
    },
    {
        "item": 3,
        nombre: "A2K4-NGRF/PC800",
        tipo: "CENTRAL",
        stock: 15,
        precio: 15000,
        img: "/images/Paneles y teclados/A2K4-NG-LCD.jpg",
        desc: "Central Cableada / Inalámbrica, 6 zonas + 1 en teclado, expandible a 8, 2 particiones."
    },
    {
        "item": 4,
        nombre: "A2K8-NGRF/PC860",
        tipo: "CENTRAL",
        stock: 65,
        precio: 17000,
        img: "/images/Paneles y teclados/A2K8-pc-860.jpg",
        desc: "Central Cableada con teclado, de 8 zonas expandibles a 32 y 4 particiones."
    },
    {
        "item": 5,
        nombre: "G-LED732",
        tipo: "TECLADO",
        stock: 65,
        precio: 7000,
        img: "/images/Paneles y teclados/G-LED732.jpg",
        desc: "Teclado Led 8 zonas compatible con paneles de alarma Garnet."
    },
    {
        "item": 6,
        nombre: "G-LCD732",
        tipo: "TECLADO",
        stock: 65,
        precio: 7500,
        img: "/images/Paneles y teclados/G-LCD732.jpg",
        desc: "Teclado con display LCD compatible con paneles de alarma Garnet."
    },
    {
        "item": 7,
        nombre: "G-LCD732RF",
        tipo: "TECLADO",
        stock: 63,
        precio: 8000,
        img: "/images/Paneles y teclados/G-LED732.jpg",
        desc: "Teclado con display LCD y receptor RF, compatible con paneles de alarma Garnet."
    }
]

$.get("/js/datos.json", (response) => {

    productos = response
    console.log(productos)
})

// Creacion de items 

// panelesyteclados.forEach( (producto) => {
//     const div = document.createElement('div')
//     div.classList.add('col')
        
//     div.innerHTML = `        
//         <div class="container-fluid p-5 ">
//             <div class="card" style="width: 18rem;">
//                 <img src="${producto.img}" class="img-fluid" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${producto.nombre}</h5>
//                     <p class="card-text">${producto.desc}<br><div id="precio" class="h2">$${producto.precio}</div><br><div class="h6">(Stock: ${producto.stock})</div></p>
//                     <a  class="btn btn-success" id="boton" onclick="carga(${producto.item})">Agregar al carrito</a>
//                 </div>
//             </div>
//         </div>`;
    
//     paneles.appendChild(div);

    
// })

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

$(`#footer`).css(
    "display", "none"
)
$(`#footer`).fadeIn(4000)
    
// buscador de productos

const busqueda = document.getElementById("input-busqueda")
const resultado = document.getElementById("resultado")
const boton = document.getElementById("btn-buscar")

const buscar = () => {
    resultado.innerHTML = ``
    const texto = busqueda.value.toLowerCase()
    for (let producto of panelesyteclados){
        let nombre = producto.nombre.toLowerCase()
        if (nombre.indexOf(texto) !== -1){
            const div = document.createElement('div')
            div.classList.add('col')
        
            div.innerHTML = `        
                <div class="container-fluid p-5">
                    <div class="card" style="width: 18rem;">
                    <img src="${producto.img}" class="img-fluid" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.desc}<br><br><div class="h2">$${producto.precio}</div></p>                
                        <a  class="btn btn-success" id="boton" onclick="carga(${producto.item})">Agregar al carrito</a>
                        </div>
                    </div>
                </div>`;
    
            resultado.appendChild(div);
        }
    }
    if(resultado.innerHTML ===``){
        resultado.innerHTML += ` <div><h3>Producto no encontrado</h3></div>`       
    }
}

$('#btn-buscar').on('click', buscar)

$("#input-busqueda").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#btn-buscar").click();
    }
});

buscar()

// Stock Oculto 

{/* <div class="h6">(Stock: ${producto.stock})</div> */}