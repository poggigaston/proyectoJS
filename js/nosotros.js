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

// Modo Dark

$('#btn-dark').on('click', function (){    
    $("#header").addClass("headerDark");
    $("#footer").addClass("footerDark");
    $(".form-control").addClass("formuDark");
})