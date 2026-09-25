let a = 5;
var b = 10;

console.log("Valor de a: " + a + ". Valor de b: " + b);
console.warn("Valor de a: " + a + ". Valor de b: " + b);
console.error("Valor de a: " + a + ". Valor de b: " + b);

if (a < 10) {
    showParam(a);
}

var myObject = {
    name: "Pepe",
    surname: "Suarez",
    age: 26
}

console.dir("Tipo de myobject: " + typeof myObject);
console.log(myObject);
console.dir(myObject);


//---FUNCTIONS---//

function showParam(param) {
    console.log("Valor de a es " + param);
    
}