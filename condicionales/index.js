// Ejercicio 1
function mayorQue(a, b) {
    if (a > b) console.log("El primer número es mayor que el segundo");
    else console.log("El primer número no es mayor que el segundo");
};

mayorQue(14, 10);

// Ejercicio 2
function igualODiferenteQue(a, b) {
    if (a === b) console.log("Son iguales");
    else console.log("Son diferentes");
};

igualODiferenteQue(12, 12);

// Ejercicio 3
function mayorOIgualQue(a, b) {
    if (a > b) console.log(`${a} es el número más grande`);
    else if (a < b) console.log(`${b} es el número más grande`);
    else if (a === b) console.log("Los dos números son iguales");
};

mayorOIgualQue(73, 73);
mayorOIgualQue(34, 20);
mayorOIgualQue(3, 6);

// Ejercicio 4
function elMasChico(a, b, c) {
    if (a < b && a < c) alert(`${a} es el número más chico`);
    else if (b < c) alert(`${b} es el número más chico`);
    else alert(`${c} es el número más chico`);
};

// Ejercicio 5
const persona1 = {
    nombre: "Daniel",
    edad: 18,
    altura: 1.7,
};

const persona2 = {
    nombre: "David",
    edad: 20,
    altura: 1.86,
};

function comparacionDeObjetos(objeto1, objeto2) {
    if (objeto1.edad > objeto2.edad) alert(`${objeto1.nombre} es mayor`);
    else if (objeto1.edad < objeto2.edad) alert(`${objeto2.nombre} es mayor`);
    if (objeto1.altura > objeto2.altura) alert(`${objeto1.nombre} es más alto`);
    if (objeto1.altura < objeto2.altura) alert(`${objeto2.nombre} es más alto`);
};

comparacionDeObjetos(persona1, persona2);

// Ejercicio 6
function validarDatos(nombre, edad, altura, vision) {
    if (altura > 1.5 && edad >= 18 && vision > 8 && vision <= 10)
        alert(`${nombre}, sí estás capacitado para conducir.`);
    else alert(`${nombre}, no estás capacitado para conducir.`);
};

function ingresarDatosAValidar() {
    let nombre = prompt("Ingesa tu nombre");
    let edad = parseInt(prompt("Ingesa tu edad"));
    let altura = parseFloat(prompt("Ingesa tu altura (cm)"));
    let vision = parseInt(prompt("Ingesa tu vision (Del 1 al 10)"));

    validarDatos(nombre, edad, altura, vision);
};

// Ejercicio 7
function validarEntrada(nombre, pase, entrada) {
    if (nombre.toLowerCase() === "daniel") alert("¡Bienvenido!");
    else if (pase.toLowerCase() === "vip") alert("¡Bienvenido!");
    else if (entrada === "y") {
        const confirmarUsoDeEntrada = prompt("¿Desea usar la entrada (y/n)");
        if (confirmarUsoDeEntrada.toLowerCase() === "y") alert("¡Bienvenido!");
    } else {
        const confirmarCompra = prompt("¿Desea comprar? (y/n)");
        if (confirmarCompra.toLowerCase() === "n") alert("¡Hasta la próxima!");
        else if (confirmarCompra.toLowerCase() === "y") {
            const dineroDisponible = parseInt(prompt("Dinero disponible: "));
            if (dineroDisponible >= 1000)
                alert("La compra se realizó correctamente, ¡Bienvenido!");
            else
                alert(
                    "Saldo insuficiente, no se ha podido realizar la compra."
                );
        }
    }
};

function ingresarDatosParaEntar() {
    let nombre = prompt("Ingesa tu nombre");
    let pase = prompt("¿Qué pase tienes (VIP o Normal)?");
    let entrada = prompt("¿Posee entrada? (y/n)");

    validarEntrada(nombre, pase, entrada);
};

// Ejercicio 8 - Mucho codigo, con un bucle sería más easy pero así habia que hacerlo :') -
function verificarNumero(numero) {
    const numeroIngresado = parseInt(prompt("Ingresa un numero (1 al 10)"));
    if (numeroIngresado === numero) {
        alert("¡Ganaste, has adivinado el número!");
        return true;
    } else if (numeroIngresado > numero) {
        alert("El numero ingresado es mayor.");
        return false;
    } else if (numeroIngresado < numero) {
        alert("El numero ingresado es menor.");
        return false;
    }
};

