//?= Variables
let saludos = 'Bienvenidos al sistema de gestión de productos';
let addproduct = 'se agrego producto';
let deleteproduct = 'se elimino producto';
let despedida = 'Hasta la próxima';
let eleccion = 0;
let sumaProductos = 0; 
let totalLinea = 0;
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
console.log("°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸");

//? Menu de opciones

do {
    eleccion = parseInt(prompt('Elija una opción:\n ,.-~*´¨¯¨`*·~-.¸Opciones,.-~*´¨¯¨`*·~-.¸\n 1- Listar los productos,\n 2- Agregar producto al carrito,\n 3- Eliminar producto del carrito,\n 4- Mostrar el carrito,\n 5- Salir'));
//? lista de productos

    if (eleccion == 1) {
        for (let i = 0; i < productos.length; i++) {
            console.log(`${i + 1} ${productos[i].nombre}`);
        }
        console.log('°º¤ø,..,ø¤º°`°º¤ø,.,ø¤°º¤ø,..,ø¤º°`°º¤ø,.');
    }
//? Agregar producto al carrito
    else if (eleccion == 2) {
        let id = parseInt(prompt('Ingrese el número del producto que desea agregar al carrito'));
        let productoEnCarrito = carrito.find(item => item.id === productos[id - 1].id);
        if (productoEnCarrito) {
            productoEnCarrito.unidades += 1;
            console.log(productoEnCarrito);
            console.log(carrito)
        } else {
            let producto = { ...productos[id - 1], unidades: 1 }; //? copia de un objeto
            carrito.push(producto);
            console.log(`${addproduct} ${producto.nombre}`);
            console.log(`precio: ${producto.precio}`);
        }
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
            let totalLinea = carrito[i].precio * carrito[i].unidades;
            sumaProductos += totalLinea; //? suma el precio por linea de producto

            console.log(`${i + 1} ${carrito[i].nombre}\n  unidades ${carrito[i].unidades}\n precio ${carrito[i].precio}`);
            
        }
        console.log(`Total a pagar: ${sumaProductos}`);

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

