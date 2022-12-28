
const sectFechas = document.querySelector('[dataSect-fechas]');
const sectNewyear = document.querySelector('[dataSect-newyear]');
const video = document.querySelector('.video-fondo');
const musicYear = document.querySelector('.music-year');

export function verificandoFechaActual(){
    const actual = new Date(); 

    const fechaActual = `${actual.getDate()} ${actual.getMonth() + 1} ${actual.getFullYear()}`;
    const fechaEsperada = '29 12 2022';

    if(fechaActual == fechaEsperada){
        sectFechas.style = 'display: none';
        sectNewyear.style = 'display: block';
        video.style = 'display: block';
        musicYear.style = 'display: block';
    } else {
        console.log('No son iguales');
    }
}