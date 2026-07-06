# Para Kari ❤

Página conmemorativa construida con **React + Vite + Tailwind CSS v4**.

## Estructura del proyecto

```
src/
  components/
    Hero.jsx          -> Sección principal (título + mensaje)
    DatesSection.jsx  -> Grid de fechas importantes
    MilestoneCard.jsx -> Tarjeta individual con contador en vivo
    LetterSection.jsx -> La carta
    Closing.jsx        -> Sección de cierre
    VineRail.jsx       -> Enredaderas animadas de los laterales
    vine.js            -> Lógica pura que genera el SVG de las enredaderas
    Ornament.jsx        -> Línea decorativa reutilizable
    Reveal.jsx          -> Wrapper que anima la entrada al hacer scroll
  hooks/
    useLiveCounter.js  -> Contador días/horas/min/seg desde una fecha
    useReveal.js       -> Detecta cuándo un elemento entra en pantalla
  data/
    siteData.js        -> Todas las fechas y textos del sitio (edítalo aquí)
  index.css            -> Tema de Tailwind (colores, fuentes) + animaciones
  App.jsx               -> Compone todas las secciones
```

## ✏️ Cómo editar el contenido

Todo el texto y las fechas viven en **`src/data/siteData.js`**. No necesitas
tocar ningún componente para cambiar una fecha, agregar un nuevo hito o
cambiar el mensaje.

Para agregar una nueva fecha importante, solo añade un objeto al arreglo
`milestones` — la cuadrícula y el contador se generan automáticamente:

```js
milestones: [
  { id: 'known', label: 'Nos conocimos', date: '2025-12-06T00:00:00', dateDisplay: '6 de diciembre, 2025' },
  { id: 'dating', label: 'Somos novios', date: '2026-03-21T00:00:00', dateDisplay: '21 de marzo, 2026' },
  // 👇 nuevo hito, se muestra solo
  { id: 'aniversario', label: 'Primer aniversario', date: '2026-12-06T00:00:00', dateDisplay: '6 de diciembre, 2026' },
]
```

## 🎨 Colores y tipografías

Se definen una sola vez en `src/index.css` dentro de `@theme`, y Tailwind
genera automáticamente las clases (`text-rose-700`, `bg-gold`,
`font-script`, etc.). Cambia los valores hexadecimales ahí para ajustar
toda la paleta del sitio.

## 🚀 Desarrollo local

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (usualmente `http://localhost:5173`).

## 📦 Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para desplegar.

## 🌐 Desplegar en GitHub Pages

El proyecto ya está configurado con `base: '/forkari/'` en `vite.config.js`
(ajústalo si tu repositorio se llama distinto) y con un script de deploy.

1. Crea el repositorio en GitHub (por ejemplo `forkari`) y súbele este
   proyecto (sin `node_modules` ni `dist`, ya están ignorados en
   `.gitignore`).
2. Instala dependencias: `npm install`
3. Corre:
   ```bash
   npm run deploy
   ```
   Esto construye el proyecto y publica automáticamente la carpeta `dist`
   en la rama `gh-pages`.
4. En GitHub, ve a **Settings → Pages** y selecciona la rama `gh-pages`
   como fuente (carpeta `/root`).
5. Tu sitio quedará en `https://<tu-usuario>.github.io/forkari/`.

> Si cambias el nombre del repositorio, actualiza también el valor de
> `base` en `vite.config.js` para que coincida (`/nuevo-nombre/`).
