import logo from "../assets/logo.jpg";
import Button from "./Button";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Restaurant" />
        <h1>Food App</h1>
      </div>
      <nav>
        <Button textOnly>Cart(0)</Button>
      </nav>
    </header>
  );
};

export default Header;
