const express = require('express');
const app = express();

// Definir precios por gramo para cada material
const PRECIOS_POR_GRAMO = {
  '001': 1500.00, // Oro puro 24k
  '002': 1000.00, // Oro alto 18k
  '003': 800.00,  // Oro medio 14k
  '004': 500.00,  // Oro bajo 10k
  '005': 300.00,  // Plata ley .925
  '006': 200.00,  // Titanio
  '007': 100.00   // Rodio
};

// Función para calcular el monto del préstamo
function calcularMontoPrestamo(idMaterial, pesoGramos) {
  // Verificar si el material tiene un precio asociado
  if (!PRECIOS_POR_GRAMO[idMaterial]) {
    console.log('Material no válido');
    return;
  }

  // Calcular el monto del préstamo según la fórmula proporcionada
  const precioGramo = PRECIOS_POR_GRAMO[idMaterial];
  const montoPrestamo = (pesoGramos * precioGramo) * 0.8;

   // Imprimir el resultado
   console.log(`Material: ${idMaterial}`);
   console.log(`Peso en gramos: ${pesoGramos}`);
   console.log(`Monto del préstamo: $${montoPrestamo.toFixed(2)}`);



  // Retornar el resultado en lugar de imprimirlo
  return {
    material: idMaterial,
    pesoGramos,
    montoPrestamo: montoPrestamo.toFixed(2)
  };
}

// Exportar directamente la función calcularMontoPrestamo
exports.calcularMontoPrestamo = calcularMontoPrestamo;

// Configurar una ruta de ejemplo utilizando express
app.get('/', (req, res) => {
  const idMaterial = '001'; // Cambia este valor según el material
  const pesoGramos = 50;    // Cambia este valor según el peso en gramos

  // Llamar a la función y enviar la respuesta al cliente
  const resultado = calcularMontoPrestamo(idMaterial, pesoGramos);
  res.json(resultado);
  
});
//console.log(res);
// Exportar la aplicación de Express para que sea utilizada por Google Cloud Functions
exports.app = app;;
