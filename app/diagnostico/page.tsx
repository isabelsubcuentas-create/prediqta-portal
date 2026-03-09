"use client"

import { useState } from "react"

export default function Diagnostico() {

const [rotacion,setRotacion] = useState("")
const [clima,setClima] = useState("")
const [liderazgo,setLiderazgo] = useState("")
const [capacitacion,setCapacitacion] = useState("")
const [productividad,setProductividad] = useState("")

const [diagnostico,setDiagnostico] = useState("")
const [plan,setPlan] = useState("")

function generarDiagnostico(){

let problema = ""
let planAccion = ""

if(rotacion === "alta"){

problema =
"La empresa presenta un nivel alto de rotación de personal. Esto suele indicar problemas en retención de talento, clima laboral o falta de desarrollo profesional. Una rotación elevada genera costos adicionales en reclutamiento, capacitación y pérdida de conocimiento dentro de la organización."

planAccion =
`Plan de acción estratégico:

Diagnóstico inicial
Analizar las principales causas de rotación mediante entrevistas de salida, encuestas internas y revisión de indicadores de recursos humanos.

Acción inmediata
Revisar condiciones laborales, oportunidades de crecimiento y carga de trabajo en las áreas con mayor rotación.

Desarrollo de liderazgo
Capacitar a supervisores y líderes de equipo en gestión de talento, comunicación efectiva y liderazgo.

Programa de retención
Implementar incentivos no solo económicos, sino también desarrollo profesional, reconocimiento y planes de carrera.

Seguimiento
Medir mensualmente indicadores como rotación, satisfacción del empleado y productividad para evaluar el impacto de las mejoras.`

}

else if(clima === "bajo"){

problema =
"El diagnóstico indica un clima organizacional bajo. Esto puede afectar directamente la motivación del personal, la colaboración entre equipos y la eficiencia operativa. Cuando el clima laboral es negativo, aumenta el riesgo de rotación, conflictos internos y disminución del rendimiento."

planAccion =
`Plan de acción estratégico:

Evaluación del clima
Aplicar encuestas internas para identificar problemas en comunicación, liderazgo o ambiente laboral.

Comunicación organizacional
Establecer canales de comunicación claros entre colaboradores y líderes para mejorar la transparencia y la confianza.

Reconocimiento del talento
Implementar programas de reconocimiento para destacar el trabajo y esfuerzo de los empleados.

Fortalecimiento de equipos
Desarrollar actividades de integración y talleres de trabajo colaborativo.

Seguimiento
Medir periódicamente el clima organizacional para verificar mejoras y detectar nuevas áreas de oportunidad.`

}

else if(liderazgo === "bajo"){

problema =
"El análisis sugiere que el nivel de liderazgo dentro de la organización es limitado. Esto puede generar falta de dirección en los equipos, problemas de comunicación y dificultades para alcanzar objetivos estratégicos."

planAccion =
`Plan de acción estratégico:

Evaluación de líderes
Identificar supervisores o líderes que necesiten desarrollo en habilidades de gestión.

Capacitación en liderazgo
Implementar programas de formación en liderazgo, toma de decisiones y manejo de equipos.

Mentoría interna
Asignar líderes experimentados como mentores para desarrollar nuevas capacidades de liderazgo.

Claridad de objetivos
Establecer metas claras para cada equipo y mejorar la comunicación de la estrategia organizacional.

Evaluación continua
Monitorear desempeño de liderazgo mediante retroalimentación de equipos y resultados operativos.`

}

else{

problema =
"El diagnóstico indica que la organización se encuentra en una situación relativamente estable en términos de talento humano. Sin embargo, incluso en escenarios estables es fundamental fortalecer continuamente las capacidades del equipo para mantener competitividad y crecimiento."

planAccion =
`Plan de acción estratégico:

Desarrollo profesional
Crear programas de capacitación continua para mejorar habilidades técnicas y de liderazgo.

Innovación organizacional
Fomentar nuevas ideas y mejoras en procesos para mantener competitividad.

Gestión del talento
Identificar empleados con alto potencial y desarrollar planes de crecimiento profesional.

Cultura organizacional
Fortalecer valores organizacionales y colaboración entre equipos.

Monitoreo de indicadores
Dar seguimiento a métricas de productividad, satisfacción del empleado y desempeño organizacional.`

}

setDiagnostico(problema)
setPlan(planAccion)

}

const container = {
minHeight:"100vh",
background:"linear-gradient(120deg,#0f172a,#020617)",
padding:"60px",
color:"white",
fontFamily:"system-ui"
}

const card = {
background:"rgba(255,255,255,0.04)",
border:"1px solid rgba(255,255,255,0.08)",
borderRadius:"16px",
padding:"32px",
marginTop:"40px",
maxWidth:"900px"
}

const selectStyle = {
marginTop:"8px",
padding:"12px",
borderRadius:"8px",
background:"#020617",
color:"white",
border:"1px solid rgba(255,255,255,0.1)",
width:"240px"
}

return(

<main style={container}>

<h1 style={{
fontSize:"48px",
fontWeight:"800",
background:"linear-gradient(90deg,#c4b5fd,#60a5fa)",
WebkitBackgroundClip:"text",
color:"transparent"
}}>
Diagnóstico Organizacional
</h1>

<p style={{
marginTop:"10px",
color:"#cbd5f5",
maxWidth:"700px"
}}>
Evalúa el estado actual del talento humano y genera un plan de acción estratégico para mejorar la estabilidad y productividad de la organización.
</p>

<div style={card}>

<p>Nivel de rotación de personal</p>
<select style={selectStyle} onChange={(e)=>setRotacion(e.target.value)}>
<option value="">Seleccionar</option>
<option value="baja">Baja</option>
<option value="media">Media</option>
<option value="alta">Alta</option>
</select>

<p style={{marginTop:"22px"}}>Clima organizacional</p>
<select style={selectStyle} onChange={(e)=>setClima(e.target.value)}>
<option value="">Seleccionar</option>
<option value="alto">Alto</option>
<option value="medio">Medio</option>
<option value="bajo">Bajo</option>
</select>

<p style={{marginTop:"22px"}}>Nivel de liderazgo</p>
<select style={selectStyle} onChange={(e)=>setLiderazgo(e.target.value)}>
<option value="">Seleccionar</option>
<option value="alto">Alto</option>
<option value="medio">Medio</option>
<option value="bajo">Bajo</option>
</select>

<p style={{marginTop:"22px"}}>Nivel de capacitación</p>
<select style={selectStyle} onChange={(e)=>setCapacitacion(e.target.value)}>
<option value="">Seleccionar</option>
<option value="alto">Alto</option>
<option value="medio">Medio</option>
<option value="bajo">Bajo</option>
</select>

<p style={{marginTop:"22px"}}>Nivel de productividad</p>
<select style={selectStyle} onChange={(e)=>setProductividad(e.target.value)}>
<option value="">Seleccionar</option>
<option value="alto">Alto</option>
<option value="medio">Medio</option>
<option value="bajo">Bajo</option>
</select>

<br/>

<button
onClick={generarDiagnostico}
style={{
marginTop:"30px",
padding:"14px 28px",
borderRadius:"10px",
background:"linear-gradient(90deg,#7c3aed,#3b82f6)",
color:"white",
border:"none",
cursor:"pointer",
fontWeight:"600"
}}
>
Generar diagnóstico
</button>

{diagnostico && (

<div style={{
marginTop:"40px",
padding:"22px",
background:"rgba(255,255,255,0.04)",
borderRadius:"12px"
}}>

<h3>Resultado del diagnóstico</h3>

<p style={{
marginTop:"10px",
lineHeight:"1.7",
color:"#e2e8f0"
}}>
{diagnostico}
</p>

</div>

)}

{plan && (

<div style={{
marginTop:"25px",
padding:"22px",
background:"rgba(59,130,246,0.12)",
borderRadius:"12px"
}}>

<h3>Plan de acción recomendado</h3>

<p style={{
marginTop:"10px",
whiteSpace:"pre-line",
lineHeight:"1.7",
color:"#e2e8f0"
}}>
{plan}
</p>

</div>

)}

</div>

</main>

)

}
