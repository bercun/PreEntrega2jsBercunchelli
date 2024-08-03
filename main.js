//?= Variables
let saludos = 'Bienvenidos al sistema de gestión de productos';
let addproduct = 'se agrego producto';
let deleteproduct = 'se elimino producto';
let despedida = 'Hasta la próxima';
let eleccion = 0;
let sumaProductos = 0; 
//? Objetos

let productos = [
    { id: 1, nombre: 'alfjores', precio: 125 },
    { id: 2, nombre: 'pasta frola', precio: 100 },
    { id: 3, nombre: 'torta de chololate', precio: 150 },
    { id: 4, nombre: 'pizza muzarella', precio: 50 },
    { id: 5, nombre: 'pan integral', precio: 25 },
]
let carrito = [];


console.log(saludos);

//? Menu de opciones

do {
    eleccion = parseInt(prompt('Elija una opción:\n ,.-~*´¨¯¨`*·~-.¸Opciones,.-~*´¨¯¨`*·~-.¸\n 1- Listar los productos,\n 2- Agregar producto al carrito,\n 3- Eliminar producto del carrito,\n 4- Mostrar el carrito,\n 5- Salir'));
//? lista de productos

    if (eleccion == 1) {
        for (let i = 0; i < productos.length; i++) {
            console.log(`${i + 1} ${productos[i].nombre}`);
        }
        console.log('#############################################');
    }
//? Agregar producto al carrito
    else if (eleccion == 2) {

        let id = parseInt(prompt('Ingrese el número del producto que desea agregar al carrito'));
        carrito.push(productos[id - 1]);
        sumaProductos += productos[id - 1].precio;
        console.log(`${addproduct} ${productos[id - 1].nombre}`);
        console.log(`precio: ${productos[id - 1].precio}`);
    }
//? Eliminar producto del carrito    
    else if (eleccion == 3) {
        let producto = parseInt(prompt('Ingrese el número del producto que desea eliminar del carrito'));
        carrito.splice(producto - 1, 1);
        console.log(`${deleteproduct} ${producto}`);
    }
//? Mostrar el carrito
    else if (eleccion == 4) {
        console.log('Productos en el carrito');
        console.log(carrito.length);
        for (let i = 0; i < carrito.length; i++) {
            console.log(`${i + 1} ${carrito[i].nombre} precio ${carrito[i].precio}`);
        }
        console.log(`Total: ${sumaProductos} `);

    }
//? Salir    
    else if (eleccion == 5) {
        alert(despedida);
        break;
    }
    else {
        console.log('Opción incorrecta');
    }
}while (parseInt(eleccion) > 0 || parseInt(eleccion) < 5);


// //! menu de opciones

// <ul>
//     <li>1 Listar los productos</li>
//     <li>2 Agregar producto al carrito</li>
//     <li>3 Eliminar producto del carrito</li>
//     <li>4 Mostrar el carrito</li>
//     <li>5 Salir</li>
// </ul>