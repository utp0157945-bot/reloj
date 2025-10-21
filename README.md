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
<img width="1273" height="896" alt="image" src="https://github.com/user-attachments/assets/e2eaf32f-b036-45f5-9c5b-d42a8057bc8d" />

---
## Pruebas Automatizadas

Las pruebas se encuentran en **`test/reloj.test.js`** y validan diferentes aspectos del reloj.

| Nº | Prueba | Definición | Breve Descripción | Resultado |
|----|--------|------------|-----------------|------------|
| 1 | **Formato de hora** | Prueba unitaria | Verifica que la función `obtenerHoraActual()` retorne la hora en formato correcto `HH:MM:SS`. | ✅ Aprobada |
| 2 | **Actualización del reloj** | Prueba de integración | Comprueba que la función `actualizarReloj()` modifique correctamente el contenido del elemento HTML que muestra la hora y la fecha. | ✅ Aprobada |
| 3 | **Rendimiento** | Prueba de rendimiento | Evalúa que la función `obtenerHoraActual()` se ejecute rápidamente, incluso cuando se llama miles de veces seguidas. | ✅ Aprobada |

**Resumen de resultados:**

PASS test/reloj.test.js
✓ 3 pruebas superadas
Tiempo total: 2.6 s


---

## Autores

**Hugo Gonzalez Dominguez**  
**Aylin Romina Lugo Becerra**
