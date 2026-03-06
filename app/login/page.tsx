export default function Login() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top left, rgba(67,97,238,0.25), transparent 35%), linear-gradient(180deg,#020617,#020617)",
        fontFamily: "Arial",
        color: "white",
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "40px",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            marginBottom: "10px",
            fontWeight: 800,
          }}
        >
          Iniciar sesión
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Accede a tu plataforma Prediqta
        </p>

        <label>Email</label>
        <input
          type="email"
          placeholder="tu@correo.com"
          style={input}
        />

        <label style={{ marginTop: "14px" }}>Contraseña</label>
        <input
          type="password"
          placeholder="••••••••"
          style={input}
        />

        <button style={button}>
          Entrar
        </button>

        <p
          style={{
            marginTop: "18px",
            fontSize: "14px",
            color: "#94a3b8",
          }}
        >
          ¿No tienes cuenta? Crear cuenta
        </p>
      </div>
    </main>
  );
}

const input = {
  width: "100%",
  padding: "14px",
  marginTop: "6px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(0,0,0,0.4)",
  color: "white",
};

const button = {
  width: "100%",
  marginTop: "22px",
  padding: "16px",
  borderRadius: "14px",
  border: "none",
  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
  color: "white",
  fontWeight: 700,
  cursor: "pointer",
};
