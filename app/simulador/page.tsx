"use client";

import { useState } from "react";

export default function SimuladorPage() {
  const [decision, setDecision] = useState("");
  const [resultado, setResultado] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function generar() {
    setLoading(true);

    const res = await fetch("/api/simulador", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ decision }),
    });

    const data = await res.json();
    setResultado(data);
    setLoading(false);
  }

  return (
    <main style={{ padding: 40, color: "white" }}>
      <h1>Simulador de Estrategias de Talento</h1>

      <select
        value={decision}
        onChange={(e) => setDecision(e.target.value)}
      >
        <option value="">Selecciona una decisión</option>
        <option value="contratar personal">Contratar personal</option>
        <option value="reducir personal">Reducir personal</option>
        <option value="programa de capacitación">Programa de capacitación</option>
        <option value="implementar IA en RRHH">Implementar IA en RRHH</option>
      </select>

      <br /><br />

      <button onClick={generar}>
        Generar análisis
      </button>

      {loading && <p>Generando análisis...</p>}

      {resultado && (
        <div style={{ marginTop: 40 }}>
          <h2>Escenarios</h2>

          <p>{resultado.texto}</p>

          <h3>Impacto en productividad</h3>

          <p>Optimista: {resultado.optimista}%</p>
          <p>Moderado: {resultado.moderado}%</p>
          <p>Pesimista: {resultado.pesimista}%</p>
        </div>
      )}
    </main>
  );
}
