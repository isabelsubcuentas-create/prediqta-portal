export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(56, 189, 248, 0.10), transparent 28%), radial-gradient(circle at top right, rgba(99, 102, 241, 0.16), transparent 30%), linear-gradient(180deg, #f7faff 0%, #eef4ff 100%)",
        color: "#0f172a",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px 24px 0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-1px" }}>
          Prediqta
        </div>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a href="#funciones" style={{ textDecoration: "none", color: "#334155", fontWeight: 600 }}>
            Funciones
          </a>
          <a href="#planes" style={{ textDecoration: "none", color: "#334155", fontWeight: 600 }}>
            Planes
          </a>
          <button
            style={{
              background: "white",
              border: "1px solid #dbe3f1",
              color: "#0f172a",
              padding: "10px 16px",
              borderRadius: "999px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Iniciar sesión
          </button>
          <button
            style={{
              background: "linear-gradient(135deg, #4f46e5, #0ea5e9)",
              border: "none",
              color: "white",
              padding: "10px 18px",
              borderRadius: "999px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 14px 30px rgba(79,70,229,0.22)",
            }}
          >
            Crear cuenta
          </button>
        </div>
      </nav>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 24px 40px 24px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(79,70,229,0.10)",
              color: "#4338ca",
              fontWeight: 700,
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            Plataforma de inteligencia estratégica
          </div>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: 1,
              margin: "0 0 18px 0",
              letterSpacing: "-3px",
              fontWeight: 800,
            }}
          >
            Anticipa mejor.
            <br />
            Decide con claridad.
          </h1>

          <p
            style={{
              fontSize: "24px",
              lineHeight: 1.5,
              color: "#334155",
              maxWidth: "760px",
              marginBottom: "30px",
            }}
          >
            Prediqta ayuda a empresas a anticipar riesgos, simular escenarios y
            tomar decisiones de negocio con inteligencia artificial y análisis estratégico.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "28px" }}>
            <button
              style={{
                background: "linear-gradient(135deg, #4f46e5, #0ea5e9)",
                color: "white",
                border: "none",
                padding: "16px 24px",
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 16px 34px rgba(79,70,229,0.24)",
              }}
            >
              Comenzar prueba
            </button>

            <button
              style={{
                background: "white",
                color: "#0f172a",
                border: "1px solid #dbe3f1",
                padding: "16px 24px",
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Ver plataforma
            </button>
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", color: "#475569" }}>
            <div><strong style={{ color: "#0f172a" }}>Asesor IA</strong> para decisiones clave</div>
            <div><strong style={{ color: "#0f172a" }}>Simulación</strong> de escenarios</div>
            <div><strong style={{ color: "#0f172a" }}>Radar</strong> de riesgos estratégicos</div>
          </div>
        </div>

        <div>
          <div
            style={{
              background: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(255,255,255,0.75)",
              borderRadius: "30px",
              padding: "20px",
              boxShadow: "0 30px 70px rgba(15,23,42,0.10)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  background: "#0f172a",
                  color: "white",
                  borderRadius: "22px",
                  padding: "22px",
                  minHeight: "150px",
                }}
              >
                <div style={{ fontSize: "14px", opacity: 0.72, marginBottom: "8px" }}>
                  Estado estratégico
                </div>
                <div style={{ fontSize: "42px", fontWeight: 800 }}>87%</div>
                <div style={{ color: "#67e8f9", marginTop: "10px" }}>Mejora mensual</div>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: "22px",
                  padding: "20px",
                  minHeight: "150px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "12px" }}>
                  Comparación de escenarios
                </div>
                <div style={{ display: "flex", alignItems: "end", gap: "10px", height: "84px" }}>
                  <div style={{ width: "26px", height: "46px", background: "#c7d2fe", borderRadius: "8px" }} />
                  <div style={{ width: "26px", height: "76px", background: "#818cf8", borderRadius: "8px" }} />
                  <div style={{ width: "26px", height: "60px", background: "#38bdf8", borderRadius: "8px" }} />
                  <div style={{ width: "26px", height: "88px", background: "#4f46e5", borderRadius: "8px" }} />
                </div>
              </div>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "22px",
                padding: "20px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "14px" }}>
                Centro de decisiones
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 0.8fr",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    background: "#f8fafc",
                    borderRadius: "16px",
                    padding: "16px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div style={{ fontWeight: 700, marginBottom: "10px" }}>
                    Asesor estratégico
                  </div>
                  <div
                    style={{
                      background: "white",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "12px",
                      color: "#475569",
                      fontSize: "14px",
                      marginBottom: "10px",
                    }}
                  >
                    ¿Cuál es la mejor estrategia de expansión para una PyME con presión en márgenes?
                  </div>
                  <div
                    style={{
                      background: "#eef2ff",
                      borderRadius: "12px",
                      padding: "12px",
                      color: "#3730a3",
                      fontSize: "14px",
                    }}
                  >
                    Recomendación: priorizar categorías de mayor margen, modelar dos escenarios y monitorear flujo de efectivo.
                  </div>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    borderRadius: "16px",
                    padding: "16px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div style={{ fontWeight: 700, marginBottom: "10px" }}>
                    Radar de riesgo
                  </div>
                  <div style={{ color: "#ef4444", marginBottom: "8px" }}>Margen bajo</div>
                  <div style={{ color: "#f59e0b", marginBottom: "8px" }}>Dependencia de proveedor</div>
                  <div style={{ color: "#22c55e" }}>Oportunidad de demanda</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="funciones"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px 24px 70px 24px",
        }}
      >
        <div style={{ marginBottom: "22px" }}>
          <div style={{ color: "#4338ca", fontWeight: 700, marginBottom: "8px" }}>
            Funciones principales
          </div>
          <h2 style={{ fontSize: "42px", margin: 0 }}>Tecnología pensada para la acción estratégica</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {[
            {
              title: "Asesor estratégico de IA",
              text: "Haz preguntas complejas y recibe recomendaciones estructuradas para apoyar decisiones de negocio.",
            },
            {
              title: "Simulador de escenarios",
              text: "Prueba distintos caminos estratégicos, ajusta supuestos y visualiza posibles resultados antes de actuar.",
            },
            {
              title: "Radar de riesgo",
              text: "Detecta amenazas críticas y oportunidades emergentes para mejorar resiliencia y calidad de decisión.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,0.82)",
                borderRadius: "24px",
                padding: "28px",
                border: "1px solid rgba(255,255,255,0.75)",
                boxShadow: "0 18px 45px rgba(15,23,42,0.08)",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #4f46e5, #38bdf8)",
                  marginBottom: "18px",
                  boxShadow: "0 14px 24px rgba(79,70,229,0.18)",
                }}
              />
              <h3 style={{ fontSize: "28px", margin: "0 0 10px 0" }}>{item.title}</h3>
              <p style={{ color: "#475569", fontSize: "17px", lineHeight: 1.7 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="planes"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 90px 24px",
        }}
      >
        <div
          style={{
            background: "#0f172a",
            color: "white",
            borderRadius: "30px",
            padding: "36px",
            boxShadow: "0 30px 80px rgba(15,23,42,0.18)",
          }}
        >
          <div style={{ marginBottom: "24px" }}>
            <div style={{ color: "#67e8f9", fontWeight: 700, marginBottom: "8px" }}>
              Planes
            </div>
            <h2 style={{ fontSize: "40px", margin: 0 }}>Suscripciones para equipos en crecimiento</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "22px",
                padding: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3>Starter</h3>
              <div style={{ fontSize: "34px", fontWeight: 800, marginBottom: "10px" }}>$29</div>
              <p style={{ color: "#cbd5e1" }}>Ideal para explorar flujos estratégicos básicos.</p>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, rgba(79,70,229,0.28), rgba(14,165,233,0.20))",
                borderRadius: "22px",
                padding: "24px",
                border: "1px solid rgba(103,232,249,0.25)",
              }}
            >
              <h3>Pro</h3>
              <div style={{ fontSize: "34px", fontWeight: 800, marginBottom: "10px" }}>$79</div>
              <p style={{ color: "#e2e8f0" }}>Para PyMEs que necesitan análisis avanzado y simulación estratégica.</p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "22px",
                padding: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3>Enterprise</h3>
              <div style={{ fontSize: "34px", fontWeight: 800, marginBottom: "10px" }}>Personalizado</div>
              <p style={{ color: "#cbd5e1" }}>Dashboards a medida, equipos, flujos internos y soporte estratégico.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
