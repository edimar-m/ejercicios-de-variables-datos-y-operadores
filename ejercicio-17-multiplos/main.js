const numberOne = prompt('Ingrese aquí el primer número');

const numberTwo = prompt('Ingrese aquí el segundo número');

const modulo = numberOne % numberTwo;

//alert (modulo);

if (modulo === 0) {
    alert(`El número ${numberOne} es multiplo del número ${numberTwo}`);
} else {
    alert(`El número ${numberOne}  no es multiplo del número ${numberTwo}`);
}


