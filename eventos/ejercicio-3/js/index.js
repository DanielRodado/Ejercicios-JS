// Ejercicio 1
const inputEstatura = document.getElementById("input-estatura");
const inputPeso = document.getElementById("input-peso");
const btnCalc = document.getElementById("btn-calc");
const inputResultado = document.getElementById("input-resultado");


btnCalc.addEventListener("click", () => {
    if (inputEstatura.value.length === 0) alert("Ingrese un valor de estatura");
    else if (inputPeso.value.length === 0) alert("Ingrese un valor de peso");
    else {
        const rest = parseInt(inputPeso.value) / parseInt(inputEstatura.value);
        inputResultado.value = rest.toFixed(1);
    }
});