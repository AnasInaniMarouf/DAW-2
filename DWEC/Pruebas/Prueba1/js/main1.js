const mainHTML = document.getElementById("main1");

let userName = "Pepe";
console.log(`Nombre de usuario logueado: ${userName}`);

userName = 5;
console.log(`Nombre de usuario logueado: ${userName}`);

userName = true;
console.log(`Nombre de usuario logueado: ${userName}`);

userName = "Ana";
console.log(`Nombre de usuario logueado: ${userName}`);

userName = 6.89;
console.log(`Nombre de usuario logueado: ${userName}`);

//-----//

var newButtonMain = document.createElement("button");
newButtonMain.innerHTML = "Hello Universe!";
newButtonMain.style.backgroundColor = "pink";
newButtonMain.style.border = "1px solid black";
newButtonMain.style.borderRadius = "15px";
newButtonMain.style.padding = "0.5%"
newButtonMain.style.margin = "1%";

mainHTML.appendChild(newButtonMain);

newButtonMain.addEventListener("click", () =>{
    alert("Has pulsado el boton")
});