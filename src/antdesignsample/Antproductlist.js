import React, { useState, useEffect } from 'react';
import { Table, Spin, Modal } from 'antd'

function Antproductlist() {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);
    const [isModalVisible, setisModalVisible] = useState(false);

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
        setisModalVisible(true);
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


    const okModal = () => {
        setisModalVisible(false)
    }
    return (
        <>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={() => okModal()} onCancel={() => okModal()} >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>

            <Spin tip="Loading..." spinning={loading}>
                <Table columns={columns} dataSource={products}></Table>
            </Spin>
        </>
    )
}

export default Antproductlist
