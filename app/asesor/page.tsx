"use client"

import { useState } from "react"

export default function Asesor(){

const [input,setInput] = useState("")
const [messages,setMessages] = useState([
{
role:"assistant",
content:"Hola. Soy el Asesor Estratégico IA de Prediqta. Puedo ayudarte con retención de talento en automotriz o responder preguntas generales. ¿Qué quieres analizar?"
}
])

function generarRespuesta(pregunta:string){

let respuesta=""

if(pregunta.toLowerCase().includes("rotación")){
respuesta = `Para reducir la rotación en planta se recomienda:

1. Analizar causas principales de salida
2. Mejorar procesos de onboarding
3. Crear planes de crecimiento interno
4. Revisar competitividad salarial
5. Fortalecer liderazgo de supervisores`
}

else if(pregunta.toLowerCase().includes("ausentismo")){
respuesta = `Para reducir el ausentismo laboral:

1. Analizar patrones por turno
2. Implementar incentivos de asistencia
3. Revisar carga laboral
4. Mejorar clima organizacional
5. Crear seguimiento con supervisores`
}

else if(pregunta.toLowerCase().includes("clima")){
respuesta = `Para mejorar el clima laboral:

1. Capacitar supervisores en liderazgo
2. Implementar feedback continuo
3. Crear programas de reconocimiento
4. Mejorar comunicación entre turnos
5. Medir clima organizacional periódicamente`
}

else{
respuesta = `Recomiendo analizar tres factores clave:

1. Rotación de personal
2. Ausentismo laboral
3. Clima organizacional

Estas variables suelen ser los principales indicadores de riesgo en talento humano dentro de plantas industriales.`
}

return respuesta
}

function enviarPregunta(texto?:string){

const pregunta = texto || input
if(!pregunta) return

const respuesta = generarRespuesta(pregunta)

setMessages(prev=>[
...prev,
{role:"user",content:pregunta},
{role:"assistant",content:respuesta}
])

setInput("")
}

const container = {
minHeight:"100vh",
background:"linear-gradient(120deg,#0f172a,#020617)",
padding:"60px",
color:"white",
fontFamily:"Inter, sans-serif"
}

const header = {
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}

const userCard = {
background:"rgba(15,23,42,0.6)",
backdropFilter:"blur(10px)",
padding:"16px 22px",
borderRadius:"16px",
border:"1px solid rgba(255,255,255,0.08)"
}

const card = {
background:"rgba(255,255,255,0.04)",
border:"1px solid rgba(255,255,255,0.08)",
borderRadius:"16px",
padding:"32px",
marginTop:"40px",
maxWidth:"1000px"
}

const questionButton = {
padding:"12px 18px",
borderRadius:"999px",
border:"1px solid rgba(255,255,255,0.1)",
background:"rgba(255,255,255,0.04)",
color:"white",
cursor:"pointer",
fontSize:"14px"
}

const chatBox = {
marginTop:"30px",
padding:"24px",
borderRadius:"14px",
background:"rgba(255,255,255,0.05)",
border:"1px solid rgba(255,255,255,0.08)",
lineHeight:"1.6",
maxWidth:"800px",
minHeight:"180px"
}

const inputStyle={
marginTop:"20px",
width:"100%",
padding:"14px",
borderRadius:"10px",
background:"#020617",
border:"1px solid rgba(255,255,255,0.1)",
color:"white"
}

const sendButton={
marginTop:"10px",
padding:"14px 24px",
borderRadius:"10px",
background:"linear-gradient(90deg,#7c3aed,#3b82f6)",
color:"white",
border:"none",
cursor:"pointer",
fontWeight:"600"
}

return (

<main style={container}>

<div style={header}>

<div>

<p style={{
color:"#8b5cf6",
fontWeight:"600",
letterSpacing:"1px",
fontSize:"13px"
}}>
ASESOR PREDIQTA
</p>

<h1 style={{
fontSize:"56px",
fontWeight:"800",
marginTop:"6px",
background:"linear-gradient(90deg,#ffffff,#c4b5fd,#60a5fa)",
WebkitBackgroundClip:"text",
color:"transparent"
}}>
Asesor estratégico IA
</h1>

<p style={{
marginTop:"12px",
color:"#cbd5f5"
}}>
Chat inteligente para retención de talento en automotriz
</p>

</div>

<div style={userCard}>

<p style={{color:"#60a5fa"}}>Sesión activa</p>

<p style={{
marginTop:"6px",
fontSize:"18px"
}}>
test9.9@gmail.com
</p>

<a href="/dashboard" style={{
color:"#a78bfa",
marginTop:"6px",
display:"inline-block"
}}>
Volver al dashboard
</a>

</div>

</div>

<div style={card}>

<div style={{
display:"flex",
gap:"12px",
flexWrap:"wrap"
}}>

<button style={questionButton} onClick={()=>enviarPregunta("rotación")}>
¿Cómo reduzco la rotación en planta?
</button>

<button style={questionButton} onClick={()=>enviarPregunta("ausentismo")}>
¿Qué hago con el ausentismo?
</button>

<button style={questionButton} onClick={()=>enviarPregunta("clima laboral")}>
¿Cómo mejorar el clima laboral por turno?
</button>

</div>

<div style={chatBox}>

{messages.map((m,i)=>(
<p key={i} style={{
marginBottom:"12px",
color:m.role==="assistant"?"#e2e8f0":"#93c5fd"
}}>
<strong>{m.role==="assistant"?"IA: ":"Tú: "}</strong>
{m.content}
</p>
))}

</div>

<input
style={inputStyle}
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Escribe tu pregunta..."
/>

<button style={sendButton} onClick={()=>enviarPregunta()}>
Enviar pregunta
</button>

</div>

</main>

)

}
