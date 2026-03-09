"use client"

import { useState } from "react"

export default function Simulador() {

const [continuidad,setContinuidad] = useState<number | null>(null)
const [liquidez,setLiquidez] = useState<number | null>(null)
const [riesgos,setRiesgos] = useState<number | null>(null)
const [grafica,setGrafica] = useState<number[]>([30,50,40,60,45])
const [explicacion,setExplicacion] = useState("")

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

let texto = ""

texto += "La simulación analiza el posible impacto de la estrategia seleccionada en tres factores clave de la organización: continuidad operativa, liquidez y riesgos organizacionales.\n\n"

if(nuevaContinuidad >= 80){
texto += "Continuidad operativa: El resultado indica una situación estable. La empresa tendría buenas probabilidades de mantener sus operaciones funcionando sin interrupciones importantes.\n\n"
}else{
texto += "Continuidad operativa: El resultado muestra una estabilidad moderada. Se recomienda monitorear factores internos como clima laboral o carga de trabajo.\n\n"
}

if(nuevaLiquidez >= 6){
texto += "Liquidez: El impacto financiero proyectado es positivo. La estrategia podría mejorar la eficiencia económica o reducir costos.\n\n"
}else{
texto += "Liquidez: El impacto financiero sería moderado y los beneficios podrían verse en el mediano plazo.\n\n"
}

if(nuevosRiesgos >= 3){
texto += "Riesgos: Se detectan algunos riesgos organizacionales que deberían gestionarse adecuadamente para evitar problemas futuros.\n\n"
}else{
texto += "Riesgos: El nivel de riesgo proyectado es bajo, lo que indica que la estrategia parece relativamente segura para la organización.\n\n"
}

texto += "Interpretación general: Esta simulación permite anticipar posibles efectos de una decisión estratégica antes de implementarla en la empresa."

setExplicacion(texto)

}

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

const metricCard = {
flex:1,
background:"rgba(255,255,255,0.02)",
border:"1px solid rgba(255,255,255,0.06)",
borderRadius:"12px",
padding:"20px"
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
Simulador de Estrategias de Talento
</h1>

<p style={{marginTop:"10px",color:"#cbd5f5"}}>
Evalúa el impacto de decisiones estratégicas en talento humano antes de implementarlas.
</p>

<div style={card}>

<p>Selecciona estrategia</p>

<select style={{
marginTop:"10px",
padding:"10px",
background:"#020617",
color:"white",
borderRadius:"8px"
}}>
<option>Programa de retención</option>
<option>Capacitación liderazgo</option>
<option>Implementar IA en RRHH</option>
</select>

<br/>

<button
onClick={generarSimulacion}
style={{
marginTop:"20px",
padding:"14px 28px",
borderRadius:"10px",
background:"linear-gradient(90deg,#7c3aed,#3b82f6)",
color:"white",
border:"none",
cursor:"pointer"
}}
>
Generar simulación
</button>

<div style={{
display:"flex",
gap:"20px",
marginTop:"30px"
}}>

<div style={metricCard}>
<p>Continuidad</p>
<h2>{continuidad ?? "-"}</h2>
<span style={{color:"#22c55e"}}>Estable</span>
</div>

<div style={metricCard}>
<p>Liquidez</p>
<h2>{liquidez ? `+${liquidez}%` : "-"}</h2>
<span style={{color:"#22c55e"}}>Base</span>
</div>

<div style={metricCard}>
<p>Riesgos</p>
<h2>{riesgos ?? "-"}</h2>
<span style={{color:"#38bdf8"}}>Prioritarios</span>
</div>

</div>

<p style={{marginTop:"40px"}}>Impacto proyectado por escenario</p>

<div style={{
display:"flex",
alignItems:"end",
gap:"20px",
height:"120px",
marginTop:"20px"
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

{explicacion && (

<div style={{
marginTop:"40px",
padding:"24px",
borderRadius:"16px",
background:"rgba(255,255,255,0.03)",
border:"1px solid rgba(255,255,255,0.08)"
}}>

<h3>Interpretación de la simulación</h3>

<p style={{
color:"#cbd5f5",
lineHeight:"1.7",
whiteSpace:"pre-line"
}}>
{explicacion}
</p>

</div>

)}

</div>

</main>

)

}
