
// MUSIC

window.addEventListener("load",function(){
	document.querySelector(".play").addEventListener("click",sonarMusic);
	document.querySelector(".stop").addEventListener("click",callarMusic);			
});

function sonarMusic(){
	var sonido = document.createElement("iframe");
	sonido.setAttribute("src","nuevoyear.mp3");
	document.body.appendChild(sonido);
	document.querySelector(".play").removeEventListener("click",sonarMusic);
}

function callarMusic(){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.querySelector(".play").addEventListener("click",sonarMusic);
	}
}

// MENSAJES ALEATORIOS

import { mostrandoFechaActual } from "./fecha-actual.js";
import { verificandoFechaActual } from "./verificarFecha.js";
import { newYear } from "./añoActual.js";

const messajeNewyear = document.querySelector('[dataMessaje-newyear]');
const botonMensajes = document.querySelector('[dataMensajesButton]');

const mensajesArray = ['Que nunca te falte un sueño por el que luchar, un proyecto que realizar, algo que aprender, un lugar donde ir y alguien a quien querer.', 'Que todo lo que llegue en este año a tu vida sea mejor de lo que buscas, dure más de lo que esperas, y te haga más feliz de lo que pudiste imaginar.', 'Nunca pares, nunca te conformes, hasta que lo bueno sea mejor y lo mejor excelente.', 'Que nada te detenga de cumplir todo lo que te falta en estos 365 días.', 'Deja atrás las penas, el dolor y la tristeza y demos la bienvenida al nuevo año con una sonrisa.', 'Con todo mi corazón te deseo que la magia de año nuevo te ilumine y ayude a seguir luchando por tus sueños.', 'Tienes todo para conseguir ser el/la mejor, en este nuevo año usa todas las ocasiones que estén a tu alcance y recibe feliz los desafíos de la vida.', 'Tienes que hacer las cosas que crees que no puedes hacer.', 'No dejes que el miedo se interponga en tu camino.', 'Piensa, sueña, cree y atrévete.', 'Asegúrate de que colocas tus pies en el lugar correcto, y luego mantente firme.', 'Solo aquellos que se arriesgan a ir demasiado lejos pueden descubrir lo lejos que pueden llegar.', 'El secreto para salir adelante es comenzar.', 'El futuro pertenece a aquellos que creen en la belleza de sus sueños.', 'No pares cuando estés cansado. Para cuando hayas terminado.', 'No importa lo que te diga la gente, las palabras y las ideas pueden cambiar el mundo.', 'Si tienes un sueño y crees en él, corres el riesgo de que se convierta en realidad.', 'Solo aquellos que se arriesgan a caer pueden conseguir grandes cosas.', 'El éxito es la suma de pequeños esfuerzos, que se repiten día tras día.', 'Entrega siempre más de lo que esperan de ti.', 'Nunca es demasiado tarde para ser lo que podrías haber sido.', 'La mejor forma de predecir el futuro es creándolo.', 'Un día despertarás y descubrirás que no tienes más tiempo para hacer lo que soñabas. El momento es ahora. Actúa.', 'Se lo suficientemente valiente para vivir de forma creativa. El lugar creativo donde nadie ha estado.', 'Cuando dejo ir lo que soy, me convierto en lo que debería ser.', 'Vive la vida que amas. Ama la vida que vives.', 'La verdadera felicidad consiste en hacer el bien.', 'El éxito es encontrar satisfacción en dar un poco más de lo que se recibe.', 'La verdadera motivación procede de trabajar en cosas que nos importan.'];

const longitud = mensajesArray.length;

const numAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1));
}

let indiceAleatorio = numAleatorio(0, longitud);

const felizAñoNuevo = () => {
   if(indiceAleatorio == 0){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 1){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 2){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 3){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 4){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 5){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 6){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 7){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 8){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 9){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 10){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 11){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 12){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 13){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 14){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 15){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 16){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 17){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 18){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 19){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 20){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 21){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 22){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 23){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 24){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 25){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 26){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio == 27){
    indiceAleatorio += 1;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } else if(indiceAleatorio === 28){
    indiceAleatorio = 0;
    messajeNewyear.innerText = `${mensajesArray[indiceAleatorio]}`;
   } 
}

botonMensajes.addEventListener('click', felizAñoNuevo);

mostrandoFechaActual();
verificandoFechaActual();
newYear();