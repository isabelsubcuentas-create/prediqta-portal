"use client";

import { useState } from "react";

export default function SimuladorPage() {
  const [decision, setDecision] = useState("");
  const [resultado, setResultado] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function generar() {
    if (!decision) return;

    setLoading(true);

    try {
      const res = await fetch("/api/simulador", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          decision: decision,
        }),
      });

      const data = await res.json();

      setResultado(data);
    } catch (err) {
      console.error("Error generando simulación:", err);
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#020617",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Simulador de Estrategias de Talento
      </h1>

      <p style={{ marginBottom: "20px", color: "#cbd5f5" }}>
        Evalúa decisiones de recursos humanos en el sector automotriz.
      </p>

      <select
        value={decision}
        onChange={(e) => setDecision(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "10px",
          marginBottom: "20px",
          background: "#0f172a",
          color: "white",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <option value="">Selecciona una decisión</option>
        <option value="contratar más personal">
          Contratar más personal
        </option>
        <option value="reducir personal">
          Reducir personal
        </option>
        <option value="implementar IA en RRHH">
          Implementar IA en recursos humanos
        </option>
        <option value="crear programa de capacitación">
          Crear programa de capacitación
        </option>
      </select>

      <br />

      <button
        onClick={generar}
        style={{
          padding: "12px 22px",
          borderRadius: "999px",
          border: "none",
          background: "linear-gradient(135deg,#4f46e5,#8b5cf6)",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Generar análisis
      </button>

      {loading && (
        <p style={{ marginTop: "20px" }}>
          Analizando decisión...
        </p>
      )}

{resultado && (
  <div
    style={{
      marginTop: "40px",
      padding: "30px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      maxWidth: "700px",
    }}
  >
    <h2 style={{ marginBottom: "10px" }}>Escenarios generados</h2>

    <p style={{ color: "#cbd5f5", marginBottom: "30px" }}>
      {resultado.texto}
    </p>

    <h3 style={{ marginBottom: "20px" }}>
      Impacto estimado en productividad
    </h3>

    {/* OPTIMISTA */}
    <div style={{ marginBottom: "18px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Escenario optimista</span>
        <strong>{resultado.optimista}%</strong>
      </div>

      <div
        style={{
          height: "10px",
          background: "#1e293b",
          borderRadius: "10px",
          marginTop: "6px",
        }}
      >
        <div
          style={{
            width: `${resultado.optimista}%`,
            height: "100%",
            background: "#22c55e",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>

    {/* MODERADO */}
    <div style={{ marginBottom: "18px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Escenario moderado</span>
        <strong>{resultado.moderado}%</strong>
      </div>

      <div
        style={{
          height: "10px",
          background: "#1e293b",
          borderRadius: "10px",
          marginTop: "6px",
        }}
      >
        <div
          style={{
            width: `${resultado.moderado}%`,
            height: "100%",
            background: "#f59e0b",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>

    {/* PESIMISTA */}
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Escenario pesimista</span>
        <strong>{resultado.pesimista}%</strong>
      </div>

      <div
        style={{
          height: "10px",
          background: "#1e293b",
          borderRadius: "10px",
          marginTop: "6px",
        }}
      >
        <div
          style={{
            width: `${resultado.pesimista}%`,
            height: "100%",
            background: "#ef4444",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  </div>
)}
