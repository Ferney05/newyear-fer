
const sectFechas = document.querySelector('[dataSect-fechas]');
const sectNewyear = document.querySelector('[dataSect-newyear]');
const video = document.querySelector('.video-fondo');
const musicYear = document.querySelector('.music-year');
const sectSecondsMins = document.querySelector('.sect-secondsMins');

export function verificandoFechaActual(){
    const actual = new Date(); 

    const fechaActual = `${actual.getDate()} ${actual.getMonth() + 1} ${actual.getFullYear()}`;
    const mesActual = `${actual.getMonth() + 1}`;
    const yearActual = `${actual.getFullYear()}`;

    const fechaEsperada = '1 01 2023';
    const mesNuevoYear = '01';
    const yearNuevo = '2023';

    if(fechaActual == fechaEsperada){
        sectSecondsMins.style = 'display: none';
        sectFechas.style = 'display: none';
        sectNewyear.style = 'display: block';
        video.style = 'display: block';
        musicYear.style = 'display: block';
    } else if(mesActual == mesNuevoYear){
        sectSecondsMins.style = 'display: none';
        sectFechas.style = 'display: none';
        sectNewyear.style = 'display: block';
        video.style = 'display: block';
        musicYear.style = 'display: block';
    } else if(yearActual == yearNuevo){
        sectSecondsMins.style = 'display: none';
        sectFechas.style = 'display: none';
        sectNewyear.style = 'display: block';
        video.style = 'display: block';
        musicYear.style = 'display: block';
    }
}