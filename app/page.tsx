export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
        color: "#111",
      }}
    >
      <section style={{ marginBottom: "50px" }}>
        <h1 style={{ fontSize: "52px", marginBottom: "10px" }}>Prediqta</h1>
        <p style={{ fontSize: "22px", color: "#444", maxWidth: "700px" }}>
          Strategic Intelligence Platform for smarter business decisions.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "14px",
            padding: "24px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>AI Strategic Advisor</h2>
          <p style={{ color: "#555" }}>
            Ask strategic questions and receive AI-driven insights to support
            business decisions.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "14px",
            padding: "24px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>Scenario Simulator</h2>
          <p style={{ color: "#555" }}>
            Test different decision paths and visualize possible business
            outcomes before acting.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "14px",
            padding: "24px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>Risk Radar</h2>
          <p style={{ color: "#555" }}>
            Detect strategic risks and opportunities to improve resilience and
            decision quality.
          </p>
        </div>
      </section>
    </main>
  );
}
