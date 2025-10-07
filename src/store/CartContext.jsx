import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

const cartReducer = (state, action) => {
  const updatedItems = [...state.items];

  if (action.type === "ADD_ITEM") {
    const itemIndex = updatedItems.findIndex(
      (item) => item.id === action.item.id
    );

    if (itemIndex > -1) {
      const updatedItem = {
        ...updatedItems[itemIndex],
        quantity: updatedItems[itemIndex].quantity + 1,
      };

      updatedItems[itemIndex] = updatedItem;

      return { ...state, items: updatedItems };
    } else {
      const updatedItem = { ...action.item, quantity: 1 };
      updatedItems.push(updatedItem);
      return { ...state, items: updatedItems };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    const itemIndex = updatedItems.findIndex((item) => item.id === action.id);

    if (updatedItems[itemIndex].quantity > 1) {
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: updatedItems[itemIndex].quantity - 1,
      };
      return { ...state, items: updatedItems };
    } else {
      const filteredItems = updatedItems.filter(
        (item) => item.id !== action.id
      );
      return { ...state, items: filteredItems };
    }
  }
  return state;
};

const CartContextProvider = ({ children }) => {
  const [state, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const CartContextValue = {
    items: state.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
