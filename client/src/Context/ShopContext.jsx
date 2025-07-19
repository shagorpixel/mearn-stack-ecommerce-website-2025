import React, { createContext } from 'react';
import { products } from '../assets/frontend_assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = ({children}) => {
    const currency = '৳';
    const delivary_charge = 100;
    const value = {
        products,
        currency,
        delivary_charge
    };
    return (
        
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;