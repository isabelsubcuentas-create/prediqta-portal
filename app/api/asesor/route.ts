import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages ?? [];

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content:
            "Eres Prediqta, un asesor estratégico de IA. Respondes en español claro, útil y profesional. Puedes responder preguntas generales, pero cuando sea posible orienta la respuesta a retención de talento humano en el sector automotriz.",
        },
        ...messages,
      ],
    });

    return NextResponse.json({
      reply: response.output_text,
    });
  } catch {
    return NextResponse.json(
      { error: "Error generando respuesta de IA" },
      { status: 500 }
    );
  }
}
