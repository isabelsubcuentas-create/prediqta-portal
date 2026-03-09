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
            padding: "20px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2>Escenarios generados</h2>

          <p style={{ marginTop: "10px" }}>
            {resultado.texto}
          </p>

          <div style={{ marginTop: "20px" }}>
            <h3>Impacto estimado en productividad</h3>

            <p>Escenario optimista: {resultado.optimista}%</p>
            <p>Escenario moderado: {resultado.moderado}%</p>
            <p>Escenario pesimista: {resultado.pesimista}%</p>
          </div>
        </div>
      )}
    </main>
  );
}
