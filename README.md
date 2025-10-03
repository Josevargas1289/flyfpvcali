# FlyFPVCali — FPV Racing Club

Tema: oscuro con acentos neón. Stack: React 18 + Vite + TypeScript, Tailwind, lucide-react, framer-motion,
RHF + Zod, react-router-dom, Helmet, clsx, date-fns. i18n opcional incluido (en/es).

## Requisitos
- Node.js 18+
- npm 9+

## Instalación
```bash
npm install
npm run dev
```

## Scripts
- `npm run dev` — desarrollo
- `npm run build` — producción
- `npm run preview` — previsualizar build
- `npm run lint` — ESLint
- `npm run format` — Prettier
- `npm run prepare` — instala husky

## Estructura
(Sigue la estructura pedida por el usuario en la carpeta `src/` y `public/`.)

## Personalización
- Colores neón: `tailwind.config.js`
- Logo: `src/assets/logo.svg`
- Instagram: busca `[PON_AQUI_URL_DE_INSTAGRAM]` en el código y reemplaza.
- Posts del blog: archivos `.md` en `src/content/blog/`
- SEO: `src/lib/seo.ts` y `<Helmet>` en páginas.

## Agregar una nueva página
1. Crea archivo en `src/pages/`.
2. Agrega ruta en `src/routes/AppRoutes.tsx`.
3. (Opcional) SEO con `PageTitle` y `seo.ts`.

## Buenas prácticas
- Componentes pequeños y accesibles.
- `prefers-reduced-motion` respetado.
- Evitar dependencias pesadas sin necesidad.
