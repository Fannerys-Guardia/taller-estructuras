// Importo las tres funciones. Necesito subir un nivel (../) de 'src' a 'ejercicio-03',
// y luego entrar a 'utils' para encontrar geometry.js.
// ¡Nota: Como son exports nombrados, necesito usar las llaves {}!
import { areaCirculo, areaCuadrado, areaTriangulo } from "./utils/geometry.js";

// --- Cálculos ---

// Área de un círculo con radio 10
const radio = 10;
const areaC = areaCirculo(radio);
console.log(`Área de un círculo con radio ${radio}: ${areaC.toFixed(2)}`); // Uso toFixed(2) para mostrar solo 2 decimales

// Área de un cuadrado con lado 5
const lado = 5;
const areaCu = areaCuadrado(lado);
console.log(`Área de un cuadrado con lado ${lado}: ${areaCu}`);

// Área de un triángulo con base 10 y altura 20
const base = 10;
const altura = 20;
const areaT = areaTriangulo(base, altura);
console.log(`Área de un triángulo con base ${base} y altura ${altura}: ${areaT}`);
