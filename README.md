# Portafolio (Astro + Tailwind + MDX)

## Requisitos
- Node 18+
- npm

## Instalación
```bash
npm install
npm run dev
```

## Paquetes útiles
```bash
npm i -D @astrojs/mdx @astrojs/tailwind @astrojs/image @astrojs/sitemap @tailwindcss/typography @fontsource-variable/inter
```

## Producción
```bash
npm run build
# Vercel:
npm i -g vercel
vercel
```

## Ajustes SEO
- Cambia `site` en `astro.config.mjs`
- Reemplaza imágenes en `/public/images/`
- Edita JSON-LD en `src/components/SEO.astro`


## Paleta extraída
```json
{
  "primary": "#080808",
  "background": "#040404",
  "accent": "#c8c8c8",
  "text": "#ffffff",
  "muted": "#9a9a9a"
}
```

