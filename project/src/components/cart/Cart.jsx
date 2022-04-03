import { createContext, useEffect, useReducer } from "react"
import "./Cart.css"
// import { products } from "./products"
import Contextcart from "./Contextcart"
import { reducer } from "./reducer"



 export const CartContext = createContext();
 var product1 = JSON.parse(localStorage.getItem("product"));
//             item1.push(data);
console.log(product1);
 const init_state = {
     items:product1,
     totalAmount:0,
     totalItem:0,
     carttotal:0,
 }
 const Cart=()=>{

    const [state,dispatch] = useReducer(reducer,init_state);

    const removeItems = (_id) =>{
        return dispatch({
            type:"REMOVE_ITEMS",
            payload:_id,

        })

    }

    const increment = (_id)=>{
        return dispatch({
            type:"INCREMENT",
            payload:_id,
        })
    }

    const decrement = (_id)=>{
        return dispatch({
            type:"DECREMENT",
            payload:_id,
        })
    }

    useEffect(()=>{
        dispatch({type:"GET_TOTAL"})
        // console.log("ADitya")
    },[state.items])

    useEffect(()=>{
        dispatch({type:"CART_TOTAL"})
    },[state.items])

    // useEffect(()=>{
    //     dispatch({type:"TOTAL_AMOUNT"})
    // },[state.items])

    return (
        <>
        <CartContext.Provider value = {{...state,removeItems,increment,decrement}}>
            <Contextcart/>
        </CartContext.Provider>
        </>

    )
}

export default Cart