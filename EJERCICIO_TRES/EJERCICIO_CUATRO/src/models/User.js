
// Importo el objeto ROLES. Necesito subir un nivel (../) de 'models' a 'src',
// y luego entrar a 'config' para encontrar roles.js
import { ROLES } from "../config/roles.js";
// El constructor recibe nombre y rol. Si no me pasan rol, uso ROLES.GUEST
export class User {
  // Exporto la clase User
  constructor(nombre, rol = ROLES.GUEST) {
    this.nombre = nombre;
    this.rol = rol;
  }
}
