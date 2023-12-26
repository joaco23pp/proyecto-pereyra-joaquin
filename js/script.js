// Clase para representar una operación
class Operacion {
  constructor(porcentaje, cantidad) {
    this.porcentaje = porcentaje;
    this.cantidad = cantidad;
  }

  calcularPorcentaje() {
     return (this.porcentaje * this.cantidad) / 100;
  }
}

 // Función para ejecutar el calculador
function ejecutarCalculador() {
  let continuar = true;
  let operaciones = [];

  while (continuar) {
     // Leer el porcentaje y la cantidad desde el usuario
    let porcentaje = parseInt(prompt("Introduce el porcentaje (0-100):"));
    let cantidad = parseInt(prompt("Introduce la cantidad:"));

     // Crear una nueva operación
    let operacion = new Operacion(porcentaje, cantidad);

     // Agregar la operación al array
    operaciones.push(operacion);

     // Verificar si el usuario quiere salir
    let respuesta = prompt(
      "Deseas realizar otra operación? (Si/No):"
    ).toUpperCase();
    if (respuesta === "No") {
      continuar = false;
    }
  }

  // Calcular el porcentaje y mostrar el resultado
  for (let i = 0; i < operaciones.length; i++) {
    let resultado = operaciones[i].calcularPorcentaje();
    console.log(`El ${operaciones[i].porcentaje}% de ${operaciones[i].cantidad} es: ${resultado}`);
  }
}

 // Llamar a la función para ejecutar el calculador
ejecutarCalculador();