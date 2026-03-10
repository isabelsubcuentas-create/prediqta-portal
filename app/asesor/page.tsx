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

function quickQuestion(question:string){
setInput(question)
}

return(

<div className="min-h-screen bg-[#020617] text-white p-10">

<div className="max-w-7xl mx-auto">

<h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
Asesor estratégico IA
</h1>

<p className="text-gray-400 mb-8">
Chat inteligente para retención de talento en automotriz
</p>

<div className="grid grid-cols-3 gap-8">

{/* CHAT */}

<div className="col-span-2">

<div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 mb-6 h-[420px] overflow-y-auto">

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


{/* PANEL LATERAL */}

<div className="space-y-6">

{/* Factores críticos */}

<div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">

<h3 className="text-lg font-semibold mb-3 text-purple-400">
Factores críticos
</h3>

<ul className="text-sm text-gray-300 space-y-2">
<li>• Rotación temprana</li>
<li>• Ausentismo laboral</li>
<li>• Clima organizacional</li>
<li>• Liderazgo de supervisores</li>
</ul>

</div>


{/* Preguntas rápidas */}

<div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">

<h3 className="text-lg font-semibold mb-4 text-blue-400">
Preguntas rápidas
</h3>

<div className="space-y-2">

<button
onClick={()=>quickQuestion("¿Cómo reducir la rotación de personal en planta?")}
className="w-full text-left bg-[#0f172a] hover:bg-[#1e293b] px-3 py-2 rounded-lg text-sm"
>
Reducir rotación en planta
</button>

<button
onClick={()=>quickQuestion("¿Qué estrategias ayudan a reducir el ausentismo laboral?")}
className="w-full text-left bg-[#0f172a] hover:bg-[#1e293b] px-3 py-2 rounded-lg text-sm"
>
Reducir ausentismo
</button>

<button
onClick={()=>quickQuestion("¿Cómo mejorar el clima laboral en turnos nocturnos?")}
className="w-full text-left bg-[#0f172a] hover:bg-[#1e293b] px-3 py-2 rounded-lg text-sm"
>
Mejorar clima laboral
</button>

<button
onClick={()=>quickQuestion("¿Cómo retener talento después de capacitación?")}
className="w-full text-left bg-[#0f172a] hover:bg-[#1e293b] px-3 py-2 rounded-lg text-sm"
>
Retener talento
</button>

</div>

</div>


{/* Recomendaciones */}

<div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">

<h3 className="text-lg font-semibold mb-3 text-purple-400">
Recomendaciones comunes
</h3>

<ul className="text-sm text-gray-300 space-y-2">
<li>• Programa de onboarding extendido</li>
<li>• Bonos de permanencia</li>
<li>• Evaluación de supervisores</li>
<li>• Plan de desarrollo interno</li>
</ul>

</div>

</div>

</div>

</div>

</div>

)

}
