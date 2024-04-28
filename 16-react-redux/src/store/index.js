//we have data in this store, & we use it from inside our components
//components subscribe to the store, & then they get the data they need
//components never directly manage the store data
//we hv subscription, but we dont have data flow in other direction
//we use reducer function to change the  store data
//here components should trigger a data change
//we hv actions & component disptach actiona
//redux then forwards the actions to the reducer
//them the operation performed by the reducer

//step-1: importing createStore from redux
// import {createStore} from 'redux'
import { createSlice, configureStore } from "@reduxjs/toolkit";

//step-1: we call createSlice here, & it wants an object {}
//we hv to prepare a silce for our global state
const countSlice = createSlice({
  //every slice wants a name which is an identifier
  name: "count",
  //defining an initial state
  initialState: { count: 0, showCounter: true },
  //now we need reducers, reducers in an object, maps all the reducers needed by this slice
  reducers: {
    //here in the object we need to add these required methods
    //evry method here automatically recieves latest state
    //ths methods will be called for you by redux
    //redux has inbuilt package imgur, which creates separate slices, like we can directlu update the slice
    //it clones the existing state , creates a new state object
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//creating a new slice for the authentication

const authSlice = createSlice({
    //naming slice
  name: "auth",
  //providing initial state
  initialState: { isAuthentication: false },
  //adding req methods to the reducers function
  reducers: {
    login(state) {
      state.isAuthentication = true;
    },
    logout(state) {
      state.isAuthentication = false;
    },
  },
});

// //step-3 so creating this reducer functin where it returns a obj, it takes two params state, action
// const storeReducer = (state = {count : 0, showCounter: true}, action) => {
//     if(action.type === 'increment'){
//         return {
//             count : state.count + 1,
//             showCounter : state.showCounter
//         }
//     }

//     if(action.type === 'decrement'){
//         return {
//we hv to write two states, if we miss one, it will overwrite
//like if we dont write showCounter here , it will disappear from the screen
//             count : state.count -1,
//             showCounter : state.showCounter
//         }
//     }

//     if(action.type === 'increase'){
//         return {
//             count : state.count + action.amount,
//             showCounter : state.showCounter
//         }
//     }

//     if(action.type === 'toggle'){
//         return {
//             showCounter : !state.showCounter,
//             count : state.count
//         }
//     }

//     return state;
// }

//it gathers all the dispatching actions for us
export const countActions = countSlice.actions;
export const authAction = authSlice.actions;

//step -2 : createTore wants a reducer function, we need reducer function here so
const store = configureStore({
  reducer: {counter : countSlice.reducer, auth : authSlice.reducer}
});

// to use this in all the files, we r exporting it so that we can use it outside
export default store;
