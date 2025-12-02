// Creo info(msg) que usa console.log con prefijo [INFO]:
function info(msg) {
  console.log(`[INFO]: ${msg}`);
}

// Creo error(msg) que usa console.error con prefijo [ERROR]:
function error(msg) {
  console.error(`[ERROR]: ${msg}`);
}

// Exporto ambas funciones usando exports nombrados
export { info, error };
