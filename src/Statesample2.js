import React, { useState } from 'react'

function Statesample2() {

    let products = [
        {
            id: 1,
            name: 'Iphone'
        },
        {
            id: 2,
            name: 'Samsung'
        },
        {
            id: 3,
            name: 'Huawei'
        },
        {
            id: 4,
            name: 'Oppo'
        }
    ]

    const [productlist, setproducts] = useState(products)

    // const hello = () => {
    //     console.log('Hello JSX Events!!');
    // }

    // function hello2(){
    //     console.log('Hello JSX Events22222!!');
    // }


    const removeproduct = (id) => {
      let data = productlist.filter(item => item.id !== id);
      setproducts(data);
    }

    // let data = products.find(q => q.id == 3);
    // console.log(data);


    return (
        <>
            {/* <button onClick={() => hello2()}>Merhaba</button> */}
            <ul>
                {
                    productlist.map((item,key) =>
                    (
                        <li key={item.id}>{item.name} <button onClick={() => removeproduct(item.id)}>Sil</button></li>
                    )
                    )
                }
            </ul>

        </>
    )
}

export default Statesample2
