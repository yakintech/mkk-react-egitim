import React from 'react'
import { useParams } from 'react-router-dom'

function Productdetailpage() {

    //Useparams hooku sayesinde url den gelen parametreyi yakalayıp kullanabiliriz
    let { id } = useParams();

    return (
        <div>
            <h1>Detail Page - {id}</h1>
        </div>
    )
}

export default Productdetailpage
