import React from 'react'
import {useLocation} from 'react-router-dom'

function Nomatch() {
    let location = useLocation();
    return (
        <div>
            <h1>Page not found - {location.pathname}</h1>
        </div>
    )
}

export default Nomatch
