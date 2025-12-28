// ===== TIMER DE CUENTA REGRESIVA =====
// Cuenta regresiva hasta las 23:59:59 del día actual
// Se resetea automáticamente cada día
// Formato: HH:MM:SS (ejemplo: 02:59:49)

(function() {
    'use strict';
    
    function updateCountdown() {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        
        const diff = endOfDay - now;
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Actualizar todos los elementos con countdown
        const countdown1 = document.getElementById('countdown');
        const countdown2 = document.getElementById('countdown2');
        const countdownBonos = document.getElementById('countdown-bonos');
        
        if (countdown1) countdown1.textContent = timeString;
        if (countdown2) countdown2.textContent = timeString;
        if (countdownBonos) countdownBonos.textContent = timeString;
    }
    
    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            updateCountdown();
            setInterval(updateCountdown, 1000);
            console.log('✅ Timer inicializado');
        });
    } else {
        updateCountdown();
        setInterval(updateCountdown, 1000);
        console.log('✅ Timer inicializado');
    }
})();