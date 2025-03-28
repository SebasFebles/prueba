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

function nextHabilidad() {
    currentHabilidad++;
    if (currentHabilidad >= habilidades.length) {
        currentHabilidad = 0;
    }

    document.getElementById("habilidadText").innerText = habilidades[currentHabilidad].text;
    document.getElementById("habilidadImage").src = habilidades[currentHabilidad].image;
}