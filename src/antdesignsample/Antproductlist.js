import React, { useState, useEffect } from 'react';
import { Table, Spin } from 'antd'

function Antproductlist() {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {

        setTimeout(() => {

            fetch('https://northwind.now.sh/api/products')
                .then((res) => res.json())
                .then((data) => {
                    setproducts(data);
                    setloading(false);
                })

        }, 2000);


    }, []);


    const Gotodetail = (id) => {
        console.log(id);
    }


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Unit Price',
            dataIndex: 'unitPrice',
            sorter: (a, b) => a.unitPrice - b.unitPrice,
        },
        {
            title: 'Quantity Per Unit',
            dataIndex: 'quantityPerUnit',
            key: 'quantityPerUnit'
        },
        {
            title: 'Detail',
            dataIndex: 'id',
            render: (id) => (<a onClick={() => Gotodetail(id)}>Detaya Git</a>)
        }
    ];



    return (
        <>
            <Spin tip="Loading..." spinning={loading}>
                <Table columns={columns} dataSource={products}></Table>
            </Spin>
        </>
    )
}

export default Antproductlist
