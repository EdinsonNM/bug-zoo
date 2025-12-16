# B) Documento de Issues (30) — copiar/pegar en GitHub

## Cómo usar esta lista

1. En GitHub → pestaña **Issues** → **New issue**
2. Copia el **Título** y pega la **Descripción**
3. Agrega los **Labels** indicados
4. (Opcional) asigna el Issue a la persona que lo eligió

> Sugerencia: crea labels antes (o durante) la sesión: `content`, `ui`, `js`, `feature`, `docs`, `qa`, `good first issue`, `conflict`.

---

## 1) Agregar bug: 🐨 Memory Leak Koala

**Labels:** `content`, `good first issue`

**Descripción (pegar):**

* Agrega un nuevo bug en `app.js` dentro del arreglo `BUGS`.
* Debe tener: `id`, `emoji`, `name`, `danger` (alta/media/baja), `habitat`.

**Definición de listo:**

* El bug aparece eventualmente al presionar **Capturar bug**.

---

## 2) Agregar bug: 🐙 Off-by-One Octopus

**Labels:** `content`, `good first issue`

**Descripción:**

* Agrega un nuevo objeto al arreglo `BUGS`.

**Definición de listo:**

* Se ve como tarjeta al capturar.

---

## 3) Agregar bug: 🐢 Slow Query Turtle

**Labels:** `content`, `good first issue`

**Descripción:**

* Agrega un bug nuevo con `danger: media` o `baja`.

**Definición de listo:**

* Funciona sin errores en consola.

---

## 4) Agregar bug: 🦇 Dark Mode Bat

**Labels:** `content`, `good first issue`

**Descripción:**

* Agrega un bug relacionado al modo día/noche.

**Definición de listo:**

* Se muestra correctamente en tarjeta.

---

## 5) Agregar bug: 🐱 Race Condition Cat

**Labels:** `content`, `good first issue`

**Descripción:**

* Agrega un bug de `danger: alta`.

**Definición de listo:**

* Aparece en la lista base `BUGS`.

---

## 6) Agregar bug: 🐸 Semicolon Frog

**Labels:** `content`, `good first issue`

**Descripción:**

* Agrega un bug con descripción divertida en `habitat`.

**Definición de listo:**

* Se renderiza sin romper estilos.

---

## 7) Agregar bug: 🦊 Phantom Dependency Fox

**Labels:** `content`, `good first issue`

**Descripción:**

* Agrega un bug sobre dependencias fantasma.

**Definición de listo:**

* Se ve al capturar.

---

## 8) Agregar bug: 🐝 Busy Loop Bee

**Labels:** `content`, `good first issue`

**Descripción:**

* Agrega un bug sobre loops.

**Definición de listo:**

* Tarjeta correcta.

---

## 9) Agregar bug: 🐧 Linux Path Penguin

**Labels:** `content`, `good first issue`

**Descripción:**

* Agrega un bug sobre rutas/paths.

**Definición de listo:**

* Aparece al capturar.

---

## 10) Agregar bug: 🐳 Docker Cache Whale

**Labels:** `content`, `good first issue`

**Descripción:**

* Agrega un bug sobre caché.

**Definición de listo:**

* Funciona en UI.

---

## 11) UI: mejorar el hover de las tarjetas

**Labels:** `ui`, `good first issue`

**Descripción:**

* En `styles.css`, mejora el hover de `.card` (sombra/borde/transform suave).

**Definición de listo:**

* Se nota el cambio, no afecta layout.

---

## 12) UI: mejorar contraste del modo día

**Labels:** `ui`

**Descripción:**

* Ajusta variables en `body.light` para que texto y paneles se lean mejor.

**Definición de listo:**

* Mayor legibilidad en modo día.

---

## 13) UI: colores de peligrosidad más claros

**Labels:** `ui`

**Descripción:**

* Ajusta `.tag.alta/.media/.baja` para que se distingan bien.

**Definición de listo:**

* Diferencias claras en modo día y noche.

---

## 14) UI: panel de controles responsive en móvil

**Labels:** `ui`

**Descripción:**

* Ajusta media queries para que botones/input no se desborden.

**Definición de listo:**

* En <520px, se ve ordenado.

---

## 15) UI: botón “Limpiar” más notorio

**Labels:** `ui`, `good first issue`

**Descripción:**

* Mejora estilo de `.danger` (sin exagerar).

