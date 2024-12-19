import { createContext, useState } from "react";
import { food_list } from "../Assets/Images";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [CarItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!CarItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

     const getTotalCartAmmount=()=>{
        let totalAmount=0;
        for(const item in CarItems){
            if(CarItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item)
                totalAmount+= itemInfo.price*CarItems[item]
            }
        }
        return totalAmount;
     }

    const contextValue = {
        food_list,
        CarItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmmount

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider