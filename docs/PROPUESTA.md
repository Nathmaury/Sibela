# Propuesta de Solución — Reto Empresarial

## Optimización del proceso de agendamiento de citas mediante centralización de información, automatización e inteligencia artificial

**Empresa:** Centro de Medicina Materno Fetal (IPS Sibela) — Barranquilla
**Concurso:** Reto Empresarial — Universidad Autónoma del Caribe
**Equipo:** Nathaly Maury  
**Docente investigador:** William Suarez  
**Fecha:** Julio 2026

---

## 1. Diagnóstico del proceso actual

### 1.1 Descripción del proceso

La IPS presta servicios especializados en ginecología, perinatología y pediatría. El agendamiento de citas ocurre hoy a través de **cuatro o más canales simultáneos e independientes**:


| Canal                | Cómo se gestiona hoy                         | Problema principal                                   |
| -------------------- | -------------------------------------------- | ---------------------------------------------------- |
| WhatsApp             | Respuesta manual del personal administrativo | Alto volumen, sin registro estructurado              |
| Instagram            | Mensajes directos respondidos manualmente    | Consultas se pierden o responden tarde               |
| Doctoralia           | Plataforma externa con agenda propia         | Agenda paralela, requiere conciliación manual        |
| Llamadas telefónicas | Atención directa en recepción                | Sin trazabilidad, depende de la memoria del personal |


### 1.2 Flujo actual (AS-IS)

```
Paciente contacta por cualquier canal
        │
        ▼
Personal administrativo lee/atiende el mensaje o llamada
        │
        ▼
Verifica disponibilidad consultando agenda(s) manualmente
        │
        ▼
Responde al paciente, registra la cita (proceso manual)
        │
        ▼
Confirmaciones, cambios y cancelaciones se gestionan
repitiendo todo el ciclo manualmente
```

### 1.3 Dolores identificados (según el formato del reto)

1. **Información dispersa:** cada canal es una fuente de datos aislada; no existe una vista única de pacientes, citas y agendas.
2. **Carga operativa alta:** el personal dedica gran parte del tiempo a tareas repetitivas de consolidación, confirmación y reprogramación.
3. **Sin trazabilidad de leads:** un número significativo de personas pregunta por servicios pero no agenda, y no existe metodología para hacerles seguimiento ni analizar las causas de abandono.
4. **Sin indicadores en tiempo real:** no se conocen con precisión los niveles de ocupación, cancelaciones, ausentismo ni patrones de demanda.
5. **Riesgo de errores:** los procesos manuales aumentan reprocesos y pérdida de información.
6. **Experiencia del paciente afectada:** las encuestas de satisfacción evidencian oportunidades en tiempos de asignación, comunicación de cambios y seguimiento.

> **Nota metodológica:** este diagnóstico inicial se basa en el formato del reto. En la fase de campo debe validarse con: (a) entrevistas al personal de recepción y coordinación, (b) observación directa del proceso, (c) análisis de los datos históricos que la IPS pone a disposición (citas, cancelaciones, encuestas de satisfacción).

---

## 2. Oportunidades de mejora (priorizadas)

Matriz impacto / esfuerzo:


| #   | Oportunidad                                                    | Impacto | Esfuerzo | Prioridad |
| --- | -------------------------------------------------------------- | ------- | -------- | --------- |
| 1   | Centralizar todos los canales en una bandeja única de atención | Alto    | Medio    | **1**     |
| 2   | Agenda médica centralizada y única (fuente de verdad)          | Alto    | Medio    | **1**     |
| 3   | Automatizar confirmaciones y recordatorios de cita             | Alto    | Bajo     | **1**     |
| 4   | Registro y seguimiento de leads (interesados que no agendan)   | Alto    | Bajo     | **2**     |
| 5   | Dashboard de indicadores en tiempo real                        | Alto    | Medio    | **2**     |
| 6   | Chatbot con IA para respuesta y agendamiento automático 24/7   | Alto    | Alto     | **3**     |
| 7   | Analítica predictiva de demanda y ausentismo                   | Medio   | Alto     | **3**     |


La priorización sigue el criterio que la propia IPS declaró: **soluciones aplicables, de resultados tangibles y rápida adopción**.

---

## 3. Solución propuesta

### 3.1 Concepto

**"Sibela Conecta": un centro de operaciones de agendamiento** que unifica canales, centraliza la agenda, automatiza tareas repetitivas y convierte los datos en indicadores para decidir.

### 3.2 Arquitectura de la solución (TO-BE)

