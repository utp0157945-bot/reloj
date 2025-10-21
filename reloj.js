
function obtenerHoraActual() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  const segundos = String(ahora.getSeconds()).padStart(2, '0');
  return `${horas}:${minutos}:${segundos}`;
}


function obtenerFechaActual() {
  const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString('es-ES', opciones);
}


function actualizarReloj() {
  const hora = document.getElementById('hora');
  const fecha = document.getElementById('fecha');

  if (hora && fecha) {
    hora.textContent = obtenerHoraActual();
    fecha.textContent = obtenerFechaActual();
  }
}


setInterval(actualizarReloj, 1000);
actualizarReloj();


if (typeof module !== 'undefined') {
  module.exports = { obtenerHoraActual, obtenerFechaActual, actualizarReloj };
}
