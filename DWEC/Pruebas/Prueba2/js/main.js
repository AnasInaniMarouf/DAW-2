var a = 5;
console.log("Valor de a es: " + a);
console.log(.1e12);


var alumno = ["Pepe", true, 5.67, null, {name: "Ana", curso: "2ºDAW"}, [7, 8.3, 9.5], undefined];
console.log("Valor de alumno es: " + alumno);

document.getElementById("it1").value = "Hello \nuniverse!";

//---FUNCTIONS---//

document.getElementById("numItemsCarrito").addEventListener("input", function () {

    if(this.value == "") {
        console.error("El valor de la caja debe de ser un numero " + this.value);

    } else {
        a += parseInt(this.value);
        console.log("Valor de a es: " + a)
    }
    
})