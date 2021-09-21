
// Creo constructor para luego sumar productos

class Producto {
    constructor (item, nombre, tipo, stock, precio, img, desc){
        this.item = parseInt(item) 
        this.nombre = nombre.toUpperCase()
        this.tipo = tipo.toUpperCase()
        this.stock = parseInt(stock)
        this.precio = parseInt (precio)
        this.img = img
        this.desc = desc       
    }
    // aumentarStock(cantidad) {
    //     this.stock += cantidad
    // }

    // restarStock(cantidad) {
    //     if ( (this.stock - cantidad) >= 0) {
    //         this.stock -= cantidad
    //     } else {
    //         alert('No hay suficiente stock')
    //     }
    // }
        
    // setPrecio(precio) {
    //     this.precio = precio
    // }

}



// Productos por separado



// const panelesyteclados = [
//     {   item: 1,
//         nombre: "PC-732G-LED",
//         tipo: "CENTRAL",
//         stock: 200,
//         precio: 12000,
//         img: "/images/Paneles y teclados/PC-732G-LED-3G-COM.jpg",
//         desc: "Combo de alarma PC-732G con teclado LED y comunicador 3G-COM."
//     },
//     {
//         "item": 2,
//         nombre: "PC-900G-LED",
//         tipo: "CENTRAL",
//         stock: 112,
//         precio: 18000,
//         img: "/images/Paneles y teclados/pc-900g-led.jpg",
//         desc: "Panel de alarma Garnet con WiFi embebido, 32 Zonas, 4 Particiones, incluye teclado LED."
//     },
//     {
//         "item": 3,
//         nombre: "A2K4-NGRF/PC800",
//         tipo: "CENTRAL",
//         stock: 15,
//         precio: 15000,
//         img: "/images/Paneles y teclados/A2K4-NG-LCD.jpg",
//         desc: "Central Cableada / Inalámbrica, 6 zonas + 1 en teclado, expandible a 8, 2 particiones."
//     },
//     {
//         "item": 4,
//         nombre: "A2K8-NGRF/PC860",
//         tipo: "CENTRAL",
//         stock: 65,
//         precio: 17000,
//         img: "/images/Paneles y teclados/A2K8-pc-860.jpg",
//         desc: "Central Cableada con teclado, de 8 zonas expandibles a 32 y 4 particiones."
//     },
//     {
//         "item": 5,
//         nombre: "G-LED732",
//         tipo: "TECLADO",
//         stock: 65,
//         precio: 7000,
//         img: "/images/Paneles y teclados/G-LED732.jpg",
//         desc: "Teclado Led 8 zonas compatible con paneles de alarma Garnet."
//     },
//     {
//         "item": 6,
//         nombre: "G-LCD732",
//         tipo: "TECLADO",
//         stock: 65,
//         precio: 7500,
//         img: "/images/Paneles y teclados/G-LCD732.jpg",
//         desc: "Teclado con display LCD compatible con paneles de alarma Garnet."
//     },
//     {
//         "item": 7,
//         nombre: "G-LCD732RF",
//         tipo: "TECLADO",
//         stock: 63,
//         precio: 8000,
//         img: "/images/Paneles y teclados/G-LED732.jpg",
//         desc: "Teclado con display LCD y receptor RF, compatible con paneles de alarma Garnet."
//     }
// ]

// const comunicadores = [
//     {
//         "item": 8,
//         nombre: "3G-COM-G",
//         tipo: "COMUNICADOR",
//         stock: 65,
//         precio: 4000,
//         img: "/images/comunicadores/3G-COM-G.jpg",
//         desc: "Comunicador para paneles línea Garnet WiFi/3G."
//     },
//     {
//         "item": 9,
//         nombre: "IP-500G",
//         tipo: "COMUNICADOR",
//         stock: 45,
//         precio: 6000,
//         img: "/images/comunicadores/IP-500G.jpg",
//         desc: "Comunicador IP WiFi para paneles línea Garnet."
//     },
//     {
//         "item": 10,
//         nombre: "COM-900",
//         tipo: "COMUNICADOR",
//         stock: 55,
//         precio: 5500,
//         img: "/images/comunicadores/com-900.jpg",
//         desc: "Modulo Comunicador 3G para PC-900."
//     }
// ]


