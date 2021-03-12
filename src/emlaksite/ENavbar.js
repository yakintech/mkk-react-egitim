import React from 'react'

function ENavbar(props) {
    return (
        <>
            <div className="w3-top">
                <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                    <a href="#home" className="w3-bar-item w3-button">{props.logotitle}</a>
                    <div className="w3-right w3-hide-small">
                        {
                            props.menu.map((item) => (<a href="#projects" className="w3-bar-item w3-button">{item.name}</a>))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}


ENavbar.defaultProps = {
    logotitle : 'Çağatay'
}


export default ENavbar
