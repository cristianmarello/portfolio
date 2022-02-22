import "../../src/styles/components/pages/Home.css";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="titulo" data-text="Cris">
        Cris
      </div>
      <div className="titulo2" data-text="Marello">
        Marello
      </div>
      <div className="subtitulo">DISEÑADOR GRÁFICO</div>
      <div className="minimalism">minimalism</div>
      <div className="linea"></div>
      <button>
        <a href="/galeria">Mis Trabajos</a>
      </button>
      <div className="foto">
        <img src="img/fotocris2.png"></img>
      </div>
    </main>
  );
};

export default HomePage;
