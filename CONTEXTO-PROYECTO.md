# Proyecto R&K (antes "Para Kari" / "forkari") — Contexto técnico completo

> Este documento es un resumen de contexto pensado para pegarlo al inicio de
> una nueva conversación con Claude si necesitas ayuda futura con este
> proyecto. Incluye estructura, decisiones tomadas, y problemas conocidos
> pendientes de resolver.

---

## 📌 Qué es este proyecto

Página web conmemorativa/romántica para una pareja, construida con
**React + Vite + Tailwind CSS v4**. Empezó como un solo archivo HTML
estático y fue migrado a un proyecto React estructurado y escalable a
petición del usuario, quien está aprendiendo en el proceso (por eso las
respuestas en el chat priorizan explicar *qué archivo tocar y por qué*,
no solo entregar código).

**Nombre del repo / base path:** cambió de `forkari` a `RyK` (se evitó usar
`R&K` literal porque el carácter `&` causa problemas en URLs y GitHub no
permite `&` en nombres de repositorio).

**URL de producción:** `https://reinerms.github.io/RyK/`

---

## 🗂️ Estructura del proyecto

```
RyK/
├── public/
│   ├── travel/              -> imágenes de la sección de viajes
│   ├── preview.jpg           -> imagen para Open Graph (WhatsApp/redes)
│   └── 404.html               -> redirect trick para SPA en GitHub Pages
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── ScrollDownArrow.jsx
│   │   ├── FallingPetals.jsx
│   │   ├── DatesSection.jsx
│   │   ├── MilestoneCard.jsx
│   │   ├── InProgressBadge.jsx
│   │   ├── TravelsSection.jsx
│   │   ├── TravelCard.jsx
│   │   ├── TravelGalleryModal.jsx
│   │   ├── TravelFilters.jsx
│   │   ├── LetterSection.jsx
│   │   ├── Closing.jsx
│   │   ├── Ornament.jsx
│   │   ├── Reveal.jsx
│   │   └── HeaderLayout.jsx      -> layout con header, envuelve todas las páginas via <Outlet/>
│   ├── pages/                     -> NUEVO: se migró de una sola App.jsx a rutas con páginas
│   │   ├── Home.jsx
│   │   ├── Citas.jsx
│   │   ├── Viajes.jsx
│   │   ├── Videos.jsx
│   │   └── NotFound.jsx
│   ├── router/
│   │   └── router.jsx             -> configuración de react-router-dom
│   ├── hooks/
│   │   ├── useLiveCounter.js
│   │   └── useReveal.js
│   ├── data/
│   │   ├── siteData.js            -> textos generales + fechas de hitos
│   │   └── siteDataTravel.js      -> lista de viajes
│   ├── utils/
│   │   └── travelDates.js         -> funciones puras: agrupar/filtrar viajes por año/mes
│   ├── index.css                    -> tema Tailwind v4 (@theme) + animaciones custom
│   └── main.jsx
├── index.html                        -> incluye meta Open Graph + script de restauración de ruta SPA
├── vite.config.js                    -> base: '/RyK/', plugin de tailwind
└── .github/workflows/deploy.yml      -> CI/CD automático a GitHub Pages
```

---

## 🧩 Decisiones de arquitectura clave

### 1. Vite + Tailwind v4 (no v3)
Se usa el plugin oficial `@tailwindcss/vite` (Tailwind v4), NO el método
clásico con `tailwind.config.js` + PostCSS de v3. La configuración del tema
(colores, fuentes) vive en `src/index.css` usando el bloque `@theme`, no en
un archivo de config JS separado.

### 2. Filosofía de estilos: mezcla de utilidades + algunas clases custom
Se discutió explícitamente si usar solo clases Tailwind inline vs. clases
custom reutilizables (`.glass-card`, `.ornament`, `.filter-chip`). Regla
acordada:
- **Animaciones `@keyframes` custom** (pétalos cayendo, flecha rebotando,
  badge "en proceso") → **siempre CSS**, porque Tailwind no soporta
  keyframes custom con utilidades solas.
- **Estilos reutilizados en muchos componentes** → CSS custom está bien
  cuando ahorra repetir lógica condicional larga en el `className`.
