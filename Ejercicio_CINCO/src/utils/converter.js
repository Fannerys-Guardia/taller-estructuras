// Importo la constante LIBRAS_POR_KILO. Como estamos en la misma carpeta 'utils',
// uso './'
import { LIBRAS_POR_KILO } from "./constants.js";

// Creo la función kilosALibras(kilos) que multiplica los kilos por la constante
function kilosALibras(kilos) {
  return kilos * LIBRAS_POR_KILO;
}

// Exporto la función para que otros módulos puedan usarla
export { kilosALibras };
