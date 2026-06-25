// Seleccionamos todos los elementos que tienen la clase 'animar'
const elementosAnimables = document.querySelectorAll('.animar');

// Configuramos el "Observador"
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        // Si el elemento entra en la pantalla del usuario
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible'); // Activa la animación CSS
            
            // Opcional: Si quieres que la animación ocurra solo la primera vez, descomenta la siguiente línea:
            // observador.unobserve(entrada.target);
        } else {
            // Si sale de la pantalla, le quitamos la clase para que se vuelva a animar al regresar
            entrada.target.classList.remove('visible'); 
        }
    });
}, {
    // El elemento debe estar al menos al 15% visible en pantalla para animarse
    threshold: 0.15 
});

// Le decimos al observador que vigile cada elemento
elementosAnimables.forEach(elemento => {
    observador.observe(elemento);
});