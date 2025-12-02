// Importo CONFIG desde config/
import { CONFIG } from "./config/settings.js";

// Importo cambiarTema desde modules/
import { cambiarTema } from "./modules/themeSwitcher.js";

// --- Observación de Mutabilidad ---

console.log("--- Estado Inicial ---");

// Imprimo CONFIG.tema (veré 'claro')
console.log(`1. Tema actual (antes de llamar a la función): ${CONFIG.tema}`);

// Llamo a cambiarTema()
cambiarTema();

console.log("\n--- Estado Final ---");

// Vuelvo a imprimir CONFIG.tema (¡veré 'oscuro'!)
// Observo cómo el objeto original cambió, aunque la función estaba en otro módulo
console.log(`2. Tema actual (después de llamar a la función): ${CONFIG.tema}`);
