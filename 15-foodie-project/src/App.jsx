import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContexTProvider } from "./store/CartContext";

function App() {
  return (
    <CartContexTProvider>
      <Header />
      <Meals />
    </CartContexTProvider>
  );
}

export default App;
