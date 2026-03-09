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
padding: "12px 20px",
borderRadius: "12px",
border: "1px solid rgba(255,255,255,0.08)",
fontSize: "14px"
}

const description = {
color: "#cbd5f5",
marginTop: "15px",
maxWidth: "700px"
}

const badges = {
display: "flex",
gap: "10px",
marginTop: "15px"
}

const badge = {
background: "rgba(124,58,237,0.2)",
padding: "6px 12px",
borderRadius: "20px",
fontSize: "12px"
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

const buttonDisabled = {
...button,
background: "#334155",
boxShadow: "none",
cursor: "default"
}

return (

<main style={container}>

<div style={header}>
<h1 style={{fontSize:"40px"}}>Panel estratégico</h1>

<div style={userCard}>
test9.9@gmail.com
<br/>
<span style={{color:"#94a3b8"}}>Prototipo Demo</span>
</div>
</div>

<p style={description}>
Prediqta detecta presión moderada en permanencia de personal,
variaciones en clima por supervisión y riesgo potencial en áreas
críticas de operación automotriz.
</p>

<div style={badges}>
<span style={badge}>Talent Analytics</span>
<span style={{...badge, background:"rgba(56,189,248,0.2)"}}>Predicción IA</span>
<span style={{...badge, background:"rgba(34,197,94,0.2)"}}>Sector Automotriz</span>
</div>

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

<div style={{marginTop:"12px",display:"flex",gap:"4px"}}>
<div style={{height:"6px",width:"20px",background:"#7c3aed",borderRadius:"3px"}}></div>
<div style={{height:"6px",width:"14px",background:"#6366f1",borderRadius:"3px"}}></div>
<div style={{height:"6px",width:"26px",background:"#38bdf8",borderRadius:"3px"}}></div>
<div style={{height:"6px",width:"18px",background:"#7c3aed",borderRadius:"3px"}}></div>
</div>

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

<div style={{marginTop:"12px",display:"flex",gap:"4px"}}>
<div style={{height:"6px",width:"18px",background:"#7c3aed",borderRadius:"3px"}}></div>
<div style={{height:"6px",width:"24px",background:"#6366f1",borderRadius:"3px"}}></div>
<div style={{height:"6px",width:"14px",background:"#38bdf8",borderRadius:"3px"}}></div>
<div style={{height:"6px",width:"20px",background:"#7c3aed",borderRadius:"3px"}}></div>
</div>

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

<div style={{marginTop:"12px",display:"flex",gap:"4px"}}>
<div style={{height:"6px",width:"12px",background:"#7c3aed",borderRadius:"3px"}}></div>
<div style={{height:"6px",width:"22px",background:"#6366f1",borderRadius:"3px"}}></div>
<div style={{height:"6px",width:"18px",background:"#38bdf8",borderRadius:"3px"}}></div>
<div style={{height:"6px",width:"26px",background:"#7c3aed",borderRadius:"3px"}}></div>
</div>

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
