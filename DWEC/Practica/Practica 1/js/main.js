let total = document.getElementById("total");
let saldo = parseFloat(total.textContent);
//console.log(saldo);

let bIngresar = document.getElementById("buttonI")
let bRetirar = document.getElementById("buttonR")

//-----FUNCTIONS-----//
bIngresar.addEventListener("click", () => {
    //console.log("Boton ingres0.ar pulsado");
    validarIngreso();
});

bRetirar.addEventListener("click", () => {
    //console.log("Boton retirar pulsado");
    validarRetirada();
});

function actualizaSaldo(cantidad) {
    saldo += cantidad;
    total.innerText = saldo;
}

function validarIngreso() {
    let ingreso = parseInt(document.getElementById("inputI").value);

    if(ingreso < 0) {

        alert("La cantidad ingresada no puede ser menor a 0");

    } else {

        actualizaSaldo(ingreso);
    }
}

function validarRetirada() {
    let retirada = parseInt(document.getElementById("inputR").value);
    console.log(retirada);
    
    if(retirada < 0) {

        alert("La cantidad retirada no puede ser menor a 0");

    } else if(retirada > saldo) {

        alert("La cantidad retirada no puede ser mayor al saldo")

    } else {

        actualizaSaldo(-retirada);
    }
}