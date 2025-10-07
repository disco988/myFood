import { useContext } from "react";
import { currencyFormater } from "../utils/currencyFormater";
import { CartContext } from "../store/CartContext";

const CartItem = ({ item }) => {
  const cartCtx = useContext(CartContext);

  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} - {currencyFormater.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={() => cartCtx.removeItem(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => cartCtx.addItem(item)}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
