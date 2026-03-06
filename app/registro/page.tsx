"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  async function handleRegistro(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMensaje("Error: " + error.message);
      return;
    }

    setMensaje("Cuenta creada correctamente.");
  }

  return (
    <main style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#020617",color:"white"}}>
      <form onSubmit={handleRegistro} style={{width:"420px",padding:"40px",borderRadius:"20px",background:"rgba(255,255,255,0.05)"}}>
        <h1 style={{fontSize:"32px",marginBottom:"10px"}}>Crear cuenta</h1>

        <label>Email</label>
        <input
          type="email"
          placeholder="tu@correo.com"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={input}
        />

        <label style={{marginTop:"10px"}}>Contraseña</label>
        <input
          type="password"
          placeholder="••••••"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={input}
        />

        <button style={button}>Crear cuenta</button>

        <p style={{marginTop:"10px"}}>{mensaje}</p>
      </form>
    </main>
  );
}

const input = {
  width:"100%",
  padding:"12px",
  marginTop:"6px",
  borderRadius:"10px",
  border:"1px solid rgba(255,255,255,0.2)",
  background:"black",
  color:"white"
};

const button = {
  width:"100%",
  marginTop:"20px",
  padding:"14px",
  borderRadius:"12px",
  border:"none",
  background:"linear-gradient(135deg,#6366f1,#8b5cf6)",
  color:"white",
  fontWeight:700,
  cursor:"pointer"
};
