import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Item = ({ item }) => {
  return (
    <div className="bord">
      <div className="prod">
        <div>
          <img src={item.img} alt={item.title} className="imgsProds" />
        </div>
        <div>
          <p>
            {item.title}
            <br />${item.price}
          </p>
        </div>
        <Link to={"/item/" + item.id} className="botonAddCard">
          <button className="botn">Agregar al carrito</button>
        </Link>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
