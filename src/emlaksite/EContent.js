import React from 'react'
import EAbout from './EAbout'
import EContact from './EContact'
import EProject from './EProject'

function EContent() {
    return (
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
            <EProject></EProject>
            <EAbout></EAbout>
            <EContact></EContact>
        </div>

    )
}

export default EContent
