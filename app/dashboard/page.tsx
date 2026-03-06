export default function Dashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(67,97,238,0.18), transparent 30%), linear-gradient(180deg,#020617,#020617)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <h1 style={{fontSize:"48px"}}>Dashboard Prediqta</h1>

      <p style={{color:"#94a3b8"}}>
        Bienvenida a tu centro de inteligencia estratégica.
      </p>

      <div style={{marginTop:"40px"}}>

        <a href="/advisor" style={button}>
          Asesor IA
        </a>

        <a href="/simulador" style={button}>
          Simulador de escenarios
        </a>

        <a href="/riesgos" style={button}>
          Radar de riesgos
        </a>

      </div>
    </main>
  );
}

const button = {
  display:"inline-block",
  marginRight:"20px",
  marginTop:"20px",
  padding:"14px 20px",
  background:"linear-gradient(135deg,#6366f1,#8b5cf6)",
  borderRadius:"12px",
  color:"white",
  textDecoration:"none",
  fontWeight:"bold"
}
