$.get("/js/datos.json", (response) => {
    productos = response    
})

const inicio = [
    {   id: "panytec",
        link: "html/panelesyteclado.html",
        titulo: "Paneles y Teclados",
        idImagen: "idpaneles",
        linkImagen: "images/Paneles-y-Teclados.png",
    },
    {   id: "comu",
        link: "html/comunicadores.html",
        titulo: "Comunicadores",
        idImagen: "idcomunicadores",
        linkImagen: "images/Comunicadores.png",
    },
    {   id: "senso",
        link: "html/sensores.html",
        titulo: "Sensores",
        idImagen: "idsensores",
        linkImagen: "images/Sensores-Cableados.png",
    },
    {   id: "sire",
        link: "html/sirenas.html",
        titulo: "Sirenas",
        idImagen: "idsirenas",
        linkImagen: "images/Sirenas.png",
    }
]  

inicio.forEach( (producto) => {
    $('#contenedorinicio').append(`
    <div id="${producto.id}" class="container-fluid p-3 text-center col-lg-6 col-sm-12 ">
    <a href="${producto.link}">
    <button class="btn-lg btn btn-outline-primary btn-primary-outline-success" type="button"  >${producto.titulo}</button>
    </a>
    <img id="${producto.idImagen}" src="${producto.linkImagen}" alt="">
    </div>`
)
})

// Efectos en las fotos con Jquery

// Foto paneles

$('#idpaneles').mouseenter (function () {
    $("#idpaneles").addClass("bn") 
})
$('#idpaneles').mouseleave (function () {
    $("#idpaneles").removeClass("bn") 
})

// Foto comunicadores

$('#idcomunicadores').mouseenter (function () {
    $("#idcomunicadores").addClass("bn") 
})
$('#idcomunicadores').mouseleave (function () {
    $("#idcomunicadores").removeClass("bn") 
})

// Foto sensores

$('#idsensores').mouseenter (function () {
    $("#idsensores").addClass("bn") 
})
$('#idsensores').mouseleave (function () {
    $("#idsensores").removeClass("bn") 
})

// Foto sirenas

$('#idsirenas').mouseenter (function () {
    $("#idsirenas").addClass("bn") 
})
$('#idsirenas').mouseleave (function () {
    $("#idsirenas").removeClass("bn") 
})

// Efectos Footer

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

// Animacion Parrafo 

$('#letras').animate({
        "opacity": "1",
        "font-size": "50px"
    }, 2000)

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
