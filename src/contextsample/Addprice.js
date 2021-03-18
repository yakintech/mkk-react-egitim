import React, { useContext } from 'react'
import pricecontext from '../context/Pricecontext'

function Addprice() {

    const { price, setprice } = useContext(pricecontext);

    return (
        <>
            <h1>{price}</h1>

            <button onClick={() => setprice(price + 10)}>Arttır</button>
            <hr></hr>
        </>
    )
}

export default Addprice