- Todo lo demás → preferir utilidades de Tailwind directo en el JSX.

### 3. Datos separados de la lógica de vista
- `siteData.js` → hitos de la relación (fechas conocidas, aniversario, etc.)
- `siteDataTravel.js` → viajes (con `gallery: []`, arreglo de imágenes)
- `travelDates.js` → funciones puras (`getAvailableYears`, `getAvailableMonths`,
  `filterAndSortTravels`) para que la lógica de fechas sea reutilizable y
  testeable sin depender de React.

### 4. Contador en vivo con estado dual (started/no started)
`useLiveCounter(dateString)` devuelve `{ started, text, days, hours, ... }`.
- Si `started === false` (fecha futura) → se muestra `InProgressBadge`
  (animación de puntos + "En proceso").
- Si `started === true` → se muestra el contador real corriendo cada segundo.

### 5. Galería de fotos por viaje
`TravelCard` ya no tiene un solo `img`, sino `gallery: [...]` (arreglo).
- Si `gallery.length > 1` → botón "Ver más fotos →" que abre
  `TravelGalleryModal`.
- Si `gallery.length <= 1` → mensaje divertido en su lugar (placeholder tipo
  "Faltan fotos, hay que volver ✈️").
- **El estado del modal vive en `TravelsSection` (el padre), no en cada
  card** — solo existe un modal en el DOM, controlado por
  `selectedTravel` (el viaje actualmente elegido, o `null`).

### 6. Filtros de viajes por año/mes
`TravelFilters.jsx` es un componente "tonto" — no decide lógica, solo
muestra chips y dispara callbacks (`onYearChange`, `onMonthChange`). El
estado real (`year`, `month`) vive en `TravelsSection`. Al cambiar de año,
se resetea el mes (evita quedar en un mes que no existe en el nuevo año).

### 7. Migración de App.jsx único a React Router
El proyecto pasó de una sola página (`App.jsx` con todas las secciones) a
un modelo de **rutas** con `react-router-dom`:
- `HeaderLayout.jsx` es el layout raíz (contiene el header/nav) y usa
  `<Outlet />` para renderizar la página hija correspondiente.
- Páginas: `/` (Home), `/citas`, `/viajes`, `/videos`.
- Ruta catch-all `*` → `NotFound.jsx`, colocada **dentro** de `children`
  del layout (para heredar el header), con `errorElement` también apuntando
  a `NotFound` para capturar errores de renderizado, no solo 404 de ruta.

```jsx
export const router = createBrowserRouter(
  [
    {
      element: <HeaderLayout />,
      errorElement: <NotFound />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/citas', element: <Citas /> },
        { path: '/viajes', element: <Viajes /> },
        { path: '/videos', element: <Videos /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename: '/RyK' }
)
```

### 8. GitHub Pages + SPA routing (problema conocido, en proceso de debug)
GitHub Pages es un servidor estático — no entiende rutas de React Router.
Entrar directo a `https://reinerms.github.io/RyK/viajes` (sin pasar antes
por `/`) da 404 real de GitHub, porque busca una carpeta/archivo `viajes`
que no existe.

**Solución implementada:** patrón conocido de
[rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages):
1. `public/404.html` — redirige a `index.html` codificando la ruta pedida
   como query param (`/RyK/?/viajes`).
2. Script en `index.html` (antes del `<script type="module" src="/src/main.jsx">`)
   que lee ese query param y usa `history.replaceState` para restaurar la
   URL limpia (`/RyK/viajes`) antes de que React Router decida qué mostrar.

**⚠️ Estado actual: NO confirmado como resuelto.** Última señal fue un
error genérico "Failed to load resource: 404" en consola, sin identificar
aún si es:
- El 404.html no está siendo incluido en el build (`dist/404.html`).
- El GitHub Action no desplegó el cambio (revisar pestaña Actions).
- `pathSegmentsToKeep` mal configurado en 404.html (debe ser `1` para `/RyK/`).
- El script en `index.html` está después del script de React en vez de antes.
- Es un recurso distinto el que falla (imagen, CSS, JS bundle) y no
  relacionado al routing.

**Próximo paso al retomar:** pedir al usuario el contenido exacto de la
pestaña **Network** de DevTools (nombre del recurso en rojo) y el contenido
actual de `public/404.html` + el script en `index.html`, para diagnosticar
con precisión.

