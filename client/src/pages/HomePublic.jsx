import React from "react";

const HomePublic = ({ onVolver }) => {
  return (
    <div style={styles.container}>
      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.logoContainer}>
          <img src="/logo.png" alt="Logo" style={styles.logo} />
          <h2 style={styles.logoText}>FreshCar</h2>
        </div>

        <button onClick={onVolver} style={styles.loginBtn}>
          Iniciar sesión
        </button>
      </nav>

      {/* HERO SECTION */}
      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Dale una nueva vida a tu auto</h1>
          <p style={styles.heroDesc}>
            Reserva fácil, rápido y seguro sin complicaciones!.
          </p>

          <button style={styles.ctaBtn}>Explorar servicios</button>
        </div>

        <img
          src="/lavadero.jpg"
          alt="Parking"
          style={styles.heroImage}
        />
      </header>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>¿Por qué elegir freshcar?</h2>

        <div style={styles.cards}>
          <div style={styles.card}>
            <span style={styles.icon}></span>
            <h3 style={styles.cardTitle}>Reservas rápidas</h3>
            <p style={styles.cardDesc}>
              Agenda tu lavado en segundos desde cualquier dispositivo.
            </p>
          </div>

          <div style={styles.card}>
            <span style={styles.icon}></span>
            <h3 style={styles.cardTitle}>Seguridad garantizada</h3>
            <p style={styles.cardDesc}>
              El mejor cuidado y atención a tu auto 24/7.
            </p>
          </div>

          <div style={styles.card}>
            <span style={styles.icon}></span>
            <h3 style={styles.cardTitle}>Pagos seguros</h3>
            <p style={styles.cardDesc}>
              Paga en línea sin riesgos y recibe confirmación inmediata.
            </p>
          </div>

          <div style={styles.card}>
            <span style={styles.icon}></span>
            <h3 style={styles.cardTitle}>Ubicaciones estratégicas</h3>
            <p style={styles.cardDesc}>
              Encuentra lavaderos disponibles cerca de ti.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} FreshCar — Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

/* ESTILOS*/
const styles = {
  container: {
    backgroundColor: "#000",
    color: "#00ffd5ff",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },

  /* NAV */
  nav: {
    width: "100%",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #00fff2ff",
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: "#000",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    height: "50px",
  },
  logoText: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "bold",
  },
  loginBtn: {
    padding: "10px 20px",
    backgroundColor: "#00e5ffff",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  },

  /* HERO */
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px 40px",
    flexWrap: "wrap",
  },
  heroContent: {
    maxWidth: "500px",
  },
  heroTitle: {
    fontSize: "48px",
    marginBottom: "10px",
    lineHeight: "1.1",
  },
  heroDesc: {
    fontSize: "18px",
    opacity: 0.8,
    marginBottom: "30px",
  },
  ctaBtn: {
    padding: "12px 30px",
    backgroundColor: "#00ffe1ff",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  heroImage: {
    width: "450px",
    borderRadius: "15px",
    boxShadow: "0 0 20px rgba(0, 157, 255, 0.4)",
    marginTop: "20px",
  },

  /* SECTION */
  section: {
    padding: "60px 40px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "32px",
    marginBottom: "40px",
  },

  /* CARDS */
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#111",
    borderRadius: "12px",
    padding: "25px",
    border: "1px solid #00ffd5ff",
    boxShadow: "0 0 10px rgba(255, 215, 0, 0.1)",
    transition: "0.2s ease",
  },
  cardTitle: {
    margin: "10px 0 5px 0",
    fontSize: "20px",
    fontWeight: "bold",
  },
  cardDesc: {
    fontSize: "15px",
    opacity: 0.8,
  },
  icon: {
    fontSize: "40px",
  },

  /* FOOTER */
  footer: {
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #00ffc8ff",
    marginTop: "40px",
    opacity: 0.7,
  },
};

export default HomePublic;
