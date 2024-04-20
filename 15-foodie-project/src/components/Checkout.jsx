//this is the checkout component that has access from the cart component
// to use inputz in this compnent we created a separate ui block component for Input

import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
  //for the total amount to display , we used here context
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  //functin for closing the checkout
  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }
  function handleSubmit(event) {
    //by this method we r making that request is not getting created
    event.preventDefault();
    //for validation we have alrdy added a required prop in the input field

    //this is for extracting values by builtin browser method FormData
    //we r passing event.target which is form element
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    //to send a rqst to the backend
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });
  }
  return (
    //we set the open prop for opening this model we set it true only if progress matches checkout
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form onSubmit={handleSubmit}>
        <h3>Checkout</h3>
        <p>Total Amount : {currencyFormatter.format(cartTotal)} </p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" onClick={handleCloseCheckout} textOnly>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
