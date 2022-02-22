import React, { useState } from "react";
import axios from "axios";
import "../../src/styles/components/pages/Contacto.css";

const Contacto = (props) => {
  const initialForm = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <main className="holder">
      <div className="contacto">
        <div className="titulocontacto">
          Contactame<span>!</span>
        </div>
        <div className="lineadiv"></div>
        <div className="subtitulocontacto">
          completa los datos del formulario!
        </div>
      </div>

      <div className="contenidocontacto"></div>

      <div class="containercontacto">
        <form onSubmit={handleSubmit} action="/contacto" method="post">
          <p>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>Telefono</label>
            <input
              type="number"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </p>
          {sending ? <p>Enviando...</p> : null}
          {msg ? <p> {msg}</p> : null}

          <input type="submit" value="Enviar" />
        </form>
      </div>
    </main>
  );
};

export default Contacto;
