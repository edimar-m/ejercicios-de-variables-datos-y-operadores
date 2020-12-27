console.log("Tiempo de viaje");
//5km/hora/10/bici/80/auto
const pie = 5;

const bici = 10;

const auto = 80;

const distancia = prompt(`Ingrese la distancia de su viaje en km`);

alert(`Su viaje de ${distancia} km le tomará:
A pie: ${distancia/pie} horas
En bici: ${distancia/bici} horas
en auto: ${distancia/auto} horas
 `)