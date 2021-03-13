import React, { useState, useEffect } from 'react'

function Categorylistsample() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch('https://northwind.now.sh/api/categories')
        .then((res)=> res.json())
        .then((data)=> {
            setCategories(data);
        })

    },[])

    return (
        <>
        <h1>Kategori Listesi</h1>
        <ul>
            {
                categories.map((item,key)=> (<li key={key}>{item.name}</li>))
            }
        </ul>
        </>
    )
}

export default Categorylistsample
