"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();

    // 👉 LOGIN SIMULADO (para demo)
    if (correo === "test9.9@gmail.com" && password === "123456") {
      router.push("/dashboard");
    } else {
      setError("Correo o contraseña incorrectos.");
    }
  };

  const container = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#020617",
    color: "white",
  };

  const card = {
    padding: "40px",
    borderRadius: "20px",
    background: "rgba(15,23,42,0.7)",
    width: "400px",
  };

  const input = {
    width: "100%",
    padding: "14px",
    marginTop: "10px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(15,23,42,0.7)",
    color: "white",
  };

  const button = {
    marginTop: "20px",
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg,#7c3aed,#6366f1,#3b82f6)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  };

  return (
    <main style={container}>
      <form onSubmit={handleLogin} style={card}>
        <h1 style={{ fontSize: "32px" }}>Iniciar sesión</h1>

        <p style={{ marginTop: "10px", color: "#cbd5f5" }}>
          Accede a tu cuenta de Prediqta
        </p>

        <label>Correo</label>
        <input
          style={input}
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label style={{ marginTop: "15px", display: "block" }}>
          Contraseña
        </label>
        <input
          type="password"
          style={input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={button}>Entrar</button>

        {error && (
          <p style={{ marginTop: "15px", color: "#f87171" }}>{error}</p>
        )}
      </form>
    </main>
  );
}
