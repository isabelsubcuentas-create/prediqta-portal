"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function EvaluarForm() {
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("");
  const [tamano, setTamano] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!correo || !rol || !tamano) {
      setMensaje("Por favor completa todos los campos.");
      return;
    }

    setCargando(true);
    setMensaje("Enviando...");

    const { error } = await supabase.from("leads").insert([
      {
        correo,
        rol,
        tamano_empresa: tamano,
      },
    ]);

    if (error) {
      setMensaje("Error al enviar: " + error.message);
      setCargando(false);
      return;
    }

    setMensaje("Información enviada correctamente.");
    setCorreo("");
    setRol("");
    setTamano("");
    setCargando(false);
  }

  return (
    <form onSubmit={handleSubmit} style={formCard}>
      <label style={label}>Correo</label>
      <input
        type="email"
        style={input}
        placeholder="tu@correo.com"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <label style={label}>Rol</label>
      <select
        style={input}
        value={rol}
        onChange={(e) => setRol(e.target.value)}
      >
        <option value="">Selecciona una opción</option>
        <option value="Dueño / Fundador">Dueño / Fundador</option>
        <option value="Dirección general">Dirección general</option>
        <option value="Finanzas">Finanzas</option>
        <option value="Operaciones">Operaciones</option>
      </select>

      <label style={label}>Tamaño de empresa</label>
      <select
        style={input}
        value={tamano}
        onChange={(e) => setTamano(e.target.value)}
      >
        <option value="">Selecciona una opción</option>
        <option value="1–10 empleados">1–10 empleados</option>
        <option value="11–50 empleados">11–50 empleados</option>
        <option value="51–250 empleados">51–250 empleados</option>
        <option value="250+ empleados">250+ empleados</option>
      </select>

      <button
        type="submit"
        disabled={cargando}
        style={{
          ...primaryBig,
          width: "100%",
          marginTop: "12px",
          opacity: cargando ? 0.7 : 1,
        }}
      >
        {cargando ? "Enviando..." : "Evaluar mi empresa"}
      </button>

      {mensaje && (
        <p style={mensajeStyle}>
          {mensaje}
        </p>
      )}
    </form>
  );
}

const formCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "26px",
  padding: "22px",
};

const label: React.CSSProperties = {
  display: "block",
  marginBottom: "8px",
  marginTop: "10px",
  fontWeight: 700,
  color: "white",
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "16px 18px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(2,6,23,0.55)",
  color: "#f8fafc",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};

const primaryBig: React.CSSProperties = {
  background: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
  border: "none",
  color: "white",
  padding: "18px 28px",
  borderRadius: "999px",
  fontWeight: 800,
  fontSize: "18px",
  cursor: "pointer",
  boxShadow: "0 18px 40px rgba(99,102,241,0.28)",
};

const mensajeStyle: React.CSSProperties = {
  marginTop: "14px",
  color: "#cbd5e1",
  fontSize: "14px",
  lineHeight: 1.5,
};
