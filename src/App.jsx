import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/CartContext";
import Cart from "./components/Cart";
import UserContextProvider from "./store/UserProgressContext";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <CartContextProvider>
        <UserContextProvider>
          <Header></Header>
          <Meals></Meals>
          <Cart></Cart>
          <Checkout></Checkout>
        </UserContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
