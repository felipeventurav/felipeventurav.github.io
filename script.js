document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.hearts-container');
    const colors = ['#e91e63', '#f44336', '#9c27b0', '#673ab7', '#3f51b5'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        
        // Posición aleatoria en la parte inferior
        const posX = Math.random() * window.innerWidth;
        const delay = Math.random() * 3;
        const duration = 5 + Math.random() * 5; // Más lento para mejor visualización
        const size = 20 + Math.random() * 30;
        
        // Estilos dinámicos
        heart.style.left = `${posX}px`;
        heart.style.bottom = '0';
        heart.style.position = 'fixed';
        heart.style.animation = `floatUp ${duration}s linear ${delay}s forwards`;
        heart.style.fontSize = `${size}px`;
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.transform = 'translateY(0)';
        
        container.appendChild(heart);
        
        // Eliminar el corazón después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, (duration + delay) * 1000);
    }
    
    // Crear corazones periódicamente
    setInterval(createHeart, 500);
    
    // Crear algunos corazones iniciales
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 500);
    }
});
