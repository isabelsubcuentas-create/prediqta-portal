export default function Dashboard() {

  const container = {
    minHeight: "100vh",
    padding: "40px",
    background: "#020617",
    color: "white",
    fontFamily: "sans-serif"
  }

  const description = {
    color: "#cbd5f5",
    marginTop: "10px",
    maxWidth: "700px"
  }

  const kpiGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginTop: "30px"
  }

  const kpiCard = {
    padding: "25px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)"
  }

  const toolGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "30px",
    marginTop: "50px"
  }

  const toolCard = {
    padding: "30px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)"
  }

  const sectionLabel = {
    color: "#8b5cf6",
    fontWeight: "600",
    letterSpacing: "1px"
  }

  const toolTitle = {
    fontSize: "26px",
    marginTop: "10px"
  }

  const toolText = {
    color: "#cbd5f5",
    marginTop: "10px"
  }

  const button = {
    marginTop: "20px",
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg,#7c3aed,#6366f1)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer"
  }

  const buttonDisabled = {
    ...button,
    background: "#334155",
    cursor: "default"
  }

  return (

    <main style={container}>

      <h1 style={{fontSize:"36px"}}>Panel estratégico</h1>

      <p style={description}>
        Prediqta detecta presión moderada en permanencia de personal, variaciones en clima por supervisión y riesgo potencial en áreas críticas de operación automotriz.
      </p>


      {/* KPIs */}

      <div style={kpiGrid}>

        <div style={kpiCard}>
          <p>Retención</p>
          <h2>82</h2>
          <p style={{color:"#22c55e"}}>Estable</p>
        </div>

        <div style={kpiCard}>
          <p>Ausentismo</p>
          <h2>+4%</h2>
          <p style={{color:"#f59e0b"}}>Moderado</p>
        </div>

        <div style={kpiCard}>
          <p>Riesgos activos</p>
          <h2>3</h2>
          <p style={{color:"#38bdf8"}}>Prioritarios</p>
        </div>

      </div>


      {/* HERRAMIENTAS */}

      <div style={toolGrid}>

        {/* ASESOR */}

        <section style={toolCard}>
          <p style={sectionLabel}>HERRAMIENTA</p>

          <h3 style={toolTitle}>Asesor estratégico IA</h3>

          <p style={toolText}>
            Haz preguntas sobre rotación, ausentismo, clima, liderazgo y retención de talento.
          </p>

          <a href="/asesor">
            <button type="button" style={button}>
              Abrir asesor
            </button>
          </a>

        </section>


        {/* SIMULADOR */}

        <section style={toolCard}>
          <p style={sectionLabel}>HERRAMIENTA</p>

          <h3 style={toolTitle}>Simulador de escenarios</h3>

          <p style={toolText}>
            Simula el impacto de decisiones de recursos humanos antes de implementarlas.
          </p>

          <a href="/simulador">
            <button type="button" style={button}>
              Abrir simulador
            </button>
          </a>

        </section>


        {/* RADAR */}

        <section style={toolCard}>
          <p style={sectionLabel}>HERRAMIENTA</p>

          <h3 style={toolTitle}>Radar de riesgos</h3>

          <p style={toolText}>
            Próximamente: visualización de riesgos prioritarios por área y supervisión.
          </p>

          <button type="button" style={buttonDisabled}>
            Próximamente
          </button>

        </section>

      </div>

    </main>

  )

}
