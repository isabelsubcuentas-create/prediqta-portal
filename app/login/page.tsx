"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function LoginPage() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!correo || !password) {
      setMensaje("Completa todos los campos.");
      return;
    }

    setLoading(true);
    setMensaje("Iniciando sesión...");

    const { error } = await supabase.auth.signInWithPassword({
      email: correo,
      password,
    });

    if (error) {
      setMensaje("Correo o contraseña incorrectos.");
      setLoading(false);
      return;
    }

    setMensaje("Inicio de sesión correcto.");
    setLoading(false);
    window.location.href = "/dashboard";
  }

  return (
    <main style={main}>
      <div style={card}>
        <h1 style={title}>Iniciar sesión</h1>
        <p style={subtitle}>Accede a tu cuenta de Prediqta</p>

        <form onSubmit={handleLogin} style={form}>
          <label style={label}>Correo</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="tu@correo.com"
            style={input}
          />

          <label style={label}>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Tu contraseña"
            style={input}
          />

          <button type="submit" disabled={loading} style={button}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        {mensaje ? <p style={message}>{mensaje}</p> : null}

        <p style={footerText}>
          ¿No tienes cuenta? <a href="/registro" style={link}>Crear cuenta</a>
        </p>
      </div>
    </main>
  );
}

const main: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "radial-gradient(circle at top left, rgba(79,70,229,0.18), transparent 30%), linear-gradient(180deg,#020617,#020617)",
  padding: "24px",
  fontFamily: "Arial, sans-serif",
};

const card: React.CSSProperties = {
  width: "100%",
  maxWidth: "480px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "28px",
  color: "white",
};

const title: React.CSSProperties = {
  fontSize: "42px",
  margin: "0 0 8px 0",
};

const subtitle: React.CSSProperties = {
  color: "#cbd5e1",
  marginBottom: "24px",
};

const form: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const label: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "15px",
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "#0b1220",
  color: "#ffffff",
  fontSize: "16px",
  boxSizing: "border-box",
};

const button: React.CSSProperties = {
  marginTop: "8px",
  width: "100%",
  background: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
  border: "none",
  color: "#ffffff",
  padding: "16px 20px",
  borderRadius: "999px",
  fontWeight: 800,
  fontSize: "17px",
  cursor: "pointer",
};

const message: React.CSSProperties = {
  color: "#e2e8f0",
  fontSize: "14px",
  marginTop: "16px",
};

const footerText: React.CSSProperties = {
  marginTop: "18px",
  color: "#cbd5e1",
};

const link: React.CSSProperties = {
  color: "#a78bfa",
  textDecoration: "none",
};
