const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();


const careForm = document.getElementById('care-request-form');
if (careForm) {
  careForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!careForm.reportValidity()) return;
    const data = new FormData(careForm);
    const fields = [
      'Hola, MEDICAR. Deseo solicitar orientación/atención.',
      `Nombre: ${data.get('nombre')}`,
      `Teléfono: ${data.get('telefono')}`,
      `Municipio: ${data.get('municipio') || 'No indicado'}`,
      `Servicio de interés: ${data.get('servicio')}`,
      `Prefiere contacto por: ${data.get('contacto')}`,
      `Mensaje: ${data.get('mensaje') || 'Sin mensaje adicional'}`,
      'Autorizo el uso de estos datos de contacto para responder mi solicitud.'
    ];
    const url = 'https://wa.me/573044960616?text=' + encodeURIComponent(fields.join('\\n'));
    const feedback = document.getElementById('form-feedback');
    if (feedback) feedback.textContent = 'Se abrirá WhatsApp para que revises y confirmes el envío de tu solicitud.';
    window.open(url, '_blank', 'noopener');
  });
}
