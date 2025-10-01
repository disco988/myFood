import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header></Header>
        <Meals></Meals>
        <Cart></Cart>
      </CartContextProvider>
    </>
  );
}

export default App;
