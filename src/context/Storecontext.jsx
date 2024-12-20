import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null);
const StorecontextProvider = (props)=>{

    const [cartitems,setCartitems]=useState({});

    const addtocart = (itemId)=>{
        if(!cartitems[itemId]){
            setCartitems((prev)=>({...prev,[itemId]:1}))
    }
    else{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
}
    const removefromcart =(itemId)=>{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    useEffect(()=>{
        console.log(cartitems);
    },[cartitems])
    const contextValue={
        food_list,
        cartitems,
        setCartitems,
        addtocart,
        removefromcart
    }

    return(
        <Storecontext.Provider value={ contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default StorecontextProvider