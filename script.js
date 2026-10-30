document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  const form = document.getElementById("care-request-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const fields = [
        "Solicitud de atención – Clínica MEDICAR",
        `Nombre: ${data.get("nombre") || ""}`,
        `Teléfono: ${data.get("telefono") || ""}`,
        `Municipio: ${data.get("municipio") || "No indicado"}`,
        `Servicio: ${data.get("servicio") || ""}`,
        `Contacto preferido: ${data.get("contacto") || "WhatsApp"}`,
        `Mensaje: ${data.get("mensaje") || "Sin mensaje adicional"}`
      ];
      const url = `https://wa.me/573044960616?text=${encodeURIComponent(fields.join("\n"))}`;
      window.open(url, "_blank", "noopener,noreferrer");
      const feedback = document.getElementById("form-feedback");
      if (feedback) feedback.textContent = "Se abrió WhatsApp para confirmar el envío de tu solicitud.";
    });
  }
});
