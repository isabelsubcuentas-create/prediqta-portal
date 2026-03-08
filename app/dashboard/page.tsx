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

    if (!texto.trim()) {
      setRespuesta("Escribe una pregunta para analizar.");
      return;
    }

    if (texto.includes("liquidez")) {
      setRespuesta(
        "Prediqta detecta que deberías priorizar estabilidad financiera antes de expandirte. Recomendación: optimizar flujo de caja, revisar gastos fijos y simular escenarios antes de tomar decisiones de crecimiento."
      );
      return;
    }

    if (texto.includes("proveedor")) {
      setRespuesta(
        "Existe un riesgo potencial de dependencia operativa. Recomendación: diversificar proveedores críticos y evaluar tiempos de entrega para reducir vulnerabilidad."
      );
      return;
    }

    if (texto.includes("crecimiento")) {
      setRespuesta(
        "El crecimiento puede ser viable si tu capacidad operativa y financiera lo soporta. Prediqta recomienda validar capital de trabajo y proyectar demanda antes de expandir."
      );
      return;
    }

    setRespuesta(
      "Prediqta recomienda analizar esta decisión evaluando impacto financiero, riesgo operativo y capacidad de ejecución antes de implementarla."
    );
  }

  if (loading) {
    return (
      <main style={main}>
        <div style={card}>
          <h1 style={title}>Cargando dashboard...</h1>
        </div>
      </main>
    );
  }

  return (
    <main style={main}>
      <div style={wrap}>

        {/* HEADER */}

        <div style={topBar}>
          <div>
            <p style={eyebrow}>PANEL EJECUTIVO</p>
            <h1 style={heroTitle}>Dashboard Prediqta</h1>
            <p style={heroSubtitle}>
              Centro de inteligencia estratégica para tu empresa
            </p>
          </div>

          <div style={accountCard}>
            <p style={accountLabel}>Cuenta activa</p>
            <h2 style={accountName}>{correo}</h2>
            <p style={accountPlan}>Prediqta Pro</p>
          </div>
        </div>

        {/* RESUMEN */}

        <div style={grid}>
          <section style={bigCard}>
            <p style={sectionEyebrow}>RESUMEN GENERAL</p>

            <h2 style={bigTitle}>
              Tu empresa muestra una condición estratégica estable
            </h2>

            <p style={bigText}>
              Actualmente Prediqta detecta una posición saludable pero con
              riesgos moderados en liquidez y dependencia de proveedores.
            </p>

            <div style={statsGrid}>
              <div style={statBox}>
                <p style={statLabel}>Continuidad</p>
                <h3 style={statNumber}>78</h3>
              </div>

              <div style={statBox}>
                <p style={statLabel}>Liquidez proyectada</p>
                <h3 style={statNumber}>+6%</h3>
              </div>

              <div style={statBox}>
                <p style={statLabel}>Riesgos activos</p>
                <h3 style={statNumber}>4</h3>
              </div>
            </div>
          </section>

          <section style={sideCard}>
            <p style={sectionEyebrow}>PERFIL DE EMPRESA</p>

            <div style={row}><span>Empresa</span><strong>Prediqta Demo Company</strong></div>
            <div style={row}><span>Sector</span><strong>Servicios</strong></div>
            <div style={row}><span>Tamaño</span><strong>PyME</strong></div>
            <div style={row}><span>Plan</span><strong>Pro</strong></div>
            <div style={row}><span>Usuario</span><strong>{correo}</strong></div>
          </section>
        </div>

        {/* HERRAMIENTAS */}

        <div style={toolsGrid}>

          <section style={toolCard}>
            <h3 style={toolTitle}>Asesor estratégico IA</h3>

            <button
              style={button}
              onClick={() => setMostrarAsesor(!mostrarAsesor)}
            >
              {mostrarAsesor ? "Cerrar asesor" : "Abrir asesor"}
            </button>
          </section>

          <section style={toolCard}>
            <h3 style={toolTitle}>Simulador de escenarios</h3>
            <button style={button}>Próximamente</button>
          </section>

          <section style={toolCard}>
            <h3 style={toolTitle}>Radar de riesgos</h3>
            <button style={button}>Próximamente</button>
          </section>

        </div>

        {/* ASESOR */}

        {mostrarAsesor && (

          <section style={advisorCard}>

            <h3 style={advisorTitle}>
              Consulta estratégica
            </h3>

            <textarea
              style={textarea}
              placeholder="Ejemplo: ¿Cómo mejorar mi liquidez?"
              value={pregunta}
              onChange={(e) => setPregunta(e.target.value)}
            />

            <button
              style={button}
              onClick={analizarPregunta}
            >
              Analizar
            </button>

            {respuesta && (
              <div style={responseBox}>
                {respuesta}
              </div>
            )}

          </section>

        )}

      </div>
    </main>
  );
}

