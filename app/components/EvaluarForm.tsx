"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EvaluarForm() {
  const router = useRouter();

  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("");
  const [tamano, setTamano] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!correo || !rol || !tamano) return;

    setLoading(true);

    // 👇 NO fetch (para evitar error)
    setTimeout(() => {
      // 👉 redirige directo
      router.push("/registro");
    }, 800);
  };

  const container = {
    display: "grid",
    gridTemplateColumns: "1fr 420px",
    gap: "40px",
    alignItems: "center",
  };

  const form = {
    background: "rgba(15,23,42,0.6)",
    padding: "30px",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  const input = {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(15,23,42,0.7)",
    color: "white",
    marginTop: "10px",
  };

  const button = {
    marginTop: "20px",
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg,#7c3aed,#6366f1,#3b82f6)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
  };

  return (
    <div style={container}>
      {/* TEXTO IZQUIERDA */}
      <div>
        <h1 style={{ fontSize: "60px", lineHeight: "1.1" }}>
          Evalúa tu empresa antes de tomar la siguiente decisión
        </h1>

        <p style={{ marginTop: "20px", color: "#cbd5f5", fontSize: "18px" }}>
          Déjanos tu información y accede a tu diagnóstico estratégico en segundos.
        </p>
      </div>

      {/* FORMULARIO DERECHA */}
      <form onSubmit={handleSubmit} style={form}>
        <label>Correo</label>
        <input
          style={input}
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label style={{ marginTop: "15px", display: "block" }}>Rol</label>
        <select
          style={input}
          value={rol}
          onChange={(e) => setRol(e.target.value)}
        >
          <option value="">Seleccionar</option>
          <option>Finanzas</option>
          <option>RH</option>
          <option>Operaciones</option>
          <option>Dirección</option>
        </select>

        <label style={{ marginTop: "15px", display: "block" }}>
          Tamaño de empresa
        </label>
        <select
          style={input}
          value={tamano}
          onChange={(e) => setTamano(e.target.value)}
        >
          <option value="">Seleccionar</option>
          <option>1-10 empleados</option>
          <option>11-50 empleados</option>
          <option>51-200 empleados</option>
          <option>200+ empleados</option>
        </select>

        <button type="submit" style={button}>
          {loading ? "Cargando..." : "Evaluar mi empresa"}
        </button>
      </form>
    </div>
  );
}
