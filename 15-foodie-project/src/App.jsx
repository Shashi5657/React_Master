import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContexTProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContexTProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContexTProvider>
    </UserProgressContextProvider>
  );
}

export default App;
