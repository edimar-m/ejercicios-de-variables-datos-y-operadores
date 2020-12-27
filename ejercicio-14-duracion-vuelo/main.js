console.log("Duración de Vuelo");

const destinoOne = prompt('Ingrese destino 1');
const duracionOne = prompt(`Ingrese el tiempo estimado de vuelo para ${destinoOne}`); 

const destinoTwo = prompt('Ingrese destino 2');
const duracionTwo = prompt(`Ingrese el tiempo estimado de vuelo para ${destinoTwo}`); 

const destinoThree = prompt('Ingrese destino 3');
const duracionThree = prompt(`Ingrese el tiempo estimado de vuelo para ${destinoThree}`); 

const total = Number(duracionOne) + Number(duracionTwo) + Number(duracionThree);

//alert(`total: ${total}`);

alert(`Su vuelo tiene las siguientes escalas: 
   ${destinoOne} con duración: ${duracionOne} horas
   ${destinoTwo} con duracion: ${duracionTwo}horas
   ${destinoThree} con duracion: ${duracionThree}horas
   Total vuelo: ${total}`);
