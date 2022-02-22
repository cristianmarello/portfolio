import "../../src/styles/components/pages/Galeria.css";
import { Link } from "react-router-dom";

const Galeria = (props) => {
  return (
    <main class="holder">
      <div class="galeria">
        <div class="titulogaleria">
          Galeria de <span>trabajos</span>
        </div>
        <div class="lineadiv"></div>
        <div class="subtitulogaleria">
          Algunos de los servicios que puedo brindar para dar una solución a tu
          problema
        </div>
        <div class="container">
          <div class="box">
            <div class="imgbx">
              <img src="img/fotos-para-portfolio_01.jpg" alt="" />
            </div>
            <div class="content">
              <h2>Derepuestos</h2>
              <p>Contenido para redes sociales.</p>
            </div>
          </div>
          <div class="box">
            <div class="imgbx">
              <img src="img/fotos-para-portfolio_02.jpg" alt="" />
            </div>
            <div class="content">
              <h2>Itc</h2>
              <p>Contenido para redes sociales.</p>
            </div>
          </div>
          <div class="box">
            <div class="imgbx">
              <img src="img/fotos-para-portfolio_03.jpg" alt="" />
            </div>
            <div class="content">
              <h2>Itc</h2>
              <p>Feeds instagram.</p>
            </div>
          </div>
          <div class="box">
            <div class="imgbx">
              <img src="img/fotos-para-portfolio_04.jpg" alt="" />
            </div>
            <div class="content">
              <h2>Derepuestos</h2>
              <p>Folleteria y publicidad.</p>
            </div>
          </div>
          <div class="box">
            <div class="imgbx">
              <img src="img/fotos-para-portfolio_05.jpg" alt="" />
            </div>
            <div class="content">
              <h2>Carruseles</h2>
              <p>Creación con contenido informativo.</p>
            </div>
          </div>
          <div class="box">
            <div class="imgbx">
              <img src="img/fotos-para-portfolio_06.jpg" alt="" />
            </div>
            <div class="content">
              <h2>Itc</h2>
              <p>Carpetas empresariales.</p>
            </div>
          </div>
          <div class="box">
            <div class="imgbx">
              <img src="img/fotos-para-portfolio_07.jpg" alt="" />
            </div>
            <div class="content">
              <h2>Old Rusted</h2>
              <p>Identidad de marca.</p>
            </div>
          </div>
          <div class="box">
            <div class="imgbx">
              <img src="img/fotos-para-portfolio_08.jpg" alt="" />
            </div>
            <div class="content">
              <h2>Itc</h2>
              <p>Animaciones e ilustraciones.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Galeria;
