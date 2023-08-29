// Ejercicio 1
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar("Daniel");

// Ejercicio 2
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(3, 12));

// Ejercicio 3
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

console.log(areaTriangulo(5, 3));
console.log(perimetroTriangulo(4, 5, 6));

// Ejercicio 4
function calcularPrecio(precio, cantidad) {
    if (cantidad >= 20) return precio - (precio * 20) / 100;
    else if (cantidad >= 10) return precio - (precio * 10) / 100;
    else return precio;
}

console.log(calcularPrecio(340200, 2));

// Ejercicio 5
function esMayorDeEdad(edad) {
    return edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
}

console.log(esMayorDeEdad(18));

// Ejercicio 6 - Utilizando condicionales anidados (Se ve feo) -
function calcularImpuesto(ingresoAnual) {
    if (ingresoAnual <= 10000) return (ingresoAnual * 10) / 100;
    else {
        if (ingresoAnual >= 10000 && ingresoAnual <= 20000) return (ingresoAnual * 15) / 100;
        else {
            if (ingresoAnual > 20000) return (ingresoAnual * 20) / 100;
        }
    }
}

console.log(calcularImpuesto(10000));
console.log(calcularImpuesto(15000));
console.log(calcularImpuesto(20000));
console.log(calcularImpuesto(25000));

// Ejercicio 7
function verificarDia(dia) {
    switch (true) {
        case dia >= 1 && dia <= 5:
            console.log("Es un día laboral");
            break;
        case dia >= 6 && dia <= 7:
            console.log("Es fin de semana");
            break;
        default:
            console.log("No es un valor valido");
    }
}

verificarDia(1);
verificarDia(3);
verificarDia(5);
verificarDia(6);
verificarDia(7);
verificarDia(12);
