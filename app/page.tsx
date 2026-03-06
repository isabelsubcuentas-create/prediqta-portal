    export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        margin: 0,
        background:
          "linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #f9f5ff 100%)",
        color: "#111827",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "70px 24px 40px 24px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#e0e7ff",
            color: "#4338ca",
            padding: "8px 14px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          AI Strategic Intelligence
        </div>

        <h1
          style={{
            fontSize: "64px",
            lineHeight: 1.05,
            margin: "0 0 18px 0",
            fontWeight: 800,
            letterSpacing: "-2px",
          }}
        >
          Prediqta
        </h1>

        <p
          style={{
            fontSize: "24px",
            lineHeight: 1.5,
            maxWidth: "760px",
            color: "#374151",
            marginBottom: "30px",
          }}
        >
          Plataforma de inteligencia estratégica para anticipar riesgos,
          simular escenarios y tomar decisiones de negocio con mayor claridad.
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "55px" }}>
          <button
            style={{
              background: "#4f46e5",
              color: "white",
              border: "none",
              padding: "14px 22px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(79,70,229,0.25)",
            }}
          >
            Explore platform
          </button>

          <button
            style={{
              background: "white",
              color: "#111827",
              border: "1px solid #d1d5db",
              padding: "14px 22px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            View prototype
          </button>
        </div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "34px", marginBottom: "14px" }}>🤖</div>
            <h2 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>
              Asesor estratégico de IA
            </h2>
            <p style={{ color: "#4b5563", lineHeight: 1.6, fontSize: "17px" }}>
              Haga preguntas estratégicas y reciba insights impulsados por IA
              para respaldar decisiones comerciales más inteligentes.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "34px", marginBottom: "14px" }}>📊</div>
            <h2 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>
              Simulador de escenarios
            </h2>
            <p style={{ color: "#4b5563", lineHeight: 1.6, fontSize: "17px" }}>
              Pruebe distintos caminos de decisión y visualice resultados
              potenciales antes de actuar.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "34px", marginBottom: "14px" }}>⚠️</div>
            <h2 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>
              Radar de riesgo
            </h2>
            <p style={{ color: "#4b5563", lineHeight: 1.6, fontSize: "17px" }}>
              Detecte riesgos y oportunidades estratégicas para mejorar la
              resiliencia y la calidad de las decisiones.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
