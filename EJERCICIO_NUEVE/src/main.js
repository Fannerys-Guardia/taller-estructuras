// Importo la función buscarHex. Necesito entrar a la carpeta 'utils'
import { buscarHex } from "./utils/search.js";

// Defino una variable con el nombre de un color a buscar (puedo usar mayúsculas para probar)
const colorBuscado = "AZUL";

// Uso buscarHex() para buscarlo
const codigoHex = buscarHex(colorBuscado);

// Muestro el código hexadecimal o "Color no encontrado"
if (codigoHex) {
  console.log(`El código hexadecimal de '${colorBuscado}' es: ${codigoHex}`);
} else {
  console.log(`Color '${colorBuscado}' no encontrado.`);
}

// --- Prueba extra para un color que no existe ---
const colorInexistente = "morado";
const hexInexistente = buscarHex(colorInexistente);

if (hexInexistente) {
  console.log(`El código hexadecimal de '${colorInexistente}' es: ${hexInexistente}`);
} else {
  console.log(`Color '${colorInexistente}' no encontrado.`);
}
