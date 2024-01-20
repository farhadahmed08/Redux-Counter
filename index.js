// state - count : 0 
// action - increment , decrement , reset 
// reducer 
// store 
const {createStore} = require('redux');

// 
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'


// state define 
const initialState = {
    count : 0 
}

//action 

const  incrementAction = ()=>{
    return{
        type:INCREMENT,
    }
}
const  decrementAction = ()=>{
    return{
        type:DECREMENT,
    }
}
const  resetAction = ()=>{
    return{
        type:RESET,
    }
}

// creating reducer --> logic here
const counterReducer = (state = initialState ,action )=>{
    switch (action.type) {
        case INCREMENT:
            
         return {
            ...state,
            count : state.count + 1
         }
        case DECREMENT:
            
         return {
            ...state,
            count : state.count - 1
         }
        case RESET:
            
         return {
            ...state,
            count : 0
         }
    
        default:
          return state
    }
}

//store 
const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

//action dispatch

store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(resetAction())

store.dispatch(incrementAction())