// const sensores = [
//     {
//         "item": 12,
//         nombre: "IR-800",
//         tipo: "SENSOR CABLEADO",
//         stock: 100,
//         precio: 3500,
//         img: "/images/Sensores/IR-808.png",
//         desc: "Detector infrarrojo de interior. Inmunidad a mascotas 18Kg."
//     },
//     {
//         "item": 13,
//         nombre: "DGW-500",
//         tipo: "SENSOR INALAMBRICO",
//         stock: 100,
//         precio: 4500,
//         img: "/images/Sensores/DGW-500.png",
//         desc: "Digi Wireless. Detector infrarrojo pasivo digital inalámbrico."
//     },
//     {
//         "item": 14,
//         nombre: "DGW-500-PET",
//         tipo: "SENSOR INALAMBRICO",
//         stock: 100,
//         precio: 5000,
//         img: "/images/Sensores/DGB-2-PET.png",
//         desc: "Digi Wireless. Detector infrarrojo pasivo digital inalámbrico. Inmunidad a mascotas 18kg."
//     },
//     {
//         "item": 11,
//         nombre: "IR-1000D",
//         tipo: "SENSOR CABLEADO",
//         stock: 100,
//         precio: 3000,
//         img: "/images/Sensores/IR-1000.png",
//         desc: "Detector doble infrarrojo para exteriores, cableado."
//     }
// ]

// const sirenas = [
//     {
//         "item": 15,
//         nombre: "MP-300",
//         tipo: "SIRENA EXTERIOR",
//         stock: 100,
//         "precio": 5000,
//         img: "/images/Sirenas/MP-300.png",
//         desc: "Sirena Exterior magnetodinámica con Flash."
//     },
//     {
//         "item": 16,
//         nombre: "MP-150",
//         tipo: "SIRENA INTERIOR",
//         stock: 100,
//         "precio": 4000,
//         img: "/images/Sirenas/MP-150.png",
//         desc: "Sirena Exterior magnetodinámica."
//     },
//     {
//         item: 17,
//         nombre: "MP-200",
//         tipo: "SIRENA EXTERIOR",
//         stock: 100,
//         precio: 4200,
//         img: "/images/Sirenas/MP-200.png",
//         desc: "Sirena Exterior doble Piezoeléctrica."        
//     }
// ]

// Todos los productos

let productos = []

$.get("./js/datos.json", (response) => {

    productos = response
    console.log(productos)
})

