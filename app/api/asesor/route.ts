import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages || [];

    const lastMessage =
      messages.length > 0 ? messages[messages.length - 1].content : "";

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Eres Prediqta, un asesor estratégico especializado en retención de talento en el sector automotriz. Responde de forma clara, profesional y práctica.",
        },
        {
          role: "user",
          content: lastMessage,
        },
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error en asesor:", error);

    return NextResponse.json(
      { error: "Error generando respuesta de IA" },
      { status: 500 }
    );
  }
}
