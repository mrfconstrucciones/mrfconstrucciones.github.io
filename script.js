// Formulario de contacto mejorado para PHP
// Muestra mensaje inmediato + maneja respuesta PHP

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contacto-form');
    const messageDiv = document.getElementById('form-message');
    
    // Mostrar mensaje de respuesta PHP (?success/?error)
    function checkUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const success = urlParams.get('success');
        const error = urlParams.get('error');
        
        if (messageDiv && success === '1') {
            messageDiv.className = 'message success-msg';
            messageDiv.innerHTML = '<strong>¡Gracias por contactarnos!</strong> Pronto le responderemos. <button class="message-close" onclick="this.parentElement.remove()">&times;</button>';
            messageDiv.style.display = 'block';
            window.history.replaceState({}, document.title, window.location.pathname);
        } else if (messageDiv && error === '1') {
            messageDiv.className = 'message error-msg';
            messageDiv.innerHTML = '<strong>Error:</strong> Inténtalo de nuevo. <button class="message-close" onclick="this.parentElement.remove()">&times;</button>';
            messageDiv.style.display = 'block';
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
    
    checkUrlParams();
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const nombre = document.getElementById('nombre').value.trim();
            const apellido = document.getElementById('apellido').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
            
            if (!nombre || !apellido || !email || !mensaje) {
                e.preventDefault();
                alert('Por favor completa todos los campos.');
                return;
            }
            // Form válido → permite POST normal a PHP
        });
    }

    // Smooth scroll (original)
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
