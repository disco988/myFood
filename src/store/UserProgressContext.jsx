import { createContext, useState } from "react";

export const UserContext = createContext({
  openCart: () => {},
  hideCart: () => {},
  openCheckout: () => {},
  hideCheckout: () => {},
  userProgress: "",
});

const UserContextProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState("");

  const openCart = () => {
    setUserProgress("cart");
  };

  const hideCart = () => {
    setUserProgress("");
  };

  const openCheckout = () => {
    setUserProgress("checkout");
  };

  const hideCheckout = () => {
    setUserProgress("");
  };

  const userContextValue = {
    openCart,
    hideCart,
    openCheckout,
    hideCheckout,
    userProgress: userProgress,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
