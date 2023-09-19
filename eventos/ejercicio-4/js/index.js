// Ejercicio 1
const inputDolar = document.getElementById("input-dolar");
const inputPesoCO = document.getElementById("input-peso-co");
const valorDolar = 3897.20;

inputDolar.addEventListener("input", () => {
    if (inputDolar.value.length === 0) inputPesoCO.value = "";
    else inputPesoCO.value = (valorDolar*inputDolar.value).toFixed(2);
});
inputPesoCO.addEventListener("input", () => {
    if (inputPesoCO.value.length === 0) inputDolar.value = "";
    else inputDolar.value = (inputPesoCO.value/valorDolar).toFixed(2);
});