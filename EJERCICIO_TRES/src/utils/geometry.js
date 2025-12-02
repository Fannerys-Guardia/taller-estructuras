// Función para calcular el área de un círculo: A = π * radio^2
function areaCirculo(radio) {
  // Uso Math.PI para el valor de Pi
  return Math.PI * radio * radio;
}

// Función para calcular el área de un cuadrado: A = lado * lado
function areaCuadrado(lado) {
  return lado * lado;
}

// Función para calcular el área de un triángulo: A = (base * altura) / 2
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Exporto las tres funciones usando exports nombrados
export { areaCirculo, areaCuadrado, areaTriangulo };
