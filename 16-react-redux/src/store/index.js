//step-1: 
import {createStore} from 'redux'

//step-3 so creating this reducer functin where it returns a obj, it takes two params state, action
const storeReducer = (state = {count : 0}, action) => {
    if(action.type === 'increment'){
        return {
            count : state.count + 1
        }
    }
    if(action.type === 'decerement'){
        return {
            count : state.count -1
        }
    }

    return state;
}

//step -2 : we need reducer function here so 
const store = createStore(storeReducer)

export default store;