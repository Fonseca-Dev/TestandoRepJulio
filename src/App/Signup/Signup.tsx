import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro: React.FC = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [avatarImage, setAvatarImage] = useState<string | null>(() => {
    return localStorage.getItem('userAvatar') || null;
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const imageData = event.target.result as string;
          setAvatarImage(imageData);
          // Salvar a imagem no localStorage
          localStorage.setItem('userAvatar', imageData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Cadastro realizado:", { nome, email, senha });

    // Salvar os dados do usuário no localStorage
    localStorage.setItem('userName', nome);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', senha);

    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <div
      style={{
        width: "393px",
        height: "852px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px 16px",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: "100%",
          marginBottom: "65px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <h1
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "32px",
            color: "#000000ff",
            margin: 0,
          }}
        >
          <span style={{ fontWeight: 600, color: "#0065F5" }}>agi</span>
          <span style={{ fontWeight: 260, color: "#0065F5" }}>Control</span>
        </h1>
      </div>

      {/* Avatar */}
      <div style={{ marginBottom: "24px", position: "relative" }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{
            position: "absolute",
            width: "125px",
            height: "125px",
            borderRadius: "50%",
            opacity: 0,
            cursor: "pointer",
            zIndex: 2,
          }}
        />
        {avatarImage ? (
          <img
            src={avatarImage}
            alt="avatar"
            style={{
              width: "125px",
              height: "125px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center",
              border: "3px solid white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              cursor: "pointer",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "125px",
              height: "125px",
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              border: "3px solid white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "50px", color: "#999999" }}>👤</span>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: "5px",
            right: "5px",
            backgroundColor: "white",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          }}
        >
          <span style={{ color: "#000000", fontSize: "16px" }}>✏️</span>
        </div>
      </div>

      {/* Card de formulário */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "350px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#000000",
              }}
            >
              Nome:
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="custom-input"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #D2D2D2",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#000000",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="custom-input"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #D2D2D2",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#000000ff",
              }}
            >
              Senha:
            </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="custom-input"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #D2D2D2",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
              }}
            >
              Confirme sua senha:
            </label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
              className="custom-input"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #D2D2D2",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
            <button
              type="submit"
              style={{
                width: "55%",
                padding: "12px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "80px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Criar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;