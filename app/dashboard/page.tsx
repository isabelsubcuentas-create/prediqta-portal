"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function DashboardPage() {
  const [correo, setCorreo] = useState("");
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <main style={main}>
        <div style={loadingBox}>Cargando dashboard...</div>
      </main>
    );
  }

  return (
    <main style={main}>
      <div style={wrap}>
        <div style={top}>
          <div>
            <p style={eyebrow}>PANEL EJECUTIVO</p>
            <h1 style={title}>Dashboard Prediqta</h1>
            <p style={subtitle}>
              Inteligencia estratégica para retención de talento en el sector automotriz
            </p>
          </div>

          <div style={accountCard}>
            <p style={accountLabel}>Cuenta activa</p>
            <h2 style={accountEmail}>{correo}</h2>
            <p style={accountPlan}>Prediqta Pro</p>
          </div>
        </div>

        <div style={grid}>
          <section style={bigCard}>
            <p style={sectionLabel}>RESUMEN GENERAL</p>
            <h2 style={bigTitle}>
              La organización muestra estabilidad, pero con señales de riesgo en retención operativa
            </h2>
            <p style={bigText}>
              Prediqta detecta presión moderada en permanencia de personal, variaciones en clima por
              supervisión y riesgo potencial en áreas críticas de operación automotriz.
            </p>

            <div style={stats}>
              <div style={statCard}>
                <p style={statLabel}>Retención</p>
                <h3 style={statValue}>82</h3>
                <p style={statStatusGood}>Estable</p>
              </div>

              <div style={statCard}>
                <p style={statLabel}>Ausentismo</p>
                <h3 style={statValue}>+4%</h3>
                <p style={statStatusWarn}>Moderado</p>
              </div>

              <div style={statCard}>
                <p style={statLabel}>Riesgos activos</p>
                <h3 style={statValue}>3</h3>
                <p style={statStatusInfo}>Prioritarios</p>
              </div>
            </div>
          </section>

          <section style={sideCard}>
            <p style={sectionLabel}>PERFIL DE EMPRESA</p>
            <div style={row}><span>Sector</span><strong>Automotriz</strong></div>
            <div style={row}><span>Enfoque</span><strong>Retención de talento</strong></div>
            <div style={row}><span>Tipo</span><strong>PyME / Planta</strong></div>
            <div style={row}><span>Plan</span><strong>Prototipo Demo</strong></div>
            <div style={row}><span>Usuario</span><strong>{correo}</strong></div>
            <div style={row}><span>Última simulación</span><strong>Hace 2 horas</strong></div>
          </section>
        </div>

        <div style={tools}>
          <section style={toolCard}>
            <p style={sectionLabel}>HERRAMIENTA</p>
            <h3 style={toolTitle}>Asesor estratégico IA</h3>
            <p style={toolText}>
              Haz preguntas sobre rotación, ausentismo, clima, liderazgo y retención de talento.
            </p>
            <a href="/asesor" style={buttonLink}>
              Abrir asesor
            </a>
          </section>

<section style={toolCard}>
  <p style={sectionLabel}>HERRAMIENTA</p>

  <h3 style={toolTitle}>Simulador de escenarios</h3>

  <a href="/simulador">
    <button type="button" style={button}>
      Abrir simulador
    </button>
  </a>

</section>

          <section style={toolCard}>
            <p style={sectionLabel}>HERRAMIENTA</p>
            <h3 style={toolTitle}>Radar de riesgos</h3>
            <p style={toolText}>
              Próximo paso: visualizar riesgos prioritarios por área, turno y supervisión.
            </p>
            <button type="button" style={buttonDisabled}>
              Próximamente
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

const main: React.CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, rgba(79,70,229,0.18), transparent 30%), linear-gradient(180deg,#020617,#020617)",
  padding: "32px 24px",
  fontFamily: "Arial, sans-serif",
  color: "white",
};

const wrap: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const loadingBox: React.CSSProperties = {
  minHeight: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "28px",
};

const top: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 320px",
  gap: "24px",
  alignItems: "start",
  marginBottom: "28px",
};

const eyebrow: React.CSSProperties = {
  color: "#8b5cf6",
  fontWeight: 800,
  fontSize: "14px",
  margin: "0 0 10px 0",
};

const title: React.CSSProperties = {
  fontSize: "68px",
  lineHeight: 1,
  letterSpacing: "-3px",
  margin: "0 0 12px 0",
};

const subtitle: React.CSSProperties = {
  color: "#cbd5e1",
  fontSize: "20px",
  margin: 0,
};

const accountCard: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(16,185,129,0.06))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "24px",
};

const accountLabel: React.CSSProperties = {
  color: "#93c5fd",
  margin: "0 0 10px 0",
};

const accountEmail: React.CSSProperties = {
  margin: "0 0 8px 0",
  fontSize: "24px",
  wordBreak: "break-word",
};

const accountPlan: React.CSSProperties = {
  margin: 0,
  color: "#cbd5e1",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1.4fr 0.9fr",
  gap: "24px",
  marginBottom: "24px",
};

const bigCard: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(79,70,229,0.16), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "28px",
  padding: "28px",
};

const sideCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "28px",
  padding: "28px",
};

const sectionLabel: React.CSSProperties = {
  color: "#8b5cf6",
  fontWeight: 800,
  fontSize: "15px",
  margin: "0 0 16px 0",
};

const bigTitle: React.CSSProperties = {
  fontSize: "44px",
  lineHeight: 1.1,
  margin: "0 0 16px 0",
};

const bigText: React.CSSProperties = {
  color: "#e2e8f0",
  fontSize: "18px",
  lineHeight: 1.6,
  marginBottom: "24px",
};

const stats: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
};

const statCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const statLabel: React.CSSProperties = {
  color: "#cbd5e1",
  margin: "0 0 8px 0",
};

const statValue: React.CSSProperties = {
  fontSize: "42px",
  margin: "0 0 8px 0",
};

const statStatusGood: React.CSSProperties = {
  margin: 0,
  color: "#22c55e",
  fontWeight: 700,
};

const statStatusWarn: React.CSSProperties = {
  margin: 0,
  color: "#f59e0b",
  fontWeight: 700,
};

const statStatusInfo: React.CSSProperties = {
  margin: 0,
  color: "#38bdf8",
  fontWeight: 700,
};

const row: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  padding: "16px 0",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  color: "#cbd5e1",
};

const tools: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  marginBottom: "24px",
};

const toolCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "24px",
};

const toolTitle: React.CSSProperties = {
  fontSize: "28px",
  lineHeight: 1.2,
  margin: "0 0 14px 0",
};

const toolText: React.CSSProperties = {
  color: "#e2e8f0",
  lineHeight: 1.6,
  marginBottom: "20px",
};

const buttonLink: React.CSSProperties = {
  display: "inline-block",
  background: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
  color: "white",
  padding: "12px 20px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 800,
  fontSize: "15px",
};

const buttonDisabled: React.CSSProperties = {
  background: "rgba(255,255,255,0.10)",
  color: "#cbd5e1",
  padding: "12px 20px",
  borderRadius: "999px",
  border: "none",
  cursor: "not-allowed",
  fontWeight: 700,
  fontSize: "15px",
};
