import React, {useContext} from 'react';
import pricecontext from '../context/Pricecontext'

function Pricetable() {

    const {price} = useContext(pricecontext)

    return (
        <>
            <h1>{price}</h1>
        </>
    )
}

export default Pricetable
