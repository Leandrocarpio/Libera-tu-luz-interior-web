# ✨ Libera tu Luz Interior - Landing Page de Conversión

> Landing page profesional para venta de ebook de transformación personal. Arquitectura CSS modular, psicología de colores aplicada y diseño optimizado para conversión.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-100%25-brightgreen)
![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

---

## 🚀 Demo en Vivo

**[Ver Demo →](https://leandrocarpio.github.io/Libera-tu-luz-interior-web/)**

![Hero Libera tu Luz Interior](https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&h=400&fit=crop)

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Arquitectura](#️-arquitectura)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Características Técnicas](#-características-técnicas)
- [Cómo Replicar](#-cómo-replicar-este-proyecto)
- [Para Reclutadores](#-para-reclutadores)
- [Autor](#-autor)
- [Licencia](#-licencia)

---

## 🎯 Descripción

**Libera tu Luz Interior** es una landing page de alta conversión para venta de ebook de transformación personal. Proyecto desarrollado para portfolio profesional, demostrando arquitectura CSS modular, psicología de colores aplicada y diseño UX/UI optimizado para conversión.

### Objetivos del Proyecto

- **Para reclutadores:** Código limpio, arquitectura modular y buenas prácticas
- **Para clientes:** Diseño persuasivo con alta tasa de conversión
- **Para desarrolladores:** Código documentado y fácil de replicar

---

## ✨ Características

### Diseño y UX
- ✅ Hero full-screen con text-shadow reforzado (sin overlay oscuro)
- ✅ Diseño responsive mobile-first
- ✅ Menú hamburguesa con overlay fullscreen
- ✅ Smooth scroll entre secciones
- ✅ Animaciones con IntersectionObserver

### Funcionalidades
- ✅ Sección Problema (4 pain points con imágenes)
- ✅ Sección Beneficios (6 beneficios con iconos)
- ✅ Ebook (mockup + 7 capítulos)
- ✅ Bonos Exclusivos (3 bonos con valores)
- ✅ Testimonios con carousel Bootstrap (6 reviews + avatares)
- ✅ FAQ con accordion (5 preguntas)
- ✅ Timer de cuenta regresiva (reseteo diario automático)
- ✅ Formulario con Formspree (validación + feedback)
- ✅ Páginas legales (Privacidad + Términos)

### Conversión y Urgencia
- ✅ Timer countdown hasta las 23:59:59
- ✅ Badge descuento 75% (rojo vibrante)
- ✅ CTA rojo para compra (psicología de urgencia)
- ✅ Garantía de 30 días destacada
- ✅ Sellos de confianza (Mercado Pago, SSL)

### Performance y SEO
- ✅ Lazy loading de imágenes
- ✅ CSS modular (5 archivos especializados)
- ✅ JavaScript vanilla (sin jQuery)
- ✅ robots.txt y sitemap.xml
- ✅ Meta tags completos

---

## 🛠️ Tecnologías

### Frontend
- **HTML5** → Estructura semántica
- **CSS3** → Variables, Flexbox, Grid, `clamp()`
- **JavaScript ES6** → IIFE, eventos, timer

### Framework/Librerías
- **Bootstrap 5.3.0** → Grid, carousel, componentes
- **Bootstrap Icons** → Iconografía
- **Google Fonts** → Playfair Display + Poppins

### Servicios
- **Formspree** → Gestión de formularios
- **Unsplash** → Imágenes de calidad

### Herramientas
- **Git** → Control de versiones
- **GitHub Pages** → Hosting gratuito

---

## 🗂️ Arquitectura

Arquitectura CSS modular para máxima escalabilidad:

```
index.html
    │
    ├─── CSS Modular (5 archivos)
    │    ├── variables.css    → Colores, espaciados, sombras
    │    ├── navbar.css       → Navegación desktop/mobile
    │    ├── hero.css         → Hero full-screen
    │    ├── sections.css     → Todas las secciones
    │    └── responsive.css   → Media queries
    │
    └─── JavaScript (2 archivos)
         ├── ui.js            → Interfaz, navbar, formulario, FAQ
         └── timer.js         → Countdown diario
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

### Opción 3: Python

```bash
git clone https://github.com/leandrocarpio/Libera-tu-luz-interior-web.git
cd Libera-tu-luz-interior-web
python -m http.server 8000
# Abrir: http://localhost:8000
```

---

## 📁 Estructura del Proyecto

```
libera-tu-luz-interior-web/
│
├── index.html                  # Página principal
├── politica-privacidad.html    # Página legal
├── terminos-condiciones.html   # Página legal
├── robots.txt                  # SEO
├── sitemap.xml                 # SEO
├── README.md                   # Documentación
├── LICENSE                     # Licencia MIT
│
└── assets/
    ├── css/
    │   ├── variables.css       # Variables globales
    │   ├── navbar.css          # Navegación
    │   ├── hero.css            # Hero
    │   ├── sections.css        # Secciones
    │   └── responsive.css      # Media queries
    │
    ├── js/
    │   ├── ui.js               # Interfaz
    │   └── timer.js            # Countdown
    │
    └── img/
        ├── Logo.png
        ├── Mockup.png
        ├── MP_RGB_HANDSHAKE_pluma_horizontal.png
        ├── testimonios/        # 6 avatares
        └── dolores/            # 4 imágenes pain points
```

---

## 🔥 Características Técnicas

### 1. Arquitectura CSS Modular

5 archivos CSS especializados para mejor mantenimiento:

```html
<link rel="stylesheet" href="assets/css/variables.css">   <!-- Variables -->
<link rel="stylesheet" href="assets/css/navbar.css">      <!-- Navbar -->
<link rel="stylesheet" href="assets/css/hero.css">        <!-- Hero -->
<link rel="stylesheet" href="assets/css/sections.css">    <!-- Secciones -->
<link rel="stylesheet" href="assets/css/responsive.css">  <!-- Responsive -->
```

### 2. Psicología de Colores

```css
:root {
  --primary-gold: #C9A961;      /* Valor, lujo */
  --dolor-red: #E53935;          /* Urgencia, acción */
  --beneficio-green: #2E7D32;    /* Beneficios */
  --purple-accent: #9B7EBD;      /* Espiritualidad */
}
```

### 3. Timer de Cuenta Regresiva

Reseteo automático diario a las 23:59:59:

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

### 4. Menú Hamburguesa Optimizado

- Overlay fullscreen en mobile
- Cierre con click, ESC o click en CTA
- Sin scroll del body cuando está abierto

### 5. Testimonios con Bootstrap Carousel

- 6 testimonios con avatares reales
- Flechas fuera del contenido (desktop)
- Solo swipe en mobile

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

### 3. Cambiar Contenido

- **Hero:** `index.html` línea 92-95
- **Dolores:** Reemplazar imágenes en `assets/img/dolores/`
- **Testimonios:** Actualizar `assets/img/testimonios/` y textos
- **Mockup:** Cambiar `assets/img/Mockup.png`

### 4. Configurar Formulario

```html
<!-- index.html línea 740 -->
<form action="https://formspree.io/f/TU_FORM_ID" method="POST">
```

Obtener Form ID en [formspree.io](https://formspree.io)

### 5. Actualizar Redes Sociales

```html
<!-- Footer -->
<a href="https://www.instagram.com/TU_USUARIO">Instagram</a>
<a href="https://www.facebook.com/TU_PAGINA">Facebook</a>
```

### 6. Páginas Legales

- Editar `politica-privacidad.html`
- Editar `terminos-condiciones.html`
- Cambiar email, nombre del negocio, políticas

---

## 💡 Para Reclutadores

### Buenas Prácticas Implementadas

✅ **Arquitectura CSS Modular**
- 5 archivos especializados
- Variables CSS reutilizables
- Código escalable

✅ **Clean Code**
- Nombres semánticos
- Comentarios útiles
- Funciones con responsabilidad única

✅ **Performance**
- Lazy loading
- IntersectionObserver
- JavaScript vanilla (sin jQuery)

✅ **Responsive Mobile-First**
- Touch targets 44px+
- Layout adaptativo
- Tipografía fluida con `clamp()`

✅ **UX/UI para Conversión**
- Psicología de colores aplicada
- Jerarquía visual clara
- Feedback inmediato
- Timer de urgencia

✅ **SEO y Compliance**
- robots.txt y sitemap.xml
- Páginas legales incluidas
- Meta tags completos

---

### Decisiones Técnicas

**¿Por qué CSS modular?**
→ Facilita mantenimiento, permite trabajo en paralelo, código reutilizable

**¿Por qué JavaScript Vanilla?**
→ Mejor performance, jQuery en desuso, 87 KB menos de descarga

**¿Por qué IIFE vs ES Modules?**
→ Funciona sin servidor, compatible con navegadores antiguos

**¿Por qué CTA rojo?**
→ Psicología de colores: urgencia + acción (usado por Amazon, Mercado Libre)

**¿Por qué Formspree?**
→ Solución MVP sin backend, apropiado para landing estáticas

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
- ✅ Psicología de colores aplicada
- ✅ SEO y performance optimizados

📩 **Contactame:** [WhatsApp](https://wa.me/5492616123777?text=Hola,%20vi%20tu%20proyecto%20Libera%20tu%20Luz%20Interior%20y%20me%20interesa%20tu%20servicio)

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.

```
MIT License

Copyright (c) 2025 Leandro Carpio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

Ver [LICENSE](LICENSE) para más detalles.

---

<div align="center">

### ⭐ Si te gustó este proyecto, dale una estrella en GitHub

**Libera tu Luz Interior** © 2025 - Diseñado y desarrollado por **Leandro Carpio**

[⬆️ Volver arriba](#-libera-tu-luz-interior---landing-page-de-conversión)

</div>