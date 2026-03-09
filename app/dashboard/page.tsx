export default function Dashboard() {

  const container = {
    minHeight: "100vh",
    padding: "40px",
    background: "#020617",
    color: "white",
    fontFamily: "sans-serif"
  }

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "30px",
    marginTop: "40px"
  }

  const card = {
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


      <div style={grid}>

        {/* ASESOR IA */}

        <div style={card}>
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


        {/* SIMULADOR */}

        <div style={card}>
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


        {/* RADAR */}

        <div style={card}>
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
