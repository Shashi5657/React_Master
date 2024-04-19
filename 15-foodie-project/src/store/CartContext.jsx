//1)first step, created this cartContext instead of going through the propDrilling
//first we need to import createContext & then assign to the object CartContext

import { createContext, useReducer } from "react";

//2)secondly, creating the structure for teh CartContext
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  deleteItem: (id) => {},
});

//5) input for useReducer, it takes two params state & action which is mnaged by react
function CartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //we defined this because, if we push directly then we will get the same items more times
    // if we add to cart the same item
    //by creating this, we can increase only quantity if we add the same item to cart
    const existingCartItemIndex = state.items.findindex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items]

    if(existingCartItemIndex > -1){
        const existingItem = state.items[existingCartItemIndex],
        const updatedItem = {
            ...existingItem,
            quantity : existingItem.quantity + 1
        }
        updatedItems[existingCartItemIndex] = updatedItem
    }else {
        updatedItems.push({...action.item, quantity : 1})
    }

    return { ...state, items : updatedItems }
  }
  if (action.type === "REMOVE_ITEM") {
    //remove items from the array
  }

  return state;
}


//3)third, defining the contextProvider component which then can be wrapped around our components
//to make sure this context available to them
// this will do the actual data managementr & state management
export function CartContexTProvider({ children }) {
    //4)for managing the state in easy & efficient way, we r using useReducer
    //this useReducer function needs an input , so we created this 5) CartReducer
  useReducer(CartReducer, { items: [] });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
