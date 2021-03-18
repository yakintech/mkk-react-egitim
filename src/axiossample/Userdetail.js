import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {apiurl} from '../env/config'
import axios from 'axios'

function Userdetail() {
    let {id} = useParams();
    const [user, setuser] = useState({})

    useEffect(() => {
        
        axios.get(`${apiurl}users/${id}`)
        .then((res)=>{

            setuser(res.data);

        })

    }, [])

    
    return (
        <>
            <span>{user.name}</span>
        </>
    )
}

export default Userdetail
