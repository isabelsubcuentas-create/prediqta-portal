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
"La organización presenta un nivel alto de rotación de personal. Esto puede afectar la continuidad operativa, aumentar los costos de reclutamiento y reducir la productividad."

planAccion =
`Plan de acción recomendado:

Semana 1-2
Analizar las causas de rotación mediante encuestas internas y entrevistas de salida.

Semana 3-4
Implementar un programa piloto de retención con incentivos o mejoras en condiciones laborales.

Mes 2
Capacitar supervisores en liderazgo y gestión de equipos.

Mes 3
Monitorear indicadores de rotación y satisfacción laboral.`

}

else if(clima === "bajo"){

problema =
"El diagnóstico indica un clima organizacional bajo. Esto puede afectar la motivación del personal, la colaboración entre equipos y la productividad general."

planAccion =
`Plan de acción recomendado:

Semana 1-2
Realizar una evaluación de clima organizacional.

Semana 3-4
Implementar programas de reconocimiento y comunicación interna.

Mes 2
Desarrollar talleres de trabajo en equipo.

Mes 3
Evaluar mejoras en satisfacción y compromiso laboral.`

}

else if(liderazgo === "bajo"){

problema =
"El nivel de liderazgo en supervisores parece limitado. Esto puede generar problemas de coordinación, comunicación y gestión de equipos."

planAccion =
`Plan de acción recomendado:

Semana 1-2
Identificar supervisores que requieren capacitación.

Semana 3-4
Implementar un programa de formación en liderazgo.

Mes 2
Aplicar mentorías entre líderes experimentados y nuevos supervisores.

Mes 3
Evaluar mejoras en desempeño del equipo.`

}

else{

problema =
"La organización presenta condiciones relativamente estables en talento humano. Sin embargo, siempre es recomendable fortalecer procesos de desarrollo profesional y capacitación."

planAccion =
`Plan de acción recomendado:

Semana 1-2
Evaluar habilidades actuales del personal.

Semana 3-4
Diseñar programas de capacitación.

Mes 2
Implementar desarrollo profesional interno.

Mes 3
Medir impacto en productividad y compromiso.`

}

setDiagnostico(problema)
setPlan(planAccion)

}

/* estilos */

const container = {
minHeight:"100vh",
background:"linear-gradient(120deg,#0f172a,#020617)",
padding:"60px",
color:"white",
fontFamily:"system-ui"
}

const card = {
background:"rgba(255,255,255,0.03)",
border:"1px solid rgba(255,255,255,0.08)",
borderRadius:"16px",
padding:"30px",
marginTop:"40px"
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

<p style={{marginTop:"10px",color:"#cbd5f5"}}>
Evalúa el estado actual del talento humano y genera un plan de acción estratégico.
</p>

<div style={card}>

<p>Nivel de rotación de personal</p>
<select onChange={(e)=>setRotacion(e.target.value)}>
<option value="">Seleccionar</option>
<option value="baja">Baja</option>
<option value="media">Media</option>
<option value="alta">Alta</option>
</select>

<p style={{marginTop:"20px"}}>Clima organizacional</p>
<select onChange={(e)=>setClima(e.target.value)}>
<option value="">Seleccionar</option>
<option value="alto">Alto</option>
<option value="medio">Medio</option>
<option value="bajo">Bajo</option>
</select>

<p style={{marginTop:"20px"}}>Nivel de liderazgo</p>
<select onChange={(e)=>setLiderazgo(e.target.value)}>
<option value="">Seleccionar</option>
<option value="alto">Alto</option>
<option value="medio">Medio</option>
<option value="bajo">Bajo</option>
</select>

<p style={{marginTop:"20px"}}>Nivel de capacitación</p>
<select onChange={(e)=>setCapacitacion(e.target.value)}>
<option value="">Seleccionar</option>
<option value="alto">Alto</option>
<option value="medio">Medio</option>
<option value="bajo">Bajo</option>
</select>

<p style={{marginTop:"20px"}}>Nivel de productividad</p>
<select onChange={(e)=>setProductividad(e.target.value)}>
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
cursor:"pointer"
}}
>
Generar diagnóstico
</button>

{diagnostico && (

<div style={{
marginTop:"40px",
padding:"20px",
background:"rgba(255,255,255,0.03)",
borderRadius:"12px"
}}>

<h3>Resultado del diagnóstico</h3>

<p style={{
marginTop:"10px",
lineHeight:"1.6",
color:"#e2e8f0"
}}>
{diagnostico}
</p>

</div>

)}

{plan && (

<div style={{
marginTop:"25px",
padding:"20px",
background:"rgba(59,130,246,0.12)",
borderRadius:"12px"
}}>

<h3>Plan de acción recomendado</h3>

<p style={{
marginTop:"10px",
whiteSpace:"pre-line",
lineHeight:"1.6",
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
