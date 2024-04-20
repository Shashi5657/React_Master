//1)first step, created this cartContext instead of going through the propDrilling
//first we need to import createContext & then assign to the object CartContext

import { createContext, useReducer } from "react";

//2)secondly, creating the structure for teh CartContext
//for the cart, we use items array to store items,
//functions we use are addItem & removeItem,
//so have  a plan & preplan this context accordingly
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});
//this is the shape for our cartContext

//5) input for useReducer, it takes two params state & action which is mnaged by react
//goal of this cartReducer is return an updated state
//action object will tell this function how to update this state
//6) six==>>first create this function and add the actions that are needed
//action has types, based on the action , state updates
//in the end we simply return unhcanged state
function CartReducer(state, action) {
  //type is a part of incoming action, which is a function
  if (action.type === "ADD_ITEM") {
    //we defined this because, if we push directly then we will get the same items more times
    // if we add to cart the same item
    //by creating this, we can increase only quantity if we add the same item to cart
    //to simply say , we r updating here in an immutable way
    // 7) here we r checking if the item is alrdy present in the array
    //findIndex function is used, it will return true if the item matches
    //once we find the item we automatically get the index of that item
    //we need that index later to update that item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    //this is the copy of the old arrauy
    const updatedItems = [...state.items];

    //findIndex returns -1 if it did not find an item
    //otherwise it returns the index of that item i.e., the item is present & its index is this
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      //added quantity property to update the quantity
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //here to the updatedItems array we r pushing the action item
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    //we want to reach existing cart item here
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    //while removing we want to check the quantity ,because if its greater than 1 ,
    //we want to reduce, if its equal to 1 we want to remove item
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
        //we created a new item based on old item & reduced the quantity
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem
    }
    return { ...state, items: updatedItems };
  }

  //this is that  unchanged state
  return state;
}

//3)third, defining the contextProvider component which then can be wrapped around our components
//to make sure this context available to them
// this will do the actual data managementr & state management
//here this cartContextProvider manages the changing data
//here we will manage some state
export function CartContexTProvider({ children }) {
  //4)for managing the state in easy & efficient way, we r using useReducer
  //this useReducer function needs an input , so we created this function 5) CartReducer
  //here this stateful logic is for managing data in arrays such as ading & removing
  //instead for useState, we using useReducer
  //last==> to connect this context to diff components
  const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };
//   console.log(cartContext);

  //the context that is created with createContext haas the provider property
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
