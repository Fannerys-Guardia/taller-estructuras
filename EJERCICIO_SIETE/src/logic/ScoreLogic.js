// Creo la clase ScoreLogic
class ScoreLogic {
  // Añado un método estático (static). Esto significa que lo llamo desde la clase, no desde una instancia.
  static calcularPuntos(monedas, vidas) {
    // La fórmula es: (monedas * 10) + (vidas * 50)
    return monedas * 10 + vidas * 50;
  }
}

// Exporto la clase
export { ScoreLogic };
