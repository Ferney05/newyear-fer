
const fechaActualspan = document.querySelector('[dataFechaActualspan]');

// FECHA ACTUAL

export function mostrandoFechaActual(){
    const fechaSistem = new Date();
    const resultFecha  = `${fechaSistem.getDate()} / ${fechaSistem.getMonth() + 1} / ${fechaSistem.getFullYear()}`;

    fechaActualspan.innerHTML = resultFecha;
}