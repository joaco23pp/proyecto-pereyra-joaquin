// Función para calcular el porcentaje de una cantidad
function calcularPorcentaje(porcentaje, cantidad) {
  return (porcentaje * cantidad) / 100;
}
// Función para ejecutar el calculador
function ejecutarCalculador() {
let continuar = true;
let porcentaje, cantidad;

while (continuar) {
    // Leer el porcentaje y la cantidad desde el usuario
    porcentaje = parseInt(prompt("Introduce el porcentaje (0-100):"));
    cantidad = parseInt(prompt("Introduce la cantidad:"));

    // Verificar si el usuario quiere salir
    let respuesta = prompt(
    "Deseas realizar otra operación? (Si/No):"
    ).toUpperCase();
    if (respuesta === "No") {
    continuar = false;
    }

    // Calcular el porcentaje y mostrar el resultado
    let resultado = calcularPorcentaje(porcentaje, cantidad);
    console.log(`El ${porcentaje}% de ${cantidad} es: ${resultado}`);
}
}

// Llamar a la función para ejecutar el calculador
ejecutarCalculador();
