# MRF Construcciones - Sitio Web

## Descripción
Sitio web estático para pequeña constructora con secciones:
- **Inicio**: Obras recientes y maquinaria para arriendo
- **Nosotros**: Descripción empresa, misión, visión, valores
- **Contacto**: Formulario con nombre, apellido, email, mensaje

## Características
- ✅ Diseño responsive (mobile-first)
- ✅ Navegación sticky
- ✅ Formulario funcional (simulado - fácil integración backend)
- ✅ Optimizado para SEO y rendimiento
- ✅ Placeholder images (reemplazar en `assets/`)

## Archivos creados
- `index.html` - Página principal
- `nosotros.html` - Sobre nosotros
- `contacto.html` - Formulario contacto
- `styles.css` - Estilos compartidos
- `script.js` - JavaScript (formulario + interacciones)

## Vista previa
Abre `index.html` en tu navegador:
```bash
google-chrome index.html
# o
firefox index.html
```

## Personalización rápida
1. **Imágenes**: Coloca tus fotos en `assets/` (hero-bg.jpg, obra*.jpg, maq*.jpg)
2. **Contenido**: Edita textos en HTML
3. **Formulario real**: Integra [EmailJS](https://www.emailjs.com/) o backend
4. **Dominio**: Sube a Netlify/Vercel/GitHub Pages gratis

## Deploy rápido (opcional)
```bash
# Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

¡Sitio listo para usar!
