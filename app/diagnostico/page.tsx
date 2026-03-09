"use client"

import { useState } from "react"

export default function Diagnostico(){

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

let problema = ""
let planAccion = ""

if(score >= 80){

problema =

`Score organizacional: ${score}/100

Diagnóstico general

La organización presenta una situación relativamente estable en la gestión del talento humano. Los principales procesos de liderazgo, clima organizacional y productividad funcionan de forma adecuada.

Hallazgos clave

1. La estructura organizacional permite mantener estabilidad operativa.
2. Existen bases sólidas de liderazgo y colaboración.
3. Sin embargo, se identifican oportunidades para fortalecer desarrollo profesional y mejora continua.
4. La empresa puede incrementar su competitividad fortaleciendo habilidades del equipo y promoviendo innovación interna.`

planAccion =

`Plan de acción estratégico (90 días)

Semana 1–2
Evaluación interna

• Analizar desempeño actual de los equipos
• Identificar habilidades clave del personal
• Detectar áreas con menor productividad

Resultados esperados
Mayor claridad sobre fortalezas y oportunidades del talento humano.

Indicadores a monitorear
Productividad por área, desempeño individual.


Semana 3–4
Diseño de programas de desarrollo

• Crear programas de capacitación técnica
• Diseñar entrenamientos de liderazgo
• Establecer objetivos de mejora por área

Resultados esperados
Mayor alineación entre habilidades del equipo y objetivos de la empresa.


Mes 2
Implementación

• Ejecutar programas de capacitación
• Fomentar innovación en procesos internos
• Implementar espacios de colaboración entre equipos

Resultados esperados
Incremento en productividad y mejora en desempeño organizacional.


Mes 3
Evaluación y optimización

• Medir impacto de las acciones implementadas
• Ajustar procesos de desarrollo profesional
• Establecer planes de crecimiento a largo plazo

Indicadores clave

• Productividad organizacional
• Satisfacción del empleado
• Retención de talento
• Cumplimiento de objetivos por área.`

}

else{

problema =

`Score organizacional: ${score}/100

Diagnóstico general

El análisis indica que existen áreas relevantes de mejora en la gestión del talento humano. Algunas variables organizacionales como liderazgo, clima laboral o desarrollo profesional pueden estar afectando el desempeño general de la empresa.

Hallazgos clave

1. Existen debilidades en procesos de liderazgo o gestión de equipos.
2. Algunos colaboradores pueden presentar bajos niveles de motivación o desarrollo profesional.
3. La empresa podría estar perdiendo eficiencia operativa por falta de capacitación o alineación estratégica.
4. Es necesario fortalecer procesos de gestión del talento para mejorar productividad y estabilidad organizacional.`

planAccion =

`Plan de acción estratégico (90 días)

Semana 1–2
Diagnóstico profundo

• Aplicar encuestas de clima organizacional
• Analizar causas de rotación o bajo desempeño
• Evaluar habilidades actuales del personal

Resultados esperados
Identificación clara de los principales problemas organizacionales.


Semana 3–4
Intervención organizacional

• Implementar talleres de liderazgo para supervisores
• Crear espacios de comunicación entre equipos
• Rediseñar procesos de gestión del talento

Resultados esperados
Mejor comunicación organizacional y liderazgo más efectivo.


Mes 2
Desarrollo del talento

• Implementar programas de capacitación profesional
• Establecer objetivos claros para cada equipo
• Promover cultura de colaboración y aprendizaje

Resultados esperados
Incremento en motivación, habilidades y compromiso del equipo.


Mes 3
Seguimiento y medición

• Medir impacto de las mejoras implementadas
• Analizar indicadores de desempeño
• Ajustar estrategia organizacional

Indicadores clave

• Rotación de personal
• Productividad por equipo
• Nivel de satisfacción del empleado
• Cumplimiento de objetivos organizacionales.`

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
Evalúa el estado del talento humano y genera recomendaciones estratégicas para mejorar desempeño organizacional.
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
