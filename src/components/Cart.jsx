import Modal from "./Modal";
import Button from "./Button";
import CartItem from "./CartItem";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem />
        ))}
      </ul>
      <p className="cart-total"></p>
      <p className="modal-actions">
        <Button>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
