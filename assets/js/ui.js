// =====================================================
// UI.JS - Interfaz de Usuario (SIN MÓDULOS)
// =====================================================
// Navbar, scroll, animaciones, FAQ, formulario
// =====================================================

(function() {
    'use strict';
    
    // ==================================================
    // NAVBAR CON HAMBURGUESA - MEJORADO
    // ==================================================
    function inicializarNavbar() {
        const toggler = document.querySelector('.navbar-toggler');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-menu-link');
        const mobileCTA = document.querySelector('.mobile-cta'); // ← AÑADIDO
        
        if (!toggler || !mobileMenu) return;
        
        // Función para cerrar el menú
        function cerrarMenu() {
            toggler.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Toggle menú
        toggler.addEventListener('click', function() {
            toggler.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Cerrar al hacer click en link
        mobileLinks.forEach(function(link) {
            link.addEventListener('click', cerrarMenu);
        });
        
        // ← NUEVO: Cerrar al hacer click en el CTA también
        if (mobileCTA) {
            mobileCTA.addEventListener('click', cerrarMenu);
        }
        
        // Cerrar al hacer click fuera
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                cerrarMenu();
            }
        });
        
        // ← NUEVO: Cerrar con tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                cerrarMenu();
            }
        });
    }
    
    // ==================================================
    // SMOOTH SCROLL
    // ==================================================
    function inicializarScrollSuave() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // ==================================================
    // ANIMACIONES AL SCROLL
    // ==================================================
    function inicializarAnimaciones() {
        const observador = new IntersectionObserver(
            function(entradas) {
                entradas.forEach(function(entrada) {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add('visible');
                        observador.unobserve(entrada.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        document.querySelectorAll('.fade-in').forEach(function(el) {
            observador.observe(el);
        });
    }
    
    // ==================================================
    // FAQ ACCORDION
    // ==================================================
    function inicializarFAQ() {
        document.querySelectorAll('.faq-question').forEach(function(question) {
            question.addEventListener('click', function() {
                const faqItem = question.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // Cerrar todos
                document.querySelectorAll('.faq-item').forEach(function(item) {
                    item.classList.remove('active');
                });
                
                // Abrir el clickeado si no estaba activo
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });
    }
    
    // ==================================================
    // FORMULARIO CONTACTO
    // ==================================================
    function inicializarFormulario() {
        const form = document.getElementById('contact-form');
        const mensaje = document.getElementById('form-message');
        
        if (!form) return;
        
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.btn-form-submit');
            const originalText = submitBtn.innerHTML;
            
            // Loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Enviando...';
            
            // Limpiar mensaje anterior
            mensaje.style.display = 'none';
            mensaje.className = 'form-message';
            
            const formData = new FormData(form);
            
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                
                if (response.ok) {
                    // ÉXITO
                    mensaje.className = 'form-message success';
                    mensaje.innerHTML = '<i class="bi bi-check-circle-fill"></i> ¡Mensaje enviado con éxito! Te responderemos pronto.';
                    mensaje.style.display = 'block';
                    form.reset();
                    
                    setTimeout(function() {
                        mensaje.style.display = 'none';
                    }, 8000);
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                console.error('Error:', error);
                
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                
                mensaje.className = 'form-message error';
                mensaje.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Hubo un error. Intenta de nuevo o escríbenos a: Liberatuluzinterior.guia@gmail.com';
                mensaje.style.display = 'block';
            }
        });
    }
    
    // ==================================================
    // INICIALIZACIÓN
    // ==================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            inicializarNavbar();
            inicializarScrollSuave();
            inicializarAnimaciones();
            inicializarFAQ();
            inicializarFormulario();
            console.log('✅ UI inicializada');
        });
    } else {
        inicializarNavbar();
        inicializarScrollSuave();
        inicializarAnimaciones();
        inicializarFAQ();
        inicializarFormulario();
        console.log('✅ UI inicializada');
    }
})();