### 9. Open Graph (preview de enlaces en WhatsApp/redes)
Se agregaron metaetiquetas en `index.html` (`og:title`, `og:description`,
`og:image` con URL absoluta, `og:url`, `og:type`, `twitter:card`). Nota
importante: WhatsApp cachea la preview tras la primera vez que se comparte
un link — cambios posteriores pueden tardar en reflejarse.

### 10. Deploy automático
`.github/workflows/deploy.yml` corre en cada `push` a `main`: instala
dependencias, hace `npm run build`, y publica `dist/` en la rama `gh-pages`
usando `peaceiris/actions-gh-pages`. No se crea la rama manualmente. En
**Settings → Pages** del repo, la fuente debe ser `gh-pages` / `root`.

`vite.config.js` tiene `base: '/RyK/'` — **debe coincidir exactamente**
con: el nombre del repo, el `basename` de React Router, y las rutas usadas
en `og:image`/`og:url`.

---

## ✅ Funcionalidades completadas
- [x] Hero con mensaje + firma
- [x] Contadores en vivo (días/horas/min/seg) desde fechas configurables
- [x] Badge animado "En proceso" para fechas futuras
- [x] Sección de viajes con tarjetas, imágenes, galería modal
- [x] Filtro de viajes por año y mes
- [x] Orden automático de viajes por fecha (no por orden de escritura)
- [x] Fondo de pétalos cayendo (CSS puro, sin JS pesado)
- [x] Flecha de scroll flotante
- [x] Fade-in al hacer scroll (`Reveal` + `useReveal`)
- [x] Migración a múltiples páginas con React Router + layout con header
- [x] Deploy automático vía GitHub Actions
- [x] Meta tags Open Graph para preview en WhatsApp

## 🚧 Pendiente / en progreso
- [ ] **Resolver 404 en rutas directas de GitHub Pages** (ver sección 8 arriba)
- [ ] Confirmar que `public/404.html` se copia correctamente al `dist/`
- [ ] Decidir si el auto-redirect del 404 (countdown 5s) se mantiene o se
      deja solo el botón manual
- [ ] Posible mejora: contador tipo "3 viajes en 2026" arriba de la grilla
      de viajes usando `visibleTravels.length`
- [ ] Posible mejora: mensajes distintos en placeholder de fotos según
      `gallery.length === 0` vs `=== 1`
- [ ] Posible mejora: flechas para pasar fotos una por una dentro del modal
      de galería, en vez de verlas todas en grid

## 🗑️ Removido del proyecto (por si aparece referenciado en código viejo)
- `src/components/vine.js` y `VineRail.jsx` — enredaderas animadas
  laterales con SVG generado dinámicamente. Se reemplazaron por
  `FallingPetals.jsx` (más simple, sin recalcular alto de página).

---

## 🎨 Paleta y tipografías (definidas en `src/index.css` bajo `@theme`)

| Variable | Uso |
|---|---|
| `--color-rose-50/100/300/500/700` | Rosados, de claro a oscuro |
| `--color-gold` | Acentos dorados (líneas decorativas, texto de fecha) |
| `--color-leaf` / `--color-leaf-dark` | Verdes (quedaron del sistema de vines, aún en uso en algún detalle) |
| `--color-cream` | Fondo cálido |
| `--color-ink` | Color de texto principal |
| `--font-display` | Cormorant Garamond (serif elegante) |
| `--font-script` | Great Vibes (cursiva decorativa) |
| `--font-sans` | Poppins (texto general) |

---

## 💬 Cómo pedir ayuda en una nueva conversación

Si retomas este proyecto en otro chat, pega este documento completo y
aclara:
1. Qué archivo(s) específicos quieres modificar o qué error estás viendo.
2. Si es sobre el bug pendiente del 404, pega el contenido actual de
   `public/404.html`, el script en `index.html`, y lo que muestra la
   pestaña Network de DevTools.
3. El usuario prefiere que se le explique **qué archivo y qué cambiar**,
   con el razonamiento del porqué, en vez de recibir solo el proyecto
   completo de una vez — está aprendiendo en el proceso.
