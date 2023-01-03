
const  fechaDestino = document.querySelector('[ dataFechaDestino]');
const sectFechas = document.querySelector('[dataSect-fechas]');
const sectNewyear = document.querySelector('[dataSect-newyear]');
const video = document.querySelector('.video-fondo');
const musicYear = document.querySelector('.music-year');
const sectSecondsMins = document.querySelector('.sect-secondsMins');
const soledadFondo = document.querySelector('.soledad-fondo');

export function verificandoFechaActual(){
    const actual = new Date(); 
    const fechaActual = `${actual.getDate()} ${actual.getMonth() + 1} ${actual.getFullYear()}`;
    const fechaEsperada = `1 1 ${actual.getFullYear()}`;

    if(fechaActual == fechaEsperada){
        sectSecondsMins.style = 'display: none';
        sectFechas.style = 'display: none';
        soledadFondo.style = 'display: none';

        sectNewyear.style = 'display: block';
        video.style = 'display: block';
        musicYear.style = 'display: block';
    } 

    cambiarFechaEsperada();
}

const cambiarFechaEsperada = () => {
    const currentDate = new Date();
    let cambiateYear = 2023;

    if(currentDate.getFullYear() == cambiateYear){
        cambiateYear = cambiateYear + 1;
        fechaDestino.innerText = `1 / 1 / ${cambiateYear}`;
    }
}