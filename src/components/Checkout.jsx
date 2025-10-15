import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../utils/currencyFormatter";
import Modal from "./Modal";
import { UserContext } from "../store/UserProgressContext";
import Input from "./Input";
import Button from "./Button";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserContext);
  const totalAmount = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const { error, isLoading, data, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    requestConfig
  );

  console.log(userCtx.userProgress);

  const handleFinish = () => {
    userCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const customerData = Object.fromEntries(formData);

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  };

  let actions = (
    <>
      <Button textOnly onClick={userCtx.hideCheckout}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isLoading) {
    actions = <span>Sending Order...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userCtx.userProgress === "checkout"}
        onClose={
          userCtx.userProgress === "checkout" ? userCtx.hideCheckout : null
        }
      >
        <h2>Success!</h2>
        <p>Your order was submitted!</p>
        <p>Check your email!</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userCtx.userProgress === "checkout"}
      onClose={
        userCtx.userProgress === "checkout" ? userCtx.hideCheckout : null
      }
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount:{currencyFormatter.format(totalAmount)}</p>
        <Input label="Full Name" type="text" id="name"></Input>
        <Input label="Email" type="email" id="email"></Input>
        <Input label="Street" type="text" id="street"></Input>

        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text"></Input>
          <Input label="City" id="city" type="text"></Input>
        </div>
        {error && (
          <Error title="failed to submit order" message={error}></Error>
        )}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
