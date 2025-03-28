let habilidades = [
    {
        text: "Responsabilidad y puntualidad",
        image: "imagenes/responsabilidad.jpg"
    },
    {
        text: "Planificación y organización",
        image: "imagenes/organizacion.jpg"
    },
    {
        text: "Habilidad lectora y comprensiva",
        image: "imagenes/leer.jpeg"
    },
    {
        text: "Buena disposición para aprender y trabajar",
        image: "imagenes/aprende_trabaja.jpg"
    },
    {
        text: "Aprendo absolutamente rápido",
        image: "imagenes/aprendo_rapido.jpg"
    },
    {
        text: "Trabajo en equipo perfecto",
        image: "imagenes/trabajo_equipo.jpg"
    }
];

let currentHabilidad = 0;

// Mostrar el portafolio al hacer clic en el botón
function mostrarPortafolio() {
    console.log("Se presionó el botón para ver el portafolio"); // Depuración
    document.getElementById("welcome-screen").style.display = "none";  // Ocultar la pantalla de bienvenida
    document.getElementById("portfolio").style.display = "block";      // Mostrar el portafolio
}

// Mostrar las secciones correspondientes
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    
    const activeSection = document.getElementById(section);
    activeSection.classList.add('active');
}

// Función para cambiar las habilidades
function nextHabilidad() {
    currentHabilidad++;
    if (currentHabilidad >= habilidades.length) {
        currentHabilidad = 0;
    }

    document.getElementById("habilidadText").innerText = habilidades[currentHabilidad].text;
    document.getElementById("habilidadImage").src = habilidades[currentHabilidad].image;
}
