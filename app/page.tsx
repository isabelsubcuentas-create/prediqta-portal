export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        margin: 0,
        fontFamily: "Arial, sans-serif",
        background:
          "radial-gradient(circle at 0% 20%, rgba(67, 97, 238, 0.22), transparent 28%), radial-gradient(circle at 85% 30%, rgba(16, 185, 129, 0.16), transparent 25%), linear-gradient(180deg, #030712 0%, #020617 100%)",
        color: "#f8fafc",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.08,
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backdropFilter: "blur(14px)",
          background: "rgba(2,6,23,0.72)",
          borderBottom: "1px solid rgba(148,163,184,0.12)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "20px",
                boxShadow: "0 12px 30px rgba(99,102,241,0.35)",
              }}
            >
              P
            </div>

            <div>
              <div style={{ fontWeight: 800, fontSize: "28px", letterSpacing: "-1px" }}>
                PREDIQTA
              </div>
            </div>

            <div
              style={{
                marginLeft: "6px",
                padding: "10px 14px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#cbd5e1",
                fontSize: "14px",
              }}
            >
              Strategic Anticipation para PyMEs
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <a href="#como-funciona" style={navLink}>Cómo funciona</a>
            <a href="#beneficios" style={navLink}>Beneficios</a>
            <a href="#diferenciacion" style={navLink}>Diferenciación</a>
            <a href="#faq" style={navLink}>FAQ</a>

            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
              }}
            >
              ES
            </div>

            <button style={primaryPill}>Evaluar mi empresa</button>
          </div>
        </div>
      </nav>

      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "44px 24px 50px 24px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: "28px",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "22px" }}>
            <span style={chip}>MVP • Validación de leads</span>
            <span style={chip}>B2B SaaS para Dueños de PyMEs</span>
          </div>

          <h1
            style={{
              fontSize: "76px",
              lineHeight: 0.98,
              letterSpacing: "-3px",
              margin: "0 0 22px 0",
              fontWeight: 800,
              maxWidth: "760px",
            }}
          >
            Una mala decisión puede costarte años.
            <br />
            Una simulación puede evitarlo.
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.55,
              color: "#cbd5e1",
              maxWidth: "760px",
              marginBottom: "28px",
            }}
          >
            Evalúa el impacto financiero y estratégico antes de ejecutar decisiones
            críticas que afectan la liquidez y continuidad de tu empresa.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "18px" }}>
            <button style={primaryBig}>Evaluar mi empresa</button>
            <button style={secondaryBig}>Ver cómo funciona</button>
          </div>

          <div style={bannerInfo}>
            Enfoque preventivo y metodológico. IA explicable. Sin promesas mágicas.
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "14px",
              marginTop: "16px",
            }}
          >
            <div style={metricCard}>
              <div style={metricNumber}>3</div>
              <div style={metricLabel}>Escenarios comparables</div>
            </div>
            <div style={metricCard}>
              <div style={metricNumber}>0–100</div>
              <div style={metricLabel}>Continuity Score</div>
            </div>
            <div style={metricCard}>
              <div style={metricNumber}>Segundos</div>
              <div style={metricLabel}>Simulaciones generadas</div>
            </div>
          </div>
        </div>

        <div style={mockupWrap}>
          <div style={mockupWindow}>
            <div style={windowHeader}>
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={dot} />
                <div style={dot} />
                <div style={dot} />
              </div>
              <div style={{ color: "#e2e8f0", fontSize: "15px" }}>
                PREDIQTA • Scenario Simulator
              </div>
              <div style={demoBadge}>Vista demo</div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "14px",
                marginBottom: "16px",
              }}
            >
              <div style={miniCard}>
                <div style={miniLabel}>Continuidad</div>
                <div style={miniValue}>78</div>
                <div style={{ color: "#22c55e" }}>Estable</div>
              </div>
              <div style={miniCard}>
                <div style={miniLabel}>Liquidez</div>
                <div style={miniValue}>+6%</div>
                <div style={{ color: "#22c55e" }}>Base</div>
              </div>
              <div style={miniCardGreen}>
                <div style={miniLabel}>Riesgos</div>
                <div style={miniValue}>4</div>
                <div style={{ color: "#22c55e" }}>Prioritarios</div>
              </div>
            </div>

            <div style={chartBox}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                  gap: "12px",
                }}
              >
                <div style={{ fontWeight: 700, fontSize: "16px" }}>
                  Impacto proyectado por escenario
                </div>

                <div style={tabsWrap}>
                  <button style={tabActive}>Optimista</button>
                  <button style={tabBtn}>Base</button>
                  <button style={tabBtn}>Crítico</button>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  gap: "16px",
                  height: "140px",
                  marginBottom: "16px",
                }}
              >
                {["102", "78", "59", "91", "71", "48"].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}px`,
                      borderRadius: "18px",
                      background:
                        "linear-gradient(180deg, rgba(59,130,246,0.95) 0%, rgba(139,92,246,0.78) 100%)",
                      boxShadow: "0 10px 24px rgba(99,102,241,0.22)",
                    }}
                  />
                ))}
              </div>

              <div style={{ color: "#94a3b8", fontSize: "14px" }}>
                Ajusta variables y compara antes de decidir.
              </div>
            </div>

            <div style={quoteBox}>
              “El principal riesgo está en el flujo de efectivo si creces sin ajustar capital de trabajo.”
            </div>
          </div>

          <div style={{ marginTop: "10px", color: "#94a3b8", fontSize: "14px" }}>
            Mockup ilustrativo. Diseñado para transmitir control, claridad y anticipación.
          </div>
        </div>
      </section>

      <section
        id="beneficios"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "30px 24px 50px 24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr 0.95fr",
            gap: "18px",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={sectionTitle}>El problema real del dueño</h2>
            <p style={sectionText}>
              En una PyME, una sola decisión puede afectar años de trabajo. El problema
              no es decidir: es decidir sin ver consecuencias antes.
            </p>
          </div>

          <div style={glassCard}>
            <h3 style={cardTitle}>Lo típico</h3>
            <ul style={listStyle}>
              <li>Intuición + presión del día a día</li>
              <li>Excel aislado y supuestos invisibles</li>
              <li>Opiniones parciales, cero trazabilidad</li>
              <li>Consultoría lenta o costosa</li>
            </ul>
          </div>

          <div style={glassCardGreen}>
            <h3 style={cardTitle}>Lo que cambia con PREDIQTA</h3>
            <ul style={listStyle}>
              <li>Escenarios comparables (optimista/base/crítico)</li>
              <li>Riesgos priorizados con explicación clara</li>
              <li>Impacto financiero y estratégico antes de actuar</li>
              <li>Decisión estructurada, no improvisada</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="como-funciona"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "30px 24px 60px 24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2 style={sectionTitle}>Cómo funciona</h2>
        <p style={sectionText}>
          Tres pasos simples para convertir decisiones críticas en escenarios evaluables.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "16px",
            marginTop: "18px",
          }}
        >
          {[
            {
              n: "01",
              t: "Cargas datos",
              d: "Información financiera y operativa básica. Plantillas si no está completa.",
            },
            {
              n: "02",
              t: "Simulas",
              d: "Ajustas variables y comparas escenarios antes de ejecutar.",
            },
            {
              n: "03",
              t: "Decides con método",
              d: "Drivers, riesgos y soporte explicable. Tú tienes el control.",
            },
          ].map((item) => (
            <div key={item.n} style={stepCard}>
              <div style={stepNumber}>{item.n}</div>
              <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>{item.t}</h3>
              <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: 1.6 }}>
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="diferenciacion"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "30px 24px 40px 24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2 style={sectionTitle}>Diferenciación</h2>
        <p style={sectionText}>
          PREDIQTA compite contra Excel, consultores, BI tradicional y la intuición.
          Hace algo distinto: simular decisiones estratégicas antes de ejecutarlas.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginTop: "18px",
          }}
        >
          <div style={compareCard}>
            <div style={compareHeader}>Lo común</div>
            <div style={compareRow}>Excel: supuestos dispersos y poca trazabilidad</div>
            <div style={compareRow}>Consultoría: costosa, lenta, depende de terceros</div>
            <div style={compareRow}>BI: describe el pasado, no prueba decisiones</div>
          </div>

          <div style={compareCardGreen}>
            <div style={compareHeader}>PREDIQTA</div>
            <div style={compareRow}>Escenarios comparables para decisiones críticas</div>
            <div style={compareRow}>Riesgos priorizados con explicación ejecutiva</div>
            <div style={compareRow}>Anticipación estratégica en minutos</div>
          </div>
        </div>

        <div style={{ marginTop: "24px" }}>
          <h3 style={{ fontSize: "22px", marginBottom: "14px" }}>Qué NO es PREDIQTA</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              "No garantiza resultados",
              "No elimina riesgos",
              "No reemplaza ERP, contabilidad ni BI operativo",
              "No sustituye tu criterio directivo",
              "No es “predicción mágica”",
            ].map((x) => (
              <div key={x} style={pillDark}>
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "36px 24px 90px 24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={ctaWrap}>
          <div>
            <h2 style={{ fontSize: "58px", lineHeight: 1.04, margin: "0 0 16px 0", letterSpacing: "-2px" }}>
              Evalúa tu empresa antes de tomar la siguiente decisión
            </h2>
            <p style={{ fontSize: "22px", color: "#cbd5e1", maxWidth: "650px", lineHeight: 1.55 }}>
              Déjanos tu información y te contactaremos con un diagnóstico preliminar
              de madurez estratégica.
            </p>
          </div>

          <div style={formCard}>
            <label style={label}>Correo</label>
            <input style={input} placeholder="tu@correo.com" />

            <label style={label}>Rol</label>
            <select style={input}>
              <option>Selecciona una opción</option>
              <option>Dueño / Fundador</option>
              <option>Dirección general</option>
              <option>Finanzas</option>
              <option>Operaciones</option>
            </select>

            <label style={label}>Tamaño de empresa</label>
            <select style={input}>
              <option>Selecciona una opción</option>
              <option>1–10 empleados</option>
              <option>11–50 empleados</option>
              <option>51–250 empleados</option>
              <option>250+ empleados</option>
            </select>

            <button style={{ ...primaryBig, width: "100%", marginTop: "12px" }}>
              Evaluar mi empresa
            </button>
          </div>
        </div>
      </section>

      <section
        id="faq"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px 80px 24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2 style={sectionTitle}>FAQ</h2>
        <div style={{ display: "grid", gap: "14px", marginTop: "18px" }}>
          {[
            "¿PREDIQTA reemplaza a un consultor?",
            "¿Necesito tener todos mis datos listos?",
            "¿Esto sirve para PyMEs en etapas tempranas?",
          ].map((q) => (
            <div key={q} style={faqCard}>
              {q}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const navLink: React.CSSProperties = {
  color: "#e2e8f0",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "16px",
};

const primaryPill: React.CSSProperties = {
  background: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
  border: "none",
  color: "white",
  padding: "14px 22px",
  borderRadius: "999px",
  fontWeight: 800,
  fontSize: "16px",
  cursor: "pointer",
  boxShadow: "0 12px 30px rgba(99,102,241,0.30)",
};

const chip: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#cbd5e1",
  fontSize: "15px",
};

const primaryBig: React.CSSProperties = {
  background: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
  border: "none",
  color: "white",
  padding: "18px 28px",
  borderRadius: "999px",
  fontWeight: 800,
  fontSize: "18px",
  cursor: "pointer",
  boxShadow: "0 18px 40px rgba(99,102,241,0.28)",
};

const secondaryBig: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.10)",
  color: "#f8fafc",
  padding: "18px 28px",
  borderRadius: "999px",
  fontWeight: 800,
  fontSize: "18px",
  cursor: "pointer",
};

const bannerInfo: React.CSSProperties = {
  padding: "16px 20px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#cbd5e1",
  fontSize: "18px",
  maxWidth: "760px",
};

const metricCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
};

const metricNumber: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: 800,
  marginBottom: "6px",
};

const metricLabel: React.CSSProperties = {
  color: "#94a3b8",
  fontSize: "16px",
};

const mockupWrap: React.CSSProperties = {
  position: "relative",
};

const mockupWindow: React.CSSProperties = {
  borderRadius: "28px",
  background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.10)",
  boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
  padding: "18px",
  backdropFilter: "blur(16px)",
};

const windowHeader: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "16px",
};

const dot: React.CSSProperties = {
  width: "12px",
  height: "12px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.18)",
};

const demoBadge: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: "999px",
  background: "rgba(34,197,94,0.14)",
  color: "#bbf7d0",
  border: "1px solid rgba(34,197,94,0.18)",
  fontWeight: 700,
};

const miniCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "18px",
};

const miniCardGreen: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(30,41,59,0.75), rgba(16,185,129,0.12))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "18px",
};

const miniLabel: React.CSSProperties = {
  color: "#cbd5e1",
  fontSize: "14px",
  marginBottom: "10px",
};

const miniValue: React.CSSProperties = {
  fontSize: "44px",
  fontWeight: 800,
  marginBottom: "6px",
};

const chartBox: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "20px",
  marginBottom: "16px",
};

const tabsWrap: React.CSSProperties = {
  display: "flex",
  gap: "8px",
  padding: "6px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.06)",
};

const tabActive: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(79,70,229,0.85), rgba(96,165,250,0.55))",
  color: "white",
  border: "none",
  borderRadius: "999px",
  padding: "10px 18px",
  fontWeight: 700,
  cursor: "pointer",
};

const tabBtn: React.CSSProperties = {
  background: "transparent",
  color: "#cbd5e1",
  border: "none",
  borderRadius: "999px",
  padding: "10px 18px",
  fontWeight: 700,
  cursor: "pointer",
};

const quoteBox: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "18px",
  color: "#e2e8f0",
  fontSize: "16px",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "56px",
  lineHeight: 1.05,
  margin: "0 0 14px 0",
  letterSpacing: "-2px",
  fontWeight: 800,
};

const sectionText: React.CSSProperties = {
  fontSize: "22px",
  lineHeight: 1.55,
  color: "#cbd5e1",
  maxWidth: "980px",
};

const glassCard: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "22px",
};

const glassCardGreen: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(30,41,59,0.80), rgba(16,185,129,0.10))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "22px",
};

const cardTitle: React.CSSProperties = {
  fontSize: "22px",
  margin: "0 0 14px 0",
  fontWeight: 800,
};

const listStyle: React.CSSProperties = {
  color: "#cbd5e1",
  lineHeight: 1.7,
  fontSize: "17px",
  paddingLeft: "20px",
  margin: 0,
};

const stepCard: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "26px",
  padding: "22px",
};

const stepNumber: React.CSSProperties = {
  width: "52px",
  height: "52px",
  borderRadius: "18px",
  background: "linear-gradient(135deg, rgba(79,70,229,0.85), rgba(99,102,241,0.35))",
  border: "1px solid rgba(255,255,255,0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 800,
  fontSize: "22px",
  marginBottom: "18px",
};

const compareCard: React.CSSProperties = {
  borderRadius: "24px",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
};

const compareCardGreen: React.CSSProperties = {
  borderRadius: "24px",
  overflow: "hidden",
  border: "1px solid rgba(16,185,129,0.20)",
  background: "linear-gradient(135deg, rgba(79,70,229,0.18), rgba(16,185,129,0.10))",
};

const compareHeader: React.CSSProperties = {
  padding: "18px 20px",
  fontWeight: 800,
  fontSize: "20px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};

const compareRow: React.CSSProperties = {
  padding: "18px 20px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  color: "#cbd5e1",
  fontSize: "18px",
};

const pillDark: React.CSSProperties = {
  padding: "12px 18px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#e2e8f0",
};

const ctaWrap: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: "22px",
  borderRadius: "32px",
  padding: "26px",
  background: "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.08)",
};

const formCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "26px",
  padding: "22px",
};

const label: React.CSSProperties = {
  display: "block",
  marginBottom: "8px",
  marginTop: "10px",
  fontWeight: 700,
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "16px 18px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(2,6,23,0.55)",
  color: "#f8fafc",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};

const faqCard: React.CSSProperties = {
  padding: "22px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  fontSize: "18px",
  fontWeight: 600,
};
