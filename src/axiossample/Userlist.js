import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiurl } from '../env/config';
import {Link, useHistory} from 'react-router-dom'

function Userlist() {

    const [users, setusers] = useState([]);
    let history = useHistory();

    useEffect(() => {

        axios.get(`${apiurl}users`)
            .then((res) => {

                setusers(res.data);

            })
    }, []);


    const Gotodetail = (id) =>{
       

        history.push(`/Users/${id}`);
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>EMail</td>
                        <td>Phone</td>
                        <td>Address</td>
                        <td>Web Site</td>
                        <td>Detail</td>
                        <td>Detail-2</td>

                    </tr>
                </thead>
                <tbody>
            {
                users.map((item, key)=>(
                    <tr key={key}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.address.street} {item.address.suite} {item.address.city}</td>
                        <td>{item.website}</td>
                        <td><Link to={`/users/${item.id}`}>Detail</Link></td>

                        <td><button onClick={()=> Gotodetail(item.id)}>Detail</button></td>


                    </tr>
                ))
            }
                </tbody>
            </table>
        </>
    )
}

export default Userlist
