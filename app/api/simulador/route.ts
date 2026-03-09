import OpenAI from "openai";

export async function POST(req: Request) {

  const body = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const prompt = `
Eres consultor experto en talento humano del sector automotriz.

Analiza la decisión de recursos humanos:

${body.decision}

Genera tres escenarios:
- optimista
- moderado
- pesimista

Devuelve la respuesta en JSON EXACTO:

{
"texto": "explicación corta",
"optimista": 85,
"moderado": 70,
"pesimista": 50
}
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "user", content: prompt }
    ]
  });

  const content = completion.choices[0].message.content;

  return new Response(content, {
    headers: { "Content-Type": "application/json" }
  });

}
