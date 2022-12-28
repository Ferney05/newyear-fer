
const sectFechas = document.querySelector('[dataSect-fechas]');
const sectNewyear = document.querySelector('[dataSect-newyear]');
const video = document.querySelector('.video-fondo');

export function verificandoFechaActual(){
    const fActual = new Date('1, 01, 2023'); 
    const fDestino = new Date('1, 01, 2023');

    if(fActual.getTime() == fDestino.getTime()){
        sectFechas.style = 'display: none';
        sectNewyear.style = 'display: block';
        video.style = 'display: block';
    }
}