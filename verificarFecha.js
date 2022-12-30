
const sectFechas = document.querySelector('[dataSect-fechas]');
const sectNewyear = document.querySelector('[dataSect-newyear]');
const video = document.querySelector('.video-fondo');
const musicYear = document.querySelector('.music-year');
const sectSecondsMins = document.querySelector('.sect-secondsMins');

const fechaActualspan = document.querySelector('[dataFechaActualspan]');

export function verificandoFechaActual(){
    const actual = new Date(); 

    const fechaActual = `${actual.getDate()} ${actual.getMonth() + 1} ${actual.getFullYear()} ${actual.getMinutes()}`;
    const fechaEsperada = '30 12 2022';
    
    const mesNuevoYear = '01';
    const yearNuevo = '2023';

    if(fechaActual == fechaEsperada){
        sectSecondsMins.style = 'display: none';
        sectFechas.style = 'display: none';
        sectNewyear.style = 'display: block';
        video.style = 'display: block';
        musicYear.style = 'display: block';
    }
}