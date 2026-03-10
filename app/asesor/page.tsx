"use client"

import { useState } from "react"

export default function Asesor(){

const [messages,setMessages] = useState([
{
role:"assistant",
content:"Hola. Soy el Asesor Estratégico IA de Prediqta. ¿Cómo puedo ayudarte?"
}
])

const [input,setInput] = useState("")

async function sendMessage(){

if(!input) return

const newMessages = [
...messages,
{role:"user",content:input}
]

setMessages(newMessages)
setInput("")

const res = await fetch("/api/asesor",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
messages:newMessages
})
})

const data = await res.json()

setMessages([
...newMessages,
{
role:"assistant",
content:data.reply
}
])

}

return(

<div style={{
padding:"40px",
background:"#020617",
minHeight:"100vh",
color:"white"
}}>

<h1>Asesor estratégico IA</h1>

<div style={{
marginTop:"30px",
background:"#111827",
padding:"20px",
borderRadius:"10px"
}}>

{messages.map((m,i)=>(
<p key={i}>
<strong>{m.role==="assistant"?"IA":"Tú"}:</strong> {m.content}
</p>
))}

</div>

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Escribe tu pregunta..."
style={{
marginTop:"20px",
width:"100%",
padding:"12px",
borderRadius:"8px"
}}
/>

<button
onClick={sendMessage}
style={{
marginTop:"10px",
padding:"12px 20px"
}}
>
Enviar
</button>

</div>

)

}
