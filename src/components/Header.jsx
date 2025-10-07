import logo from "../assets/logo.jpg";
import Button from "./Button";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";
import { UserContext } from "../store/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserContext);

  const totalItems = cartCtx.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Restaurant" />
        <h1>Food App</h1>
      </div>
      <nav>
        <Button textOnly onClick={userCtx.openCart}>
          Cart({totalItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
