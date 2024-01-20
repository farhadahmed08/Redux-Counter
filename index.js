// state - count : 0 
// action - increment , decrement , reset 
// reducer 
// store 
const {createStore, combineReducers} = require('redux');



// product constants 
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT'
// cart constants 
const GET_CART_PRODUCTS = 'GET_CART_PRODUCTS';
const ADD_CART_PRODUCT = 'ADD_CART_PRODUCT '



// product state define 
const initialProductState = {
    products :['sugar','salt'],
    numberOfProducts : 2 
}
// cart state define 
const initialCartState = {
    carts :['coke'],
    numberOfCart : 1
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
// cart action
const  getCartProduct = (product)=>{
    return{
        type:GET_CART_PRODUCTS,
        payload:product
    }
}
const  addCartProduct = (product)=>{
    return{
        type:ADD_CART_PRODUCT,
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
//cart reducer
const cartReducer = (state = initialCartState ,action )=>{
    switch (action.type) {
        
        case GET_CART_PRODUCTS:
            
         return {
           ...state
         }
        case ADD_CART_PRODUCT:
            
         return {
            carts: [...state.carts,action.payload],
            numberOfCart : state.numberOfCart + 1
         }
    
        default:
          return state
    }
};


const rootReducer = combineReducers({
    productR:productReducer,
    cartR :cartReducer
})





//store 
const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

//action dispatch

store.dispatch(getProducts())
store.dispatch(addProduct('tea'))

store.dispatch(getCartProduct())
store.dispatch(addCartProduct('coffee'))




