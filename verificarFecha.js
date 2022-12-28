
const sectFechas = document.querySelector('[dataSect-fechas]');
const sectNewyear = document.querySelector('[dataSect-newyear]');
const video = document.querySelector('.video-fondo');

export function verificandoFechaActual(){
    const fActual = new Date(); 
    const fDestino = new Date('29, 12, 2022');

    if(fActual.getTime() == fDestino.getTime()){
        sectFechas.style = 'display: none';
        sectNewyear.style = 'display: block';
        video.style = 'display: block';
    }
}