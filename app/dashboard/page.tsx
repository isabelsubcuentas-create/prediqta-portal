export default function Dashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(67,97,238,0.18), transparent 30%), radial-gradient(circle at top right, rgba(16,185,129,0.12), transparent 28%), linear-gradient(180deg,#020617,#020617)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "28px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "28px",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ color: "#8b5cf6", fontWeight: 700, marginBottom: "8px" }}>
              PANEL EJECUTIVO
            </div>
            <h1 style={{ fontSize: "54px", margin: 0, letterSpacing: "-2px" }}>
              Dashboard Prediqta
            </h1>
            <p style={{ color: "#94a3b8", fontSize: "18px", marginTop: "10px" }}>
              Centro de inteligencia estratégica para tu empresa
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "16px 20px",
              minWidth: "260px",
            }}
          >
            <div style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "8px" }}>
              Cuenta activa
            </div>
            <div style={{ fontSize: "22px", fontWeight: 700 }}>Ana Alonso</div>
            <div style={{ color: "#cbd5e1", marginTop: "6px" }}>Prediqta Pro</div>
          </div>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "20px",
            marginBottom: "22px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, rgba(79,70,229,0.20), rgba(14,165,233,0.10))",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "28px",
              padding: "28px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.20)",
            }}
          >
            <div style={{ color: "#a5b4fc", fontWeight: 700, marginBottom: "12px" }}>
              RESUMEN GENERAL
            </div>
            <h2 style={{ fontSize: "38px", margin: "0 0 12px 0", lineHeight: 1.1 }}>
              Tu empresa muestra una condición estratégica estable
            </h2>
            <p style={{ color: "#cbd5e1", fontSize: "18px", lineHeight: 1.6, maxWidth: "700px" }}>
              Actualmente Prediqta detecta una posición saludable, pero con riesgos
              moderados en liquidez y dependencia de proveedores. Se recomienda
              simular escenarios antes de expandir operaciones.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "14px",
                marginTop: "24px",
              }}
            >
              <div style={metricCard}>
                <div style={metricLabel}>Continuidad</div>
                <div style={metricValue}>78</div>
                <div style={{ color: "#22c55e" }}>Estable</div>
              </div>

              <div style={metricCard}>
                <div style={metricLabel}>Liquidez proyectada</div>
                <div style={metricValue}>+6%</div>
                <div style={{ color: "#38bdf8" }}>Base</div>
              </div>

              <div style={metricCard}>
                <div style={metricLabel}>Riesgos activos</div>
                <div style={metricValue}>4</div>
                <div style={{ color: "#f59e0b" }}>Prioritarios</div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "28px",
              padding: "24px",
            }}
          >
            <div style={{ color: "#8b5cf6", fontWeight: 700, marginBottom: "14px" }}>
              PERFIL DE EMPRESA
            </div>

            <div style={infoRow}>
              <span style={infoLabel}>Empresa</span>
              <span>Prediqta Demo Company</span>
            </div>

            <div style={infoRow}>
              <span style={infoLabel}>Sector</span>
              <span>Servicios / Consultoría</span>
            </div>

            <div style={infoRow}>
              <span style={infoLabel}>Tamaño</span>
              <span>PyME</span>
            </div>

            <div style={infoRow}>
              <span style={infoLabel}>Plan</span>
              <span>Pro</span>
            </div>

            <div style={infoRow}>
              <span style={infoLabel}>Usuario</span>
              <span>Ana Alonso</span>
            </div>

            <div style={infoRow}>
              <span style={infoLabel}>Última simulación</span>
              <span>Hace 2 horas</span>
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "20px",
            marginBottom: "22px",
          }}
        >
          <div style={toolCard}>
            <div style={toolTag}>HERRAMIENTA</div>
            <h3 style={toolTitle}>Asesor estratégico de IA</h3>
            <p style={toolText}>
              Haz preguntas sobre decisiones empresariales y recibe recomendaciones
              estructuradas.
            </p>
            <a href="/advisor" style={toolButton}>
              Abrir asesor
            </a>
          </div>

          <div style={toolCard}>
            <div style={toolTag}>HERRAMIENTA</div>
            <h3 style={toolTitle}>Simulador de escenarios</h3>
            <p style={toolText}>
              Compara rutas estratégicas optimista, base y crítica antes de ejecutar.
            </p>
            <a href="/simulador" style={toolButton}>
              Abrir simulador
            </a>
          </div>

          <div style={toolCard}>
            <div style={toolTag}>HERRAMIENTA</div>
            <h3 style={toolTitle}>Radar de riesgos</h3>
            <p style={toolText}>
              Detecta riesgos prioritarios y oportunidades estratégicas para tu negocio.
            </p>
            <a href="/riesgos" style={toolButton}>
              Abrir radar
            </a>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "26px",
              padding: "24px",
            }}
          >
            <div style={sectionMiniTitle}>RECOMENDACIÓN DE IA</div>
            <h3 style={{ fontSize: "28px", marginBottom: "14px" }}>
              Acción sugerida para esta semana
            </h3>
            <p style={{ color: "#cbd5e1", lineHeight: 1.7, fontSize: "17px" }}>
              Antes de invertir en crecimiento, valida tu capacidad de caja en tres
              escenarios y revisa dependencia de proveedores clave. Tu mayor punto de
              atención hoy no es ventas, sino resiliencia operativa.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "26px",
              padding: "24px",
            }}
          >
            <div style={sectionMiniTitle}>RIESGOS PRIORITARIOS</div>

            <div style={riskItem}>
              <span style={{ color: "#ef4444" }}>●</span>
              <span>Presión en flujo de efectivo</span>
            </div>

            <div style={riskItem}>
              <span style={{ color: "#f59e0b" }}>●</span>
              <span>Dependencia de proveedor estratégico</span>
            </div>

            <div style={riskItem}>
              <span style={{ color: "#38bdf8" }}>●</span>
              <span>Baja trazabilidad de decisiones</span>
            </div>

            <div style={riskItem}>
              <span style={{ color: "#22c55e" }}>●</span>
              <span>Oportunidad de crecimiento en nuevos segmentos</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const metricCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "18px",
};

const metricLabel: React.CSSProperties = {
  color: "#94a3b8",
  fontSize: "14px",
  marginBottom: "8px",
};

const metricValue: React.CSSProperties = {
  fontSize: "38px",
  fontWeight: 800,
  marginBottom: "6px",
};

const infoRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 0",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  color: "#e2e8f0",
};

const infoLabel: React.CSSProperties = {
  color: "#94a3b8",
};

const toolCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "26px",
  padding: "24px",
  minHeight: "240px",
};

const toolTag: React.CSSProperties = {
  color: "#8b5cf6",
  fontWeight: 700,
  fontSize: "13px",
  marginBottom: "10px",
};

const toolTitle: React.CSSProperties = {
  fontSize: "28px",
  marginBottom: "10px",
};

const toolText: React.CSSProperties = {
  color: "#cbd5e1",
  lineHeight: 1.7,
  marginBottom: "24px",
};

const toolButton: React.CSSProperties = {
  display: "inline-block",
  textDecoration: "none",
  color: "white",
  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
  padding: "14px 18px",
  borderRadius: "14px",
  fontWeight: 700,
};

const sectionMiniTitle: React.CSSProperties = {
  color: "#8b5cf6",
  fontWeight: 700,
  marginBottom: "12px",
  fontSize: "13px",
};

const riskItem: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  padding: "12px 0",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  color: "#e2e8f0",
};
