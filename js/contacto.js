// Focus en el primer input 

$(document).ready(()=>{
    $('#miForm').trigger('focus')
})

// Enter para pasar el segundo input 

document.getElementById('miForm').addEventListener('keydown', entrada);

function entrada(event) {
 
  if (event.keyCode == 13) {
    document.getElementById('miForm2').focus();
  }
}

// Validar Email 

document.getElementById('miForm').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('emailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
        $('#miForm').css("color", "green")
    //   valido.innerText = "válido";
    } else {
        $('#miForm').css("color", "red")
    //   valido.innerText = "incorrecto";
    }
});


// Animacion de Iconos del Footer 

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