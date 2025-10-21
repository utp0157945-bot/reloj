
const { actualizarReloj } = require('../reloj');


test('la hora debe tener formato HH:MM:SS', () => {
  const { obtenerHoraActual } = require('../reloj');
  const hora = obtenerHoraActual();
  expect(hora).toMatch(/^\d{2}:\d{2}:\d{2}$/);
});


test('actualizarReloj debe modificar el contenido del div con la hora', () => {
  
  document.body.innerHTML = `
    <div id="hora"></div>
    <p id="fecha"></p>
  `;

  actualizarReloj();

  const contenido = document.getElementById('hora').textContent;
  expect(contenido).toMatch(/^\d{2}:\d{2}:\d{2}$/);
});


test('la función obtenerHoraActual debe ejecutarse rápidamente', () => {
  const { obtenerHoraActual } = require('../reloj');
  const inicio = performance.now();

  for (let i = 0; i < 100000; i++) {
    obtenerHoraActual();
  }

  const fin = performance.now();
  const duracion = fin - inicio;

  console.log(`Duración: ${duracion.toFixed(2)} ms`);
  expect(duracion).toBeLessThan(500);
});
