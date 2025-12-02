// Exporto la función esValido(texto)
export function esValido(texto) {
  // 1. El texto no debe estar vacío y debe ser una cadena válida
  const noVacio = texto && texto.length > 0;

  // 2. El texto debe tener menos de 50 caracteres
  const menosDeCincuenta = texto.length < 50;

  // Si cumple ambas, retorno true
  return noVacio && menosDeCincuenta;
}
