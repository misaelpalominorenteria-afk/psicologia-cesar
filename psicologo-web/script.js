/* =========================================
   MENÚ HAMBURGUESA
========================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        nav.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (nav.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Cerrar menú al presionar un enlace */

    const links = nav.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================
   PREGUNTAS FRECUENTES
========================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {

    const question = item.querySelector(".faq-question");

    if (!question) return;

    question.addEventListener("click", function () {

        const isOpen = item.classList.contains("open");


        /* Cerrar todas */

        faqItems.forEach(function (otherItem) {

            otherItem.classList.remove("open");

            const answer =
                otherItem.querySelector(".faq-answer");

            if (answer) {

                answer.style.maxHeight = null;

            }

        });


        /* Abrir seleccionada */

        if (!isOpen) {

            item.classList.add("open");

            const answer =
                item.querySelector(".faq-answer");

            if (answer) {

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        }

    });

});


/* =========================================
   FORMULARIO DE CITA
========================================= */

const appointmentForm =
    document.getElementById("appointmentForm");


if (appointmentForm) {

    appointmentForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const nombre =
            document.getElementById("nombre").value;

        const edad =
            document.getElementById("edad").value;

        const telefono =
            document.getElementById("telefono").value;

        const correo =
            document.getElementById("correo").value;

        const modalidad =
            document.getElementById("modalidad").value;

        const motivo =
            document.getElementById("motivo").value;

        const fecha =
            document.getElementById("fecha").value;

        const horario =
            document.getElementById("horario").value;


        const mensaje =
`Hola, deseo solicitar información para una cita psicológica.

Nombre: ${nombre}
Edad: ${edad}
Teléfono: ${telefono}
Correo: ${correo}
Modalidad: ${modalidad}
Motivo de consulta: ${motivo}
Fecha preferida: ${fecha}
Horario preferido: ${horario}

Entiendo que esta solicitud no confirma automáticamente una cita.`;


        const numero =
            "51968551100";


        const whatsappURL =
            "https://wa.me/" +
            numero +
            "?text=" +
            encodeURIComponent(mensaje);


        window.open(whatsappURL, "_blank");

    });

}


/* =========================================
   FECHA MÍNIMA
========================================= */

const fecha =
    document.getElementById("fecha");


if (fecha) {

    const hoy =
        new Date().toISOString().split("T")[0];

    fecha.setAttribute("min", hoy);

}


/* =========================================
   BOTONES LEER MÁS
========================================= */

const readMoreButtons =
    document.querySelectorAll(".read-more");


readMoreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "El artículo completo estará disponible próximamente."
        );

    });

});
