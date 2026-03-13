# 🌿 Tardeos de Café  

## ☕ Descripción del proyecto y temática elegida  

**Tardeos de Café** es un sitio web desarrollado como proyecto del módulo de **Lenguaje de Marcas**.  
La temática elegida es una **cafetería artesanal** que busca transmitir calidez, cercanía y pasión por el buen café.  

El objetivo del sitio es ofrecer un espacio digital donde los clientes puedan conocer la historia del negocio, su menú, sus productos y su filosofía basada en el comercio justo, la sostenibilidad y la atención personalizada.  

El proyecto está construido íntegramente con **HTML5**, empleando una estructura semántica y buenas prácticas de accesibilidad, además de organizar el contenido en secciones claras y fáciles de navegar.  

---

## 🧭 Estructura del sitio  

El sitio está compuesto por **seis páginas principales**, todas enlazadas entre sí a través de un menú de navegación común.  
A continuación se detalla el contenido de cada una:

### 🏠 `index.html` – Página de inicio  
- Presenta la cafetería con un mensaje de bienvenida y un eslogan: *"Tu rincón de sabor y charlita"*.  
- Incluye una breve descripción del local y su filosofía de trabajo.  
- Muestra una imagen principal y enlaces hacia el menú.  
- Contiene una sección de “Favoritos del día” con varios artículos destacados (café helado, tarta de chocolate, café bombón).  
- Sección final donde se expone el compromiso de la empresa con el comercio justo y los productos naturales.  
- Pie de página con información de contacto y horarios.

---

### 📞 `contacto.html` – Página de contacto  
- Contiene un texto introductorio invitando al usuario a comunicarse con la cafetería.  
- Incluye un **formulario de contacto** dividido en tres `fieldset`:  
  1. Datos personales (nombre, email, teléfono)  
  2. Motivo del contacto (reserva, sugerencia, empleo, proveedores)  
  3. Confirmación y aceptación de la política de privacidad.  
- También ofrece información de contacto directa con dirección, teléfono y correo electrónico.  
- Se complementa con una imagen del exterior del local y un pie de página con horarios.  

---

### 🖼️ `galeria.html` – Página de galería  
- Presenta una colección de imágenes que muestran el ambiente del local y sus productos.  
- Se divide en dos secciones principales:  
  - **El local**: incluye fotos del interior, la terraza y el personal.  
  - **Nuestros cafés y postres**: muestra bebidas y tartas elaboradas artesanalmente.  
- Cada imagen tiene su correspondiente descripción (`figcaption`) y texto alternativo (`alt`) para accesibilidad.  
- Cierra con el mismo pie de página que las demás páginas.  

---

### 📖 `about.html` – Página “Nosotros” *(pendiente de completar)*  
- Expone la historia y filosofía del negocio bajo el título *“Nuestra historia”*.  
- Presenta los orígenes del local: nació en 2023 con la idea de ofrecer un lugar donde disfrutar del café de forma sostenible.  
- Incluye imágenes de la cafetería con vistas de Cádiz y una tabla con los horarios de apertura.  
- Sección dedicada a la **filosofía** del local, centrada en la cercanía, el cuidado de los detalles y la sostenibilidad.  
- Apartado final con el **equipo humano**, destacando a:  
  - *Cristian Carrasco*, barista ayudante.  
  - *María I. Jiménez*, fundadora y barista principal con más de 10 años de experiencia.  

---

### 🍰 `servicios.html` – Página “Menú” *(pendiente de completar)*  
- Presenta los servicios que ofrece la cafetería más allá del café tradicional.  
- Se divide en dos bloques principales:  
  1. **Cafetería y desayunos**  
     - *Desayunos completos* con bollería artesanal y productos locales.  
     - *Cafés fríos y especiales*, como el café bombón o el café helado con leche.  
  2. **Más que una cafetería**  
     - *Zona Wi-Fi y trabajo*: espacio con conexión rápida y enchufes para estudiar o trabajar.  
     - *Eventos y catas*: degustaciones, pequeños conciertos acústicos y talleres de café.  
     - *Pedidos para llevar*: todos los productos disponibles en envases sostenibles y biodegradables.  
- Se incluyen imágenes y descripciones (`figcaption`) en cada artículo para reforzar el contenido visual.  

---

