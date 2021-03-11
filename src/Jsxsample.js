import React from 'react'
import './part.css'


function Jsxsample() {

    let imgsrc = 'https://pbs.twimg.com/profile_images/1234795897583808512/-iJ8T1FH_400x400.jpg';

    let divstyle = { color: 'red', backgroundColor: 'yellow' };

    return (
        <div>
            <div style={divstyle}>
                <h3>Türkiye'nin Güzide Spor Klubü GÖZTEPE</h3>
            </div>
            <div className="main">
                <h3>Türk Milli Takımı</h3>
            </div>


            {/* <h1>React JS</h1>
            <img src={imgsrc} height={650} ></img> */}
        </div>
    )
}

export default Jsxsample
