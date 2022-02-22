import React, { useState, useEffect } from "react";
import axios from "axios";
import NovedadItem from "../components/novedades/NovedadItem";
import "../../src/styles/components/pages/Novedades.css";

const NovedadesPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/novedades");
      setNovedades(response.data);
      setLoading(false);
    };
    cargarNovedades();
  }, []);

  return (
    <main className="holder">
      <div className="novedades">
        <div className="titulonovedades">
          Novedades<span>!</span>
        </div>
        <div className="lineadiv"></div>
        <div className="subtitulonovedades">
          Las ultimas novedades sobre el diseño gráfico
        </div>
      </div>

      <div>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          novedades.map((item) => (
            <NovedadItem
              key={item.id}
              title={item.titulo}
              subtitle={item.subtitulo}
              imagen={item.imagen}
              body={item.cuerpo}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default NovedadesPage;