### ✍️ `blog.html` – Página “Blog” *(pendiente de completar)*  
- Espacio dedicado a compartir anécdotas, noticias y momentos especiales del día a día en la cafetería.  
- Contiene tres artículos destacados:  
  1. **Visita sorpresa de la cantante Emily Armstrong** – relato de una actuación improvisada en la terraza del local.  
  2. **El día que se nos inundó la terraza** – historia divertida sobre una tormenta inesperada que terminó en risas y música.  
  3. **Concurso de postres caseros** – crónica del primer concurso organizado en el local, donde la “abuela de Antonio” fue la ganadora con su tarta de almendra y limón.  
- Cada publicación incluye título, fecha, autor, imagen ilustrativa y texto con tono cercano y ameno.  

---

## 🧩 Decisiones de diseño estructural tomadas  

1. **Estructura semántica:**  
   Todas las páginas emplean etiquetas HTML5 apropiadas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) para mejorar la organización, accesibilidad y posicionamiento SEO.  

2. **Navegación unificada:**  
   Se ha implementado un menú común en todas las páginas con enlaces relativos, facilitando una navegación fluida entre secciones.  

3. **Separación de contenido y estilo:**  
   Aunque en este repositorio se centra el desarrollo HTML, se prevé el uso de una hoja de estilos externa (`css/`) para mantener una estructura limpia y escalable.  

4. **Accesibilidad y usabilidad:**  
   Todas las imágenes incluyen descripciones (`alt`) y textos de apoyo (`figcaption`).  
   El formulario utiliza etiquetas y `fieldset` para mejorar la comprensión y accesibilidad.  

5. **Contenido visual y textual equilibrado:**  
   Cada página combina texto descriptivo con imágenes de calidad para reforzar la identidad del negocio.  

6. **Consistencia visual:**  
   El encabezado, pie de página y estilo general se repiten en todas las páginas, creando una experiencia coherente y profesional.  

7. **Diseño adaptable (responsive):**  
   El sitio está estructurado de forma que pueda adaptarse fácilmente a distintos dispositivos con una futura integración de CSS responsive.  

---

🎨 Informe de Estilos CSS3 y Validación Final (Fase 2)
------------------------------------------------------

El proyecto "Tardeos de Café" ha pasado de ser una estructura semántica a un producto visualmente completo, funcional y adaptable, cumpliendo con todos los criterios de estilo y responsividad solicitados.

### 1\. Hoja de Estilos Única y Organizada

El proyecto utiliza un solo archivo, **`style.css`**, para gestionar todos los estilos del sitio, asegurando coherencia y eficiencia.

-   **Organización y Estructura:** El código CSS está organizado de manera **modular** y estructurado mediante comentarios (`/* =====... */`) que dividen el archivo en secciones claras (ROOT, HEADER, FOOTER, INDEX, SERVICIOS, ABOUT, BLOG, CONTACTO, GALERÍA).

-   **Variables CSS (`:root`):** Se ha implementado un sistema de variables CSS para los valores reutilizables, facilitando la gestión y el cambio de tema.

    -   **Paleta de colores:** Definida con variables como `--cafe-oscuro`, `--crema`, `--texto`, etc..

    -   **Tipografías:** Definidas como `--titulos` y `--texto-principal`.

-   **Metodología BEM (Block Element Modifier):** Se utiliza una convención de nomenclatura clara y consistente, evidente en clases como `encabezado__titulo`, `navegacion__enlace`, `pie__bloque--izquierda`, `bienvenida__boton`, etc., lo que mejora la legibilidad y escalabilidad del CSS.

### 2\. Diseño Responsive

-   **Fundamentos Responsive (HTML):** Se incluyó la etiqueta esencial `<meta name="viewport" content="width=device-width, initial-scale=1.0">` en **todas las páginas** (`index.html`, `servicios.html`, `about.html`, `blog.html`, `contacto.html`, `galeria.html`).

-   **Layout Flexible:** El CSS utiliza modelos de layout modernos como **Flexbox** (e.g., para `.navegacion__lista` y `.pie__contenedor`) y **CSS Grid** (e.g., para `.bienvenida`, `.blog__rejilla`, `.galeria__rejilla` y `.rejilla-2`), asegurando que el contenido se reorganice de forma flexible.

-   **Contenido Multimedia:** Las imágenes (`.bienvenida__imagen img`, `.entrada__imagen`, etc.) usan `width: 100%` y `height: auto`, asegurando que el contenido multimedia se adapte correctamente al tamaño del contenedor.

### 3\. Dark Mode 🌙

