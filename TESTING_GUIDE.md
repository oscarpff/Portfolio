# 🧪 Testing Guide - Cómo Experimentar el Sistema

## CÓMO VER EL SISTEMA EN ACCIÓN

### 1. Entra a Travnik World Building
```
URL: /narrative (o tu ruta de TravnikWorldBuilding)
```

### 2. Explora el Mapa (WorldMap)
- **Busca:** Sección "Explore the World"
- **Haz click:** En cualquier localización (Travnik, ESAS, Oceania, etc.)
- **Resultado:** 
  - Se abre un modal con detalles
  - Aparece el breadcrumb en la parte baja: `Home → [Location]`
  - Puedes ver "Related Items" en el modal

### 3. Explora Facciones (FactionFeed)
- **Busca:** Sección "Factions & Characters"
- **Haz click:** En "Details" de cualquier facción
- **Resultado:**
  - Se abre modal grande con información
  - Breadcrumb actualizado: `Home → [Faction]`
  - Ves "Related Items" en el modal
  - Haz click en personajes dentro del modal
  - Breadcrumb nuevamente actualizado: `Home → [Faction] → [Character]`
  - Ves "Relationship Badges" mostrando vínculos del personaje

### 4. Explora Recursos (MaterialsGrid)
- **Busca:** Sección "Systems & Resources"
- **Selecciona:** Un material (Element 444 o Compound-T)
- **Haz click:** En la tarjeta del material
- **Resultado:**
  - Se abre modal detallado
  - Breadcrumb: `Home → [Material]`
  - Ves todas las propiedades
  - "Related Items" muestra qué facciones lo usan
  - Puedes hacer click para ir a esa facción

### 5. Explora Enemigos (EnemiesGrid)
- **Busca:** Sección "Threats & Bosses"
- **Haz click:** En cualquier tarjeta de enemigo
- **Resultado:**
  - Se abre modal detallado
  - Breadcrumb actualizado
  - Ves características y comportamiento
  - "Related Items" muestra materiales relacionados

### 6. USA EL BREADCRUMB TRAIL
- **Nota:** En la parte baja de la pantalla, verás:
  ```
  🏠 Explored: Home > [Elemento 1] > [Elemento 2] > ...
  ```
- **Haz click:** En cualquier parte del breadcrumb para volver a ese punto
- **Resultado:** La exploración continúa desde ese punto

---

## PRUEBAS ESPECÍFICAS

### Test 1: Navegación Cruzada
**Objetivo:** Verificar que puedas saltar entre diferentes tipos de elementos

```
1. Haz click en ESAS (facción)
   ✓ Breadcrumb: Home → ESAS
2. Haz click en "Quasar" (personaje dentro del modal)
   ✓ Breadcrumb: Home → ESAS → Quasar
3. Ves "Related Items" → haz click en "Element 444" (material)
   ✓ Breadcrumb: Home → ESAS → Quasar → Element 444
4. Ves "Related Items" → haz click en "ESAS" (facción)
   ✓ Breadcrumb: Home → ESAS → Quasar → Element 444 → ESAS
5. Haz click en ESAS en el breadcrumb para volver
   ✓ Vuelves directamente a ese punto
   ✓ El breadcrumb se recorta: Home → ESAS
```

### Test 2: Breadcrumb Máximo
**Objetivo:** Verificar que el breadcrumb se limita a 10 elementos

```
1. Haz click en 15 elementos diferentes
2. Nota que solo los últimos 10 aparecen en el breadcrumb
3. Los más antiguos se descartan automáticamente
✓ Mantiene la historia limpia
```

### Test 3: Related Items Accuracy
**Objetivo:** Verificar que los items relacionados sean correctos

**Para Facciones:**
```
- ESAS → Debe mostrar: Sus personajes (Quasar, etc) + lore faction
✓ Si ves "Quasar" en Related Items, es correcto
```

**Para Materiales:**
```
- Element 444 → Debe mostrar: Facciones que lo usan (ESAS, Ingenieros)
✓ Si ves "ESAS" y "Ingenieros" en Related Items, es correcto
```

**Para Enemigos:**
```
- The Risen → Debe mostrar: Materiales relacionados
✓ Si ves materiales en Related Items, es correcto
```

### Test 4: Visual Feedback
**Objetivo:** Verificar que los elementos reaccionen a interacción

```
✓ Cards tienen hover effect (cambian color/borde)
✓ Breadcrumb se actualiza en tiempo real
✓ Modales se abren smoothly
✓ Related Items es clickeable (cursor cambia)
✓ Relationship Badges muestran conexiones
```

