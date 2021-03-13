import React, { useState, useEffect } from 'react'

function Categorycrud() {

    const [name, setname] = useState('');
    const [description, setdescription] = useState('');
    const [categories, setcategories] = useState([]);

    useEffect(() => {

        fetch('https://northwind.now.sh/api/categories')
            .then((res) => res.json())
            .then((data) => {
                setcategories(data);
            })

    }, [])

    const saveCategory = () => {
        let requestoptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, description: description })
        };

        fetch('https://northwind.now.sh/api/categories', requestoptions)
            .then((res) => res.json())
            .then((data) => {
                setname('');
                setdescription('');
                setcategories([...categories,data]);
            });

    };


    const deletecategory = (id) => {

        let requestoptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        fetch(`https://northwind.now.sh/api/categories/${id}`,requestoptions)
        .then((res)=> res.json())
        .then((data)=>{
            console.log('Silinen data: ', data);
            let newcategories = categories.filter(q => q.id !== id);
            setcategories(newcategories);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    const categoryupdate = (id)=>{
        let requestoptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, description: description, id: id })
        };

        fetch(`https://northwind.now.sh/api/categories/${id}`,requestoptions)
        .then((res)=> res.json())
        .then((data)=>{

            fetch('https://northwind.now.sh/api/categories')
            .then((result) => result.json())
            .then((datas) => {
                setcategories(datas);
            })

        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
            <div>
                <div>
                    <label>Category Name:</label>
                    <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <input type='text' value={description} onChange={(e) => setdescription(e.target.value)} />
                </div>
                <div>
                    <button onClick={() => saveCategory()}>Kayıt</button>
                </div>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Delete</td>
                            <td>İşlem</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((item, key) => (
                                <tr key={key}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td><button onClick={() => deletecategory(item.id)}>Delete</button></td>
                                    <td><button onClick={()=> categoryupdate(item.id)}>Güncelle</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Categorycrud
