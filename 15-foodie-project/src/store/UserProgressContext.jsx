import { createContext, useState } from "react";

//step -1 : creating the structure of it
const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

//step-3 : creating the  function for managing the state & data
export function UserProgressContextProvider({ children }) {
  //step-4 : using useState for managing
  const [userProgress, setUserProgress] = useState("");

  //step-5 creating the functions for managing each of the value
  function showCart() {
    setUserProgress("cart");
  }

  function hideCart() {
    setUserProgress("");
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function hideCheckout() {
    setUserProgress("");
  }

  //step-6: we r gathering all the above functions & values in this below context object
  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}
//step-2 : exporting it
export default UserProgressContext;
