// Importo esValido. Necesito subir un nivel (../) de 'components' a 'src',
// y luego entrar a 'validators' para encontrar textValidator.js
import { esValido } from "../validators/textValidator.js";

// Creo la clase Message
class Message {
  constructor(contenido) {
    // Uso esValido(contenido) para validar la entrada
    if (esValido(contenido)) {
      // Si es true, guardo el contenido original
      this.contenido = contenido;
    } else {
      // Si es false, guardo "Mensaje inválido"
      this.contenido = "Mensaje inválido";
    }
  }
}

// Exporto la clase
export { Message };
