"use client"

import { useState } from "react"

export default function Simulador() {

const [continuidad,setContinuidad] = useState<number | null>(null)
const [liquidez,setLiquidez] = useState<number | null>(null)
const [riesgos,setRiesgos] = useState<number | null>(null)

function generarSimulacion(){

const nuevaContinuidad = Math.floor(Math.random()*30)+60
const nuevaLiquidez = Math.floor(Math.random()*10)+1
const nuevosRiesgos = Math.floor(Math.random()*5)+1

setContinuidad(nuevaContinuidad)
setLiquidez(nuevaLiquidez)
setRiesgos(nuevosRiesgos)

}

const container = {
minHeight:"100vh",
padding:"50px",
background:`
radial-gradient(circle at 20% 10%, rgba(124,58,237,0.25), transparent 40%),
radial-gradient(circle at 80% 0%, rgba(56,189,248,0.20), transparent 40%),
#020617
`,
color:"white",
fontFamily:"Inter, sans-serif"
}

const card = {
background:"rgba(15,23,42,0.7)",
backdropFilter:"blur(12px)",
padding:"30px",
borderRadius:"20px",
border:"1px solid rgba(255,255,255,0.08)",
boxShadow:"0 20px 60px rgba(0,0,0,0.6)"
}

const grid = {
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px",
marginTop:"25px"
}

const kpi = {
background:"rgba(15,23,42,0.7)",
padding:"20px",
borderRadius:"14px",
border:"1px solid rgba(255,255,255,0.08)"
}

const button = {
marginTop:"20px",
padding:"12px 24px",
borderRadius:"12px",
border:"none",
background:"linear-gradient(90deg,#7c3aed,#6366f1,#3b82f6)",
color:"white",
fontWeight:"600",
cursor:"pointer"
}

return (

<main style={container}>

<h1 style={{
fontSize:"42px",
fontWeight:"800",
background:"linear-gradient(90deg,#fff,#a78bfa,#60a5fa)",
WebkitBackgroundClip:"text",
color:"transparent"
}}>
Simulador de Estrategias de Talento
</h1>

<p style={{color:"#cbd5f5",marginTop:"10px"}}>
Evalúa el impacto de decisiones estratégicas en talento humano antes de implementarlas.
</p>

{/* PANEL PRINCIPAL */}

<div style={{...card,marginTop:"40px"}}>

<label>Selecciona estrategia</label>

<br/>

<select style={{
marginTop:"10px",
padding:"10px",
borderRadius:"10px",
background:"#020617",
color:"white",
border:"1px solid rgba(255,255,255,0.1)"
}}>

<option>Implementar IA en RRHH</option>
<option>Programa de retención</option>
<option>Capacitación liderazgo</option>
<option>Optimización turnos</option>

</select>

<br/>

<button style={button}>
Generar simulación
</button>

{/* KPIs */}

<div style={grid}>

<div style={kpi}>
<p>Continuidad</p>
<h2 style={{fontSize:"32px"}}>78</h2>
<span style={{color:"#22c55e"}}>Estable</span>
</div>

<div style={kpi}>
<p>Liquidez</p>
<h2 style={{fontSize:"32px"}}>+6%</h2>
<span style={{color:"#22c55e"}}>Base</span>
</div>

<div style={kpi}>
<p>Riesgos</p>
<h2 style={{fontSize:"32px"}}>4</h2>
<span style={{color:"#38bdf8"}}>Prioritarios</span>
</div>

</div>

{/* GRAFICA */}

<div style={{marginTop:"40px"}}>

<p style={{marginBottom:"15px"}}>Impacto proyectado por escenario</p>

<div style={{
display:"flex",
alignItems:"end",
gap:"20px",
height:"120px"
}}>

<div style={{width:"40px",height:"60%",background:"#7c3aed",borderRadius:"6px"}}></div>
<div style={{width:"40px",height:"45%",background:"#6366f1",borderRadius:"6px"}}></div>
<div style={{width:"40px",height:"30%",background:"#3b82f6",borderRadius:"6px"}}></div>
<div style={{width:"40px",height:"70%",background:"#7c3aed",borderRadius:"6px"}}></div>
<div style={{width:"40px",height:"50%",background:"#6366f1",borderRadius:"6px"}}></div>

</div>

</div>

</div>

</main>

)

}
