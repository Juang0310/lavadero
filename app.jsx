import React, { useState } from "react";
import AuthModal from "./components/AuthModal";
import Dashboard from "./pages/dashboard";
import DashboardAdmin from "./pages/dashboardAdmin";
import HomePublic from "./pages/HomePublic";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  const [showHome, setShowHome] = useState(false);

  // Si está en HomePublic → mostrar solo esa vista
  if (showHome && !user) {
    return (
      <HomePublic volver={() => setShowHome(false)} />
    );
  }

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      {!user ? (
        <>
          <img
            src="/logo.png"
            alt="Logo Fresh car"
            style={{ height: "100px", marginBottom: "20px" }}
          />

          <h1>Bienvenido a Fresh car</h1>

          <button
            onClick={() => setShowHome(true)}
            style={{
              marginTop: "10px",
              padding: "12px 25px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "2px solid #00a2ffff",
              cursor: "pointer",
              backgroundColor: "transparent",
              color: "#00ffd9ff",
              fontWeight: "bold",
            }}
          >
            Ir al Home Público
          </button>

          {/* BOTÓN LOGIN */}
          <button
            onClick={() => setShowModal(true)}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#FFD700",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Iniciar sesión / Registrarse
          </button>

          {showModal && (
            <AuthModal
              onClose={() => setShowModal(false)}
              onAuthSuccess={(usuario, token) => {
                setUser({
                  ...usuario,
                  token: token, // guardar token
                });
              }}
            />
          )}
        </>
      ) : (
        <>
          {user.rol === "2" || user.rol === 2 ? (
            <DashboardAdmin
              user={user}
              token={user.token}
              onLogout={() => setUser(null)}
            />
          ) : (
            <Dashboard
              user={user}
              token={user.token}
              onLogout={() => setUser(null)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
