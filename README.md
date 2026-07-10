# Para Kari ❤

Página conmemorativa construida con **React + Vite + Tailwind CSS v4**.

## Estructura del proyecto
src/
components/
Hero.jsx             -> Sección principal (título + mensaje)
ScrollDownArrow.jsx  -> Flecha flotante que hace scroll una pantalla hacia abajo
FallingPetals.jsx    -> Fondo animado de pétalos cayendo (CSS puro)
DatesSection.jsx     -> Grid de fechas importantes
MilestoneCard.jsx    -> Tarjeta individual con contador en vivo
InProgressBadge.jsx  -> Badge animado "En proceso" para fechas futuras
TravelsSection.jsx   -> Grid de viajes cumplidos
TravelCard.jsx        -> Tarjeta individual de un viaje (con imagen opcional)
LetterSection.jsx     -> La carta
Closing.jsx            -> Sección de cierre
Ornament.jsx            -> Línea decorativa reutilizable
Reveal.jsx              -> Wrapper que anima la entrada al hacer scroll
hooks/
useLiveCounter.js    -> Contador días/horas/min/seg desde una fecha
useReveal.js          -> Detecta cuándo un elemento entra en pantalla
data/
siteData.js           -> Textos generales y fechas de hitos de la relación
siteDataTravel.js     -> Lista de viajes cumplidos
index.css                -> Tema de Tailwind (colores, fuentes) + animaciones
App.jsx                    -> Compone todas las secciones
public/
travel/                  -> Imágenes de los viajes (ver sección de imágenes abajo)

## ✏️ Cómo editar el contenido

### Textos y fechas de la relación
Viven en **`src/data/siteData.js`**. Para agregar un nuevo hito (incluyendo
proyectos o fechas futuras), añade un objeto al arreglo `milestones`:

```js
milestones: [
  { id: 'known', label: 'Nos conocimos', date: '2025-12-06T00:00:00', dateDisplay: '6 de diciembre, 2025' },
  { id: 'dating', label: 'Somos novios', date: '2026-03-21T00:00:00', dateDisplay: '21 de marzo, 2026' },
  // 👇 fecha futura: se muestra sola como badge animado "En proceso"
  { id: 'aniversario', label: 'Primer aniversario', date: '2026-12-06T00:00:00', dateDisplay: '6 de diciembre, 2026' },
]
```

Si la fecha ya pasó, la tarjeta (`MilestoneCard`) muestra el contador en vivo.
Si todavía no llega, muestra el badge `InProgressBadge` automáticamente — no
hay que configurar nada más.

### Viajes
Viven en **`src/data/siteDataTravel.js`**:

```js
{
  id: 'viaje-1',
  img: 'travel/isla-tortuga.jpg',   // ruta relativa dentro de /public, SIN slash inicial
  title: 'Isla Tortuga',
  place: 'Puntarenas, Costa Rica',
  date: '2026-02-14',
  dateDisplay: '14 de febrero, 2026',
  description: 'Nuestra primera escapada juntos.',
  emoji: '🏞️',
}
```

**Imágenes de viajes:** guárdalas en `public/travel/` y referencia solo el
nombre del archivo (ej. `travel/isla-tortuga.jpg`) — nunca con `/` al
inicio, porque el sitio vive en `/forkari/` (no en la raíz) y `TravelCard`
usa `import.meta.env.BASE_URL` para armar la ruta correcta tanto en local
como en producción.

## 🎨 Colores y tipografías

Se definen una sola vez en `src/index.css` dentro de `@theme`, y Tailwind
genera automáticamente las clases (`text-rose-700`, `bg-gold`,
`font-script`, etc.). Cambia los valores hexadecimales ahí para ajustar
toda la paleta del sitio.

## 🌸 Animaciones de fondo

- **Pétalos cayendo** (`FallingPetals.jsx`): decorativo, fijo en pantalla,
  no depende del alto de la página. Ajusta cantidad/velocidad editando el
  arreglo `PETALS` dentro del componente.
- **Flecha de scroll** (`ScrollDownArrow.jsx`): botón flotante que baja
  una pantalla completa (`window.innerHeight`) al hacer click.
- **Reveal** (`Reveal.jsx` + `useReveal.js`): fade-up al entrar en
  viewport, usado en casi todas las secciones.

> Nota: las enredaderas animadas de los laterales (antiguo `vine.js` /
> `VineRail.jsx`) fueron removidas del proyecto a favor de los pétalos de
> fondo, más simples y sin necesidad de recalcular el alto de la página.

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

## 🌐 Desplegar en GitHub Pages (automático)

El proyecto se despliega solo mediante **GitHub Actions** cada vez que
haces `git push` a `main`:

- Workflow: `.github/workflows/deploy.yml`
- Construye el proyecto (`npm run build`) y publica `dist/` en la rama
  `gh-pages` usando `peaceiris/actions-gh-pages` — no hay que crear esa
  rama a mano, la acción la genera sola en el primer run.
- `vite.config.js` ya tiene `base: '/forkari/'` configurado para que las
  rutas (incluyendo imágenes de `public/`) funcionen bien bajo ese subpath.

**Configuración inicial (una sola vez):**
1. Sube el proyecto a `main`.
2. En GitHub, ve a **Settings → Pages**.
3. En **Source**, selecciona **Deploy from a branch**.
4. En **Branch**, selecciona `gh-pages`, carpeta `/ (root)` (disponible
   ~1 min después del primer push, cuando corre el workflow).

> Si cambias el nombre del repositorio, actualiza también `base` en
> `vite.config.js` para que coincida (`/nuevo-nombre/`).

También queda disponible el script manual de respaldo:
```bash
npm run deploy
```