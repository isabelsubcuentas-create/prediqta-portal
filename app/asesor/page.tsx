"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";

type Msg = {
  role: "user" | "assistant";
  content: string;
};

export default function AsesorPage() {
  const [correo, setCorreo] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hola. Soy el Asesor Estratégico IA de Prediqta. Puedo ayudarte con retención de talento en automotriz, pero también responder preguntas generales. ¿Qué quieres analizar?",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function revisarSesion() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      setCorreo(user.email || "");
      setLoading(false);
    }

    revisarSesion();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function enviarPregunta() {
    const texto = input.trim();
    if (!texto || sending) return;

    const nuevosMensajes: Msg[] = [...messages, { role: "user", content: texto }];
    setMessages(nuevosMensajes);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/asesor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nuevosMensajes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessages([
          ...nuevosMensajes,
          {
            role: "assistant",
            content: data.error || "Ocurrió un error al generar la respuesta.",
          },
        ]);
        setSending(false);
        return;
      }

      setMessages([
        ...nuevosMensajes,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
      setSending(false);
    } catch {
      setMessages([
        ...nuevosMensajes,
        {
          role: "assistant",
          content: "Ocurrió un error al conectar con el asesor.",
        },
      ]);
      setSending(false);
    }
  }

  if (loading) {
    return (
      <main style={main}>
        <div style={loadingBox}>Cargando asesor...</div>
      </main>
    );
  }

  return (
    <main style={main}>
      <div style={wrap}>
        <div style={top}>
          <div>
            <p style={eyebrow}>ASESOR PREDIQTA</p>
            <h1 style={title}>Asesor estratégico IA</h1>
            <p style={subtitle}>
              Chat inteligente para retención de talento en automotriz
            </p>
          </div>

          <div style={accountCard}>
            <p style={accountLabel}>Sesión activa</p>
            <h2 style={accountEmail}>{correo}</h2>
            <a href="/dashboard" style={backLink}>Volver al dashboard</a>
          </div>
        </div>

        <div style={examplesRow}>
          <button type="button" style={chip} onClick={() => setInput("¿Cómo reduzco la rotación en planta?")}>
            ¿Cómo reduzco la rotación en planta?
          </button>
          <button type="button" style={chip} onClick={() => setInput("¿Qué hago con el ausentismo?")}>
            ¿Qué hago con el ausentismo?
          </button>
          <button type="button" style={chip} onClick={() => setInput("¿Cómo mejorar el clima laboral por turno?")}>
            ¿Cómo mejorar el clima laboral por turno?
          </button>
        </div>

        <section style={chatCard}>
          <div style={messagesBox}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={msg.role === "user" ? userMsgWrap : assistantMsgWrap}
              >
                <div style={msg.role === "user" ? userMsg : assistantMsg}>
                  {msg.content}
                </div>
              </div>
            ))}

            {sending && (
              <div style={assistantMsgWrap}>
                <div style={assistantMsg}>Prediqta está pensando...</div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div style={composer}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              style={textarea}
            />

            <div style={composerActions}>
              <button type="button" style={button} onClick={enviarPregunta}>
                Enviar
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const main: React.CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, rgba(79,70,229,0.18), transparent 30%), linear-gradient(180deg,#020617,#020617)",
  padding: "32px 24px",
  fontFamily: "Arial, sans-serif",
  color: "white",
};

const wrap: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const loadingBox: React.CSSProperties = {
  minHeight: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "28px",
};

const top: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 320px",
  gap: "24px",
  alignItems: "start",
  marginBottom: "24px",
};

const eyebrow: React.CSSProperties = {
  color: "#8b5cf6",
  fontWeight: 800,
  fontSize: "14px",
  margin: "0 0 10px 0",
};

const title: React.CSSProperties = {
  fontSize: "60px",
  lineHeight: 1,
  letterSpacing: "-3px",
  margin: "0 0 12px 0",
};

const subtitle: React.CSSProperties = {
  color: "#cbd5e1",
  fontSize: "20px",
  margin: 0,
};

const accountCard: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(16,185,129,0.06))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "24px",
};

const accountLabel: React.CSSProperties = {
  color: "#93c5fd",
  margin: "0 0 10px 0",
};

const accountEmail: React.CSSProperties = {
  margin: "0 0 10px 0",
  fontSize: "22px",
  wordBreak: "break-word",
};

const backLink: React.CSSProperties = {
  color: "#a78bfa",
  textDecoration: "none",
  fontWeight: 700,
};

const examplesRow: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginBottom: "18px",
};

const chip: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "999px",
  padding: "10px 14px",
  cursor: "pointer",
};

const chatCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  overflow: "hidden",
};

const messagesBox: React.CSSProperties = {
  padding: "24px",
  minHeight: "420px",
  maxHeight: "60vh",
  overflowY: "auto",
  background: "rgba(2,6,23,0.35)",
};

const userMsgWrap: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "14px",
};

const assistantMsgWrap: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  marginBottom: "14px",
};

const userMsg: React.CSSProperties = {
  maxWidth: "75%",
  background: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
  color: "white",
  padding: "14px 16px",
  borderRadius: "18px 18px 4px 18px",
  lineHeight: 1.6,
};

const assistantMsg: React.CSSProperties = {
  maxWidth: "75%",
  background: "rgba(255,255,255,0.06)",
  color: "#f8fafc",
  padding: "14px 16px",
  borderRadius: "18px 18px 18px 4px",
  lineHeight: 1.6,
  border: "1px solid rgba(255,255,255,0.08)",
};

const composer: React.CSSProperties = {
  padding: "18px",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
};

const textarea: React.CSSProperties = {
  width: "100%",
  minHeight: "110px",
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "#0b1220",
  color: "#ffffff",
  fontSize: "16px",
  boxSizing: "border-box",
  resize: "vertical",
};

const composerActions: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "12px",
};

const button: React.CSSProperties = {
  background: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
  color: "white",
  padding: "12px 20px",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
  fontWeight: 800,
  fontSize: "15px",
};
