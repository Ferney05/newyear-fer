
const fraseFirts = document.querySelector('[datafraseFirts]');

export function newYear(){
    const añoActual = new Date();
    fraseFirts.innerText = `Recibe el año ${añoActual.getFullYear()} con un corazón lleno de esperanza y vigor renovado`;
}