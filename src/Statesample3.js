import React, { useState } from 'react'

function Statesample3() {


    let webusers = [
        {
            id: 1,
            name: 'Çağatay',
            surname: 'Yıldız',
            status: true
        },
        {
            id: 2,
            name: 'Mert',
            surname: 'Alptekin',
            status: true
        },
        {
            id: 3,
            name: 'Metin',
            surname: 'Nalcı',
            status: false
        },
    ]

    const [users, setusers] = useState(webusers);

    const changeStatus = (id) => {
        let user = users.find(q => q.id == id);
        user.status = !user.status;

        let data = users.filter(q => q.id !== id);

        setusers([user, ...data]);

    }

    return (
        <>

            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Ad</td>
                        <td>Soyad</td>
                    </tr>
                </thead>

                <tbody>
                    {

                        users.map((item, key) =>
                        (
                            <tr key={key} style={item.status == true ? { backgroundColor: 'red' } : { backgroundColor: 'yellow' }}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                <td><button onClick={() => changeStatus(item.id)}>Change Status</button></td>
                            </tr>
                        )
                        )
                    }
                </tbody>

            </table>

        </>
    )
}

export default Statesample3
