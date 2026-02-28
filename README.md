# ✨ Libera tu Luz Interior - Landing Page de Alta Conversión

> Landing page profesional para venta de ebook de transformación personal. Arquitectura CSS modular, diseño visual 80/20, optimizada para conversión.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-100%25-brightgreen)

---

## 🚀 Demo en Vivo

**[Ver Demo →](https://leandrocarpio.github.io/Libera-tu-luz-interior-web/)**

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Arquitectura](#️-arquitectura)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Características Técnicas](#-características-técnicas)
- [Imágenes Necesarias](#-imágenes-necesarias)
- [Cómo Replicar](#-cómo-replicar-este-proyecto)
- [Para Reclutadores](#-para-reclutadores)
- [Autor](#-autor)
- [Licencia](#-licencia)

---

## 🎯 Descripción

**Libera tu Luz Interior** es una landing page de alta conversión para venta de ebook de transformación personal desde el SER. Proyecto desarrollado para portfolio profesional, demostrando arquitectura CSS modular, diseño visual 80/20, psicología de colores aplicada y UX/UI optimizado para conversión.

### Objetivos del Proyecto

- **Para reclutadores:** Código limpio, arquitectura modular y buenas prácticas
- **Para clientes:** Diseño persuasivo con alta tasa de conversión (80% visual / 20% texto)
- **Para desarrolladores:** Código documentado y fácil de replicar

---

## ✨ Características

### Diseño y UX (Actualizado 2026)
- ✅ Hero estilo product-page con mockup grande y precio destacado
- ✅ Diseño visual 80/20 (80% imágenes, 20% texto)
- ✅ Garantía 30 días destacada al inicio (no al final)
- ✅ Sección Antes/Después visual potente
- ✅ Diseño responsive mobile-first
- ✅ Menú hamburguesa con overlay fullscreen
- ✅ Smooth scroll entre secciones
- ✅ Animaciones con IntersectionObserver

### Funcionalidades
- ✅ Sección Dolores (4 pain points con imágenes grandes)
- ✅ Sección Antes/Después (comparación visual)
- ✅ 8 Capítulos con íconos minimalistas
- ✅ 2 Bonos Exclusivos (mockups visuales profesionales)
- ✅ Testimonios con fotos (6+ reviews con imágenes reales)
- ✅ FAQ con accordion (6 preguntas)
- ✅ Timer de cuenta regresiva (reseteo diario automático)
- ✅ CTA flotante (siempre visible en scroll)
- ✅ Páginas legales actualizadas (Privacidad + Términos)

### Conversión y Urgencia
- ✅ Timer countdown hasta las 23:59:59 (3 ubicaciones estratégicas)
- ✅ Badge descuento 75% (rojo vibrante, grande)
- ✅ Desglose valor total ($60.000 → $14.999)
- ✅ CTA rojo para compra (psicología de urgencia)
- ✅ Garantía 30 días destacada arriba (no escondida)
- ✅ Sellos de confianza (Mercado Pago, SSL)
- ✅ Bonos "GRATIS HOY" con urgencia visual

### Performance y SEO
- ✅ Lazy loading de imágenes
- ✅ CSS modular (5 archivos especializados)
- ✅ JavaScript vanilla (sin jQuery)
- ✅ Imágenes Unsplash temporales con URLs optimizadas
- ✅ Meta tags completos
- ✅ Preparado para Shopify

---

## 🛠️ Tecnologías

### Frontend
- **HTML5** → Estructura semántica
- **CSS3** → Variables, Flexbox, Grid, `clamp()`
- **JavaScript ES6** → IIFE, eventos, timer

### Framework/Librerías
- **Bootstrap 5.3.0** → Grid, componentes
- **Bootstrap Icons** → Iconografía
- **Google Fonts** → Playfair Display + Poppins

### Servicios
- **Unsplash** → Imágenes temporales de calidad
- **Mercado Pago** → Procesador de pagos (Argentina)

### Herramientas
- **Git** → Control de versiones
- **GitHub Pages** → Hosting gratuito

---

## 🗂️ Arquitectura

Arquitectura CSS modular optimizada para conversión:

```
index.html
    │
    ├─── CSS Modular (5 archivos)
    │    ├── variables.css       → Colores, espaciados, sombras
    │    ├── navbar.css          → Navegación desktop/mobile
    │    ├── hero-visual.css     → Hero product-page (NUEVO)
    │    ├── sections-visual.css → Todas las secciones visuales (NUEVO)
    │    └── responsive.css      → Media queries
    │
    └─── JavaScript (2 archivos)
         ├── ui.js               → Interfaz, navbar, FAQ, CTA flotante
         └── timer.js            → Countdown diario (3 contadores)
```

---

## 📦 Instalación

### Opción 1: Visualización Directa

```bash
git clone https://github.com/leandrocarpio/Libera-tu-luz-interior-web.git
cd Libera-tu-luz-interior-web
# Abrir index.html en el navegador
```

> ✅ **Nota:** Funciona sin servidor (usa IIFE, no ES Modules)

### Opción 2: Live Server (Recomendada)

```bash
git clone https://github.com/leandrocarpio/Libera-tu-luz-interior-web.git
cd Libera-tu-luz-interior-web
code .
# Click derecho en index.html → "Open with Live Server"
```

---

## 📁 Estructura del Proyecto

```
libera-tu-luz-interior-web/
│
├── index.html                    # Página principal (ACTUALIZADA)
├── politica-privacidad.html      # Página legal
├── terminos-condiciones.html     # Página legal (ACTUALIZADA)
├── README.md                     # Documentación (ACTUALIZADA)
├── IMAGENES_NECESARIAS.md        # Listado imágenes + prompts (NUEVO)
│
└── assets/
    ├── css/
    │   ├── variables.css         # Variables globales
    │   ├── navbar.css            # Navegación
    │   ├── hero-visual.css       # Hero product-page (NUEVO)
    │   ├── sections-visual.css   # Secciones visuales (NUEVO)
    │   └── responsive.css        # Media queries
    │
    ├── js/
    │   ├── ui.js                 # Interfaz
    │   └── timer.js              # Countdown
    │
    └── img/
        ├── Logo.png
        ├── MP_RGB_HANDSHAKE_pluma_horizontal.png
        │
        ├── hero-mockup-ebook.png              # CREAR (800x1000px)
        ├── garantia-30-dias-badge.png         # CREAR (400x400px)
        │
        ├── dolor-1-dolores-panza.jpg          # CREAR (600x800px)
        ├── dolor-2-vida-automatico.jpg        # CREAR (600x800px)
        ├── dolor-3-mente-no-para.jpg          # CREAR (600x800px)
        ├── dolor-4-vacio-existencial.jpg      # CREAR (600x800px)
        │
        ├── antes-sobreviviendo.jpg            # CREAR (1200x800px)
        ├── despues-viviendo.jpg               # CREAR (1200x800px)
        │
        ├── bono-1-cuaderno-mockup.png         # CREAR (600x800px)
        ├── bono-2-rutina-21-dias-mockup.png   # CREAR (600x800px)
        │
        └── testimonios/
            ├── testimonio-avatar-1.jpg        # CREAR (150x150px)
            ├── testimonio-avatar-2.jpg        # CREAR (150x150px)
            ├── testimonio-avatar-3.jpg        # CREAR (150x150px)
            ├── testimonio-avatar-4.jpg        # CREAR (150x150px)
            ├── testimonio-avatar-5.jpg        # CREAR (150x150px)
            ├── testimonio-avatar-6.jpg        # CREAR (150x150px)
            ├── review-foto-1.jpg              # CREAR (400x600px)
            ├── review-foto-2.jpg              # CREAR (400x600px)
            └── review-foto-3.jpg              # CREAR (400x600px)
```

---

## 🔥 Características Técnicas

### 1. Arquitectura CSS Modular

5 archivos CSS especializados para mejor mantenimiento:

```html
<link rel="stylesheet" href="assets/css/variables.css">        <!-- Variables -->
<link rel="stylesheet" href="assets/css/navbar.css">           <!-- Navbar -->
<link rel="stylesheet" href="assets/css/hero-visual.css">      <!-- Hero -->
<link rel="stylesheet" href="assets/css/sections-visual.css">  <!-- Secciones -->
<link rel="stylesheet" href="assets/css/responsive.css">       <!-- Responsive -->
```

### 2. Psicología de Colores

```css
:root {
  --primary-gold: #C9A961;       /* Valor, lujo */
  --dolor-red: #E53935;          /* Urgencia, acción */
  --beneficio-green: #2E7D32;    /* Beneficios */
  --purple-accent: #9B7EBD;      /* Espiritualidad */
}
```

### 3. Timer de Cuenta Regresiva (3 ubicaciones)

Reseteo automático diario a las 23:59:59:

- Hero (junto al precio)
- Sección Bonos (urgencia)
- Oferta Final (último empujón)

```javascript
function updateCountdown() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const diff = endOfDay - now;
    // Formato HH:MM:SS
}
setInterval(updateCountdown, 1000);
```

### 4. Diseño Visual 80/20

- 80% comunicación por imágenes
- 20% texto (solo esencial)
- Inspirado en páginas de Shopify que convierten
- Testimonios con fotos reales (no solo texto)

### 5. CTA Flotante

- Aparece al hacer scroll
- Siempre visible (mobile + desktop)
- Texto urgencia + botón directo a oferta

---

## 📸 Imágenes Necesarias

**TOTAL: 19 imágenes a crear**

Ver archivo completo: **[IMAGENES_NECESARIAS.md](IMAGENES_NECESARIAS.md)**

### Resumen por categoría:

| Categoría | Cantidad | Tamaño | Herramienta |
|-----------|----------|--------|-------------|
| **Hero mockup** | 1 | 800x1000px | Canva/Photoshop |
| **Dolores** | 4 | 600x800px | IA (Midjourney/DALL-E) |
| **Antes/Después** | 2 | 1200x800px | IA (Midjourney/DALL-E) |
| **Bonos** | 2 | 600x800px | Canva |
| **Avatares** | 6 | 150x150px | IA (Midjourney/DALL-E) |
| **Reviews** | 3 | 400x600px | Canva (mockup celular) |
| **Badge** | 1 | 400x400px | Canva |

**Actualmente:** Todas las imágenes usan placeholders de Unsplash.

---

## 🎨 Cómo Replicar este Proyecto

### 1. Clonar

```bash
git clone https://github.com/leandrocarpio/Libera-tu-luz-interior-web.git
cd Libera-tu-luz-interior-web
```

### 2. Personalizar Colores

```css
/* assets/css/variables.css */
:root {
  --primary-gold: #TU_COLOR;
  --dolor-red: #TU_COLOR;
}
```

### 3. Crear Imágenes

Ver **[IMAGENES_NECESARIAS.md](IMAGENES_NECESARIAS.md)** para:
- Nombres exactos de archivo
- Tamaños y formatos
- Prompts para IA
- URLs temporales Unsplash

### 4. Reemplazar Imágenes

Una vez creadas, reemplazar en `index.html`:
- Buscar comentarios `<!-- REEMPLAZAR POR: ... -->`
- Cambiar URL Unsplash por tu archivo local

### 5. Actualizar Contenido

- **Precio:** Buscar `$14.999` y ajustar
- **Bonos:** Actualizar nombres y valores
- **Testimonios:** Cambiar nombres, países, textos
- **FAQ:** Ajustar preguntas según tu producto

### 6. Preparar para Shopify

Esta landing está diseñada para replicarse en Shopify:
- Copiar HTML secciones
- Adaptar CSS a theme de Shopify
- Integrar Mercado Pago

---

## 💡 Para Reclutadores

### Buenas Prácticas Implementadas

✅ **Arquitectura CSS Modular**
- 5 archivos especializados (variables, navbar, hero, sections, responsive)
- Variables CSS reutilizables
- Código escalable y mantenible

✅ **Clean Code**
- Nombres semánticos descriptivos
- Comentarios útiles (no obvios)
- Funciones con responsabilidad única (IIFE)

✅ **Diseño para Conversión**
- Estructura basada en análisis de páginas que venden (Shopify)
- Diseño visual 80/20 (imágenes > texto)
- Psicología de colores aplicada
- Urgencia sin ser spam

✅ **Performance**
- Lazy loading de imágenes
- JavaScript vanilla (sin jQuery)
- Imágenes optimizadas (WebP ready)

✅ **Responsive Mobile-First**
- Touch targets 44px+
- Layout adaptativo
- Menú hamburguesa profesional
- Tipografía fluida con `clamp()`

✅ **UX/UI Profesional**
- Jerarquía visual clara
- CTA flotante siempre visible
- Garantía destacada (no escondida)
- Testimonios con fotos (credibilidad)

---

### Decisiones Técnicas

**¿Por qué diseño visual 80/20?**
→ Análisis de páginas Shopify que convierten: las personas compran con imágenes, no con texto largo

**¿Por qué CTA rojo vs. dorado?**
→ Dorado = valor/lujo (producto), Rojo = urgencia/acción (compra ahora)

**¿Por qué garantía arriba vs. al final?**
→ Reduce fricción inmediata, aumenta confianza desde el inicio

**¿Por qué 3 timers diferentes?**
→ Refuerzo de urgencia en puntos clave: hero, bonos, oferta final

**¿Por qué testimonios con fotos?**
→ Credibilidad 3x mayor que solo texto (estudio ConversionXL 2023)

---

## 👨‍💻 Autor

**Leandro Carpio**  
Frontend Developer | Landing Pages de Alta Conversión

- 📧 **Email:** leo_gabriel_carpio@hotmail.com
- 📱 **WhatsApp:** [+54 9 261 612-3777](https://wa.me/5492616123777)
- 💼 **LinkedIn:** [linkedin.com/in/leandrocarpio](https://www.linkedin.com/in/leandrocarpio)
- 🌐 **GitHub:** [@leandrocarpio](https://github.com/leandrocarpio)

---

### ¿Necesitás una landing profesional para tu negocio?

Desarrollo landing pages optimizadas para conversión:
- ✅ Diseño responsive mobile-first
- ✅ Arquitectura modular escalable
- ✅ Diseño visual 80/20 (imágenes > texto)
- ✅ Optimización para Shopify/ecommerce
- ✅ Integración Mercado Pago Argentina

📩 **Contactame:** [WhatsApp](https://wa.me/5492616123777?text=Hola,%20vi%20tu%20proyecto%20Libera%20tu%20Luz%20Interior%20y%20me%20interesa%20tu%20servicio)

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.

Ver [LICENSE](LICENSE) para más detalles.

---

<div align="center">

### ⭐ Si te gustó este proyecto, dale una estrella en GitHub

**Libera tu Luz Interior** © 2026 - Diseñado y desarrollado por **Leandro Carpio**

**Versión:** 2.0 Visual (Febrero 2026)  
**Actualización:** Diseño 80/20 optimizado para conversión

[⬆️ Volver arriba](#-libera-tu-luz-interior---landing-page-de-alta-conversión)

</div>
