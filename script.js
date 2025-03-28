let habilidades = [
    {
        text: "Responsabilidad y puntualidad",
        image: "https://raw.githubusercontent.com/SebasFebles/prueba/main/imagenes/responsabilidad.jpg"
    },
    {
        text: "Planificación y organización",
        image: "https://raw.githubusercontent.com/SebasFebles/prueba/main/imagenes/organizacion.jpg"
    },
    {
        text: "Habilidad lectora y comprensiva",
        image: "https://raw.githubusercontent.com/SebasFebles/prueba/main/imagenes/leer.jpeg"
    },
    {
        text: "Buena disposición para aprender y trabajar",
        image: "https://raw.githubusercontent.com/SebasFebles/prueba/main/imagenes/aprende_trabaja.jpg"
    },
    {
        text: "Aprendo absolutamente rápido",
        image: "https://raw.githubusercontent.com/SebasFebles/prueba/main/imagenes/aprendo_rapido.jpg"
    },
    {
        text: "Trabajo en equipo perfecto",
        image: "https://raw.githubusercontent.com/SebasFebles/prueba/main/imagenes/trabajo_equipo.jpg"
    }
];

let currentHabilidad = 0;

function nextHabilidad() {
    currentHabilidad++;
    if (currentHabilidad >= habilidades.length) {
        currentHabilidad = 0;
    }

    document.getElementById("habilidadText").innerText = habilidades[currentHabilidad].text;
    document.getElementById("habilidadImage").src = habilidades[currentHabilidad].image;
}