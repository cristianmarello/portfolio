import "../../src/styles/components/pages/Servicios.css";

const Servicios = (props) => {
  return (
    <main className="holder">
      <div className="servicios">
        <div className="tituloservicios">
          Servicios <span>Principales</span>
        </div>
        <div className="lineadiv"></div>
        <div className="subtituloservicios">
          Algunos de los servicios que puedo brindar para dar una solución a tu
          problema
        </div>
      </div>

      <div className="contenido1">
        <div className="contenido">
          <div className="caja">
            <div className="titulocaja">Redes Sociales</div>
            <div className="parrafocaja">
              Brindar, por medio de buenas prácticas, la identidad de la marca
              en todos los aspectos posibles
            </div>
            <div className="lineacaja"></div>
            <div className="parrafo2caja">
              Realizar Feeds, historias, videos, y manejar las mismas redes.
            </div>
            <div className="botoncaja">
              <a href="/contacto">Contactame</a>
            </div>
          </div>
        </div>

        <div className="contenido">
          <div className="caja">
            <div className="titulocaja">Folleteria</div>
            <div className="parrafocaja">
              Entregarle una serie de trabajos para que pueda ser presentado de
              un modo profesional y moderno.
            </div>
            <div className="lineacaja"></div>
            <div className="parrafo2caja">
              Realizar Tarjetas personales, cartas, papelería, entre otras
              opciones.
            </div>
            <div className="botoncaja">
              <a href="/contacto">Contactame</a>
            </div>
          </div>
        </div>

        <div className="contenido">
          <div className="caja">
            <div className="titulocaja">Ilustraciones</div>
            <div className="parrafocaja">
              Otorgar diseños gráficos, ilustraciones o dibujos, que expresen el
              motivo buscado por el cliente
            </div>
            <div className="lineacaja"></div>
            <div className="parrafo2caja">
              ilustraciones 2D, 3D, minimalistas o un estilo pedido.
            </div>
            <div className="botoncaja">
              <a href="/contacto">Contactame</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Servicios;
