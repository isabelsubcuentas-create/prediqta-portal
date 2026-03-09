export default function Dashboard() {

  const container = {
    minHeight: "100vh",
    padding: "40px",
    background: "#020617",
    color: "white",
    fontFamily: "Inter, sans-serif"
  }

  const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px"
  }

  const userCard = {
    background: "rgba(255,255,255,0.04)",
    padding: "12px 18px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.08)",
    fontSize: "14px"
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
    background: "linear-gradient(145deg,#020617,#0b1120)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)"
  }

  const toolGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "30px",
    marginTop: "50px"
  }

  const toolCard = {
    padding: "30px",
    borderRadius: "20px",
    background: "linear-gradient(145deg,#020617,#0b1120)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 0 30px rgba(0,0,0,0.35)"
  }

  const sectionLabel = {
    color: "#8b5cf6",
    fontWeight: "600",
    letterSpacing: "1px",
    fontSize: "13px"
  }

  const toolTitle = {
    fontSize: "26px",
    marginTop: "10px"
  }

  const toolText = {
    color: "#cbd5f5",
    marginTop: "10px",
    lineHeight: "1.5"
  }

  const button = {
    marginTop: "20px",
    padding: "12px 22px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(90deg,#7c3aed,#6366f1)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(124,58,237,0.5)"
  }

  const buttonDisabled = {
    ...button,
    background: "#334155",
    boxShadow: "none",
    cursor: "default"
  }

  return (

    <main style={container}>

      <div style={header}>
        <h1 style={{fontSize:"36px"}}>Panel estratégico</h1>

        <div style={userCard}>
          test9.9@gmail.com
          <br/>
          <span style={{color:"#94a3b8"}}>Prototipo Demo</span>
        </div>
      </div>

      <p style={description}>
        Prediqta detecta presión moderada en permanencia de personal,
        variaciones en clima por supervisión y riesgo potencial en áreas críticas
        de operación automotriz.
      </p>


      {/* KPIs */}

      <div style={kpiGrid}>

        <div style={kpiCard}>
          <p>Retención</p>
          <h2 style={{fontSize:"32px"}}>82</h2>
          <p style={{color:"#22c55e"}}>Estable</p>
        </div>

        <div style={kpiCard}>
          <p>Ausentismo</p>
          <h2 style={{fontSize:"32px"}}>+4%</h2>
          <p style={{color:"#f59e0b"}}>Moderado</p>
        </div>

        <div style={kpiCard}>
          <p>Riesgos activos</p>
          <h2 style={{fontSize:"32px"}}>3</h2>
          <p style={{color:"#38bdf8"}}>Prioritarios</p>
        </div>

      </div>


      {/* HERRAMIENTAS */}

      <div style={toolGrid}>

        <section style={toolCard}>
          <p style={sectionLabel}>HERRAMIENTA</p>

          <h3 style={toolTitle}>Asesor estratégico IA</h3>

          <p style={toolText}>
            Haz preguntas sobre rotación, ausentismo, clima organizacional,
            liderazgo y retención de talento.
          </p>

          <a href="/asesor">
            <button style={button}>
              Abrir asesor
            </button>
          </a>
        </section>


        <section style={toolCard}>
          <p style={sectionLabel}>HERRAMIENTA</p>

          <h3 style={toolTitle}>Simulador de escenarios</h3>

          <p style={toolText}>
            Simula el impacto de decisiones estratégicas en talento humano
            antes de implementarlas.
          </p>

          <a href="/simulador">
            <button style={button}>
              Abrir simulador
            </button>
          </a>
        </section>


        <section style={toolCard}>
          <p style={sectionLabel}>HERRAMIENTA</p>

          <h3 style={toolTitle}>Radar de riesgos</h3>

          <p style={toolText}>
            Próximamente: visualización inteligente de riesgos laborales
            por área, supervisión y turno.
          </p>

          <button style={buttonDisabled}>
            Próximamente
          </button>
        </section>

      </div>

    </main>

  )

}
