import { Link } from "react-router-dom";
import "./error.css"
const Error = () => {
  return (
    <div className="main-error">
      <div className="back-error-404">
        <h1 className="error404">ERROR 404</h1>
      </div>
      <div className="img-error">
        <img src="../../public/img-error.jpg" alt="Error-404" />
      </div>
      <div className="redirection">
        <h2>PAGINA NO ENCONTRADA</h2>
        <Link to="/" className="link"><h3>VOLVER A INICIO</h3></Link>
      </div>
    </div>
  );
};

export default Error;
