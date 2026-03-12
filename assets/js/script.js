/*
localStorage.clear();
*/



/* ============================= */
/*         galeria filtro        */   /*nuevo*/
/* ============================= */


const botonesFiltro = document.querySelectorAll(".galeria__filtro-boton");

const todasLasCards = document.querySelectorAll(".galeria__card");

const todasLasSecciones = document.querySelectorAll(".galeria__seccion");

// Recorremos cada botón
for (let i = 0; i < botonesFiltro.length; i++) {
    const boton = botonesFiltro[i];

    // Añadimos evento click a cada botón
    boton.addEventListener("click", function() {

        // Quitamos clase activo de todos los botones
        for (const boton of botonesFiltro) {
            boton.classList.remove("galeria__filtro-boton--activo");
        }

        // Ponemos clase activo al botón que se clicó
        this.classList.add("galeria__filtro-boton--activo");

        // Definimos qué filtro aplicamos
        let filtro = "";

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
        for (const card of todasLasCards) {
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
        for (const seccion of todasLasSecciones) {
            // Buscamos las cards visibles dentro de esta sección
            const cardsVisibles = seccion.querySelectorAll(".galeria__card:not(.galeria__card--oculta)");    // Selecciona todas las card que no (not) tengan la oculta

            // Si no hay cards visibles, ocultamos la sección; si hay, la mostramos
            if (cardsVisibles.length === 0) {
                seccion.style.display = "none";
            } else {
                seccion.style.display = "";
            }
        }
        

    });
}



/* =================================== */
/*    modo manual boton claro/oscuro   */
/* =================================== */
const botonModo = document.querySelector(".modo-boton");
const body = document.body;

if (botonModo != null) {

    function aplicarModo(modoElegido) {

        body.classList.remove("modo-claro");
        body.classList.remove("modo-oscuro");

        body.classList.add(modoElegido);

        localStorage.setItem("modo", modoElegido);

        let esModoOscuro = false;

        if (modoElegido == "modo-oscuro") {
            esModoOscuro = true;
        }

        if (esModoOscuro == true) {
            botonModo.setAttribute("aria-pressed", "true");
            botonModo.setAttribute("aria-label", "Cambiar a modo claro");
            botonModo.setAttribute("title", "Cambiar a modo claro");
        } else {
            botonModo.setAttribute("aria-pressed", "false");
            botonModo.setAttribute("aria-label", "Cambiar a modo oscuro");
            botonModo.setAttribute("title", "Cambiar a modo oscuro");
        }
    }

    function inicializarModo() {

        const modoGuardado = localStorage.getItem("modo");

        if (modoGuardado == "modo-claro" || modoGuardado == "modo-oscuro") {

            aplicarModo(modoGuardado);

        } else {

            const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;

            if (prefiereOscuro == true) {
                aplicarModo("modo-oscuro");
            } else {
                aplicarModo("modo-claro");
            }
        }
    }

    botonModo.addEventListener("click", function () {

        const tieneModoOscuro = body.classList.contains("modo-oscuro");

        if (tieneModoOscuro == true) {
            aplicarModo("modo-claro");
        } else {
            aplicarModo("modo-oscuro");
        }

    });

    inicializarModo();
}


/* ============================= */
/*        anecdotas blog         */
/* ============================= */

function obtenerAnecdotas() {
    const datosGuardados = localStorage.getItem("anecdotas");

    if (datosGuardados === null) {
        return [];
    }

    const datosConvertidos = JSON.parse(datosGuardados);

    if (Array.isArray(datosConvertidos)) {
        return datosConvertidos;
    }

    return [];
}

function guardarAnecdotas(listaAnecdotas) {
    const datosEnTexto = JSON.stringify(listaAnecdotas);
    localStorage.setItem("anecdotas", datosEnTexto);
}

function crearArticuloAnecdota(anecdota) {

    const articulo = document.createElement("article");
    articulo.className = "entrada";

    const figura = document.createElement("figure");
    figura.className = "entrada__figura";

    const imagen = document.createElement("img");
    imagen.className = "entrada__imagen";
    imagen.alt = "Imagen aportada por cliente";

    if (anecdota.imagen && anecdota.imagen !== "") {
        imagen.src = anecdota.imagen;
    } else {
        imagen.src = "https://picsum.photos/200/200";
    }

    const leyenda = document.createElement("figcaption");
    leyenda.className = "entrada__leyenda";

    const textoLeyenda = "Aportada por " + anecdota.autor + ".";
    leyenda.textContent = textoLeyenda;

    figura.appendChild(imagen);
    figura.appendChild(leyenda);

    const cabecera = document.createElement("header");
    cabecera.className = "entrada__cabecera";

    const titulo = document.createElement("h3");
    titulo.className = "entrada__titulo";
    titulo.textContent = anecdota.titulo;

    const meta = document.createElement("p");
    meta.className = "entrada__meta";

    const textoMeta = anecdota.fecha + " — por " + anecdota.autor;
    meta.textContent = textoMeta;

    cabecera.appendChild(titulo);
    cabecera.appendChild(meta);

    const parrafoTexto = document.createElement("p");
    parrafoTexto.className = "entrada__texto";
    parrafoTexto.textContent = anecdota.texto;

    articulo.appendChild(figura);
    articulo.appendChild(cabecera);
    articulo.appendChild(parrafoTexto);

    return articulo;
}

function renderizarAnecdotas() {

    const contenedorRejilla = document.querySelector(".blog__rejilla");

    if (contenedorRejilla === null) {
        return;
    }

    const listaAnecdotas = obtenerAnecdotas();
    for (const anecdotaActual of listaAnecdotas) {
        const articuloCreado = crearArticuloAnecdota(anecdotaActual);
        contenedorRejilla.appendChild(articuloCreado);
    }
}

function configurarFormularioAnecdota() {

    const formulario = document.querySelector(".anecdota-form");

    if (formulario === null) {
        return;
    }

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const inputTitulo = document.querySelector(".anecdota-input-titulo");
        const inputAutor = document.querySelector(".anecdota-input-autor");
        const inputFecha = document.querySelector(".anecdota-input-fecha");
        const inputImagen = document.querySelector(".anecdota-input-imagen");
        const inputTexto = document.querySelector(".anecdota-input-texto");

        const titulo = inputTitulo.value.trim();
        const autor = inputAutor.value.trim();
        const fecha = inputFecha.value;
        const imagen = inputImagen.value.trim();
        const texto = inputTexto.value.trim();

        if (titulo === "" || autor === "" || fecha === "" || texto === "") {
            return;
        }

        const listaAnecdotas = obtenerAnecdotas();

        const nuevaAnecdota = {
            titulo: titulo,
            autor: autor,
            fecha: fecha,
            imagen: imagen,
            texto: texto
        };

        listaAnecdotas.unshift(nuevaAnecdota);

        guardarAnecdotas(listaAnecdotas);

        window.location.href = "./blog.html";
    });
}

renderizarAnecdotas();
configurarFormularioAnecdota();


