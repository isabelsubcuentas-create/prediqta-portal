"use client";

import { useState } from "react";

export default function EvaluarForm() {

const [correo,setCorreo] = useState("")
const [rol,setRol] = useState("")
const [tamano,setTamano] = useState("")
const [mensaje,setMensaje] = useState("")
const [loading,setLoading] = useState(false)

async function enviarLead(e:any){

e.preventDefault()

if(!correo || !rol || !tamano){
setMensaje("Completa todos los campos")
return
}

setLoading(true)
setMensaje("Enviando...")

try{

const res = await fetch("/api/leads",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
correo,
rol,
tamano
})
})

const data = await res.json()

if(!res.ok){
setMensaje("Error al enviar")
setLoading(false)
return
}

setMensaje("Información enviada correctamente")

setCorreo("")
setRol("")
setTamano("")

setLoading(false)

}catch(err){

setMensaje("Error inesperado")
setLoading(false)

}

}

return(

<form onSubmit={enviarLead}>

<label>Correo</label>
<input
type="email"
value={correo}
onChange={(e)=>setCorreo(e.target.value)}
placeholder="tu@correo.com"
/>

<label>Rol</label>
<select
value={rol}
onChange={(e)=>setRol(e.target.value)}
>
<option value="">Selecciona una opción</option>
<option value="Dueño">Dueño / Fundador</option>
<option value="Dirección">Dirección general</option>
<option value="Finanzas">Finanzas</option>
<option value="Operaciones">Operaciones</option>
</select>

<label>Tamaño de empresa</label>
<select
value={tamano}
onChange={(e)=>setTamano(e.target.value)}
>
<option value="">Selecciona una opción</option>
<option value="1-10">1–10 empleados</option>
<option value="11-50">11–50 empleados</option>
<option value="51-250">51–250 empleados</option>
<option value="250+">250+ empleados</option>
</select>

<button type="submit" disabled={loading}>
{loading ? "Enviando..." : "Evaluar mi empresa"}
</button>

<p>{mensaje}</p>

</form>

)

}
