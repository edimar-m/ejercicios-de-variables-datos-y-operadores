console.log("Años Perro");

const nombre = prompt("Ingrese nombre");
//16*ln(edad cronologica del perro)+31 =edadHumana
const edad = prompt("Ingrese su edad");
const expo = (edad - 31/16);
const edadPerro = Math.exp(expo);

alert(`Su equivalente de edad en años perro es: ${edadPerro}`);

