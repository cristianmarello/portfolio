import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const menu = [
    { id: 1, to: "/", text: "Inicio" },
    { id: 2, to: "/acerca", text: "Acerca" },
    { id: 3, to: "/contacto", text: "Contacto" },
    { id: 4, to: "/galeria", text: "Galeria" },
    { id: 5, to: "/Servicios", text: "Servicios" },
    { id: 6, to: "/Novedades", text: "Novedades" },
  ];

  return (
    <main>
      <nav>
        <ul>
          {menu.map((item) => {
            const { id, to, text } = item;
            return (
              <li key={id}>
                <Link to={to}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </main>
  );
};

export default Nav;
