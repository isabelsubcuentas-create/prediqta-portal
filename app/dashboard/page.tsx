export default function Dashboard() {

  const container = {
    minHeight: "100vh",
    padding: "40px",
    background: "#020617",
    color: "white",
    fontFamily: "sans-serif"
  }

  const kpiGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginTop: "30px"
  }

  const card = {
    padding: "25px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)"
  }

  const toolGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "30px",
    marginTop: "50px"
  }

  const toolCard = {
    padding: "30px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)"
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

  return (

    <main style={container}>

      <h1 style={{fontSize:"36px"}}>Panel estratégico</h1>

      <p style={{color:"#cbd5f5",marginTop:"10px",maxWidth:"700px"}}>
        Prediqta detecta presión moderada en permanencia de personal, variaciones en clima por supervisión y riesgo potencial en áreas críticas de operación automotriz.
      </p>


      {/* KPIs */}

      <div style={kpiGrid}>

        <div style={card}>
          <p>Retención</p>
          <h2>82</h2>
          <p style={{color:"#22c55e"}}>Estable</p>
        </div>

        <div style={card}>
          <p>Ausentismo</p>
          <h2>+4%</h2>
          <p style={{color:"#f59e0b"}}>Moderado</p>
        </div>

        <div style={card}>
          <p>Riesgos activos</p>
          <h2>3</h2>
          <p style={{color:"#38bdf8"}}>Prioritarios</p>
        </div>

      </div>


      {/* HERRAMIENTAS */}

      <div style={toolGrid}>

        <div style={toolCard}>
          <p style={{color:"#8b5cf6",fontWeight:"600"}}>HERRAMIENTA</p>

          <h3 style={{fontSize:"26px",marginTop:"10px"}}>
            Asesor estratégico IA
          </h3>

          <p style={{color:"#cbd5f5",marginTop:"10px"}}>
            Haz preguntas sobre rotación, ausentismo, clima, liderazgo y retención de talento.
          </p>

          <a href="/asesor">
            <button style={button}>
              Abrir asesor
            </button>
          </a>
        </div>


        <div style={toolCard}>
          <p style={{color:"#8b5cf6",fontWeight:"600"}}>HERRAMIENTA</p>

          <h3 style={{fontSize:"26px",marginTop:"10px"}}>
            Simulador de escenarios
          </h3>

          <p style={{color:"#cbd5f5",marginTop:"10px"}}>
            Simula el impacto de decisiones de recursos humanos antes de implementarlas.
          </p>

          <a href="/simulador">
            <button style={button}>
              Abrir simulador
            </button>
          </a>
        </div>


        <div style={toolCard}>
          <p style={{color:"#8b5cf6",fontWeight:"600"}}>HERRAMIENTA</p>

          <h3 style={{fontSize:"26px",marginTop:"10px"}}>
            Radar de riesgos
          </h3>

          <p style={{color:"#cbd5f5",marginTop:"10px"}}>
            Próximamente: visualización de riesgos prioritarios por área y supervisión.
          </p>

          <button
            style={{
              ...button,
              background:"#334155",
              cursor:"default"
            }}
          >
            Próximamente
          </button>
        </div>

      </div>

    </main>

  )
}
