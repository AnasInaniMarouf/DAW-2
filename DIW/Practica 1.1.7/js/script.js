let contenedorCajas = document.getElementById("contenedorCajas");

//alert("hola");

let caja, boton;

for (let i = 1; i <= 12; i++) {

    caja = document.createElement("div");
    caja.className = "cajas";

    caja.append("Jueguete " + i);

    boton = document.createElement("");
    boton.textContent = "";
    caja.appendChild(boton);

    contenedorCajas.appendChild(caja);
}
