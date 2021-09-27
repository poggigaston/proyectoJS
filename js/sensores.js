
const sensores = [
    {
        "item": 12,
        nombre: "IR-800",
        tipo: "SENSOR CABLEADO",
        stock: 100,
        precio: 3500,
        img: "/images/Sensores/IR-808.png",
        desc: "Detector infrarrojo de interior. Inmunidad a mascotas 18Kg."
    },
    {
        "item": 13,
        nombre: "DGW-500",
        tipo: "SENSOR INALAMBRICO",
        stock: 100,
        precio: 4500,
        img: "/images/Sensores/DGW-500.png",
        desc: "Digi Wireless. Detector infrarrojo pasivo digital inalámbrico."
    },
    {
        "item": 14,
        nombre: "DGW-500-PET",
        tipo: "SENSOR INALAMBRICO",
        stock: 100,
        precio: 5000,
        img: "/images/Sensores/DGB-2-PET.png",
        desc: "Digi Wireless. Detector infrarrojo pasivo digital inalámbrico. Inmunidad a mascotas 18kg."
    },
    {
        "item": 11,
        nombre: "IR-1000D",
        tipo: "SENSOR CABLEADO",
        stock: 100,
        precio: 3000,
        img: "/images/Sensores/IR-1000.png",
        desc: "Detector doble infrarrojo para exteriores, cableado."
    }
]
$.get("/js/datos.json", (response) => {

    productos = response
    console.log(productos)
})


// sensores.forEach( (producto) => {
//     const div = document.createElement('div')
//     div.classList.add('col')
//     // div.className = "productos"
    
//     div.innerHTML = `        
//         <div class="container-fluid p-5">
//             <div class="card" style="width: 18rem;">
//                 <img src="${producto.img}" class="img-fluid" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${producto.nombre}</h5>
//                     <p class="card-text">${producto.desc}<br><div class="h2">$${producto.precio}</div><br><div class="h6">(Stock: ${producto.stock})</div></p>
//                     <a  class="btn btn-success" id="boton" onclick="carga(${producto.item})">Agregar al carrito</a>
//                 </div>
//             </div>
//         </div>`;
    
//     contenedorsens.appendChild(div);    
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
$(`#footer`).fadeIn(3000)

// buscador de productos

const busqueda = document.getElementById("input-busqueda")
const resultado = document.getElementById("resultado")
const boton = document.getElementById("btn-buscar")

const buscar = () => {
    resultado.innerHTML = ``
    // contenerdorcomu.innerHTML = ``
    const texto = busqueda.value.toLowerCase()
    for (let producto of sensores){
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
                        <p class="card-text">${producto.desc}<br><div class="h2">$${producto.precio}</div><br><div class="h6">(Stock: ${producto.stock})</div></p>
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