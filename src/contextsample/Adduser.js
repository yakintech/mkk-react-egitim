import React, { useContext, useState } from 'react'
import usercontex from '../context/Usercontext'
import Pricecontext from '../context/Pricecontext'
import {Link} from 'react-router-dom'

function Adduser() {
    const [username, setusername] = useState('')
    const { users, setusers } = useContext(usercontex);
    const {price} = useContext(Pricecontext)


    return (
        <>
        <h2>{price}</h2>
        <Link to='/Userlist'>User List</Link>
        <div>
             <label>Name:</label>
            <input type='text' values={username} onChange={(e) => setusername(e.target.value)}></input>
        </div>
        <div>
            <button onClick={() => setusers([...users,username])}>Add</button>
        </div>
           
        </>
    )
}

export default Adduser
