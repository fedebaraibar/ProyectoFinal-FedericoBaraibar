import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="div1">
          <Link to={"/"} className="linkContainer">
            <img src="/tablero.png" alt="" className="logo" />
            <h1 className="titleLogo">TechnoHouse</h1>
          </Link>

          <ul>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/category/PlacDVideo"}>
                <div className="LinkText">
                  <span>Placas</span>
                  <span>de</span>
                  <span>video</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/category/Monitor"}>Monitores</Link>
            </li>
            <li>
              <Link to={"/category/Ram"}>Rams</Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
