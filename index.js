// state - count : 0 
// action - increment , decrement , reset 
// reducer 
// store 
const {createStore,applyMiddleware} = require('redux');
const { default: logger } = require('redux-logger');



// product constants 
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT'




// product state define 
const initialProductState = {
    products :['sugar','salt'],
    numberOfProducts : 2 
}


//action 

// product action
const  getProducts = ()=>{
    return{
        type:GET_PRODUCTS,
       
    }
}
const  addProduct = (product)=>{
    return{
        type:ADD_PRODUCT,
        payload:product
    }
}



// creating reducer --> logic here
const productReducer = (state = initialProductState ,action )=>{
    switch (action.type) {
        
        case GET_PRODUCTS:
            
         return {
           ...state
         }
        case ADD_PRODUCT:
            
         return {
            products: [...state.products,action.payload],
            numberOfProducts : state.numberOfProducts + 1
         }
    
        default:
          return state
    }
}









//store 
const store = createStore(productReducer,applyMiddleware(logger));
store.subscribe(()=>{
    console.log(store.getState());
})

//action dispatch

store.dispatch(getProducts())
store.dispatch(addProduct('tea'))






