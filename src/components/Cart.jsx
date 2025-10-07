import Modal from "./Modal";
import Button from "./Button";
import CartItem from "./CartItem";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";
import { UserContext } from "../store/UserProgressContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserContext);

  return (
    <Modal className="cart" open={userCtx.userProgress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <p className="cart-total"></p>
      <p className="modal-actions">
        <Button onClick={userCtx.hideCart}>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