```
  WhatsApp   Instagram   Doctoralia   Llamadas
     │           │            │           │
     └───────────┴─────┬──────┴───────────┘
                       ▼
        ┌──────────────────────────────┐
        │  BANDEJA UNIFICADA           │  ← toda conversación queda
        │  (omnicanal + chatbot IA)    │    registrada y clasificada
        └──────────────┬───────────────┘
                       ▼
        ┌──────────────────────────────┐
        │  AGENDA CENTRALIZADA         │  ← única fuente de verdad:
        │  (citas, médicos, estados)   │    asignar, confirmar,
        └──────────────┬───────────────┘    cancelar, reprogramar
                       ▼
   ┌───────────────────┴───────────────────┐
   ▼                                       ▼
┌────────────────────┐        ┌─────────────────────────┐
│ MÓDULO DE LEADS    │        │ DASHBOARD DE INDICADORES│
│ seguimiento a los  │        │ ocupación, cancelación, │
│ que no agendaron   │        │ ausentismo, conversión  │
└────────────────────┘        └─────────────────────────┘
```

### 3.3 Componentes y funcionalidades

**A. Bandeja unificada omnicanal**

- Integra WhatsApp Business API, Instagram (Meta Graph API) y registro manual de llamadas en una sola pantalla.
- Cada conversación queda vinculada a la ficha del paciente.
- Clasificación automática de la intención (agendar, cancelar, pedir información) con IA.

**B. Agenda centralizada**

- Vista única de las agendas de todos los especialistas.
- Estados de cita: solicitada → confirmada → atendida / cancelada / no asistió.
- Sincronización con Doctoralia (API/exportación) para eliminar la doble agenda.

**C. Automatización de tareas repetitivas**

- Confirmación automática al agendar (mensaje por WhatsApp).
- Recordatorios automáticos 48 h y 24 h antes de la cita (reduce ausentismo).
- Aviso automático de cambios o cancelaciones de agenda.
- Encuesta de satisfacción automática posterior a la cita.

**D. Módulo de leads (seguimiento y conversión)**

- Toda persona que pregunta y no agenda queda registrada con motivo de abandono (precio, horario, autorización de EPS, solo cotizaba…).
- Recontacto programado a las 48–72 horas con mensaje personalizado.
- Embudo de conversión: contactos → interesados → agendados → atendidos.

**E. Chatbot con inteligencia artificial**

- Responde 24/7 preguntas frecuentes (servicios, precios, direcciones, preparación de exámenes).
- Ofrece horarios disponibles y agenda directamente en la agenda centralizada.
- Escala a un humano cuando detecta casos complejos.

**F. Dashboard de indicadores**

- Ocupación de agenda por especialista y por día.
- Tasa de cancelación y de ausentismo (no-show).
- Tasa de conversión de leads y causas de abandono.
- Tiempo promedio de respuesta por canal.
- Demanda por servicio y por canal para decisiones de crecimiento.

### 3.4 Seguridad y protección de datos

- Cumplimiento de la Ley 1581 de 2012 (Habeas Data) y normativa del sector salud en Colombia.
- Consentimiento informado para tratamiento de datos en el primer contacto.
- Acceso por roles (recepción, coordinación, gerencia) y trazabilidad de acciones.
- Cifrado en tránsito y respaldo periódico de la información.

---

## 4. Herramientas tecnológicas recomendadas

Dos escenarios según presupuesto y velocidad de adopción:

### Escenario 1 — Rápida adopción con herramientas existentes (recomendado para iniciar)


| Necesidad                              | Herramienta                                                                                       | Costo aproximado   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| Bandeja omnicanal WhatsApp + Instagram | WhatsApp Business Platform + bandejas tipo Callbell / Trengo / Chatwoot (open source)             | Desde 0–50 USD/mes |
| Agenda centralizada                    | Software de agendamiento médico (p. ej. AgendaPro, Doctoralia PRO) o Google Calendar estructurado | 30–80 USD/mes      |
| Automatizaciones                       | n8n (open source) o Make                                                                          | 0–20 USD/mes       |
| Chatbot IA                             | Chatwoot + API de OpenAI, o constructor tipo Botpress                                             | 20–50 USD/mes      |
| Base de datos de leads                 | Airtable / Google Sheets estructurado como CRM ligero                                             | 0–20 USD/mes       |
| Dashboard                              | Looker Studio (gratuito) conectado a las fuentes                                                  | 0                  |


### Escenario 2 — Plataforma propia a la medida (evolución)

- Aplicación web desarrollada a la medida (el prototipo de este proyecto es la base).
- Backend con base de datos propia, integraciones vía API de Meta y Doctoralia.
- Mayor control y propiedad del dato; requiere inversión de desarrollo y mantenimiento.

