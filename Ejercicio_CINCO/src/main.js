// Importo la función kilosALibras. Necesito entrar a la carpeta 'utils'
import { kilosALibras } from "./utils/converter.js";

// Defino los kilos a convertir
const kilos = 80;

// Convierto los kilos a libras
const libras = kilosALibras(kilos);

// Muestro el resultado en consola, redondeando a dos decimales
console.log(`${kilos} kilos equivalen a ${libras.toFixed(2)} libras`);
