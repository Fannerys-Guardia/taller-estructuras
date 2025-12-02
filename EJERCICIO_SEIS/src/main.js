// Importo 'info' renombrada como 'imprimirMensaje'
// Importo 'error' renombrada como 'imprimirFallo'
// Necesito entrar a la carpeta 'services'
import { info as imprimirMensaje, error as imprimirFallo } from "./services/logger.js";

// Uso la función renombrada 'imprimirMensaje'
imprimirMensaje("El sistema inició correctamente");

// Uso la función renombrada 'imprimirFallo'
imprimirFallo("Hubo un error de conexión");
