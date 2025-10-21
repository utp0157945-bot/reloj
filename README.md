# Reloj Digital

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

Las pruebas se encuentran en **`test/reloj.test.js`** y validan:

| Nº | Prueba | Descripción | Resultado |
|----|--------|-------------|------------|
| 1 | **Formato de hora** | Verifica que la hora tenga formato `HH:MM:SS`. | ✅ Aprobada |
| 2 | **Actualización** | Comprueba que el reloj muestre la hora en el HTML. | ✅ Aprobada |
| 3 | **Rendimiento** | Evalúa que la función se ejecute rápidamente. | ✅ Aprobada |

**Resumen de resultados:**
```
PASS  test/reloj.test.js
✓ 3 pruebas superadas
Tiempo total: 2.6 s
```

---

## Autores

**Hugo Gonzalez Dominguez**
**Aylin Romina Lugo Becerra**

