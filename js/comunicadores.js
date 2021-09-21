const comunicadores = [
    {
        "item": 8,
        nombre: "3G-COM-G",
        tipo: "COMUNICADOR",
        stock: 65,
        precio: 4000,
        img: "/images/comunicadores/3G-COM-G.jpg",
        desc: "Comunicador para paneles línea Garnet WiFi/3G."
    },
    {
        "item": 9,
        nombre: "IP-500G",
        tipo: "COMUNICADOR",
        stock: 45,
        precio: 6000,
        img: "/images/comunicadores/IP-500G.jpg",
        desc: "Comunicador IP WiFi para paneles línea Garnet."
    },
    {
        "item": 10,
        nombre: "COM-900",
        tipo: "COMUNICADOR",
        stock: 55,
        precio: 5500,
        img: "/images/comunicadores/com-900.jpg",
        desc: "Modulo Comunicador 3G para PC-900."
    }
]

$.get("/js/datos.json", (response) => {

    productos = response
    console.log(productos)
})

comunicadores.forEach( (producto) => {
    const div = document.createElement('div')
    div.classList.add('col')
    // div.className = "productos"
    
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
    
    contenerdorcomu.appendChild(div);    
})
    
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