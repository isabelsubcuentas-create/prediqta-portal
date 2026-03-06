"use client"

import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function EvaluarForm() {

const [correo,setCorreo] = useState("")
const [rol,setRol] = useState("")
const [tamano,setTamano] = useState("")
const [mensaje,setMensaje] = useState("")

async function enviarLead(){

console.log("CLICK DETECTADO")

const { error } = await supabase
.from("leads")
.insert([
{
correo: correo,
rol: rol,
tamano_empresa: tamano
}
])

if(error){
console.log(error)
setMensaje("Error al enviar")
return
}

setMensaje("Enviado correctamente")
setCorreo("")
setRol("")
setTamano("")

}

return(

<div style={{display:"flex",flexDirection:"column",gap:"12px"}}>

<input
placeholder="correo"
value={correo}
onChange={(e)=>setCorreo(e.target.value)}
/>

<select
value={rol}
onChange={(e)=>setRol(e.target.value)}
>
<option value="">rol</option>
<option value="dueño">dueño</option>
<option value="director">director</option>
</select>

<select
value={tamano}
onChange={(e)=>setTamano(e.target.value)}
>
<option value="">tamano</option>
<option value="1-10">1-10</option>
<option value="10-50">10-50</option>
<option value="50+">50+</option>
</select>

<button onClick={enviarLead}>
ENVIAR
</button>

<p>{mensaje}</p>

</div>

)

}
