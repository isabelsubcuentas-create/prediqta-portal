"use client"

import { useState } from "react"

export default function Diagnostico(){

const [rotacion,setRotacion] = useState("")
const [clima,setClima] = useState("")
const [liderazgo,setLiderazgo] = useState("")
const [capacitacion,setCapacitacion] = useState("")
const [productividad,setProductividad] = useState("")

const [diagnostico,setDiagnostico] = useState("")
const [plan,setPlan] = useState<string[]>([])

function generarDiagnostico(){

let problema = ""
let acciones:string[] = []

if(rotacion === "alta"){

problema =
"La organización presenta un nivel elevado de rotación de personal. Esto suele indicar problemas de retención, cultura organizacional o falta de oportunidades de desarrollo. La rotación alta genera costos adicionales en reclutamiento, capacitación y pérdida de conocimiento dentro de la empresa."

acciones = [
"Realizar entrevistas de salida para identificar las causas principales de renuncia.",
"Revisar condiciones laborales, carga de trabajo y oportunidades de crecimiento.",
"Implementar programas de desarrollo profesional y planes de carrera.",
"Capacitar líderes en gestión de talento y liderazgo efectivo.",
"Medir mensualmente indicadores de rotación y satisfacción del personal."
]

}

else if(clima === "bajo"){

problema =
"El análisis sugiere que el clima organizacional es bajo. Esto puede afectar la motivación de los empleados, la colaboración entre equipos y la eficiencia operativa. Un clima negativo suele provocar conflictos internos y disminución del rendimiento."

acciones = [
"Aplicar encuestas internas de clima laboral para identificar problemas específicos.",
"Mejorar los canales de comunicación entre líderes y colaboradores.",
"Implementar programas de reconocimiento y motivación para empleados.",
"Fomentar actividades de integración entre equipos.",
"Monitorear periódicamente indicadores de satisfacción laboral."
]

}

else if(liderazgo === "bajo"){

problema =
"El diagnóstico indica debilidades en el liderazgo organizacional. Esto puede generar falta de dirección en los equipos, mala comunicación y dificultades para cumplir objetivos estratégicos."

acciones = [
"Evaluar habilidades de liderazgo en supervisores y gerentes.",
"Implementar programas de capacitación en liderazgo y gestión de equipos.",
"Crear programas de mentoría entre líderes experimentados y nuevos líderes.",
"Definir objetivos claros para cada equipo y mejorar comunicación estratégica.",
"Evaluar periódicamente el desempeño de liderazgo."
]

}

else{

problema =
"La organización presenta condiciones relativamente estables en términos de talento humano. Sin embargo, incluso en escenarios estables es importante fortalecer continuamente las capacidades del equipo para mantener competitividad y crecimiento."

acciones = [
"Implementar programas de capacitación continua para el desarrollo profesional.",
"Fomentar innovación en procesos internos.",
"Identificar empleados de alto potencial y desarrollar planes de crecimiento.",
"Fortalecer la cultura organizacional y colaboración entre equipos.",
"Monitorear indicadores de productividad y desempeño organizacional."
]

}

setDiagnostico(problema)
setPlan(acciones)

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
lineHeight:"1.7",
color:"#e2e8f0"
}}>
{diagnostico}
</p>

</div>

)}

{plan.length > 0 && (

<div style={{
marginTop:"25px",
padding:"22px",
background:"rgba(59,130,246,0.12)",
borderRadius:"12px"
}}>

<h3>Plan de acción recomendado</h3>

<ul style={{
marginTop:"10px",
lineHeight:"1.8",
color:"#e2e8f0"
}}>

{plan.map((item,i)=>(
<li key={i}>{item}</li>
))}

</ul>

</div>

)}

</div>

</main>

)

}
