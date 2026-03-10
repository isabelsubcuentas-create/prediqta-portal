"use client"

import { useState } from "react"

export default function Asesor() {

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

<div className="min-h-screen bg-[#020617] text-white p-10">

<div className="max-w-5xl mx-auto">

<h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
Asesor estratégico IA
</h1>

<p className="text-gray-400 mb-8">
Chat inteligente para retención de talento en automotriz
</p>


<div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 mb-6">

{messages.map((m,i)=>(

<p key={i} className="mb-4 leading-relaxed">

<strong className={m.role==="assistant" ? "text-purple-400" : "text-blue-400"}>

{m.role==="assistant" ? "IA:" : "Tú:"}

</strong>

<span className="ml-2 text-gray-200">
{m.content}
</span>

</p>

))}

</div>


<div className="flex gap-3">

<input

value={input}

onChange={(e)=>setInput(e.target.value)}

placeholder="Escribe tu pregunta..."

className="flex-1 bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-purple-500"

/>

<button

onClick={sendMessage}

className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90"

>

Enviar

</button>

</div>

</div>

</div>

)

}
