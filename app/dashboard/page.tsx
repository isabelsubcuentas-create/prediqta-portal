"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function DashboardPage() {
  const [correo, setCorreo] = useState("");
  const [loading, setLoading] = useState(true);

  const [mostrarAsesor, setMostrarAsesor] = useState(false);
  const [pregunta, setPregunta] = useState("");
  const [respuesta, setRespuesta] = useState("");

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

  function analizarPregunta() {
    const texto = pregunta.toLowerCase();

    if (!texto) {
      setRespuesta("Escribe una pregunta para analizar.");
      return;
    }

    if (texto.includes("liquidez")) {
      setRespuesta(
        "Prediqta recomienda priorizar estabilidad financiera antes de expandirte. Revisa flujo de caja, gastos fijos y escenarios de crecimiento."
      );
      return;
    }

    if (texto.includes("proveedor")) {
      setRespuesta(
        "Existe riesgo de dependencia operativa. Recomendación: diversificar proveedores críticos para reducir vulnerabilidad."
      );
      return;
    }

    if (texto.includes("crecimiento")) {
      setRespuesta(
        "El crecimiento es viable si tu capacidad operativa y financiera lo soporta. Valida capital de trabajo antes de expandirte."
      );
      return;
    }

    setRespuesta(
      "Prediqta recomienda evaluar impacto financiero, riesgo operativo y capacidad de ejecución antes de tomar esta decisión."
    );
  }

  if (loading) {
    return <div style={center}>Cargando dashboard...</div>;
  }

  return (
    <div style={container}>
      <div style={header}>
        <div>
          <h1>Dashboard Prediqta</h1>
          <p>Centro de inteligencia estratégica</p>
        </div>

        <div style={account}>
          <p>Cuenta activa</p>
          <strong>{correo}</strong>
        </div>
      </div>

      <div style={tools}>
        <div style={card}>
          <h3>Asesor estratégico IA</h3>

          <button
            style={button}
            onClick={() => setMostrarAsesor(!mostrarAsesor)}
          >
            {mostrarAsesor ? "Cerrar asesor" : "Abrir asesor"}
          </button>
        </div>

        <div style={card}>
          <h3>Simulador de escenarios</h3>
          <button style={button}>Próximamente</button>
        </div>

        <div style={card}>
          <h3>Radar de riesgos</h3>
          <button style={button}>Próximamente</button>
        </div>
      </div>

      {mostrarAsesor && (
        <div style={advisor}>
          <h2>Consulta estratégica</h2>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Ejemplo: ¿Cómo mejorar liquidez?"
            style={textarea}
          />

          <button style={button} onClick={analizarPregunta}>
            Analizar
          </button>

          {respuesta && <div style={respuestaBox}>{respuesta}</div>}
        </div>
      )}
    </div>
  );
}

const container = {
  minHeight: "100vh",
  background: "#020617",
  color: "white",
  padding: "40px",
  fontFamily: "Arial",
};

const center = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#020617",
  color: "white",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "40px",
};

const account = {
  background: "#111827",
  padding: "20px",
  borderRadius: "10px",
};

const tools = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "20px",
  marginBottom: "40px",
};

const card = {
  background: "#111827",
  padding: "25px",
  borderRadius: "12px",
};

const advisor = {
  background: "#111827",
  padding: "30px",
  borderRadius: "12px",
};

const textarea = {
  width: "100%",
  height: "120px",
  padding: "10px",
  marginBottom: "20px",
};

const respuestaBox = {
  marginTop: "20px",
  background: "#020617",
  padding: "20px",
  borderRadius: "10px",
};

const button = {
  background: "#6366f1",
  color: "white",
  padding: "10px 18px",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
};
