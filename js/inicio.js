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

function myFunction(x) {
    if (x.matches) { // Si encuentra media query 
        $('#letras').animate({
            "opacity": "1",
            "font-size": "20px"
    }, 2000)
    } else {
        $('#letras').animate({
            "opacity": "1",
            "font-size": "50px"
    }, 2000)
    }
}
  
let x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

// Buscador

$('#btn-buscar').on('click', () => {    

    const busqueda = $('#input-busqueda').val()
    const busquedaMinuscula = busqueda.toLowerCase()
    
    switch (busquedaMinuscula) {
        case "comunicador":
            window.location.href="html/comunicadores.html"
        break;

        case "comunicadores":
            window.location.href="html/comunicadores.html"
        break;

        case "paneles":
            window.location.href="html/panelesyteclado.html"
        break;

        case "panel":
            window.location.href="html/panelesyteclado.html"
        break;

        case "teclados":
            window.location.href="html/panelesyteclado.html"
        break;

        case "teclado":
            window.location.href="html/panelesyteclado.html"
        break;

        case "paneles y teclados":
            window.location.href="html/panelesyteclado.html"
        break;

        case "sensores":
            window.location.href="html/sensores.html"
        break;

        case "sensor":
            window.location.href="html/sensores.html"
        break;

        case "sirenas":
            window.location.href="html/sirenas.html"
        break;

        case "sirena":
            window.location.href="html/sirenas.html"
        break;

    default:
        busqueda != "comunicador", "comunicadores", "paneles y teclados", "paneles", "panel", "teclados" ,"teclado" ,"sirenas" ,"sensores"
        Swal.fire({
            position: 'center',  
            icon: 'error',            
            hideClass: {
              popup: 'animate__animated animate__fadeOutDown'
            },
            title: 'Ooops...',
            text: 'La categoria ingresada no existe!',
            showConfirmButton: false,
            timer: 2500
        })
        break;    

    }
})
// Enter para buscar

$("#input-busqueda").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#btn-buscar").click();
    }
});

// Boton modo Oscuro

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}


