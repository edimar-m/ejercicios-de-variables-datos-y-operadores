console.log("Kilómetros a millas");

const kilometros = prompt("Ingrese la cantidad de kilometros");

//1 kilómetro es igual a 0.621371 millas

const millas = 0.621371;

const resultadoMillas = kilometros*millas;

const message = (`${kilometros} Los kilometros ingresados equivalen a ${resultadoMillas} millas`);

alert (message);