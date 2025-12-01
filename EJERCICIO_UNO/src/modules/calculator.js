
import { IVA } from './product.js';

export function calcularTotal(precio) {
    const precioConIVA = precio * (1 + IVA);
    return parseFloat(precioConIVA.toFixed(2)); 
}