const main: React.CSSProperties = {
  minHeight: "100vh",
  overflowY: "auto",
  background: "#020617",
  padding: "32px",
  color: "white",
  fontFamily: "Arial"
};

const wrap: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto"
};

const topBar: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "40px"
};

const heroTitle: React.CSSProperties = {
  fontSize: "60px",
  margin: 0
};

const heroSubtitle: React.CSSProperties = {
  color: "#94a3b8"
};

const eyebrow: React.CSSProperties = {
  color: "#8b5cf6",
  fontWeight: "bold"
};

const sectionEyebrow: React.CSSProperties = {
  color: "#8b5cf6",
  fontWeight: "bold",
  fontSize: "14px",
  marginBottom: "10px"
};

const accountCard: React.CSSProperties = {
  background: "#111827",
  padding: "20px",
  borderRadius: "16px"
};

const accountLabel: React.CSSProperties = {
  color: "#94a3b8"
};

const accountName: React.CSSProperties = {
  margin: 0
};

const accountPlan: React.CSSProperties = {
  color: "#94a3b8"
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "20px",
  marginBottom: "30px"
};

const bigCard: React.CSSProperties = {
  background: "#111827",
  padding: "30px",
  borderRadius: "20px"
};

const sideCard: React.CSSProperties = {
  background: "#111827",
  padding: "30px",
  borderRadius: "20px"
};

const bigTitle: React.CSSProperties = {
  fontSize: "32px"
};

const bigText: React.CSSProperties = {
  color: "#cbd5f5"
};

const statsGrid: React.CSSProperties = {
  display: "flex",
  gap: "20px",
  marginTop: "20px"
};

const statBox: React.CSSProperties = {
  background: "#020617",
  padding: "20px",
  borderRadius: "14px"
};

const statLabel: React.CSSProperties = {
  color: "#94a3b8"
};

const statNumber: React.CSSProperties = {
  fontSize: "32px"
};

const row: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 0",
  borderBottom: "1px solid #1e293b"
};

const toolsGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "20px",
  marginBottom: "30px"
};

const toolCard: React.CSSProperties = {
  background: "#111827",
  padding: "24px",
  borderRadius: "16px"
};

const toolTitle: React.CSSProperties = {
  marginBottom: "10px"
};

const advisorCard: React.CSSProperties = {
  background: "#111827",
  padding: "30px",
  borderRadius: "20px"
};

const advisorTitle: React.CSSProperties = {
  marginBottom: "20px"
};

const textarea: React.CSSProperties = {
  width: "100%",
  height: "120px",
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  marginBottom: "20px"
};

const responseBox: React.CSSProperties = {
  marginTop: "20px",
  background: "#020617",
  padding: "20px",
  borderRadius: "12px"
};

const button: React.CSSProperties = {
  background: "#6366f1",
  color: "white",
  padding: "12px 20px",
  borderRadius: "20px",
  border: "none",
  cursor: "pointer"
};

const card: React.CSSProperties = {
  textAlign: "center"
};

const title: React.CSSProperties = {
  fontSize: "32px"
};
