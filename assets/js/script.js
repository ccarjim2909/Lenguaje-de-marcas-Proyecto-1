
/* ============================= */
/*         galeria filtro        */   /*nuevo*/
/* ============================= */

// Guardamos todos los botones de filtro
var botonesFiltro = document.querySelectorAll(".galeria__filtro-boton");
// Guardamos todas las cards
var todasLasCards = document.querySelectorAll(".galeria__card");
// Guardamos todas las secciones
var todasLasSecciones = document.querySelectorAll(".galeria__seccion");

// Recorremos cada botón
for (var i = 0; i < botonesFiltro.length; i++) {
    var boton = botonesFiltro[i];

    // Añadimos evento click a cada botón
    boton.addEventListener("click", function() {

        // Quitamos clase activo de todos los botones
        for (var btn of botonesFiltro) {
            btn.classList.remove("galeria__filtro-boton--activo");
        }

        // Ponemos clase activo al botón que se clicó
        this.classList.add("galeria__filtro-boton--activo");

        // Definimos qué filtro aplicamos
        var filtro = "";

        if (this.classList.contains("filtro-todos")) {
            filtro = "todos";
        } else if (this.classList.contains("filtro-local")) {
            filtro = "local";
        } else if (this.classList.contains("filtro-cafe")) {
            filtro = "cafe";
        } else if (this.classList.contains("filtro-te")) {
            filtro = "te";
        } else if (this.classList.contains("filtro-frias")) {
            filtro = "frias";
        } else if (this.classList.contains("filtro-postres")) {
            filtro = "postres";
        } else if (this.classList.contains("filtro-bebidas")) {
            filtro = "bebidas";
        }

        // Recorremos todas las cards
        for (var card of todasLasCards) {
            if (filtro === "todos") {
                card.classList.remove("galeria__card--oculta");
            } else if (filtro === "bebidas") {
                if (card.classList.contains("cafe") || card.classList.contains("te") || card.classList.contains("frias")) {
                    card.classList.remove("galeria__card--oculta");
                } else {
                    card.classList.add("galeria__card--oculta");
                }
            } else {
                if (card.classList.contains(filtro)) {
                    card.classList.remove("galeria__card--oculta");
                } else {
                    card.classList.add("galeria__card--oculta");
                }
            }
        }

        // Recorremos todas las secciones para ocultar las que no tengan cards visibles
        for (var seccion of todasLasSecciones) {
            // Buscamos las cards visibles dentro de esta sección
            var cardsVisibles = seccion.querySelectorAll(".galeria__card:not(.galeria__card--oculta)");

            // Si no hay cards visibles, ocultamos la sección; si hay, la mostramos
            if (cardsVisibles.length === 0) {
                seccion.style.display = "none";
            } else {
                seccion.style.display = "";
            }
        }

    });
}


/* ============================= */
/*         boton oscuro          */   /*nuevo*/
/* ============================= */

/*

// Seleccionamos todos los botones con clase .modo-boton
const botonesModo = document.querySelectorAll(".modo-boton");
const body = document.body;

// Detectar preferencia guardada o del sistema
function inicializarModo() {
    const modoGuardado = localStorage.getItem("modo");

    if (modoGuardado) {
        body.classList.add(modoGuardado);
    } else {
        // Detectar preferencia del sistema
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            body.classList.add("modo-oscuro");
            localStorage.setItem("modo", "modo-oscuro");
        } else {
            body.classList.add("modo-claro");
            localStorage.setItem("modo", "modo-claro");
        }
    }
    actualizarIconos();
}

// Función para actualizar los iconos de todos los botones
function actualizarIconos() {
    botonesModo.forEach(btn => {
        if (body.classList.contains("modo-oscuro")) {
            btn.textContent = "🌙";
        } else {
            btn.textContent = "☀️";
        }
    });
}

// Evento para todos los botones
botonesModo.forEach(btn => {
    btn.addEventListener("click", () => {
        if (body.classList.contains("modo-oscuro")) {
            body.classList.replace("modo-oscuro", "modo-claro");
            localStorage.setItem("modo", "modo-claro");
        } else if (body.classList.contains("modo-claro")) {
            body.classList.replace("modo-claro", "modo-oscuro");
            localStorage.setItem("modo", "modo-oscuro");
        } else {
            // Si no hay clase, detecta sistema y cambia
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                body.classList.add("modo-oscuro");
                localStorage.setItem("modo", "modo-oscuro");
            } else {
                body.classList.add("modo-claro");
                localStorage.setItem("modo", "modo-claro");
            }
        }
        actualizarIconos();
    });
});

// Inicializamos al cargar la página
inicializarModo();

*/
