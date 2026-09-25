let numItemsCarrito = document.getElementById("numItemsCarrito");
let b1 = document.getElementById("b1");

var itemsCarrito;

actualizaBoton();

setInterval(() => {
    
    if (numItemsCarrito.value != itemsCarrito) {

        actualizaBoton();
    }

}, 20);

//---FUNCTIONS---//

/**
 * Función que actualiza en la interfaz el numero de elementos en el carrito
 * @param 
 * @returns
 */
function actualizaBoton() {

    itemsCarrito = numItemsCarrito.value;
    b1.innerText = "Número de elementos en el carrito: " + itemsCarrito;
}