**Recomendación:** iniciar con el Escenario 1 para obtener resultados en semanas, y evolucionar al Escenario 2 cuando el volumen lo justifique.

---

## 5. Estrategias de automatización e inteligencia artificial

1. **Clasificación automática de mensajes** (NLP): detectar intención y urgencia para priorizar la atención.
2. **Agendamiento conversacional:** el chatbot consulta disponibilidad real y agenda sin intervención humana.
3. **Recordatorios inteligentes:** frecuencia y canal según el historial de cada paciente.
4. **Predicción de ausentismo:** con los datos históricos, identificar citas con alto riesgo de no-show y sobre-agendar o confirmar proactivamente.
5. **Análisis de causas de abandono:** minería de las conversaciones de leads perdidos para decisiones comerciales.
6. **Optimización de agendas:** sugerir redistribución de cupos según patrones de demanda por especialidad, día y hora.

---

## 6. Plan de implementación con indicadores

### 6.1 Fases y cronograma


| Fase                           | Actividades                                                                                                 | Duración  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------- | --------- |
| **F1. Diagnóstico de campo**   | Entrevistas, observación, análisis de datos históricos de la IPS, línea base de indicadores                 | 2 semanas |
| **F2. Diseño y configuración** | Selección definitiva de herramientas, configuración de bandeja unificada, agenda y automatizaciones básicas | 3 semanas |
| **F3. Piloto**                 | Operación en paralelo con un especialista/servicio, ajustes con el personal                                 | 3 semanas |
| **F4. Despliegue completo**    | Extensión a todos los servicios, capacitación del personal, chatbot IA                                      | 4 semanas |
| **F5. Medición y mejora**      | Comparación contra línea base, ajustes, informe final                                                       | 2 semanas |


**Duración total estimada: 14 semanas (~3,5 meses).**

### 6.2 Indicadores de seguimiento (KPIs)


| Indicador                                             | Línea base      | Meta       | Frecuencia |
| ----------------------------------------------------- | --------------- | ---------- | ---------- |
| Tiempo promedio de respuesta al paciente              | Por medir en F1 | −50 %      | Semanal    |
| Tiempo promedio de asignación de cita                 | Por medir en F1 | −40 %      | Semanal    |
| Tasa de ocupación de agendas                          | Por medir en F1 | +15 puntos | Semanal    |
| Tasa de ausentismo (no-show)                          | Por medir en F1 | −30 %      | Mensual    |
| Tasa de conversión de leads a citas                   | Por medir en F1 | +20 %      | Mensual    |
| Horas de trabajo administrativo en tareas repetitivas | Por medir en F1 | −40 %      | Mensual    |
| Satisfacción del paciente (encuesta existente)        | Por medir en F1 | +10 puntos | Mensual    |


### 6.3 Gestión del cambio

- Capacitación práctica al personal de recepción y coordinación (2 sesiones por fase).
- Manual de operación simple con flujos ilustrados.
- Acompañamiento del equipo investigador durante el piloto, con comunicación permanente (compromiso declarado en el formato del reto).

---

## 7. Impacto esperado

- **Eficiencia operativa:** menos tareas manuales y reprocesos; el personal se concentra en la atención al paciente.
- **Mejor experiencia del paciente:** respuestas rápidas por su canal preferido, recordatorios y comunicación oportuna de cambios.
- **Crecimiento:** recuperación de leads perdidos y mayor aprovechamiento de las agendas.
- **Decisiones basadas en datos:** indicadores en tiempo real para la gerencia.
- **Escalabilidad:** la solución acompaña el crecimiento sostenido de la demanda que vive la IPS.

---

## Anexo: Prototipo funcional

Como evidencia de la viabilidad de la propuesta, el equipo desarrolló un **prototipo funcional navegable** (carpeta `prototipo/` de este proyecto) con dos roles:

- **Rol paciente:** landing page pública de la clínica (`index.html`) con información de servicios y especialistas, y portal de autogestión (`portal.html`) donde el paciente agenda, reagenda o cancela sus citas en línea.
- **Rol funcionario:** panel administrativo (`admin.html`, con acceso mediante `login.html`) que centraliza la gestión de citas de todos los canales, la bandeja unificada de conversaciones, el seguimiento de leads y el dashboard de indicadores.

Ambos roles comparten la misma fuente de datos: una cita creada por el paciente desde la página aparece de inmediato en el panel administrativo para su confirmación, demostrando el concepto de agenda centralizada como única fuente de verdad.