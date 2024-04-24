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
import {createSlice, configureStore} from '@reduxjs/toolkit'

const countSlice = createSlice({
    name : 'count',
    initialState : {count : 0, showCounter: true},
    reducers : {
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        increase(state, action){
            state.count = state.count + action.payload
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }


    }
})

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

export const countActions = countSlice.actions

//step -2 : createTore wants a reducer function, we need reducer function here so 
const store = configureStore({
    reducer : countSlice.reducer
})

// to use this in all the files, we r exporting it so that we can use it outside
export default store;