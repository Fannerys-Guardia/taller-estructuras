// Importo la clase Player
import { Player } from "./models/Player.js";

// --- Creación de Jugadores ---

// Creo el Jugador 1: Muchos puntos por vidas
const jugador1 = new Player("Marco", 50, 4); // Puntaje: (50*10) + (4*50) = 500 + 200 = 700

// Creo el Jugador 2: Muchos puntos por monedas
const jugador2 = new Player("Lina", 80, 2); // Puntaje: (80*10) + (2*50) = 800 + 100 = 900

// --- Comparar Puntajes ---

console.log(`Puntaje de ${jugador1.nombre}: ${jugador1.puntajeFinal}`);
console.log(`Puntaje de ${jugador2.nombre}: ${jugador2.puntajeFinal}`);

let ganador;
if (jugador1.puntajeFinal > jugador2.puntajeFinal) {
  ganador = jugador1.nombre;
} else if (jugador2.puntajeFinal > jugador1.puntajeFinal) {
  ganador = jugador2.nombre;
} else {
  ganador = "¡Es un empate!";
}

// Muestro el resultado en consola
console.log(`\n¡El ganador es ${ganador}!`);