### Test 5: Modal Integration
**Objetivo:** Verificar que cada modal tenga contexto

**En Modal de Facción:**
```
✓ Ves descripción general
✓ Ves personajes con sus imágenes
✓ Ves "Related Items" en la parte baja
✓ Haces click en Related Items → abre nuevo modal
```

**En Modal de Material:**
```
✓ Ves propiedades (Origin, Properties, Functionality, etc)
✓ Ves "Related Items" mostrando facciones
✓ Puedes hacer click en facciones para explorar
```

**En Modal de Enemigo:**
```
✓ Ves características y comportamiento
✓ Ves "Related Items" con materiales
✓ Puedes hacer click para explorar materiales
```

---

## VERIFICACIONES VISUALES

### ✅ El Breadcrumb debe verse así:

```
Bottom de la pantalla:
┌─────────────────────────────────────────┐
│ 🏠 Explored: Home > ESAS > Quasar > ... │
└─────────────────────────────────────────┘
- Tiene fondo semitransparente
- Borde dorado
- Hovers se ven más brillantes
- Se actualiza en tiempo real
```

### ✅ Los Related Items deben verse así:

```
En el modal, al final:
┌────────────────────────────────────────┐
│ ➜ Related                               │
│ [🚀 ESAS] [👤 Quasar] [🧬 Element 444] │
│ [⛪ Proselytes] [👤 Oct-Vi-O]           │
└────────────────────────────────────────┘
- Badges con colores según tipo
- Clickeables (cursor pointer)
- Al hover, se ven más brillantes
```

### ✅ Las Relationship Badges deben verse así:

```
En tarjetas de personajes:
┌──────────────────────────────┐
│ Member        Enemy      Uses │
│  ESAS       Hooman   Element  │
└──────────────────────────────┘
- Pequeños badges de colores
- Cada color representa un tipo de relación
- Clickeables para explorar
```

---

## PRUEBA RÁPIDA (5 MINUTOS)

```
1. Abre Travnik (1 min)
2. Haz click en el mapa (30 seg)
   → ¿Ves breadcrumb?
3. Ve a Facciones, abre ESAS (1 min)
   → ¿Ves Related Items?
4. Haz click en Related Item (1 min)
   → ¿Se abre el modal?
5. Vuelve usando breadcrumb (1 min)
   → ¿Vuelve al anterior?
```

Si TODO lo anterior funciona = ✅ SISTEMA FUNCIONAL

---

## DEBUGGING SI ALGO FALLA

### Síntoma: Breadcrumb no aparece
```
✓ Abre DevTools (F12)
✓ Ve a Console
✓ Verifica que no haya errores
✓ Si ves "useExplorer must be used within ExplorerProvider"
  → ExplorerProvider no está en TravnikWorldBuilding
```

### Síntoma: Related Items no muestra nada
```
✓ Verifica que el item tenga relaciones en la data
✓ En console, llama: explorer.getRelatedItems(item)
✓ Debe devolver un array
```

### Síntoma: Modal no se abre al hacer click
```
✓ Verifica que pushBreadcrumb se está llamando
✓ En console: explorer.breadcrumbs (debe tener elementos)
✓ Verifica que openDetail esté siendo llamado
```

---

## PERFORMANCE CHECKS

✓ Breadcrumb aparece < 100ms después de click
✓ Modal se abre < 200ms
✓ Transiciones suaves (sin lag)
✓ Hover effects no causan parpadeo
✓ Scroll del modal funciona sin problemas

---

## CASOS EXTREMOS PARA PROBAR

```
1. Haz 15 clicks seguidos (prueba el límite de breadcrumbs)
2. Salta entre diferentes tipos (facción → material → enemigo)
3. Vuelve usando breadcrumb 5 veces
4. Abre múltiples modales rápidamente
5. Prueba en mobile (si tienes acceso)
```

Si TODO funciona sin errores = 🎮 **Sistema completamente operativo**

---

## NOTAS IMPORTANTES

- El Explorer Context **persiste durante toda la sesión**
- Si recargas la página, se resetea (esto es normal)
- Si quieres persistencia, necesitas localStorage (feat futura)
- Los breadcrumbs se limitan a 10 para evitar spam
- Related Items muestra máximo 6 (para no desorganizar)

---

Ahora **¡Diviértete explorando Travnik!** 🗺️🎮
