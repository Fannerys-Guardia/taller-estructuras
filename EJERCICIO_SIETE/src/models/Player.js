// Importo ScoreLogic. Necesito subir un nivel (../) de 'models' a 'src',
// y luego entrar a 'logic' para encontrar ScoreLogic.js
import { ScoreLogic } from "../logic/ScoreLogic.js";

// Creo la clase Player
class Player {
  constructor(nombre, monedas, vidas) {
    this.nombre = nombre;
    this.monedas = monedas;
    this.vidas = vidas;

    // Propiedad puntajeFinal calculada usando el método estático
    // ¡Lo llamo directamente desde la clase ScoreLogic, no necesito crear un objeto ScoreLogic!
    this.puntajeFinal = ScoreLogic.calcularPuntos(monedas, vidas);
  }
}

// Exporto la clase
export { Player };
