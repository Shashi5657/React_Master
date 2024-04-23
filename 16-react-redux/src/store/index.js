//step-1: 
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

//step -2 : we need reducer function here so 
const store = configureStore({
    reducer : countSlice.reducer
})

export default store;