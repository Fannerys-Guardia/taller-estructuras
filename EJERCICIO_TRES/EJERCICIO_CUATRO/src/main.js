
import { User } from "./models/User.js";
import { ROLES } from "./config/roles.js";

const admin = new User("Fannerys", ROLES.ADMIN);
const invitado = new User("Visitante");

console.log(admin);
console.log(invitado);
