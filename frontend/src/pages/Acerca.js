import "../../src/styles/components/pages/Acerca.css";
import { Link } from "react-router-dom";

const Acerca = (props) => {
  return (
    <main className="holder">
      <div className="contacto">
        <div className="tituloacerca">
          Conoce<span> sobre mi</span>
        </div>
        <div className="lineadiv"></div>
        <div className="subtituloacerca">
          Soy Cristian Marello, tengo 30 años y vivo en Buenos Aires, Argentina
        </div>
      </div>

      <div className="contenidoacerca">
        Soy una persona muy detallista y apasionado en los trabajos que realizo,
        dedicando todo el tiempo posible para que los resultados sean óptimos.
        Todos los dias estoy aprendiendo nuevas tareas y perfeccionando mis
        habilidades. Mi objetivo principal como diseñador es poder cumplir con
        las expectativas de mis clientes, lograr diseños innovadores, pero a la
        vez poder comunicar un mensaje por medio de la tecnología.
      </div>

      <div className="iconos">
        <img src="img/iconos.png"></img>
      </div>
      <div className="fotoacerca">
        <img src="img/fotoacerca.png" />
      </div>
    </main>
  );
};

export default Acerca;
