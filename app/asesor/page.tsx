"use client"

import { useState } from "react"

export default function Asesor() {

const [mensaje,setMensaje] = useState("")

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
maxWidth:"800px"
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

<button style={questionButton}>
¿Cómo reduzco la rotación en planta?
</button>

<button style={questionButton}>
¿Qué hago con el ausentismo?
</button>

<button style={questionButton}>
¿Cómo mejorar el clima laboral por turno?
</button>

</div>

<div style={chatBox}>

Hola. Soy el Asesor Estratégico IA de Prediqta.  
Puedo ayudarte con retención de talento en automotriz, pero también responder preguntas generales.

<br/><br/>

¿Qué quieres analizar?

</div>

</div>

</main>

)

}
