import React, { useState, useEffect } from 'react';
import _ from 'lodash'

function Productcrud() {

    const [products, setproducts] = useState([]);
    const [categories, setcategories] = useState([]);
    const [allproducts, setglobalproducts] = useState([]);
    const [productdetail, setproductdetail] = useState({});
    const [loading, setloading] = useState(true);
    const [orderby, setorderby] = useState('asc');

    const productapiurl = 'https://northwind.now.sh/api/products/';
    const categoryapiurl = 'https://northwind.now.sh/api/categories';



    useEffect(() => {

        //İlkinde productları servisten çekip state e atadık
        fetch(productapiurl)
            .then((res) => res.json())
            .then((data) => {
                setglobalproducts(data);
                let orderproducts = _.orderBy(data, ['name'], [orderby]);
                //chars = _.orderBy(chars, ['name'],['asc']);
                setproducts(orderproducts);
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
    };


    const orderName = () => {
        let orderproducts = [];
        if (orderby == 'asc') {
            setorderby('desc');
            orderproducts = _.orderBy(allproducts, ['name'], ['desc']);

        }
        else {
            setorderby('asc');
            orderproducts = _.orderBy(allproducts, ['name'], ['asc']);

        }

        setproducts(orderproducts);

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
                <div style={{ display: 'flex' }}>

                    <div>
                        {
                            loading == true ? (<span>loading...</span>) : (
                                <table>
                                    <thead>
                                        <tr>
                                            <td>ID</td>
                                            <td style={{ cursor: 'pointer' }} onClick={() => orderName()}>Name</td>
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
                                <div style={{ marginTop: '5%' }}>
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
