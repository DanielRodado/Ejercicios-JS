// Ejercicio 1
let numero = parseInt(prompt("Ingrese un número del 1 al 100"));
while (numero > 100);
for (let i = 0; i <= numero; i++) {
    console.log(i);
};

// Ejercicio 2
let numeroDos = parseInt(prompt("Ingrese un número del 1 al 10"));
for (let i = 1; i <= 10; i++) {
    console.log(`${numeroDos} x ${i} = ${i*numeroDos}`);
};

// Ejercicio 3
let numeroTres = parseInt(prompt("Ingrese un número mayor que 0"))
let resultadoTres = 0;
while (numeroTres > 0) {
    resultadoTres += numeroTres;
    console.log(resultadoTres);
    numeroTres = parseInt(prompt("Ingrese un número mayor que 0"));
};

// Ejercicio 4
let resultadoCuatro = 0;
do {
    numero = parseInt(prompt("Ingrese un número mayor que 0"));
    resultadoCuatro += numero;
    console.log(resultadoCuatro);
} while (numero > 0);

// Ejercicio 5
let intentos = 0;
do {
    numero = parseInt(prompt("Adivina el numero"));
    intentos++;
    if (numero < resultadoTres) {
        console.log("El número es menor que el secreto");
    } else if (numero > resultadoTres) {
        console.log("El número es mayor que el secreto");
    } else console.log(`Acertaste! El número secreto era: ${resultadoTres}, realizaste ${intentos} intentos`);
} while (numero != resultadoTres);

// Ejercicio 6
let numeroSeis = parseInt(prompt("Ingrese un número"));
for (let i = numeroSeis; i <= numeroSeis && i >= 1; i--) {
    if (numeroSeis%i === 0) console.log(i);
}

// Ejercicio 7
const listaDeColores = [
    "Rojo",
    "Verde",
    "Azul",
    "Violeta",
    "Amarillo",
    "Celeste",
    "Naranja",
    "Rosa",
];

for (let color of listaDeColores) {
    console.log(color);
};

// Ejercicio 8
const listaDeNumeros = [5, 7, 10, 13, 17];

for (numeros of listaDeNumeros) {
    console.log(`El número es: ${numeros} y su doble es: ${numeros*2}`);
}

// Ejercicio 9
const familia = [
    { nombre: "Jair", apellido: "Ospino", edad: 34, integrante: "Tío" },
    { nombre: "Adrian", apellido: "Ospino", edad: 15, integrante: "Primo" },
    { nombre: "Samuel", apellido: "Ospino", edad: 12, integrante: "Primo" },
    { nombre: "Angie", apellido: "Ospino", edad: 27, integrante: "Tía" },
];

for (let persona of familia) {
    console.log(`Hola, soy ${persona.nombre} ${persona.apellido} (${persona.integrante}) y tengo ${persona.edad} años`);
};

// Ejercicio 10
const persona = {
    nombre: "Daniel",
    apellido: "Rodado",
    edad: 18,
    estudianteDeMindHub: true
};

for (const keys in persona) {
    console.log(keys);
};

// Ejercicio 11
for (const keys in persona) {
    const value = persona[keys];
    console.log(value);
};

// Ejercicio 12
let pares = 0, impares = 0;
let numeroDoce = parseInt(prompt("Ingrese un número"));
while (numeroDoce !== 0) {
    numeroDoce = parseInt(prompt("Ingrese un número"));
    if (numeroDoce % 2 === 0) {
        pares += numeroDoce;
        console.log(`Pares: ${pares}`);
    } else {
        impares += numeroDoce;
        console.log(`impares: ${impares}`);
    };
};

// // Ejercicio 13
const numeros = [21, 14, 56, 12, 67, 44, 73];
mayor = 0;

for (let numero of numeros) {
    if (numero > mayor) mayor = numero;
}
console.log(mayor);