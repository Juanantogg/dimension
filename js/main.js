const mostrarCerrarModales = () => {
  const modalSoy = document.getElementById("modal-soy");
  const modalIntereses = document.getElementById("modal-intereses");
  const modalTrabajos = document.getElementById("modal-trabajos");
  const modalContacto = document.getElementById("modal-contacto");
  const soy = document.getElementById("soy");
  const intereses = document.getElementById("intereses");
  const trabajos = document.getElementById("trabajos");
  const contacto = document.getElementById("contacto");
  const contenedor = document.getElementById("contenedor");
  const cerrarSoy = document.getElementById("cerrar-modal-soy");
  const cerrarIntereses = document.getElementById("cerrar-modal-intereses");
  const cerrarTrabajos = document.getElementById("cerrar-modal-trabajos");
  const cerrarContacto = document.getElementById("cerrar-modal-contacto");

  const mostrarModal = (elementoQueAbre, modal, elementoQueCierra) => {
    if (elementoQueAbre.checked) {
      modal.style.top = 0 + "vh";
      contenedor.style.visibility = "hidden";
      window.scrollTo(0, 0);
      elementoQueCierra.checked = false;
    }
  };

  const quitarModal = (elementoQueCierra, modal, elementoACerrar) => {
    if (elementoQueCierra.checked) {
      modal.style.top = -400 + "vh";
      contenedor.style.visibility = "visible";
      window.scrollTo(0, 200);
      elementoACerrar.checked = false;
    }
  };

  modalSoy.addEventListener("click", (e) =>
    mostrarModal(e.target, soy, cerrarSoy)
  );
  modalIntereses.addEventListener("click", (e) =>
    mostrarModal(e.target, intereses, cerrarIntereses)
  );
  modalTrabajos.addEventListener("click", (e) =>
    mostrarModal(e.target, trabajos, cerrarTrabajos)
  );
  modalContacto.addEventListener("click", (e) =>
    mostrarModal(e.target, contacto, cerrarContacto)
  );

  cerrarSoy.addEventListener("click", (e) =>
    quitarModal(e.target, soy, modalSoy)
  );
  cerrarIntereses.addEventListener("click", (e) =>
    quitarModal(e.target, intereses, modalIntereses)
  );
  cerrarTrabajos.addEventListener("click", (e) =>
    quitarModal(e.target, trabajos, modalTrabajos)
  );
  cerrarContacto.addEventListener("click", (e) =>
    quitarModal(e.target, contacto, modalContacto)
  );
};

const cambiarIconos = () => {
  if (window.matchMedia("(hover: hover)").matches) {
    const slogan1 = document.getElementById("slogan1");
    const slogan2 = document.getElementById("slogan2");
    const rootStyles = document.documentElement.style;

    const cambio = (icono, id, evento) => {
      setTimeout(() => {
        console.log();
        rootStyles.setProperty(`--content-${id}`, icono);
      }, 750);
    };

    slogan1.addEventListener("mouseover", (e) =>
      cambio("'\\e9d9'", e.target.id)
    );
    slogan1.addEventListener("mouseleave", (e) =>
      cambio("'\\ea0b'", e.target.id)
    );
    slogan2.addEventListener("mouseover", (e) =>
      cambio("'\\e9da'", e.target.id)
    );
    slogan2.addEventListener("mouseleave", (e) =>
      cambio("'\\ea0b'", e.target.id)
    );
  } else if (window.matchMedia("(hover: none)").matches) {
  }
};

const animaciones = () => {
  console.log("true");
  const background = document.getElementById("background");
  const cabecera = document.getElementById('cabecera')

  background.classList.add("background-hide");
  cabecera.classList.add("cabecera-show");
};

window.onload = () => {
  mostrarCerrarModales();
  cambiarIconos();
  animaciones();
};
