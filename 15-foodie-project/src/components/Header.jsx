import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  //imported context & using them
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  function handleShowCart(){
    userProgressCtx.showCart()
  }
 
  const totalCartItems = cartCtx.items.reduce((totalNUmberOfItems, item)=> {
    return totalNUmberOfItems + item.quantity
  }, 0)
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant img" />
        <h1>Foodie</h1>
      </div>
      <p>
        <Button onClick={handleShowCart} textOnly>Cart ({totalCartItems})</Button>
      </p>
    </header>
  );
}