function adivinaAdivinador() {
    alert("Adivina el número del 1 al 10");
    const numeroIncognita = 2;
    let num = verificarNumero(numeroIncognita);
    if (num === true) return;
    else {
        num = verificarNumero(numeroIncognita);
        if (num === true) return;
        else {
            num = verificarNumero(numeroIncognita);
            if (num === true) return;
            else {
                alert("No lo has adivinado");
            }
        }
    }
};

// Ejercicio 9
function queEres() {
    const edad = parseInt(prompt("Ingresa tu edad"));
    if (edad >= 0 && edad <= 12) alert("Eres un infante");
    else if (edad >= 13 && edad <= 18) alert("Eres un adolecente");
    else if (edad >= 19 && edad <= 45) alert("Eres un mayor jover");
    else if (edad >= 100) {
        const confirmadEdad = prompt("¿De verdad tienes esa edad? (y/n)");
        if (confirmadEdad.toLowerCase() === "y") alert("Wow...");
        else alert("¡Lo sabía!");
    } else if (edad > 45) alert("Eres un anciano");
};
;
// Ejercicio 10
function juegoPPT() {
    alert("¡PIEDRA, PAPEL O TIJERAS!");
    const jugador1 = prompt("Jugador 1, ingresa tu opción").toUpperCase();
    const jugador2 = prompt("Jugador 2, ingresa tu opción").toUpperCase();
    if (
        (jugador1 === "PIEDRA" && jugador2 === "PAPEL") ||
        (jugador1 === "PAPEL" && jugador2 === "TIJERAS") ||
        (jugador1 === "TIJERAS" && jugador2 === "PIEDRA")
    ) alert("¡El jugador 2 a ganado!");
    else if (
        (jugador2 === "PIEDRA" && jugador1 === "PAPEL") ||
        (jugador2 === "PAPEL" && jugador1 === "TIJERAS") ||
        (jugador2 === "TIJERAS" && jugador1 === "PIEDRA")
    ) alert("¡El jugador 1 a ganado!");

    else alert("Unos de los jugadore ha hecho trampa.");
};

// Ejercicio 11
function colores() {
    const color = prompt("Ingresa un color").toLowerCase();
    switch (color) {
        case "blanco":
        case "negro":
            alert("Falta de color.");
            break;
        case "verde":
            alert(" El color de la naturaleza.");
            break;
        case "azul":
            alert("El color del agua.");
            break;
        case "amarillo":
            alert("El color del sol.");
            break;
        case "rojo":
            alert("El color del fuego.");
            break;
        case "marrón":
            alert("El color del la tierra.");
            break;
        default:
            alert("Excelente elección, no lo teníamos pensado.")
    }
};

// Ejercicio 12
function operaciones() {
    const num1 = parseInt(prompt("Ingrese el primer número"));
    const num2 = parseInt(prompt("Ingrese el segundo número"));
    const operacion = prompt("Ingrese la operación a realizar").toLowerCase()
    if (operacion === "suma") alert(num1 + num2);
    else if (operacion === "resta") alert(num1 - num2);
    else if (operacion === "multiplicación" || operacion === "multiplicacion") alert(num1 * num2);
    else if (operacion === "división" || operacion === "division") {
        if (num1 === 0) alert("ERROR. Cambie el divisor a un número que no sea 0");
        else alert(num1 / num2);
    };
}

// Ejercicio 13
function registro() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let edad = parseInt(prompt("Ingrese su edad"));
    let documentoDeIdentidad = parseInt(prompt("Ingrese su docuemnto de identidad"));
    let paisDeNacimiento = prompt("Ingrese su país de nacimiento");
    let ciudadDeNacimiento = prompt("Ingrese su ciudad de nacimiento");
    const confirmarDatos = prompt("¿Los datos ingresados son correctos? (y/n)");
    if (confirmarDatos === 'y') {
        const persona = {
            nombre,
            apellido,
            edad,
            documentoDeIdentidad,
            paisDeNacimiento,
            ciudadDeNacimiento
        };

        console.table(persona);
    }

    else alert("Vuelva a intentarlo en 1 mes");
};