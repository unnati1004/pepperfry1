export const reducer = (state,action)=>{
    if(action.type==="REMOVE_ITEMS"){
        return {
            ...state,
            items:state.items.filter((currele)=>{
              return currele._id !== action.payload
            })
        }
    }

    if(action.type==="INCREMENT"){
        const updatedCart = state.items.map((currele)=>{
            if(currele._id===action.payload){
                return {...currele,quantity:currele.quantity+1}
            }
            return currele;
        })

        return {...state,items:updatedCart}
    }

    if(action.type==="DECREMENT"){
        const updatedCart = state.items.map((currele)=>{
            if(currele._id===action.payload){
                return {...currele,quantity:currele.quantity-1}
            }
        
            return currele;
        }).filter((e)=>{
            return e.quantity !==0

        })
        return {...state,items:updatedCart}
    }

    if(action.type==="GET_TOTAL"){
        let {totalItem,totalAmount} = state.items.reduce((acc,cv)=>{
            let {price,quantity} = cv;
            let updatedTotalamount = price*quantity + 99;

            acc.totalAmount +=updatedTotalamount
            acc.totalItem +=quantity;
            return acc;
        },{totalItem:0,totalAmount:0})
        return {...state,totalItem,totalAmount}
    }

    if(action.type === "CART_TOTAL"){
        let {carttotal} = state.items.reduce((acc,cv)=>{
            let {price,quantity} =cv;
            let updatedCartAmount = price*quantity;
            acc.carttotal +=updatedCartAmount;
            return acc; 
        },{carttotal:0})
        return {...state,carttotal}
    }

    
    
    return state;
}