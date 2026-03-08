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
        <div style={card}>
          <h1 style={title}>Cargando dashboard...</h1>
        </div>
      </main>
    );
  }

  return (
    <main style={main}>
      <div style={wrap}>
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

        <div style={grid}>
          <section style={bigCard}>
            <p style={sectionEyebrow}>RESUMEN GENERAL</p>
            <h2 style={bigTitle}>
              Tu empresa muestra una condición estratégica estable
            </h2>
            <p style={bigText}>
              Actualmente Prediqta detecta una posición saludable, pero con
              riesgos moderados en liquidez y dependencia de proveedores.
              Se recomienda simular escenarios antes de expandir operaciones.
            </p>

            <div style={statsGrid}>
              <div style={statBox}>
                <p style={statLabel}>Continuidad</p>
                <h3 style={statNumber}>78</h3>
                <p style={{ ...statStatus, color: "#22c55e" }}>Estable</p>
              </div>

              <div style={statBox}>
                <p style={statLabel}>Liquidez proyectada</p>
                <h3 style={statNumber}>+6%</h3>
                <p style={{ ...statStatus, color: "#38bdf8" }}>Base</p>
              </div>

              <div style={statBox}>
                <p style={statLabel}>Riesgos activos</p>
                <h3 style={statNumber}>4</h3>
                <p style={{ ...statStatus, color: "#f59e0b" }}>Prioritarios</p>
              </div>
            </div>
          </section>

          <section style={sideCard}>
            <p style={sectionEyebrow}>PERFIL DE EMPRESA</p>

            <div style={row}><span>Empresa</span><strong>Prediqta Demo Company</strong></div>
            <div style={row}><span>Sector</span><strong>Servicios / Consultoría</strong></div>
            <div style={row}><span>Tamaño</span><strong>PyME</strong></div>
            <div style={row}><span>Plan</span><strong>Pro</strong></div>
            <div style={row}><span>Usuario</span><strong>{correo}</strong></div>
            <div style={row}><span>Última simulación</span><strong>Hace 2 horas</strong></div>
          </section>
        </div>

        <div style={toolsGrid}>
          <section style={toolCard}>
            <p style={sectionEyebrow}>HERRAMIENTA</p>
            <h3 style={toolTitle}>Asesor estratégico de IA</h3>
            <p style={toolText}>
              Haz preguntas sobre decisiones empresariales y recibe
              recomendaciones estructuradas.
            </p>
            <button style={button}>Abrir asesor</button>
          </section>

          <section style={toolCard}>
            <p style={sectionEyebrow}>HERRAMIENTA</p>
            <h3 style={toolTitle}>Simulador de escenarios</h3>
            <p style={toolText}>
              Compara rutas estratégicas optimista, base y crítica antes de ejecutar.
            </p>
            <button style={button}>Abrir simulador</button>
          </section>

          <section style={toolCard}>
            <p style={sectionEyebrow}>HERRAMIENTA</p>
            <h3 style={toolTitle}>Radar de riesgos</h3>
            <p style={toolText}>
              Detecta riesgos prioritarios y oportunidades estratégicas para tu negocio.
            </p>
            <button style={button}>Abrir radar</button>
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
  maxWidth: "1280px",
  margin: "0 auto",
};

const topBar: React.CSSProperties = {
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
  letterSpacing: "0.06em",
  margin: "0 0 10px 0",
};

const heroTitle: React.CSSProperties = {
  fontSize: "72px",
  lineHeight: 1,
  letterSpacing: "-3px",
  margin: "0 0 12px 0",
};

const heroSubtitle: React.CSSProperties = {
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
  margin: "0 0 12px 0",
  fontSize: "16px",
};

const accountName: React.CSSProperties = {
  margin: "0 0 10px 0",
  fontSize: "22px",
  wordBreak: "break-word",
};

const accountPlan: React.CSSProperties = {
  margin: 0,
  color: "#cbd5e1",
  fontSize: "18px",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1.3fr 0.9fr",
  gap: "24px",
  marginBottom: "24px",
};

const bigCard: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(79,70,229,0.16), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "32px",
  padding: "32px",
};

const sideCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "32px",
  padding: "32px",
};

const sectionEyebrow: React.CSSProperties = {
  color: "#8b5cf6",
  fontWeight: 800,
  fontSize: "16px",
  margin: "0 0 20px 0",
};

const bigTitle: React.CSSProperties = {
  fontSize: "44px",
  lineHeight: 1.1,
  margin: "0 0 18px 0",
};

const bigText: React.CSSProperties = {
  color: "#e2e8f0",
  fontSize: "18px",
  lineHeight: 1.6,
  marginBottom: "26px",
};

const statsGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "18px",
};

const statBox: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "24px",
};

const statLabel: React.CSSProperties = {
  color: "#cbd5e1",
  fontSize: "16px",
  margin: "0 0 10px 0",
};

const statNumber: React.CSSProperties = {
  fontSize: "48px",
  margin: "0 0 10px 0",
};

const statStatus: React.CSSProperties = {
  fontWeight: 700,
  margin: 0,
};

const row: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  padding: "18px 0",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  color: "#cbd5e1",
};

const toolsGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
};

const toolCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "28px",
  padding: "28px",
};

const toolTitle: React.CSSProperties = {
  fontSize: "28px",
  lineHeight: 1.2,
  margin: "0 0 16px 0",
};

const toolText: React.CSSProperties = {
  color: "#e2e8f0",
  fontSize: "18px",
  lineHeight: 1.6,
  marginBottom: "24px",
};

const button: React.CSSProperties = {
  background: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
  border: "none",
  color: "white",
  padding: "14px 22px",
  borderRadius: "999px",
  fontWeight: 800,
  fontSize: "16px",
  cursor: "pointer",
};

const card: React.CSSProperties = {
  maxWidth: "520px",
  margin: "120px auto",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "28px",
  textAlign: "center",
};

const title: React.CSSProperties = {
  fontSize: "36px",
  margin: 0,
};