**Definición de listo:**

* Se identifica como acción “peligrosa”.

---

## 16) UI: mejorar tipografía y espaciados del header

**Labels:** `ui`, `good first issue`

**Descripción:**

* Ajusta tamaños/márgenes de `h1`, `.subtitle`, `.pill`.

**Definición de listo:**

* Mejor jerarquía visual.

---

## 17) UI: animación sutil para el status pill

**Labels:** `ui`

**Descripción:**

* Agrega transición o “flash” suave cuando cambia el estado.

**Definición de listo:**

* Se nota sin distraer.

---

## 18) UI: estado vacío más amigable

**Labels:** `ui`

**Descripción:**

* Mejora el estilo del bloque `#empty`.

**Definición de listo:**

* Se ve claro y atractivo.

---

## 19) JS: botón “Capturar x3”

**Labels:** `feature`, `js`

**Descripción:**

* Agrega un botón nuevo en `index.html`.
* Implementa en `app.js` que capture 3 bugs.

**Definición de listo:**

* Suma 3 tarjetas y actualiza contador.

---

## 20) JS: ordenar por peligrosidad

**Labels:** `feature`, `js`

**Descripción:**

* Agrega opción de orden (alta→baja o baja→alta).

**Definición de listo:**

* Se puede probar desde la interfaz.

---

## 21) JS: favoritos primero

**Labels:** `feature`, `js`

**Descripción:**

* Al renderizar, mostrar favoritos arriba.

**Definición de listo:**

* ⭐ se prioriza correctamente.

---

## 22) JS: mensaje “sin resultados” al buscar/filtrar

**Labels:** `feature`, `js`

**Descripción:**

* Si el filtro/búsqueda deja 0 resultados, mostrar mensaje.

**Definición de listo:**

* Mensaje visible y claro.

---

## 23) JS: confirmar antes de eliminar

**Labels:** `feature`, `js`

**Descripción:**

* Agrega `confirm()` al eliminar una tarjeta.

**Definición de listo:**

* Cancelar no elimina.

---

## 24) JS: botón “Exportar JSON”

**Labels:** `feature`, `js`

**Descripción:**

* Botón para descargar `captured` como `.json` (o copiar al portapapeles).

**Definición de listo:**

* Genera archivo/clipboard con contenido válido.

---

## 25) JS: botón “Importar JSON” (simple)

**Labels:** `feature`, `js`

**Descripción:**

* Permite pegar JSON (prompt/textarea) y cargarlo en `captured`.

**Definición de listo:**

* Maneja errores con try/catch.

---

## 26) JS: contador de favoritos

**Labels:** `feature`, `js`

**Descripción:**

* Mostrar “Favoritos: N” en el panel.

**Definición de listo:**

* Actualiza al marcar/desmarcar.

---

## 27) Docs: sección “Cómo hacer un buen review”

**Labels:** `docs`

**Descripción:**

* Agrega 5 reglas de review: qué mirar y cómo comentar.

**Definición de listo:**

* Sección corta, clara y práctica.

---

## 28) Docs: checklist de PR para el taller

**Labels:** `docs`, `good first issue`

**Descripción:**

* Agrega checklist simple para PRs.

**Definición de listo:**

* Checklist usable (no largo).

---

## 29) QA: reportar 3 problemas/usabilidad como Issues

**Labels:** `qa`

**Descripción:**

* Crea 3 issues con: pasos, esperado vs actual.

**Definición de listo:**

* 3 issues claros y reproducibles.

---

## 30) QA: smoke test post-merge

**Labels:** `qa`

**Descripción:**

* Probar que funciona: capturar, filtrar, buscar, favorito, eliminar.
* Si falla algo, reportar Issue.

**Definición de listo:**

* Validación final + Issues si corresponde.

---

## (Opcional) Conflicto planificado: 2 Issues extra

> Si quieres preparar 32 en total.

### CONFLICT A: cambiar el subtítulo del header

**Labels:** `conflict`
**Descripción:** Cambiar el texto del subtítulo en `index.html` (`#subtitle`) a: "Un laboratorio de GitHub en equipo."

### CONFLICT B: cambiar el subtítulo del header

**Labels:** `conflict`
**Descripción:** Cambiar el texto del subtítulo en `index.html` (`#subtitle`) a: "Una práctica de PRs con doc
