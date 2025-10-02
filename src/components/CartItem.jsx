import { currencyFormater } from "../utils/currencyFormater";
const CartItem = ({ item }) => {
  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} - {currencyFormater.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button>-</button>
        <span>{item.quantity}</span>
        <button>+</button>
      </p>
    </li>
  );
};

export default CartItem;
