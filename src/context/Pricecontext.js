import React, {createContext, useState} from 'react';

const pricecontext = createContext(null);

export const PriceProvider = ({children}) => {

    const [price, setprice] = useState(55);

    const values = {
        price,
        setprice
    }
    return <pricecontext.Provider value={values}>{children}</pricecontext.Provider>

}

export default pricecontext;