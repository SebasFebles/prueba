// Función para mostrar el portafolio
function mostrarPortafolio() {
    document.getElementById("welcome-screen").style.display = "none";  // Oculta la bienvenida
    document.getElementById("portfolio").style.display = "block";      // Muestra el portafolio
}

// Mostrar las secciones correspondientes
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    
    const activeSection = document.getElementById(section);
    activeSection.classList.add('active');
}