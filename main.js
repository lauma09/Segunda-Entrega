alert("Bienvenido a Capisci")


const productos= [
    {
        id: "Hamburguesa-01",
        nombre: "hamburguesa",
        imagen: "insertar imagen",
        categoria: {
            nombre: "Hamburguesa",
            id: "hamburguesa"
        },
        precio: 4500
    },
    {
        id: "Pizza-01",
        nombre: "pizza",
        imagen: "insertar imagen",
        categoria: {
            nombre: "Pizzas",
            id: "pizzas"
        },
        precio: 7700
    },
    {
        id: "Bebida-01",
        nombre: "agua",
        imagen: "insertar imagen",
        categoria: {
            nombre: "Bebida",
            id: "bebida"
        },
        precio: 3000
    },
    {
        id: "Bebida-02",
        nombre: "coca cola",
        imagen: "insertar imagen",
        categoria: {
            nombre: "Bebida",
            id: "bebida"
        },
        precio: 4000
    }
]

const carrito= []
let total = 0

function ElegirBebida() {

    let continuar = true;

    while (continuar === true) {
        const bebida = prompt("¿Que desea tomar? Agua|Coca Cola|Nada").toLocaleLowerCase()
        const productoEncontrado = productos.find((producto) => producto.nombre === bebida)    
        if (productoEncontrado) {
            const productoEnCarrito = carrito.find((cantidad) => cantidad.nombre === productoEncontrado.nombre)
            if (productoEnCarrito) {
                productoEnCarrito.cantidad += 1
            } else {
                carrito.push({ ...productoEncontrado, cantidad: 1 });
            }

        total += productoEncontrado.precio;
            
        } else if (bebida === "nada") {
            console.log("No selecciono bebida")
        } else {
            console.log("Bebida no encontrada, intente denuevo")}

        const respuesta = prompt("¿Desea algo más? Si|No").toLowerCase()
        
        if (respuesta === "si") {
            continuar = true
        } else if (respuesta === "no"){
            continuar = false
        } else {
            console.log("Respuesta Incorrecta")
        }
    }
}

ElegirBebida();

function ElegirComida() {
    let continuar2 = true

    while (continuar2 === true) {
        const comida = prompt("¿Que desea comer? Hamburguesa|Pizza|Nada").toLocaleLowerCase()
        const productoEncontrado2 = productos.find((producto) => producto.nombre === comida)    
        if (productoEncontrado2) {
            const productoEnCarrito = carrito.find((cantidad) => cantidad.nombre === productoEncontrado2.nombre)
            if (productoEnCarrito) {
                productoEnCarrito.cantidad += 1
            } else {
                carrito.push({ ...productoEncontrado2, cantidad: 1 });
            }

        total += productoEncontrado2.precio;
            
        } else if (comida === "nada") {
            console.log("No selecciono comida")
        } else {
            console.log("Comida no encontrada, intente denuevo")}

        const respuesta = prompt("¿Desea algo más? Si|No").toLowerCase()
        
        if (respuesta === "si") {
            continuar2 = true
        } else if (respuesta === "no"){
            continuar2 = false
        } else {
            console.log("Respuesta Incorrecta")
        }
    }
}

ElegirComida();


console.log("Productos en el carrito:");
carrito.forEach((producto) =>
    console.log(`${producto.cantidad} | ${producto.nombre}`))

console.log(`Precio total es : $${total}`)
