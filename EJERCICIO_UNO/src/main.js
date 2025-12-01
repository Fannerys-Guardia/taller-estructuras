
import { producto1, producto2, producto3 } from "./modules/product.js";
import { calcularTotal } from "./modules/calculator.js";

const productos = [producto1, producto2, producto3];

productos.forEach((producto) => {
  const totalConImpuesto = calcularTotal(producto.precio);
  console.log(`El producto ${producto.nombre} cuesta $${totalConImpuesto} con impuesto`);
});