// let productos = [
//     {   item: 1,
//         nombre: "PC-732G-LED",
//         tipo: "CENTRAL",
//         stock: 200,
//         precio: 12000,
//         img: "/images/Paneles y teclados/PC-732G-LED-3G-COM.jpg",
//         desc: "Combo de alarma PC-732G con teclado LED y comunicador 3G-COM."
//     },
//     {
//         "item": 2,
//         nombre: "PC-900G-LED",
//         tipo: "CENTRAL",
//         stock: 112,
//         precio: 18000,
//         img: "/images/Paneles y teclados/pc-900g-led.jpg",
//         desc: "Panel de alarma Garnet con WiFi embebido, 32 Zonas, 4 Particiones, incluye teclado LED."
//     },
//     {
//         "item": 3,
//         nombre: "A2K4-NGRF/PC800",
//         tipo: "CENTRAL",
//         stock: 15,
//         precio: 15000,
//         img: "/images/Paneles y teclados/A2K4-NG-LCD.jpg",
//         desc: "Central Cableada / Inalámbrica, 6 zonas + 1 en teclado, expandible a 8, 2 particiones."
//     },
//     {
//         "item": 4,
//         nombre: "A2K8-NGRF/PC860",
//         tipo: "CENTRAL",
//         stock: 65,
//         precio: 17000,
//         img: "/images/Paneles y teclados/A2K8-pc-860.jpg",
//         desc: "Central Cableada con teclado, de 8 zonas expandibles a 32 y 4 particiones."
//     },
//     {
//         "item": 5,
//         nombre: "G-LED732",
//         tipo: "TECLADO",
//         stock: 65,
//         precio: 7000,
//         img: "/images/Paneles y teclados/G-LED732.jpg",
//         desc: "Teclado Led 8 zonas compatible con paneles de alarma Garnet."
//     },
//     {
//         "item": 6,
//         nombre: "G-LCD732",
//         tipo: "TECLADO",
//         stock: 65,
//         precio: 7500,
//         img: "/images/Paneles y teclados/G-LCD732.jpg",
//         desc: "Teclado con display LCD compatible con paneles de alarma Garnet."
//     },
//     {
//         "item": 7,
//         nombre: "G-LCD732RF",
//         tipo: "TECLADO",
//         stock: 65,
//         precio: 8000,
//         img: "/images/Paneles y teclados/G-LED732.jpg",
//         desc: "Teclado con display LCD y receptor RF, compatible con paneles de alarma Garnet."
//     },
//     {
//         "item": 8,
//         nombre: "3G-COM-G",
//         tipo: "COMUNICADOR",
//         stock: 65,
//         precio: 4000,
//         img: "/images/comunicadores/3G-COM-G.jpg",
//         desc: "Comunicador para paneles línea Garnet WiFi/3G."
//     },
//     {
//         "item": 9,
//         nombre: "IP-500G",
//         tipo: "COMUNICADOR",
//         stock: 45,
//         precio: 6000,
//         img: "/images/comunicadores/IP-500G.jpg",
//         desc: "Comunicador IP WiFi para paneles línea Garnet."
//     },
//     {
//         "item": 10,
//         nombre: "COM-900",
//         tipo: "COMUNICADOR",
//         stock: 55,
//         precio: 5500,
//         img: "/images/comunicadores/com-900.jpg",
//         desc: "Modulo Comunicador 3G para PC-900."
//     },
//     {
//         "item": 12,
//         nombre: "IR-800",
//         tipo: "SENSOR CABLEADO",
//         stock: 100,
//         precio: 3500,
//         img: "/images/Sensores/IR-808.png",
//         desc: "Detector infrarrojo de interior. Inmunidad a mascotas 18Kg."
//     },
//     {
//         "item": 13,
//         nombre: "DGW-500",
//         tipo: "SENSOR INALAMBRICO",
//         stock: 100,
//         precio: 4500,
//         img: "/images/Sensores/DGW-500.png",
//         desc: "Digi Wireless. Detector infrarrojo pasivo digital inalámbrico."
//     },
//     {
//         "item": 14,
//         nombre: "DGW-500-PET",
//         tipo: "SENSOR INALAMBRICO",
//         stock: 100,
//         precio: 5000,
//         img: "/images/Sensores/DGB-2-PET.png",
//         desc: "Digi Wireless. Detector infrarrojo pasivo digital inalámbrico. Inmunidad a mascotas 18kg."
//     },
//     {
//         "item": 11,
//         nombre: "IR-1000D",
//         tipo: "SENSOR CABLEADO",
//         stock: 100,
//         precio: 3000,
//         img: "/images/Sensores/IR-1000.png",
//         desc: "Detector doble infrarrojo para exteriores, cableado."
//     },
//     {
//         "item": 15,
//         nombre: "MP-300",
//         tipo: "SIRENA EXTERIOR",
//         stock: 100,
//         "precio": 5000,
//         img: "/images/Sirenas/MP-300.png",
//         desc: "Sirena Exterior magnetodinámica con Flash."
//     },
//     {
//         "item": 16,
//         nombre: "MP-150",
//         tipo: "SIRENA INTERIOR",
//         stock: 100,
//         "precio": 4000,
//         img: "/images/Sirenas/MP-150.png",
//         desc: "Sirena Exterior magnetodinámica."
//     },
//     {
//         item: 17,
//         nombre: "MP-200",
//         tipo: "SIRENA EXTERIOR",
//         stock: 100,
//         precio: 4200,
//         img: "/images/Sirenas/MP-200.png",
//         desc: "Sirena Exterior doble Piezoeléctrica."        
//     }

// ]

// const productosEnLS = JSON.parse( localStorage.getItem('productos'))

// productos = productosEnLS
// Sumo elementos a la lista de productos

// productos.push (new Producto (1, "PC-732G-LED" ,"Central", 200 , 12000, "images/Paneles y teclados/PC-732G-LED-3G-COM.jpg", "Combo de alarma PC-732G con teclado LED y comunicador 3G-COM."))





