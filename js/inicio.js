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
    <div id="${producto.id}" class="container-fluid p-3 text-center">
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

$(`#footer`).css(
    "display", "none"
)
$(`#footer`).fadeIn(4000, () => {
    $(`#footer`).addClass("animate__animated animate__pulse ")
})

// Animacion Parrafo 

$('#letras').animate({
        "opacity": "1",
        "font-size": "50px"
    }, 2000)