Se ha implementado soporte completo para el modo oscuro, demostrando un enfoque moderno y accesible en la experiencia de usuario.

-   **Detección de Preferencias:** Se utiliza la *media query* **`@media (prefers-color-scheme: dark)`** para detectar automáticamente la preferencia del sistema operativo del usuario.

-   **Cambio de Tema con Variables:** Dentro de la media query, las variables de color (`:root`) se redefinen a una paleta monocromática oscura (`--crema: #222222;`, `--texto: #f5f5f5;`, etc.), facilitando el cambio de tema en todo el sitio de forma centralizada.

### 4\. Transiciones y Animaciones

Se han incorporado transiciones suaves y una animación sutil para enriquecer la interactividad sin ser intrusivo.

-   **Transiciones Suaves:** Elementos interactivos como los enlaces de la navegación (`.navegacion__enlace`) utilizan la propiedad `transition` para un cambio de estado suave, incluyendo `background-color`, `transform`, y `opacity`.

-   **Animación de Valor:** Se ha incluido una animación sutil en los elementos de la galería (`.galeria__item`) que aplica un `transform: scale(1.05)` al hacer `hover` sobre la imagen, proporcionando una respuesta visual clara y atractiva que aporta valor a la experiencia de usuario.

-   **Movimiento Reducido:** La naturaleza de las transiciones implementadas (suaves y breves) minimiza el riesgo de fatiga visual o mareos.

### 5\. Tipografía y Jerarquía Visual

-   **Jerarquía Visual Consistente:** La jerarquía de encabezados (`h1` a `h4`) en el HTML se refuerza con estilos CSS claros (usando la variable `--titulos`) para diferenciar los títulos principales, subtítulos de sección y nombres de productos, como `.encabezado__titulo`, `.servicios__titulo`, y `.entrada__titulo`.

-   **Legibilidad y Contraste:**

    -   El contraste de color es alto, especialmente entre el color de fondo (`--crema` o `--crema-suave`) y el texto (`--texto` o `--cafe-oscuro`) en modo claro.

    -   En **Modo Oscuro**, el contraste se optimiza redefiniendo el fondo a `#121212` y el texto a `#f5f5f5`, cumpliendo con los estándares de accesibilidad para la legibilidad.

    -   Se utiliza `line-height: 1.6` en la mayoría de los párrafos (`.entrada__texto`, `.sobre__texto`) para optimizar la legibilidad del cuerpo de texto.

---

📅 🚀 Informe de Mejoras y Funcionalidad (Fase 3)
------------------------------------------------

En esta fase se han incorporado mejoras que no estaban en la fase anterior, centradas en **responsive**, **nueva página funcional** y **lógica JavaScript**.

### 1\. Responsive Real y Ajustes Mobil

-   **Media queries adicionales:** Se añadieron breakpoints para escritorio y móvil para adaptar rejillas, paddings y tipografías sin cambiar la estructura general.
-   **Encabezado adaptable:** La barra del header se reorganiza en pantallas pequeñas, manteniendo el botón de modo y la navegación accesible.
-   **Rejillas flexibles:** Se ajustaron las rejillas (`.bienvenida`, `.blog__rejilla`, `.rejilla-2`, `.galeria`) para que pasen de 2/3 columnas a 1 columna en móvil.

### 2\. Nueva Página `anecdota.html`

-   Se creó una página independiente con el mismo estilo general del sitio.
-   Incluye un **formulario de anécdotas** (título, autor, fecha, imagen opcional y texto).
-   El formulario está conectado con el blog para que la anécdota aparezca como un nuevo artículo.

### 3\. Funcionalidad JavaScript Añadida

-   **Filtro de galería:** Lógica para mostrar/ocultar cards según la categoría seleccionada, con botones activos y secciones que se ocultan si quedan vacías.
-   **Modo claro/oscuro manual:** Botón de toggle que fuerza el tema, guarda la preferencia en `localStorage` y respeta la preferencia inicial del sistema.
-   **Anécdotas en blog:**  
    - Se guardan en `localStorage`.  
    - Se generan dinámicamente los artículos al cargar `blog.html`.  
    - El formulario de `anecdota.html` crea el contenido y redirige de vuelta al blog.


---
**Autor:** Cristian Carrasco Jiménez  
📘 **Asignatura:** Lenguaje de Marcas – Proyecto 1  
📍 **Año:** 2025/26  

---




