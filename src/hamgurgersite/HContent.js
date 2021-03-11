import React from 'react'
import HAbout from './HAbout'
import HContact from './HContact'
import HMenu from './HMenu'

function HContent() {
    return (
        <div className="w3-content" style={{maxWidth: 1100}}>

            <HAbout></HAbout>
            <HMenu></HMenu>
            <HContact></HContact>
        </div>
        
    )
}

export default HContent
