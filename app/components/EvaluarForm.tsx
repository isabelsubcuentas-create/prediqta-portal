"use client";

import { useState } from "react";

export default function EvaluarForm() {
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("");
  const [tamano, setTamano] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  async function enviarLead(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!correo || !rol || !tamano) {
      setMensaje("Completa todos los campos");
      return;
    }

    setLoading(true);
    setMensaje("Enviando...");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo, rol, tamano }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMensaje(data.error || "Error al enviar");
        setLoading(false);
        return;
      }

      setMensaje("Información enviada correctamente");
      setCorreo("");
      setRol("");
      setTamano("");
      setLoading(false);

      setTimeout(() => {
        window.location.href = "/registro";
      }, 1200);
    } catch {
      setMensaje("Error al enviar");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={enviarLead} style={formCard}>
      <label style={label}>Correo</label>
      <input
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="tu@correo.com"
        style={input}
      />

      <label style={label}>Rol</label>
      <select
        value={rol}
        onChange={(e) => setRol(e.target.value)}
        style={input}
      >
        <option value="">Selecciona una opción</option>
        <option value="Dueño / Fundador">Dueño / Fundador</option>
        <option value="Dirección general">Dirección general</option>
        <option value="Finanzas">Finanzas</option>
        <option value="Operaciones">Operaciones</option>
      </select>

      <label style={label}>Tamaño de empresa</label>
      <select
        value={tamano}
        onChange={(e) => setTamano(e.target.value)}
        style={input}
      >
        <option value="">Selecciona una opción</option>
        <option value="1–10 empleados">1–10 empleados</option>
        <option value="11–50 empleados">11–50 empleados</option>
        <option value="51–250 empleados">51–250 empleados</option>
        <option value="250+ empleados">250+ empleados</option>
      </select>

      <button type="submit" disabled={loading} style={button}>
        {loading ? "Enviando..." : "Evaluar mi empresa"}
      </button>

      {mensaje ? <p style={message}>{mensaje}</p> : null}
    </form>
  );
}

const formCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const label: React.CSSProperties = {
  color: "#ffffff",
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
  marginTop: "6px",
};
