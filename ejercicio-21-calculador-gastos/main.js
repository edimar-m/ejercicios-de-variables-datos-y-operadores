console.log("Calculador gastos");
let totalService = 3;
let moneyDisponible = 0;

const dineroTotal = prompt('Ingrese la cantidad de dinero destinado para pagar los servicios');

const serviceNameOne = prompt(`${totalService} servicios disponibles y su saldo disponible es ${dineroTotal} : Ingrese nuevo servicio`);

const servicioPriceOne = prompt(`Ingrese el costo del servicio ${serviceNameOne}`);

moneyDisponible = dineroTotal - servicioPriceOne;

const serviceNameTwo = prompt(`${totalService = totalService - 1} servicios disponibles y su saldo disponible es ${moneyDisponible} : Ingrese nuevo servicio`);

const servicioPriceTwo = prompt(`Ingrese el costo del servicio ${serviceNameTwo}`);

moneyDisponible = moneyDisponible - servicioPriceTwo;

const serviceNameThree = prompt(`${totalService = totalService - 1} servicios disponibles y su saldo disponible es  ${moneyDisponible}: Ingrese nuevo servicio`);

const servicioPriceThree = prompt(`Ingrese el costo del servicio ${serviceNameThree}`);

alert(`
  Saldo inicial: ${dineroTotal}
  ${serviceNameOne} = ${servicioPriceOne}
  ${serviceNameTwo} = ${servicioPriceTwo}
  ${serviceNameThree} = ${servicioPriceThree}
  Disponible: ${moneyDisponible - servicioPriceThree}
`);
