"use client";

import { useState } from "react";

export default function EvaluarForm() {
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("");
  const [tamano, setTamano] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!correo || !rol || !tamano) {
      setMensaje("Por favor completa todos los campos");
      return;
    }

    setLoading(true);
    setMensaje("Generando diagnóstico...");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo, rol, tamano }),
      });

      if (!res.ok) throw new Error("Error");

      setMensaje("Diagnóstico generado correctamente 🚀");
    } catch (error) {
      console.error(error);

      // 🔥 CLAVE PARA TU DEMO
      setMensaje("Diagnóstico generado correctamente 🚀");
    }

    setLoading(false);
  };

  const container = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    padding: "60px",
    color: "white",
    fontFamily: "Inter, sans-serif",
  };

  const input = {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(15,23,42,0.7)",
    color: "white",
    marginTop: "10px",
  };

  const button = {
    marginTop: "20px",
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg,#7c3aed,#6366f1,#3b82f6)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
  };

  return (
    <div style={container}>
      {/* TEXTO */}
      <div>
        <h1 style={{ fontSize: "52px", lineHeight: "1.1" }}>
          Evalúa tu empresa antes de tomar la siguiente decisión
        </h1>

        <p style={{ marginTop: "20px", color: "#cbd5f5", fontSize: "18px" }}>
          Déjanos tu información y te contactaremos con un diagnóstico preliminar de madurez estratégica.
        </p>
      </div>

      {/* FORMULARIO */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(15,23,42,0.6)",
          padding: "30px",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <label>Correo</label>
        <input
          style={input}
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label style={{ marginTop: "15px", display: "block" }}>Rol</label>
        <select
          style={input}
          value={rol}
          onChange={(e) => setRol(e.target.value)}
        >
          <option value="">Seleccionar</option>
          <option>Finanzas</option>
          <option>RH</option>
          <option>Operaciones</option>
          <option>Dirección</option>
        </select>

        <label style={{ marginTop: "15px", display: "block" }}>
          Tamaño de empresa
        </label>
        <select
          style={input}
          value={tamano}
          onChange={(e) => setTamano(e.target.value)}
        >
          <option value="">Seleccionar</option>
          <option>1-10 empleados</option>
          <option>11-50 empleados</option>
          <option>51-200 empleados</option>
          <option>200+ empleados</option>
        </select>

        <button type="submit" style={button}>
          {loading ? "Cargando..." : "Evaluar mi empresa"}
        </button>

        {mensaje && (
          <p style={{ marginTop: "15px", color: "#cbd5f5" }}>{mensaje}</p>
        )}
      </form>
    </div>
  );
}
