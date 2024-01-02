import { useState } from "react";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import useCartContext from "../../hook/useCartContext";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ItemCount = ({ stock, item }) => {
  const { addToCart } = useCartContext();
  const [cantidad, setCantidad] = useState(1);
  const [isCount, setIsCount] = useState(true);

  const incrementar = () => {
    if (stock > cantidad) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const restablecer = () => {
    const cantidadActual = cantidad;
    setCantidad(1);
    addToCart(item, cantidadActual);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `productos agregados ${cantidad}`,
      showConfirmButton: false,
      timer: 1500,
    });
    setIsCount(false);
  };

  return (
    <div>
      <div className="count">
        <button onClick={disminuir} className="botonMat">
          -
        </button>
        <h2>{cantidad}</h2>
        <button onClick={incrementar} className="botonMat">
          +
        </button>
      </div>
      <div>
        {isCount ? (
          <button onClick={restablecer} className="botonAdd">
            Agregar al carrito
          </button>
        ) : (
          <>
            <Link to="/cart" className="btn btn-success">
              Ir al carrito
            </Link>
            <Link to="/" className="btn btn-success">
              Ir al Home
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

//estamos definiendo que 'stock' es una propiedad requerida y debe ser de tipo número.
ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
};

export default ItemCount;
