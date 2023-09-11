// Ejercicio 1
const box = document.querySelector(".box");
const boton = document.getElementById("btn");

const data = [
    { class: "box cyan", text: "Cyan" },
    { class: "box red", text: "Red" },
    { class: "box gray", text: "Gray" }
];

let i = 0
boton.addEventListener("click", () => {
    box.className = data[i].class;
    box.textContent = data[i].text;
    i++
    if (i === 3) i = 0;
});