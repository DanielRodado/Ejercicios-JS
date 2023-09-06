// // Ejercicio 1
// const imprimirMensage = (mensage) => console.log(mensage);

// // Ejercicio 2
// const crearMultiplicacion = (numero1, numero2) => numero1 * numero2;

// // Ejercicio 3
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arrayDoble = array.map(crearMultiplicacion);
// console.log(arrayDoble);

// Ejercicio 4
function mayorAlcohol(array) {
    const arrayAux = [...array];
    arrayAux.sort((a, b) => b.abv - a.abv);
    return arrayAux.slice(0, 10);
}

// Ejercicio 5
function menorIBU(array) {
    const arrayAux = [...array];
    arrayAux.sort((a, b) => a.ibu - b.ibu);
    return arrayAux.slice(0, 10);
}

// Ejercicio 6
const buscarCerveza = (array, NombreCerveza) =>
    array.find((cerveza) => cerveza.name === NombreCerveza);

// Ejercicio 7
const buscarIbu = (array, ibuCerveza) => {
    const ibu = array.find((cerveza) => cerveza.ibu === ibuCerveza);
    if (ibu === undefined)
        return `No existe cerveza con un ibu de ${ibuCerveza}`;
    return ibu;
};

// Ejercicio 8
const buscarIndiceCerveza = (array, NombreCerveza) => {
    const indice = array.findIndex((cerveza) => cerveza.name === NombreCerveza);
    if (indice === -1) return `"${NombreCerveza}" no existe`;
    return indice;
};

// Ejercicio 9
function limiteDeAlcohol(array, alcohol) {
    const cervezasLimitadas = array.filter((cerveza) => cerveza.abv <= alcohol);
    let listaCervezas = [];
    for (let cerv of cervezasLimitadas) {
        listaCervezas.push({
            nombre: cerv.name,
            alcohol: cerv.abv,
            amargor: cerv.ibu,
        });
    }
    return listaCervezas;
}

// Ejercicio 10
function informacion(array, propiedad, boolean) {
    const arrayAux = [...array];
    let numero = 1;
    if (!boolean) numero = -1;
    return arrayAux
        .sort((a, b) => {
            if (a[propiedad] > b[propiedad]) return -1 * numero;
            return 1 * numero;
        })
        .slice(0, 10);
}

function createBeersData(beer) {
    return `<tr>
                <td>${beer.name}</td>
                <td>${beer.abv}</td>
                <td>${beer.ibu}</td>
            </tr>
            `
};

function generateBeersData(data, id) {
    const containerBodyTable = document.getElementById(id);
    for (content of data) {
        containerBodyTable.innerHTML += createBeersData(content);
    };
};

generateBeersData(beers, "body-table");