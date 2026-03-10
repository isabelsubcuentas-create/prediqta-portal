"use client"

import { useState } from "react"

export default function Asesor(){

const [input,setInput] = useState("")
const [messages,setMessages] = useState([
{
role:"assistant",
content:"Hola. Soy el Asesor Estratégico IA de Prediqta. Puedo ayudarte con retención de talento en automotriz, pero también responder preguntas generales. ¿Qué quieres analizar?"
}
])

function enviarPregunta(texto:string){

const pregunta = texto || input
if(!pregunta) return

const userMessage = {role:"user",content:pregunta}

let respuesta = ""

if(pregunta.toLowerCase().includes("rotación")){
respuesta = `Para reducir la rotación en planta se recomienda:

1. Analizar causas principales de salida
2. Mejorar programas de onboarding
3. Implementar planes de crecimiento interno
4. Revisar competitividad salarial
5. Fortalecer liderazgo de supervisores`
}

else if(pregunta.toLowerCase().includes("ausentismo")){
respuesta = `Para reducir ausentismo laboral:

1. Analizar patrones por turno
2. Implementar incentivos de asistencia
3. Revisar carga laboral
4. Mejorar clima laboral
5. Establecer seguimiento con supervisores`
}

else if(pregunta.toLowerCase().includes("clima")){
respuesta = `Para mejorar el clima laboral:

1. Capacitar a supervisores en liderazgo
2. Implementar feedback continuo
3. Crear programas de reconocimiento
4. Fomentar comunicación entre turnos
5. Medir clima organizacional periódicamente`
}

else{
respuesta = `Como asesor estratégico recomiendo analizar
