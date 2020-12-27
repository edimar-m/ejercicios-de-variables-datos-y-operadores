console.log("Dias a segundos");

const dias = prompt("Ingrese la cantidad de días");
//Día tiene 24 horas* 60min *60 segundos= 86.400segundos
const segundos = dias*86.400;

const message = (`${dias} días equivalen a ${segundos} segundos`);

alert (message);