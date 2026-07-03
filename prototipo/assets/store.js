/*
 * Almacén de datos compartido del prototipo (localStorage).
 * Lo usan el portal del paciente (portal.html) y el panel administrativo (admin.html):
 * las citas que crea un paciente aparecen en la agenda del panel y viceversa.
 */

const SIBELA = (() => {
  const KEY_CITAS = 'sibela_citas';
  const KEY_USER = 'sibela_usuario';

  const SERVICIOS = [
    { id: 'perinatologia', nombre: 'Medicina Materno Fetal', icono: '🤰', desc: 'Control y diagnóstico especializado del embarazo de alto y bajo riesgo.' },
    { id: 'ginecologia', nombre: 'Ginecología', icono: '🩺', desc: 'Salud integral de la mujer en todas las etapas de su vida.' },
    { id: 'pediatria', nombre: 'Pediatría', icono: '👶', desc: 'Acompañamiento del crecimiento y desarrollo de tu bebé.' },
    { id: 'ecografias', nombre: 'Ecografías', icono: '📡', desc: 'Ecografía de detalle, 4D y estudios de bienestar fetal.' },
    { id: 'nutricion', nombre: 'Nutrición Materna', icono: '🥗', desc: 'Planes de alimentación para gestantes y programas posparto.' },
  ];

  const MEDICOS = [
    { id: 'herrera', nombre: 'Dra. Herrera', servicio: 'perinatologia', titulo: 'Perinatóloga · Medicina Materno Fetal' },
    { id: 'acosta', nombre: 'Dra. Acosta', servicio: 'ginecologia', titulo: 'Ginecóloga y Obstetra' },
    { id: 'ruiz', nombre: 'Dr. Ruiz', servicio: 'pediatria', titulo: 'Pediatra' },
    { id: 'lozano', nombre: 'Dra. Lozano', servicio: 'ecografias', titulo: 'Radióloga · Ecografista' },
    { id: 'pena', nombre: 'Dra. Peña', servicio: 'nutricion', titulo: 'Nutricionista Materno Infantil' },
  ];

  const HORAS = ['8:00 am', '9:00 am', '10:00 am', '11:00 am', '2:00 pm', '3:00 pm', '4:00 pm'];

  /* Citas de ejemplo para que la demo nunca arranque vacía */
  const SEED = [
    { id: 'c1', paciente: 'María Fernanda Torres', telefono: '3001112233', servicio: 'perinatologia', medico: 'herrera', fecha: '2026-07-08', hora: '9:00 am', estado: 'confirmada', origen: 'Chatbot IA' },
    { id: 'c2', paciente: 'María Fernanda Torres', telefono: '3001112233', servicio: 'ecografias', medico: 'lozano', fecha: '2026-07-15', hora: '10:00 am', estado: 'solicitada', origen: 'Portal web' },
    { id: 'c3', paciente: 'Laura Jiménez', telefono: '3014445566', servicio: 'ginecologia', medico: 'acosta', fecha: '2026-07-08', hora: '2:00 pm', estado: 'confirmada', origen: 'Doctoralia' },
    { id: 'c4', paciente: 'Paola Martínez', telefono: '3027778899', servicio: 'pediatria', medico: 'ruiz', fecha: '2026-07-10', hora: '10:00 am', estado: 'confirmada', origen: 'WhatsApp' },
  ];

  function citas() {
    const raw = localStorage.getItem(KEY_CITAS);
    if (!raw) { localStorage.setItem(KEY_CITAS, JSON.stringify(SEED)); return [...SEED]; }
    try { return JSON.parse(raw); } catch { return [...SEED]; }
  }

  function guardar(list) { localStorage.setItem(KEY_CITAS, JSON.stringify(list)); }

  function crearCita({ paciente, telefono, servicio, medico, fecha, hora }) {
    const list = citas();
    const cita = {
      id: 'c' + Date.now(),
      paciente, telefono, servicio, medico, fecha, hora,
      estado: 'solicitada',
      origen: 'Portal web',
    };
    list.push(cita);
    guardar(list);
    return cita;
  }

  function cambiarEstado(id, estado) {
    const list = citas();
    const c = list.find(x => x.id === id);
    if (c) { c.estado = estado; guardar(list); }
    return c;
  }

  function reagendar(id, fecha, hora) {
    const list = citas();
    const c = list.find(x => x.id === id);
    if (c) { c.fecha = fecha; c.hora = hora; c.estado = 'solicitada'; guardar(list); }
    return c;
  }

  function horasDisponibles(medicoId, fecha) {
    const ocupadas = citas()
      .filter(c => c.medico === medicoId && c.fecha === fecha && c.estado !== 'cancelada')
      .map(c => c.hora);
    return HORAS.filter(h => !ocupadas.includes(h));
  }

  function citasDe(telefono) {
    return citas().filter(c => c.telefono === telefono)
      .sort((a, b) => (a.fecha + a.hora).localeCompare(b.fecha + b.hora));
  }

  /* Sesión simulada */
  function login(user) { localStorage.setItem(KEY_USER, JSON.stringify(user)); }
  function usuario() {
    try { return JSON.parse(localStorage.getItem(KEY_USER)); } catch { return null; }
  }
  function logout() { localStorage.removeItem(KEY_USER); }

  function servicioDe(id) { return SERVICIOS.find(s => s.id === id); }
  function medicoDe(id) { return MEDICOS.find(m => m.id === id); }

  function fechaBonita(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const f = new Date(y, m - 1, d);
    return `${dias[f.getDay()]} ${d} de ${meses[m - 1]}`;
  }

  return { SERVICIOS, MEDICOS, HORAS, citas, crearCita, cambiarEstado, reagendar, horasDisponibles, citasDe, login, usuario, logout, servicioDe, medicoDe, fechaBonita };
})();
