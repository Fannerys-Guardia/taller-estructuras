// Importo CONFIG. Necesito subir un nivel (../) de 'modules' a 'src',
// y luego entrar a 'config' para encontrar settings.js
import { CONFIG } from "../config/settings.js";

// Creo la función cambiarTema()
function cambiarTema() {
  console.log("... Cambiando tema en themeSwitcher.js ...");

  // Si tema es 'claro', lo cambio a 'oscuro'
  if (CONFIG.tema === "claro") {
    CONFIG.tema = "oscuro";
  }
  // Si es 'oscuro', lo cambio a 'claro'
  else {
    CONFIG.tema = "claro";
  }
}

// Exporto la función
export { cambiarTema };
