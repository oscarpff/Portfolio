# LoreLink Usage Guide

El componente `LoreLink` permite crear links interactivos en textos que abren información wiki-style.

## Sintaxis básica

```tsx
import LoreLink from "@/components/travnik/LoreLink";

// Simple link a una facción
<LoreLink id="esas" type="faction">ESAS</LoreLink>

// Link a un personaje
<LoreLink id="quasar" type="character">Quasar</LoreLink>

// Link a un material
<LoreLink id="elemento-444" type="material">Elemento 444</LoreLink>

// Link a un enemigo
<LoreLink id="risen" type="enemy">The Risen</LoreLink>

// Link a lore
<LoreLink id="the-fall-detailed" type="lore">The Great Fall</LoreLink>

// Link a un término del glosario
<LoreLink id="inter-world-war" type="glossary">Inter-World War</LoreLink>

// Link a una localización del mapa
<LoreLink id="travnik" type="location">Travnik</LoreLink>
```

## Ejemplo en contexto - Descripción de WorldMap

```tsx
// En lugar de:
const mapLocations: MapLocation[] = [
  {
    id: "travnik",
    name: "Travnik",
    description: "The central command center where the Engineers established their base.",
    // ...
  }
];

// Podrías hacer:
const mapLocations: MapLocation[] = [
  {
    id: "travnik",
    name: "Travnik",
    description: (
      <>
        The central command center where the <LoreLink id="ingenieros" type="faction">Engineers</LoreLink> 
        established their base. The crashed ship and main <LoreLink id="laboratarios" type="location">laboratories</LoreLink> 
        are located here.
      </>
    ),
    // ...
  }
];
```

## Ejemplo en FactionFeed

```tsx
// Mejorar descripción de facciones con links
<div>
  <h3 className="font-display text-2xl font-semibold text-gold mb-3">Overview</h3>
  <p className="text-muted-foreground leading-relaxed">
    <LoreLink id="esas" type="faction">ESAS</LoreLink> is a militaristic organization that 
    combines human soldiers with <LoreLink id="elemento-444" type="material">Element 444</LoreLink> 
    technology. They are in constant conflict with the <LoreLink id="proslitos" type="faction">Proselytes</LoreLink>.
  </p>
</div>
```

## Estilos por tipo

El componente automáticamente aplica estilos diferentes según el tipo:

| Tipo | Color | Uso |
|------|-------|-----|
| faction | Gold/Yellow | `🚀 ESAS`, `⛪ Proselytes`, `🧪 Engineers` |
| character | Cyan | `👤 Quasar`, `👤 Oct-Vi-O` |
| material | Emerald | `🧬 Element 444`, `⚗️ Compound-T` |
| enemy | Red | `☠️ The Risen`, `☠️ Mutated Beasts` |
| lore | Purple | `📜 The Great Fall` |
| glossary | Amber | `📖 Inter-World War` |
| location | Blue | `🗺️ Travnik`, `🗺️ Oceania` |

## Con hover preview

Automáticamente al pasar el cursor sobre un link, aparece un preview con información:

```
ESAS
🚀 Elite Space Saturation
"Militaristic Organization..."
```

## Integración completa en WorldMap.tsx

Si quisieras añadir LoreLinks en las descripciones del mapa:

```tsx
const mapLocations: MapLocation[] = [
  {
    id: "travnik",
    name: "Travnik",
    x: 50,
    y: 45,
    type: "city",
    description: (
      <>
        The central command center where the <LoreLink id="esas" type="faction">Engineers</LoreLink> 
        established their base. The crashed <LoreLink id="the-fall-detailed" type="lore">ship</LoreLink> 
        and main laboratories are located here. This is where <LoreLink id="element-444" type="material">Element 444</LoreLink> 
        technology is researched.
      </>
    ),
    isRevealed: true,
    linkedLoreId: "the-fall-detailed",
  },
  // ... more locations
];
```

## Funcionalidad al hacer click

1. El link se abre en un modal detallado
2. Se añade un breadcrumb al historial de exploración
3. El modal muestra información completa del elemento
4. Se incluyen `RelatedItems` para navegar a conexiones

## Notas importantes

⚠️ **Los IDs deben coincidir exactamente** con los IDs en tu data:
- En `travnikLore.ts`: `factions.id`, `characters.id`, `materials.id`, etc.
- En `questCharacters.ts`: ids de personajes
- En tu data de glosario: `glossary.id`

✅ **El componente maneja automáticamente:**
- Prevención de duplicados de breadcrumbs
- Búsqueda en toda la data del explorer
- Fallback si el elemento no existe (solo mostrará el texto sin link)

## Ejemplo avanzado - Descripción enriquecida

```tsx
const materialDescription = (
  <>
    <LoreLink id="elemento-444" type="material">Element 444</LoreLink> is a 
    <LoreLink id="biomolecule" type="glossary">biomolecule</LoreLink> discovered 
    during the <LoreLink id="inter-world-war" type="glossary">Inter-World War</LoreLink>. 
    
    <p>The <LoreLink id="esas" type="faction">Engineers</LoreLink> use it to enhance 
    soldiers, while the <LoreLink id="proslitos" type="faction">Proselytes</LoreLink> 
    consider it heretical.</p>
    
    <p>Key researchers include <LoreLink id="quasar" type="character">Quasar</LoreLink> 
    and <LoreLink id="oct-vi-o" type="character">Oct-Vi-O</LoreLink>.</p>
  </>
);
```

---

**¡Úsalo para hacer tus descripciones vivas e interactivas!** 🎮
