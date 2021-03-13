import React, { useState, useEffect } from 'react'

function Productcrud() {

    const [products, setproducts] = useState([]);
    const [categories, setcategories] = useState([]);
    const [allproducts, setglobalproducts] = useState([]);
    const [productdetail, setproductdetail] = useState({});
    const [loading, setloading] = useState(true);


    const productapiurl = 'https://northwind.now.sh/api/products/';
    const categoryapiurl = 'https://northwind.now.sh/api/categories';



    useEffect(() => {

        //İlkinde productları servisten çekip state e atadık
        fetch(productapiurl)
            .then((res) => res.json())
            .then((data) => {
                setglobalproducts(data);
                setproducts(data);
                setloading(false);
            });

        //Daha sonra kategorileri çekip state e atadık
        fetch(categoryapiurl)
            .then((res) => res.json())
            .then((data) => {
                setcategories(data);
            })


    }, []);


    const categoryonchange = (id) => {

        let categoryid = id;

        let newdata = allproducts.filter(q => q.categoryId == id);

        setproducts(newdata);

    }

    const categoryonchange2 = (id) => {

        fetch(productapiurl)
            .then((res) => res.json())
            .then((data) => {
                let filterdata = data.filter(q => q.categoryId == id);
                setproducts(filterdata);
            })

    }


    const getproductdetail = (id) => {

        fetch(`https://northwind.now.sh/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setproductdetail(data);
            })
    }

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <div>
                    <span>Categories:</span>
                    <select onChange={(e) => categoryonchange2(e.target.value)}>
                        {
                            categories.map((item, key) => (<option key={key} value={item.id}>{item.name}</option>))
                        }
                    </select>
                </div>
                <div style={{display:'flex'}}>

                    <div>
                        {
                            loading == true ? (<span>loading...</span>) : (
                                <table>
                                    <thead>
                                        <tr>
                                            <td>ID</td>
                                            <td>Name</td>
                                            <td>Price</td>
                                            <td>Category ID</td>
                                            <td>Supplier's Company Name</td>
                                            <td>Detay</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map((item, key) => (
                                                <tr key={key} style={item.discontinued == true ? { backgroundColor: 'tomato' } : { backgroundColor: 'aqua' }}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.unitPrice}</td>
                                                    <td>{item.categoryId}</td>
                                                    <td>{item.supplier?.companyName}</td>
                                                    <td><button onClick={() => getproductdetail(item.id)}>Detay</button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>


                                </table>
                            )
                        }
                    </div>

                    {
                        (
                            <>
                                <div style={{marginTop:'5%'}}>
                                    <h3>Product Detail</h3>
                                    <p>quantityPerUnit: {productdetail.quantityPerUnit} </p>
                                    <p>unitsInStock: {productdetail.unitsInStock} </p>
                                    <p>unitsOnOrder: {productdetail.unitsOnOrder}</p>
                                    <p>reorderLevel: {productdetail.reorderLevel}</p>
                                </div>

                            </>
                        )

                    }
                </div>

            </div>

        </>
    )
}

export default Productcrud
