const segundos = prompt('Ingrese aquí los segundos');

const minutos = Math.trunc(segundos/60);

const hora = Math.trunc(segundos/3600);

const horaResto = segundos % 3600;

const minutosHora = Math.trunc(horaResto/60);

//alert (modulo);

if (segundos < 60) {
    alert(`El tiempo son 0 horas, 0 minutos y ${segundos} segundos`);
} else if (segundos < 3600) {
    alert(`El tiempo son 0 horas, ${minutos} minutos y ${segundos % 60} segundos`);
} else {
    alert(`El tiempo son ${hora} horas, ${minutosHora} minutos y ${horaResto % 60} segundos`);
}