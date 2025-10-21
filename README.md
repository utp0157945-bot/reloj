# 🕒 Reloj Digital

Este proyecto consiste en un **reloj digital interactivo** desarrollado con **JavaScript, HTML y CSS**, que muestra la hora actual actualizándose en tiempo real dentro de una página web.  
Incluye **pruebas automatizadas con Jest** para asegurar el correcto funcionamiento de las funciones principales del reloj.

---

## Descripción del Proyecto

El **Reloj Digital** muestra la hora en formato **HH:MM:SS** y se actualiza automáticamente cada segundo.  
Está diseñado con una interfaz limpia y moderna, enfocada en la **precisión y rendimiento**.

**Objetivos del proyecto:**
- Mostrar la hora actualizada dinámicamente.
- Validar el formato correcto de la hora.
- Evaluar el rendimiento de la función que obtiene la hora.

---

## Tecnologías Utilizadas

- **HTML5** → estructura base del reloj.  
- **CSS3** → diseño y estilo responsivo.  
- **JavaScript (ES6)** → lógica principal del reloj.  
- **Jest** → framework de testing para pruebas automatizadas.  
- **Node.js** → entorno de ejecución para las pruebas.

---

## Pruebas Automatizadas

Las pruebas se encuentran en **`test/reloj.test.js`** y validan diferentes aspectos del reloj.

| Nº | Prueba | Definición | Breve Descripción | Código de implementación | Resultado |
|----|--------|------------|-----------------|-------------------------|------------|
| 1 | **Formato de hora** | Prueba unitaria | Verifica que la función `obtenerHoraActual()` retorne la hora en formato correcto `HH:MM:SS`. | ```javascript
const { obtenerHoraActual } = require('../reloj');

test('la hora debe tener formato HH:MM:SS', () => {
  const hora = obtenerHoraActual();
  expect(hora).toMatch(/^\d{2}:\d{2}:\d{2}$/);
});
``` | ✅ Aprobada |
| 2 | **Actualización del reloj** | Prueba de integración | Comprueba que la función `actualizarReloj()` modifique correctamente el contenido del elemento HTML que muestra la hora y la fecha. | ```javascript
const { actualizarReloj } = require('../reloj');

test('actualizarReloj debe modificar el contenido del div con la hora', () => {
  document.body.innerHTML = `
    <div id="hora"></div>
    <p id="fecha"></p>
  `;

  actualizarReloj();

  const contenido = document.getElementById('hora').textContent;
  expect(contenido).toMatch(/^\d{2}:\d{2}:\d{2}$/);
});
``` | ✅ Aprobada |
| 3 | **Rendimiento** | Prueba de rendimiento | Evalúa que la función `obtenerHoraActual()` se ejecute rápidamente, incluso cuando se llama miles de veces seguidas. | ```javascript
const { obtenerHoraActual } = require('../reloj');

test('la función obtenerHoraActual debe ejecutarse rápidamente', () => {
  const inicio = performance.now();

  for (let i = 0; i < 100000; i++) {
    obtenerHoraActual();
  }

  const fin = performance.now();
  const duracion = fin - inicio;

  console.log(`Duración: ${duracion.toFixed(2)} ms`);
  expect(duracion).toBeLessThan(500);
});
``` | ✅ Aprobada |

---

**Resumen de resultados:**
````

PASS  test/reloj.test.js
✓ 3 pruebas superadas
Tiempo total: 2.6 s

```

## Autores

**Hugo Gonzalez Dominguez**  
**Aylin Romina Lugo Becerra**
