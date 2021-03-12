import React from 'react'

function Categoryselect(props) {
    return (
        <>
            <select>
                {
                    props.data.map((item)=> (<option key={item.id}>{item.name}</option>))
                }
            </select>
        </>
    )
}

export default Categoryselect
