
const fechaActualspan = document.querySelector('[dataFechaActualspan]');

const soledadFondo = document.querySelector('.soledad-fondo');
const sectFechas = document.querySelector('[dataSect-fechas]');
const sectSecondsMins = document.querySelector('.sect-secondsMins');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

// FECHA ACTUAL

export function mostrandoFechaActual(){
    const fechaSistem = new Date();
    const resultFecha  = `${fechaSistem.getDate()} / ${fechaSistem.getMonth() + 1} / ${fechaSistem.getFullYear()}`;

    fechaActualspan.innerHTML = resultFecha;

    faltanFive();
}

const faltanFive = () => {
    const nuevaHoursActual = new Date();

    const fechaActualFin = `${nuevaHoursActual.getDate()} ${nuevaHoursActual.getMonth() + 1} ${nuevaHoursActual.getFullYear()} ${nuevaHoursActual.getHours()} ${nuevaHoursActual.getMinutes()} ${nuevaHoursActual.getSeconds()}`;
    const fechaFinYear = `31 12 ${nuevaHoursActual.getFullYear()} 23 55 0`; 
    const ultimoMin = `31 12 ${nuevaHoursActual.getFullYear()} 23 59 59`; 

    if(fechaActualFin >= fechaFinYear && fechaActualFin <= ultimoMin){
        
        sectFechas.style = 'display: none';
        sectSecondsMins.style = 'display: block';
        soledadFondo.style = 'display: block';

        window.addEventListener("load",function(){
            document.querySelector("[dataBotonColocarMusic]").addEventListener("click", sonarMusic);
        });
        
        const sonarMusic = () => {    
            var sonido = document.createElement("iframe");
            sonido.setAttribute("src", "faltan.mp3");
            sonido.style = 'width: 0px; height: 0px; position: absolute; margin-top: -40rem';
            document.body.appendChild(sonido);
            document.querySelector("[dataBotonColocarMusic]").removeEventListener("click", sonarMusic);
        }

        setInterval(() => {
            const horaActual = new Date();
    
            minutes.innerHTML = `${('0' + horaActual.getMinutes()).slice(-2)}`;
            seconds.innerText = `${('0' + horaActual.getSeconds()).slice(-2)}`;
        }, 1000);
    }
}
