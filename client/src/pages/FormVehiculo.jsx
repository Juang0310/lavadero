import React, { useState } from "react";

const FormVehiculo = ({ onClose, userId, token }) => {
  const [form, setForm] = useState({
    placa: "",
    nombre: "",
    tipo_vehiculo: "",
    telefono: "",
    fecha_ingreso: new Date().toISOString().slice(0, 10),
    servicios: "",
    fecha: "",
    hora: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Enviando vehículo:", form);

      // 1️⃣ Crear vehículo
      const resVeh = await fetch("http://localhost:3000/api/vehiculos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,   // ← TOKEN
        },
        body: JSON.stringify(form),
      });

      const dataVeh = await resVeh.json();
      console.log(" RESPUESTA BACKEND VEHÍCULO:", dataVeh);

      if (!dataVeh.idVehiculo) {
        alert("Error registrando vehículo: no se recibió idVehiculo");
        return;
      }

      const idVehiculo = dataVeh.idVehiculo;

      // 2️⃣ Crear agendamiento
      const agendamientoData = {
        idVehiculo,
        idPersona: userId,
        fecha: form.fecha,
        hora: form.hora,
      };

      const resAg = await fetch("http://localhost:3000/agendamientos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(agendamientoData),
      });

      const dataAg = await resAg.json();
      console.log("RESPUESTA AGENDAMIENTO:", dataAg);

      alert("Vehículo agendado correctamente");
      onClose();

    } catch (error) {
      console.error("Error final:", error);
      alert("Error registrando vehículo");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          minWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2>Registrar Vehículo</h2>

        <input name="placa" placeholder="Placa" value={form.placa} onChange={handleChange} required />
        <input name="nombre" placeholder="Nombre del propietario" value={form.nombre} onChange={handleChange} required />
        <input name="tipo_vehiculo" placeholder="Tipo de vehículo" value={form.tipo_vehiculo} onChange={handleChange} required />
        <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} required />
        <input type="date" name="fecha_ingreso" value={form.fecha_ingreso} onChange={handleChange} required />
        <input name="servicios" placeholder="Servicios (opcional)" value={form.servicios} onChange={handleChange} />

        <h3>Agendamiento</h3>

        <input type="date" name="fecha" value={form.fecha} onChange={handleChange} required />
        <input type="time" name="hora" value={form.hora} onChange={handleChange} required />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="submit" style={{ padding: "10px", background: "#FFD700", borderRadius: "8px", border: "none", cursor: "pointer" }}>
            Guardar
          </button>
          <button type="button" onClick={onClose} style={{ padding: "10px", background: "#ccc", borderRadius: "8px", border: "none", cursor: "pointer" }}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormVehiculo;
