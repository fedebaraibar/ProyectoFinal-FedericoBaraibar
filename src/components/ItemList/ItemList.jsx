import Item from "../Item/Item";
import PropTypes from "prop-types";

const ItemList = ({ item }) => {
  return (
    <div id="itemlist" className="prods">
      {item.map((item) => (
        <div key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

ItemList.propTypes = {
  item: PropTypes.array.isRequired,
};

export default ItemList;
