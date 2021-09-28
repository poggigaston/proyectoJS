const sirenas = [
    {
        "item": 15,
        nombre: "MP-300",
        tipo: "SIRENA EXTERIOR",
        stock: 100,
        "precio": 5000,
        img: "/images/Sirenas/MP-300.png",
        desc: "Sirena Exterior magnetodinámica con Flash."
    },
    {
        "item": 16,
        nombre: "MP-150",
        tipo: "SIRENA INTERIOR",
        stock: 100,
        "precio": 4000,
        img: "/images/Sirenas/MP-150.png",
        desc: "Sirena Exterior magnetodinámica."
    },
    {
        item: 17,
        nombre: "MP-200",
        tipo: "SIRENA EXTERIOR",
        stock: 100,
        precio: 4200,
        img: "/images/Sirenas/MP-200.png",
        desc: "Sirena Exterior doble Piezoeléctrica."        
    }
]


$.get("/js/datos.json", (response) => {

    productos = response
    console.log(productos)
})


// sirenas.forEach( (producto) => {
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
    
//     contenerdorsire.appendChild(div);    
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
    const texto = busqueda.value.toLowerCase()
    for (let producto of sirenas){
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