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

let score = 100

if(rotacion === "alta") score -= 20
if(clima === "bajo") score -= 20
if(liderazgo === "bajo") score -= 20
if(capacitacion === "bajo") score -= 20
if(productividad === "bajo") score -= 20

let problema = `Score organizacional: ${score}/100

Diagnóstico general

La empresa presenta una condición relativamente estable en la gestión del talento humano, pero existen oportunidades para mejorar procesos de desarrollo profesional y productividad organizacional.

Hallazgos clave

1. Existen oportunidades para fortalecer liderazgo interno.
2. El desarrollo profesional puede mejorarse mediante capacitación continua.
3. La empresa puede optimizar productividad con mejores procesos y colaboración.`

let planAccion = `Plan de acción estratégico

Semana 1-2
Evaluación organizacional

• Analizar desempeño actual de equipos
• Identificar habilidades críticas del personal
• Detectar áreas de baja productividad

Resultados esperados
Diagnóstico claro de fortalezas y debilidades organizacionales.


Semana 3-4
Diseño de mejoras

• Crear programas de capacitación
• Definir objetivos de mejora por área
• Establecer métricas de desempeño

Resultados esperados
Equipos alineados con objetivos estratégicos.


Mes 2
Implementación

• Ejecutar capacitaciones
• Fomentar colaboración entre equipos
• Implementar mejoras en procesos

Resultados esperados
Incremento en productividad y compromiso del equipo.


Mes 3
Evaluación

• Medir impacto de las mejoras
• Ajustar procesos internos
• Definir plan de mejora continua

Indicadores clave

• Productividad por área
• Satisfacción del empleado
• Retención de talento
• Cumplimiento de objetivos`

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
width:"100%"
}

return (

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
Evalúa el estado del talento humano y genera recomendaciones estratégicas para mejorar desempeño organizacional.
</p>

<div style={card}>

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"24px"
}}>

<div>
<p>Nivel de rotación de personal</p>
<select style={selectStyle} onChange={(e)=>setRotacion(e.target.value)}>
<option value="">Seleccionar</option>
<option value="baja">Baja</option>
<option value="media">Media</option>
<option value="alta">Alta</option>
</select>
</div>

<div>
<p>Clima organizacional</p>
<select style={selectStyle} onChange={(e)=>setClima(e.target.value)}>
<option value="">Seleccionar</option>
<option value="alto">Alto</option>
<option value="medio">Medio</option>
<option value="bajo">Bajo</option>
</select>
</div>

<div>
<p>Nivel de liderazgo</p>
<select style={selectStyle} onChange={(e)=>setLiderazgo(e.target.value)}>
<option value="">Seleccionar</option>
<option value="alto">Alto</option>
<option value="medio">Medio</option>
<option value="bajo">Bajo</option>
</select>
</div>

<div>
<p>Nivel de capacitación</p>
<select style={selectStyle} onChange={(e)=>setCapacitacion(e.target.value)}>
<option value="">Seleccionar</option>
<option value="alto">Alto</option>
<option value="medio">Medio</option>
<option value="bajo">Bajo</option>
</select>
</div>

<div>
<p>Nivel de productividad</p>
<select style={selectStyle} onChange={(e)=>setProductividad(e.target.value)}>
<option value="">Seleccionar</option>
<option value="alto">Alto</option>
<option value="medio">Medio</option>
<option value="bajo">Bajo</option>
</select>
</div>

</div>

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
whiteSpace:"pre-line",
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
