import PropTypes from 'prop-types';

const CartItem = ({ item, handleDelete, handleIncrement, handleDecrement }) => {
 return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.price * item.qty}</td>
      <td>{item.qty}</td>
      <td>
        <button className="onDecrement" onClick={() => handleDecrement(item.id)}>
          -
        </button>
        <button className="onDelete" onClick={() => handleDelete(item.id)}>
          X
        </button>
        <button className="onIncrement" onClick={() => handleIncrement(item.id)}>
          +
        </button>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

export default CartItem;
