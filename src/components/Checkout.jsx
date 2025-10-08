import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { currencyFormater } from "../utils/currencyFormater";
import Modal from "./Modal";
import { UserContext } from "../store/UserProgressContext";
import Input from "./Input";
import Button from "./Button";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const userCtx = useContext(UserContext);

  console.log(userCtx.userProgress);

  return (
    <Modal
      open={userCtx.userProgress === "checkout"}
      onClose={
        userCtx.userProgress === "checkout" ? userCtx.hideCheckout : null
      }
    >
      <form action="">
        <h2>Checkout</h2>
        <p>Total Amount:{currencyFormater.format(totalAmount)}</p>
        <Input label="Full Name" type="text" id="full-name"></Input>
        <Input label="Email" type="email" id="email"></Input>
        <Input label="Street" type="text" id="street"></Input>

        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text"></Input>
          <Input label="City" id="city" type="text"></Input>
        </div>
        <p className="modal-actions">
          <Button textOnly onClick={userCtx.hideCheckout}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
