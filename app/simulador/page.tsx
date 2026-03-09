"use client"

import { useState } from "react"

export default function Simulador() {

const [continuidad,setContinuidad] = useState<number | null>(null)
const [liquidez,setLiquidez] = useState<number | null>(null)
const [riesgos,setRiesgos] = useState<number | null>(null)

const [explicacion,setExplicacion] = useState("")

const [grafica,setGrafica] = useState<number[]>([])

function generarSimulacion(){

const nuevaContinuidad = Math.floor(Math.random()*30)+60
const nuevaLiquidez = Math.floor(Math.random()*10)+1
const nuevosRiesgos = Math.floor(Math.random()*5)+1

const nuevaGrafica = [
Math.random()*80+20,
Math.random()*80+20,
Math.random()*80+20,
Math.random()*80+20,
Math.random()*80+20
]

setContinuidad(nuevaContinuidad)
setLiquidez(nuevaLiquidez)
setRiesgos(nuevosRiesgos)
setGrafica(nuevaGrafica)

let texto = "Resultados de la simulación:\n\n"

texto += "La simulación analiza cómo podría impactar la estrategia seleccionada en tres aspectos importantes de la empresa: la continuidad operativa, la liquidez y el nivel de riesgos relacionados con el talento humano.\n\n"

if(nuevaContinuidad >= 80){
texto += "Continuidad operativa: La empresa podría mantener sus operaciones funcionando de forma estable si se implementa esta estrategia.\n\n"
}else{
texto += "Continuidad operativa: Podrían existir algunos desafíos para mantener la estabilidad operativa, por lo que sería importante monitorear el clima laboral y la organización del trabajo.\n\n"
}

if(nuevaLiquidez >= 6){
texto += "Liquidez: La estrategia podría generar beneficios económicos o mejorar la eficiencia financiera de la empresa.\n\n"
}else{
texto += "Liquidez: El impacto financiero sería moderado, por lo que los beneficios económicos podrían tomar tiempo en reflejarse.\n\n"
}

if(nuevosRiesgos >= 3){
texto += "Riesgos: Se detectan algunos riesgos organizacionales que deben gestionarse para evitar problemas en el futuro.\n\n"
}else{
texto += "Riesgos: El nivel de riesgo proyectado es bajo, por lo que la estrategia parece relativamente segura.\n\n"
}

texto += "Interpretación general: Esta simulación ayuda a anticipar cómo una decisión estratégica podría afectar a la empresa antes de implementarla en la realidad."

setExplicacion(texto)

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

<button style={button} onClick={generarSimulacion}>
Generar simulación
</button>

<div style={grid}>

<div style={kpi}>
<p>Continuidad</p>
<h2>{continuidad ?? "--"}</h2>
<span style={{color:"#22c55e"}}>Estable</span>
</div>

<div style={kpi}>
<p>Liquidez</p>
<h2>{liquidez ? `+${liquidez}%` : "--"}</h2>
<span style={{color:"#22c55e"}}>Base</span>
</div>

<div style={kpi}>
<p>Riesgos</p>
<h2>{riesgos ?? "--"}</h2>
<span style={{color:"#38bdf8"}}>Prioritarios</span>
</div>

</div>

<div style={{marginTop:"40px"}}>

<p style={{marginBottom:"15px"}}>
Impacto proyectado por escenario
</p>

<div style={{
display:"flex",
alignItems:"end",
gap:"20px",
height:"120px"
}}>

{grafica.map((valor,i)=>(
<div
key={i}
style={{
width:"40px",
height:`${valor}%`,
background:i%2===0 ? "#7c3aed" : "#3b82f6",
borderRadius:"6px",
transition:"0.4s"
}}
></div>
))}

</div>

</div>

</div>

</main>

)

}
