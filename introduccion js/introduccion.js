/* VARIABLES */
const n1 = 10;
let n2 = 20;
n2 = 30;
var n3 = 40;
n3 = 50;

const suma = n1 + n2 + n3;
// Mostrar en consola
console.log("Suma = " + suma);

/* ARREGLOS */
let numeros = [10, 20, 30, 40, 50, 60];
// Añadir nuevo elemento
numeros.push(70);
numeros.push(80);
// Eliminar elemento
numeros.pop();
numeros.pop();

// Iterar Array
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Objetos
let persona = {
    nombre: "Karol",
    apellido: "Cardenas",
    edad: 17,
    celular: "3138363576"
};
console.log(persona);
// Acceder a las claves de objeto
console.log(Object.keys(persona));
// Acceder a los valores de objeto
console.log(Object.values(persona));
// Acceder a los atributos de objeto
console.log(persona.nombre);
console.log(persona["apellido"]);