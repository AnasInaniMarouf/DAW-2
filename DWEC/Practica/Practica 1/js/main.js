let total = document.getElementById("total"); //el numero que sale justo despues de saldo
let saldo = parseFloat(total.textContent);  //como lo que coge del html es un texto, simplemente hago
                                            //un parseFloat, float porque el saldo puede contener decimales
//console.log(saldo);

let bIngresar = document.getElementById("buttonI"); //boton de Ingresar
let bRetirar = document.getElementById("buttonR");  //boton de Retirar

//-----FUNCTIONS-----//
/**
 * Evento que se ejecuta cuando se pulsa el boton ingresar
 */
bIngresar.addEventListener("click", () => {
    console.log("Boton ingresar pulsado");
    ingresar();
});

/**
 * Evento que se ejecuta cuando se pulsa el boton retirar
 */
bRetirar.addEventListener("click", () => {
    console.log("Boton retirar pulsado");
    retirar();
});

/**
 * Funcion que va actualizando el numero del saldo a medida
 * que se vaya ingresando o retirando cierta cantidad
 * 
 * @param cantidad La cantidad que se sumara al saldo (puede
 * ser positiva o negativa, si es un ingreso entonces le llegara
 * una cantidad positiva, por lo cual se sumara al saldo,
 * pero si es retirada le llegara una cantidad negativa, asi
 * se restara esa cantidad al saldo total)
 */
function actualizaSaldo(cantidad) {
    saldo += cantidad;
    total.innerText = saldo;
}

/**
 * Funcion que llama a otra funcion validar(), y le envia el id
 * del input de texto para mas tarde obtener la cantidad que el
 * usuario quiera ingresar
 */
function ingresar() {
    validar("inputI", false);
}

/**
 * Funcion que llama a otra funcion validar(), y le envia el id
 * del input de texto para mas tarde obtener la cantidad que el
 * usuario quiera retirar
 */
function retirar() {
    validar("inputR", true)
}

/**
 * Funcion que valida si se puede realizar el ingreso o la retirada,
 * si todo esta correcto llama a la funcion actualizaSaldo()
 * 
 * @param tipoInput Parametro tipo String, para saber sobre que
 *                      input trabajar
 * @param esRetirada Parametro tipo boolean, sirve para saber
*                       si actuar como un ingreso (false)
*                       o una retirada (true)
 */
function validar(tipoInput, esRetirada) {

    let cantidad = parseFloat(document.getElementById(tipoInput).value);    //variable que obtiene la cantidad que el usuario ha puesto en el input

    if (cantidad < 0) {
        alert("La cantidad no puede ser menor a 0");
        console.error("La cantidad no puede ser menor a 0");

    } else {    //cantidad mayor o igual a 0

        if (esRetirada) {   //Retirada

            if (cantidad > saldo) {
                throw new Error("La cantidad retirada no puede ser mayor al saldo");

            } else actualizaSaldo(-cantidad);   //cantidad es menor que el saldo

        } else actualizaSaldo(cantidad);    //Ingreso
    }
}
