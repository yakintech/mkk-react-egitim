import React, { useContext } from 'react'
import usercontex from '../context/Usercontext'
import {Link} from 'react-router-dom'

function Userlist() {

    const { users, cities, company } = useContext(usercontex);

    return (
        <>
        <h1>{company}</h1>
        <Link to='/Adduser'>Add User</Link>
            <ul>
                {
                    users.map((item, key) => (<li key={key}>{item}</li>))
                }
            </ul>
            <hr></hr>
            <ul>
                {
                    cities.map((item,key)=> (<li key={key}>{item}</li>))
                }
            </ul>

        </>
    )
}




export default Userlist
