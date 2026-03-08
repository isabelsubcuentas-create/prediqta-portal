"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function RegistroPage() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [registroExitoso, setRegistroExitoso] = useState(false);

  useEffect(() => {
    if (registroExitoso) {
      const timer = setTimeout(() => {
        window.location.replace("/login");
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [registroExitoso]);

  async function handleRegistro(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!correo || !password) {
      setMensaje("Completa todos los campos.");
      return;
    }

    if (password.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setLoading(true);
    setMensaje("Creando cuenta...");

    const { error } = await supabase.auth.signUp({
      email: correo,
      password,
    });

if (error) {
  if (error.message.includes("rate limit")) {
    setMensaje("Registro temporalmente limitado. Usa una cuenta de prueba o intenta más tarde.");
  } else {
    setMensaje(error.message);
  }
  setLoading(false);
  return;
}

    setMensaje("Cuenta creada correctamente. Redirigiendo a login...");
    setLoading(false);
    setRegistroExitoso(true);
  }

  return (
    <main style={main}>
      <div style={card}>
        <h1 style={title}>Crear cuenta</h1>
        <p style={subtitle}>Regístrate para acceder a Prediqta</p>

        <form onSubmit={handleRegistro} style={form}>
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
            placeholder="Mínimo 6 caracteres"
            style={input}
          />

          <button type="submit" disabled={loading} style={button}>
            {loading ? "Creando cuenta..." : "Crear cuenta"}
          </button>
        </form>

        {mensaje ? <p style={message}>{mensaje}</p> : null}

        {registroExitoso ? (
          <a href="/login" style={secondaryButton}>
            Ir a login ahora
          </a>
        ) : null}

        <p style={footerText}>
          ¿Ya tienes cuenta? <a href="/login" style={link}>Inicia sesión</a>
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

const secondaryButton: React.CSSProperties = {
  display: "block",
  marginTop: "14px",
  width: "100%",
  textAlign: "center",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.10)",
  color: "#ffffff",
  padding: "14px 18px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "16px",
  textDecoration: "none",
  boxSizing: "border-box",
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
