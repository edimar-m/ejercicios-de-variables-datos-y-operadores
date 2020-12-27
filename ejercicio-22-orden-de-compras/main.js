const productoUno = prompt ("Ingrese cuantas unidades de este producto (A) desea comprar");
const productoDos = prompt ("Ingrese cuantas unidades de este producto (B) desea comprar");
const productoTres = prompt ("Ingrese cuantas unidades de este producto (C) desea comprar");

const valorProductoUno = productoUno*20;
const valorProductoDos = productoDos*30;
const valorProductoTres = productoTres*40;

const subTotal = valorProductoUno+valorProductoDos+valorProductoTres;

alert(`El valor del producto (A) es de 20$ por unidad, el total de tu pedido en producto (A)es ${valorProductoUno}$.

El valor del producto (B) es de 30$ por unidad, el total de tu pedido en producto (B)es ${valorProductoDos}$.

El valor del producto (C) es de 40$ por unidad, el total de tu pedido en producto (C)es ${valorProductoTres}$.

El total de tu compra es de ${subTotal}$ `);

const cuotas = prompt("Ingrese el número de cuotas con las que desea pagar esta orden.")

const cuotaFinal = subTotal/cuotas;

alert(`El total de su orden de compra es de ${subTotal}$ para ser pagado en ${cuotas} cuotas de ${cuotaFinal}$.

Su pedido será despachado dentro de los próximos días gracias por elegirnos`);


