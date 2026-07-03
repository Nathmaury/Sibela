# Reto Empresarial — IPS Sibela (Centro de Medicina Materno Fetal)

Proyecto para el **Concurso Reto Empresarial** 
**Reto:** optimizar el proceso de agendamiento de citas de la IPS mediante centralización de la información, automatización e inteligencia artificial.

## Contenido del proyecto

| Carpeta / archivo | Qué es |
|-------------------|--------|
| `docs/PROPUESTA.md` | Documento de la propuesta: diagnóstico, oportunidades de mejora, solución, herramientas recomendadas, estrategias de IA y plan de implementación con KPIs. Es la base del entregable que pide el formato del concurso. |
| `prototipo/index.html` | **Landing page pública** de la clínica: servicios, especialistas, sede y acceso al agendamiento en línea. |
| `prototipo/portal.html` | **Portal del paciente:** agendar cita paso a paso, ver sus citas, reagendar y cancelar. |
| `prototipo/login.html` | **Ingreso con roles:** paciente (nombre + celular) o funcionario (usuario + contraseña). |
| `prototipo/admin.html` | **Panel administrativo** (solo funcionarios): gestión de citas, bandeja unificada, leads e indicadores. |
| `prototipo/assets/store.js` | Almacén de datos compartido (localStorage): las citas creadas por el paciente aparecen en el panel administrativo y viceversa. |

## Cómo ver el prototipo

1. Abrir la carpeta `prototipo/` y hacer doble clic en `index.html` (no necesita instalación ni servidor).
2. **Flujo del paciente:** botón "Agendar cita" → elegir servicio, especialista, fecha y hora → confirmar. Desde "Mis citas" puede reagendar o cancelar. (Paciente demo: celular `3001112233`.)
3. **Flujo del funcionario:** enlace "Acceso funcionarios" → usuario `admin`, contraseña `sibela2026`. En el panel:
   - **Gestión de citas:** todas las citas centralizadas — incluidas las creadas desde el portal — para confirmar, marcar como atendida o cancelar.
   - **Bandeja unificada:** conversaciones de WhatsApp, Instagram, Doctoralia y llamadas con clasificación de intención por IA y chatbot.
   - **Leads y conversión:** embudo y seguimiento a quienes pidieron información pero no agendaron.
   - **Indicadores:** KPIs de ocupación, ausentismo, tiempos de respuesta y conversión.
4. **Demo de integración:** agenda una cita como paciente, entra al panel administrativo y pulsa "Actualizar": la cita aparece como Pendiente, lista para confirmar.

## Pendientes para completar la entrega

- [ ] Completar los datos del equipo (nombres, docente investigador, fecha) en `docs/PROPUESTA.md`.
- [ ] Validar el diagnóstico con la IPS (entrevistas y datos históricos reales) — fase 1 del plan.
- [ ] Medir la línea base de los KPIs con los datos que entregue la IPS.
- [ ] Pasar la propuesta al formato oficial de entrega del concurso (si la universidad exige plantilla).
- [ ] Preparar la presentación / pitch para la sustentación.
