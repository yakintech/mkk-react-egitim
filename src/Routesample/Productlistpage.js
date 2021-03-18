import React from 'react'
import { Link, useHistory, useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  

function Productlistpage() {

    let history = useHistory();

    let query = useQuery();

    console.log(query.get("order"))
    console.log(query.get("tit"))

    
    //redirect kodu yazmak istiyorum

    const detayagit = (id) => {
        history.push(`/Product/Detail/${id}`);
    }

    return (
        <div>
            <ul>
                <li><Link to='/Product/Detail/1'>IPhone</Link> </li>
                <li><Link to='/Product/Detail/2'>Samsung</Link></li>
                <li><Link to='/Product/Detail/3'>Huawei</Link></li>
            </ul>

            <ul>
                <li><button onClick={() => detayagit(1)}>IPhone'a git</button></li>
                <li><button onClick={() => detayagit(2)}>Samsung'a git</button></li>
                <li><button onClick={() => detayagit(3)}>Huawei'e git</button></li>
            </ul>
        </div>
    )
}

export default Productlistpage
