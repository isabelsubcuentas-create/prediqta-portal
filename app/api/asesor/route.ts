import OpenAI from "openai"

export async function POST(req: Request) {

try {

const body = await req.json()
const messages = body.messages

const client = new OpenAI({
apiKey: process.env.OPENAI_API_KEY
})

const completion = await client.chat.completions.create({
model: "gpt-4o-mini",
messages: [
{
role: "system",
content: "Eres un asesor estratégico especializado en gestión de talento humano en empresas industriales. Da recomendaciones claras y accionables."
},
...messages
]
})

const reply = completion.choices[0].message.content

return Response.json({
reply
})

} catch (error) {

console.error(error)

return Response.json(
{ error: "Error con OpenAI" },
{ status: 500 }
)

}

}
