import React from 'react'
import { Form, Input, Button } from 'antd'

function Antaddcategory() {

    const finishform = (values) => {

        let requestoption = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }
        fetch('https://northwind.now.sh/api/categories', requestoption)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
    }

    return (
        <>
            <Form
                onFinish={finishform}
            >
                <Form.Item
                    label='Category Name'
                    name='name'
                    rules={[{ required: true, message: 'Please input your categoryname!' }]}
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item
                    label='Description'
                    name='description'
                >
                    <Input></Input>

                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Antaddcategory
