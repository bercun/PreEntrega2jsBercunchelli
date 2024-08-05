//?= Variables
//? Mensajes
let saludos = 'Bienvenidos al sistema de gestión de productos';
let addproduct = 'se agrego producto';
let deleteproduct = 'se elimino producto';
let despedida = 'Hasta la próxima';

//? inicialización de variables
let eleccion = 0;
let sumaProductos = 0; 
let totalLinea = 0;
let carrito = [];
//? Objetos
let productos = [
    { id: 1, nombre: 'alfajores', precio: 125 },
    { id: 2, nombre: 'pasta frola', precio: 100 },
    { id: 3, nombre: 'torta de chocolate', precio: 150 },
    { id: 4, nombre: 'pizza muzarella', precio: 50 },
    { id: 5, nombre: 'pan integral', precio: 25 },
]



console.log(saludos);
console.log("°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸");

//? Menu de opciones
do {
    eleccion = parseInt(prompt('Elija una opción:\n ,.-~*´¨¯¨`*·~-.¸Opciones,.-~*´¨¯¨`*·~-.¸\n 1- Listar los productos,\n 2- Agregar producto al carrito,\n 3- Eliminar producto del carrito,\n 4- Mostrar el carrito,\n 5- Salir'));

    
    //? lista de productos
    if (eleccion == 1) {
        for (let i = 0; i < productos.length; i++) {
            console.log(`${i + 1} ${productos[i].nombre} $ ${productos[i].precio}`);
        }
        console.log('°º¤ø,..,ø¤º°`°º¤ø,.,ø¤°º¤ø,..,ø¤º°`°º¤ø,.');
    }

    //? Agregar producto al carrito
    else if (eleccion == 2) {
        let id = parseInt(prompt('Ingrese el número del producto que desea agregar al carrito'));
        let productoEnCarrito = carrito.find(item => item.id === productos[id - 1].id);
        if (productoEnCarrito) {
            productoEnCarrito.unidades += 1;
            // console.log(productoEnCarrito); //? muestra el producto a agregar al carrito
            // console.log(carrito)            //? muestra el carrito completo
        } else {
            let producto = { ...productos[id - 1], unidades: 1 };                                   //? copia de un objeto
            carrito.push(producto);
            console.log(`${addproduct} ${producto.nombre}`);
            console.log(`precio: ${producto.precio}`);
        }
    }
//? Eliminar producto del carrito    
    else if (eleccion == 3) {
        let producto = parseInt(prompt('Ingrese el número del producto que desea eliminar del carrito'));
        let articulo = carrito.find(item => item.id === productos[producto - 1].id);               //? busca el producto en el carrito
        if (articulo && articulo.unidades > 1) {                                                   //? si el producto existe y tiene mas de una unidad
            articulo.unidades -= 1;                                                                //? le resta una unidad
            console.log(`se resto una unidad del producto ${articulo.nombre}`);                    //? mensaje de resta de unidad
        }                                           
        
        else if (articulo && articulo.unidades === 1) {  //? si el producto existe y tiene una unidad
            carrito.splice(producto - 1, 1);             //? elimina el producto del carrito
            console.log(`${deleteproduct} `); //? mensaje de eliminación
        }
        else {
            console.log('No hay productos en el carrito');
        }
    }

    //? Mostrar el carrito
    else if (eleccion == 4) {
        console.log('Productos en el carrito');
        console.log(carrito.length); //? cantidad de productos en el carrito
        let sumaProductos = [];
        for (let i = 0; i < carrito.length; i++) {
            let totalLinea = carrito[i].precio * carrito[i].unidades;
            sumaProductos.push(totalLinea);                         //? suma el precio por linea de producto
            // console.log(sumaProductos)

            console.log(`${i + 1} ${carrito[i].nombre}\n  unidades ${carrito[i].unidades}\n precio ${carrito[i].precio}`);
            
        }
        let totalApagar = sumaProductos.reduce((acumulador, valorActual) => acumulador + valorActual, 0); //? suma el total a pagar
        console.log(`Total a pagar: ${totalApagar}`);                                                       //? muestra el total a pagar

    }

    //? Salir    
    else if (eleccion == 5) {  //? mensaje de despedida
        alert(despedida);
        break;
    }
    else {
        console.log('Opción incorrecta');
    }
}while (parseInt(eleccion) > 0 || parseInt(eleccion) < 5);




