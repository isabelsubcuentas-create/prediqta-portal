export default function Dashboard() {

const container = {
minHeight: "100vh",
padding: "50px",
color: "white",
fontFamily: "Inter, sans-serif",
background: `
radial-gradient(circle at 20% 10%, rgba(124,58,237,0.25), transparent 40%),
radial-gradient(circle at 80% 0%, rgba(56,189,248,0.20), transparent 40%),
#020617
`
}

const header = {
display: "flex",
justifyContent: "space-between",
alignItems: "center"
}

const userCard = {
background: "rgba(15,23,42,0.6)",
backdropFilter: "blur(10px)",
padding: "18px 22px",
borderRadius: "14px",
border: "1px solid rgba(255,255,255,0.08)",
fontSize: "14px",
minWidth: "240px"
}

const userHeader = {
display: "flex",
alignItems: "center",
gap: "12px",
marginBottom: "8px"
}

const avatar = {
width: "36px",
height: "36px",
borderRadius: "50%",
background: "linear-gradient(90deg,#7c3aed,#3b82f6)",
display: "flex",
alignItems: "center",
justifyContent: "center",
fontWeight: "600"
}

const userMeta = {
fontSize: "12px",
color: "#94a3b8",
lineHeight: "1.4"
}

const kpiGrid = {
display: "grid",
gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
gap: "20px",
marginTop: "40px"
}

const kpiCard = {
padding: "25px",
borderRadius: "18px",
background: "rgba(15,23,42,0.65)",
backdropFilter: "blur(12px)",
border: "1px solid rgba(255,255,255,0.08)",
boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
}

const toolGrid = {
display: "grid",
gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
gap: "30px",
marginTop: "50px"
}

const toolCard = {
padding: "32px",
borderRadius: "22px",
background: "rgba(15,23,42,0.7)",
backdropFilter: "blur(14px)",
border: "1px solid rgba(255,255,255,0.06)",
boxShadow: "0 20px 60px rgba(0,0,0,0.7)"
}

const sectionLabel = {
color: "#8b5cf6",
fontWeight: "600",
letterSpacing: "1px",
fontSize: "12px"
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
marginTop: "22px",
padding: "12px 24px",
borderRadius: "14px",
border: "none",
background: "linear-gradient(90deg,#7c3aed,#6366f1,#3b82f6)",
color: "white",
fontWeight: "600",
cursor: "pointer",
boxShadow: "0 8px 30px rgba(124,58,237,0.6)"
}

return (

<main style={container}>

<div style={header}>

<h1 style={{
fontSize:"52px",
fontWeight:"800",
letterSpacing:"-1px",
background:"linear-gradient(90deg,#ffffff,#c4b5fd,#60a5fa)",
WebkitBackgroundClip:"text",
backgroundClip:"text",
color:"transparent",
lineHeight:"1.1"
}}>
Panel estratégico
</h1>

<div style={userCard}>

<div style={userHeader}>

<div style={avatar}>
U
</div>

<div>
<strong>test9.9@gmail.com</strong>
</div>

</div>

<div style={userMeta}>
Plan: Prototipo Demo <br/>
Empresa: Prediqta Labs <br/>
Rol: HR Manager <br/>
Último acceso: Hoy
</div>

</div>

</div>

<p style={{
marginTop:"18px",
fontSize:"18px",
color:"#cbd5f5",
maxWidth:"720px",
lineHeight:"1.6"
}}>
Prediqta detecta señales tempranas en talento humano, clima organizacional
y riesgos operativos para anticipar decisiones críticas antes de que
impacten la continuidad de la empresa.
</p>

{/* KPIs */}

<div style={kpiGrid}>

<div style={kpiCard}>
<p>Retención</p>

<h2 style={{
fontSize:"36px",
fontWeight:"700",
background:"linear-gradient(90deg,#a78bfa,#60a5fa)",
WebkitBackgroundClip:"text",
color:"transparent"
}}>
82
</h2>

<p style={{color:"#22c55e"}}>Estable</p>

</div>

<div style={kpiCard}>
<p>Ausentismo</p>

<h2 style={{
fontSize:"36px",
fontWeight:"700",
background:"linear-gradient(90deg,#a78bfa,#60a5fa)",
WebkitBackgroundClip:"text",
color:"transparent"
}}>
+4%
</h2>

<p style={{color:"#f59e0b"}}>Moderado</p>

</div>

<div style={kpiCard}>
<p>Riesgos activos</p>

<h2 style={{
fontSize:"36px",
fontWeight:"700",
background:"linear-gradient(90deg,#a78bfa,#60a5fa)",
WebkitBackgroundClip:"text",
color:"transparent"
}}>
3
</h2>

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

<h3 style={toolTitle}>Diagnóstico organizacional</h3>

<p style={toolText}>
Evalúa el estado del talento humano en tu empresa y genera
recomendaciones estratégicas para mejorar liderazgo,
productividad y clima organizacional.
</p>

<a href="/diagnostico">
<button style={button}>
Abrir diagnóstico
</button>
</a>

</section>

</div>

</main>

)

}
