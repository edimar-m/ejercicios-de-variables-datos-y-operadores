
const hab2 = prompt ("Ingrese cuantas habitaciones sencillas dispone en su hotel");
const hab3 =prompt ("Ingrese cuantas habitaciones triples dispone en su hotel");
const hab4 =prompt ("Ingrese cuantas habitaciones cuádruples dispone en su hotel");

const habitacionSencilla = hab2*2;
const habitacionTriple =  hab3*3;
const habitacionCaudruple = hab4*4;
const plazasCama = habitacionSencilla+habitacionTriple+habitacionCaudruple;

alert(`La capacidad de huepedes en habitaciones sencillas es de ${habitacionSencilla},la capacidad de huéspedes en habitaciones triples es de ${habitacionTriple} y la capacidad de huespedes en habiones cuádruples es de ${habitacionCaudruple}, con un una capacidad total de ${plazasCama} plazas cama en su establecimiento.`);
