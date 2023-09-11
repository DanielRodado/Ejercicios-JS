// Ejercicio 1
const box = document.querySelector(".box");
const boton = document.getElementById("btn");
const input = document.getElementById("input");


input.addEventListener("input", () => {
    box.innerHTML = `<p>${input.value}</p>`;
})

boton.addEventListener("click", () => {
    box.textContent = ""; 
    input.value = "";
});