// Importo los cuatro objetos de colores. Necesito subir un nivel (../) de 'utils' a 'src',
// y luego entrar a 'data' para encontrar colors.js.
import { color1, color2, color3, color4 } from "../data/colors.js";

// Creo un array con todos los objetos para hacer la búsqueda más fácil
const listaColores = [color1, color2, color3, color4];

// Creo la función buscarHex(nombreColor)
function buscarHex(nombreColor) {
  // Convierto el nombre de búsqueda a minúsculas para asegurar que la comparación sea correcta
  const nombreBusqueda = nombreColor.toLowerCase();

  // Uso un ciclo for...of para recorrer la lista de colores
  for (const color of listaColores) {
    // Comparo el nombreColor con la propiedad nombre de cada objeto
    if (color.nombre === nombreBusqueda) {
      // Retorno el código hex si encuentro coincidencia
      return color.hex;
    }
  }

  // Retorno null si no encuentro ninguna coincidencia después de revisar todos los colores
  return null;
}

// Exporto la función
export { buscarHex };
