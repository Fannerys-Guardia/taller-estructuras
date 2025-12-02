// Importo la clase Message. Necesito entrar a la carpeta 'components'
import { Message } from "./components/Message.js";

// --- Creación de Mensajes ---

// 1. Creo un mensaje con texto largo (más de 50 caracteres)
const textoLargo =
  "Este mensaje es intencionalmente muy, muy largo, con más de cincuenta caracteres, para que mi clase Message lo rechace y guarde el texto por defecto. ¡Así compruebo que la validación funciona!";
const mensajeInvalido = new Message(textoLargo);

// 2. Creo un mensaje con texto válido
const textoValido = "Hola mundo, mi mensaje es válido.";
const mensajeValido = new Message(textoValido);

// --- Mostrar en Consola ---

console.log("--- Mensaje Inválido ---");
// Muestro el objeto y el contenido para confirmar que se reemplazó el texto
console.log(mensajeInvalido);
console.log(`Resultado: "${mensajeInvalido.contenido}"`);

console.log("\n--- Mensaje Válido ---");
// Muestro el objeto y el contenido para confirmar que se mantuvo el texto original
console.log(mensajeValido);
console.log(`Resultado: "${mensajeValido.contenido}"`);
