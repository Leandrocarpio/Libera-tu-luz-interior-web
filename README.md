# 🌟 Libera tu Luz Interior - Landing Page Ebook

> Landing page profesional para venta de ebook de transformación personal desde el SER. Enfocada en conversión y desarrollo espiritual.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-100%25-brightgreen)

---

## 🚀 Ver la Demo Online

**[👉 Click acá para ver el sitio →](https://leandrocarpio.github.io/Libera-tu-luz-interior-web/)**

![Libera tu Luz Interior](assets/img/libera%20tu%20luz%20interior.png)

---

## 🎯 ¿Qué es este proyecto?

Landing page profesional diseñada como **embudo de ventas** para el ebook "Libera tu Luz Interior", enfocada en personas que buscan transformación personal y autoconocimiento.

**Propuesta de valor:**
- 📖 Ebook completo: 8 capítulos sobre transformación desde el SER
- 🎁 2 bonos exclusivos (Cuaderno de Trabajo + Rutina 21 Días)
- 💰 Precio: $14,999 ARS (75% de descuento)
- ✅ Garantía de 30 días

**Público objetivo:**
- Personas con ansiedad, dolores físicos sin explicación
- Quienes buscan cambio real y autoconocimiento
- Interesados en desarrollo espiritual y crecimiento personal

---

## ✨ Características Principales

### 🎨 Diseño Premium
- Hero visual con mockup del ebook
- Paleta de colores cálidos (dorados, crema, bronce)
- Tipografía elegante: Playfair Display + Poppins
- Animaciones suaves al scroll

### 🔄 Embudo de Ventas Optimizado
1. **Problema** → Identifica dolores (ansiedad, vacío, automático)
2. **Transformación** → Muestra beneficios y solución
3. **Contenido** → Presenta 8 capítulos + bonos
4. **Social Proof** → Testimonios reales con carousel
5. **Oferta** → Precio con descuento + urgencia (timer)
6. **Cierre** → CTA y garantía de devolución

### 🎠 Testimonios con Bootstrap Carousel
- 8 testimonios reales con fotos
- Autoplay cada 5 segundos
- Flechas doradas fuera de las cards (desktop)
- Líneas de paginación (no puntitos)
- Swipe táctil en mobile
- Flechas ocultas en mobile (≤991px)

### ⏱️ Timer de Urgencia
- Countdown hasta fin del día
- Se resetea automáticamente
- 3 ubicaciones estratégicas (hero, oferta)

### 📱 100% Responsive
- Mobile-first approach
- Menú hamburguesa animado
- Adaptado a todos los dispositivos
- Touch-friendly en móviles

---

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modulares y variables
- **JavaScript** - Interacciones (sin módulos ES6)
- **Bootstrap 5** - Carousel de testimonios

### Librerías
- **Bootstrap Icons** - Iconos profesionales
- **Google Fonts** - Playfair Display + Poppins

### Características Técnicas
- Arquitectura CSS modular (5 archivos separados)
- JavaScript vanilla (sin dependencias)
- Animaciones con Intersection Observer
- Accordion FAQ nativo
- Smooth scroll

---

## 📦 Instalación y Uso

### Opción 1: Ver online
Simplemente visitá: **[Demo en vivo →](https://leandrocarpio.github.io/Libera-tu-luz-interior-web/)**

### Opción 2: Descargar localmente

```bash
# Clonar repositorio
git clone https://github.com/leandrocarpio/Libera-tu-luz-interior-web.git

# Abrir con Live Server
cd Libera-tu-luz-interior-web
# Click derecho en index.html → Open with Live Server
```

**Requisitos:**
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Live Server (VS Code) o cualquier servidor local

---

## 🎨 Personalización Rápida

### 1. Cambiar colores
Editá `assets/css/variables.css`:

```css
:root {
    --primary-gold: #C9A961;   /* Dorado principal */
    --dark-gold: #A88B3D;       /* Dorado oscuro */
    --light-cream: #FFF8E7;     /* Fondo claro */
    --warm-white: #FFFEF9;      /* Blanco cálido */
}
```

### 2. Actualizar testimonios
Editá el carousel en `index.html` (línea ~435):

```html
<div class="carousel-item active">
    <div class="testimonio-card-carousel">
        <img src="TU_IMAGEN" alt="Nombre">
        <p class="testimonio-texto">"Tu testimonio acá"</p>
        <p class="testimonio-nombre-final">— Nombre, edad</p>
    </div>
</div>
```

### 3. Cambiar información de contacto
- **Email:** Buscar `Liberatuluzinterior.guia@gmail.com` y reemplazar
- **Instagram:** `https://www.instagram.com/liberatuluzinterior/`
- **Facebook:** `https://www.facebook.com/liberatuluzinterior/`

---

## 📁 Arquitectura Modular

### Estructura de archivos:
```
Libera-tu-Luz-Interior/
├── index.html                      # Página principal
├── politica-privacidad.html        # Términos legales
├── terminos-condiciones.html       # Condiciones de compra
│
└── assets/
    ├── css/
    │   ├── variables.css           # Variables globales (colores, espaciados)
    │   ├── navbar.css              # Navegación y menú hamburguesa
    │   ├── hero-visual.css         # Hero section con mockup
    │   ├── sections-visual.css     # Todas las secciones
    │   └── responsive.css          # Media queries
    │
    ├── js/
    │   ├── timer.js                # Countdown hasta fin del día
    │   └── ui.js                   # Navbar, scroll, FAQ, animaciones
    │
    └── img/
        ├── Logo.png                # Logo de la marca
        ├── mockup hero.png         # Mockup del ebook (hero)
        ├── libera tu luz interior.png  # Preview completo
        ├── bono 1.png              # Imagen bono 1
        ├── bono 2.png              # Imagen bono 2
        ├── antes.png               # Imagen "antes"
        ├── despúes.png             # Imagen "después"
        ├── dolor de panza.png      # Dolor físico
        ├── vacio.png               # Vacío existencial
        ├── vivir en automático.png # Piloto automático
        ├── mente.png               # Mente y pensamientos
        └── MP_RGB_HANDSHAKE_pluma_horizontal.png  # Logo Mercado Pago
```

### Por qué arquitectura modular:

✅ **Escalabilidad** - Fácil agregar nuevas secciones  
✅ **Mantenibilidad** - Cada archivo tiene una responsabilidad única  
✅ **Colaboración** - Varios devs pueden trabajar sin conflictos  
✅ **Performance** - Carga optimizada con preconnect  
✅ **Organización** - Código limpio y profesional  

---

## 🌟 Secciones del Sitio

### 🏠 Hero
- Mockup visual del ebook
- Precio con descuento destacado
- Timer de urgencia
- 3 beneficios quick
- CTA principal

### 😰 Dolores (Problemas)
- 4 dolores identificados con imágenes
- Conexión emocional con el usuario
- Texto empático y directo

### ✨ Transformación (Beneficios)
- 6 beneficios claros con íconos
- Enfoque en el cambio real
- Propuesta de valor

### 📖 Ebook (Contenido)
- 8 capítulos listados
- Descripción breve de cada uno
- Mockup grande del ebook

### 🎁 Bonos Exclusivos
- 2 bonos con valor monetario
- Badge de "GRATIS HOY"
- Valor total tachado

### 💬 Testimonios
- Carousel Bootstrap con 8 testimonios
- Fotos + estrellas + verificado
- Autoplay + navegación manual

### 🎯 Para Quién Es
- Lista de "Es para vos si..."
- Lista de "No es para vos si..."
- Filtra audiencia correcta

### 💰 Oferta
- Desglose de valor ($60,000 → $14,999)
- Badge 75% descuento
- Timer de urgencia
- Sellos de confianza
- CTA rojo de alta conversión

### ❓ FAQ
- Accordion con 5 preguntas frecuentes
- Respuestas claras y directas

### 📬 Contacto
- Email visible
- Redes sociales
- Enlaces a políticas

---

## 💡 Características Técnicas Destacadas

### Carousel de Testimonios (Bootstrap 5)
```javascript
// Configuración en HTML
data-bs-ride="carousel"       // Autoplay activado
data-bs-interval="5000"       // 5 segundos
data-bs-pause="hover"         // Pausa al hover
```

**Responsive:**
- Desktop: Flechas visibles fuera (left: -60px, right: -60px)
- Mobile: Flechas ocultas, solo swipe táctil

**Paginación:**
- Líneas horizontales (no puntitos)
- Inactiva: 30px × 3px (gris)
- Activa: 45px × 3px (dorado)

### Timer Countdown
```javascript
// Se resetea cada día a las 23:59:59
// 3 instancias sincronizadas
// Formato: HH:MM:SS
```

### Animaciones al Scroll
```javascript
// Intersection Observer
// Clase .fade-in se activa al entrar en viewport
// Threshold: 0.1 (10% visible)
```

---

## 🚀 Embudo de Ventas

### Flujo de Conversión:
```
1. ATRACCIÓN (Hero)
   └→ Promesa clara + Mockup visual + Precio

2. IDENTIFICACIÓN (Dolores)
   └→ "¿Te sentís identificado/a con esto?"

3. SOLUCIÓN (Transformación)
   └→ Beneficios concretos del cambio

4. CONTENIDO (Ebook + Bonos)
   └→ Qué incluye + Valor agregado

5. PRUEBA SOCIAL (Testimonios)
   └→ 8 personas reales con resultados

6. FILTRO (Para Quién)
   └→ Califica al usuario correcto

7. URGENCIA (Oferta + Timer)
   └→ Descuento limitado + Tiempo

8. OBJECIONES (FAQ)
   └→ Responde dudas comunes

9. CIERRE (CTA Final)
   └→ Última oportunidad de conversión
```

---

## 📊 Optimizaciones Aplicadas

✅ **SEO:**
- Meta description optimizada
- Títulos H1, H2 semánticos
- Alt text en todas las imágenes

✅ **Performance:**
- Preconnect a Google Fonts y CDN
- Imágenes optimizadas
- CSS minificado en variables

✅ **UX/UI:**
- Scroll suave entre secciones
- Hover states en todos los botones
- Feedback visual en interacciones

✅ **Conversión:**
- CTAs estratégicos (7 ubicaciones)
- Urgencia con timer real
- Social proof con testimonios
- Garantía de devolución

---

## 🌐 Redes Sociales

- 📸 **Instagram:** [@liberatuluzinterior](https://www.instagram.com/liberatuluzinterior/)
- 👥 **Facebook:** [Libera tu Luz Interior](https://www.facebook.com/liberatuluzinterior/)

---

## 👨‍💻 Autor

**Leandro Carpio**  
Frontend Developer | Especializado en Landing Pages de Alta Conversión

- 📧 **Email:** leo_gabriel_carpio@hotmail.com
- 📱 **WhatsApp:** [+54 261 612-3777](https://wa.me/5492616123777)
- 💼 **LinkedIn:** [linkedin.com/in/leandrocarpio](https://www.linkedin.com/in/leandrocarpio)
- 🌐 **GitHub:** [@Leandrocarpio](https://github.com/Leandrocarpio)

---

## 📄 Licencia y Uso

Este proyecto es un trabajo profesional de portfolio. Si te inspirás o usás partes del código, agradecería una mención. 🙏

---

**Libera tu Luz Interior** © 2026 - Desarrollado con ❤️ por Leandro Carpio

[⬆️ Volver arriba](#-libera-tu-luz-interior---landing-page-ebook)
