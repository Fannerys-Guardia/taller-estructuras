// Importa la función generarID. Debes subir un nivel (../) de 'models' a 'src',
// y luego entrar a 'utils'
import { generarID } from "../utils/ids.js";

// Crea una clase Task
class Task {
  constructor(titulo) {
    // Propiedad id (usa generarID())
    this.id = generarID();

    // Constructor que reciba titulo
    this.titulo = titulo;

    // Propiedad completada iniciada en false
    this.completada = false;
  }

  // Método marcarCompletada() que cambie completada a true
  marcarCompletada() {
    this.completada = true;
  }
}

// Usa export default para exportar la clase
export default Task;
