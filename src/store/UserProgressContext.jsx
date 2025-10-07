import { createContext, useState } from "react";

export const UserContext = createContext({
  openCart: () => {},
  hideCart: () => {},
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

  const userContextValue = {
    openCart,
    hideCart,
    userProgress: userProgress,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
