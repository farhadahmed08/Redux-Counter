// state - count : 0 
// action - increment , decrement , reset 
// reducer 
// store 
const {createStore} = require('redux');

// 
// const INCREMENT = 'INCREMENT'
const ADD_USER = 'ADD_USER'
// const DECREMENT = 'DECREMENT'
// const RESET = 'RESET'
// const INCREMENTBYVALUE = 'INCREMENTBYVALUE'


// state define 
const initialState = {
    users :['arif'],
    count : 1 
}

//action 

// const  incrementAction = ()=>{
//     return{
//         type:INCREMENT,
//     }
// }
const  addUser = (user)=>{
    return{
        type:ADD_USER,
        payload:user
    }
}
// const  resetAction = ()=>{
//     return{
//         type:RESET,
//     }
// }
// const  incrementActionByValue = (value)=>{
//     return{
//         type:INCREMENTBYVALUE,
//         payload:value
//     }
// }

// creating reducer --> logic here
const userReducer = (state = initialState ,action )=>{
    switch (action.type) {
        // case INCREMENT:
            
        //  return {
        //     ...state,
        //     count : state.count + 1
        //  }
        // case DECREMENT:
            
        //  return {
        //     ...state,
        //     count : state.count - 1
        //  }
        // case INCREMENTBYVALUE:
        //  return {
        //     ...state,
        //     count : state.count + action.payload
        //  }
        case ADD_USER:
            
         return {
            users: [...state.users,action.payload],
            count : state.count +1
         }
    
        default:
          return state
    }
}

//store 
const store = createStore(userReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

//action dispatch

// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(decrementAction())
// store.dispatch(resetAction())
// store.dispatch(decrementAction())
// store.dispatch(incrementActionByValue(5))
// store.dispatch(incrementActionByValue(10))
// store.dispatch(incrementActionByValue(-5))
store.dispatch(addUser('rafi'))
store.dispatch(addUser('lipu'))



