
import Task from "./models/Task.js";

// 1. Crea una tarea nueva
const miTarea = new Task("Terminar el taller de Front-end I");
console.log("--- Tarea Creada ---");

// 2. Muéstrala en consola (Estado inicial: Pendiente/false)
console.log(miTarea);
console.log(`Estado: ${miTarea.completada ? "Completada" : "Pendiente"}`);

// 3. Marca la tarea como completada
miTarea.marcarCompletada();

console.log("\n--- Tarea Marcada como Completada ---");

// 4. Muéstrala nuevamente para ver el cambio
console.log(miTarea);
console.log(`Estado: ${miTarea.completada ? "Completada" : "Pendiente"}`);
