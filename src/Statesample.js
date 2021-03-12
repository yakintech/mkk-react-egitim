import React, { useState } from 'react'

function Statesample() {

    //tanımladığım sayac state inin default değeri 0

    // let user = {ad:'Çağatay',soyad:'Yildiz',diller:['Reactjs','Nodejs','.Net Core','Mongodb']};
    // const [kisi, setKisi] = useState(user);
    const [sayac, setSayac] = useState(0);
    const [cities, setCities] = useState(['İstanbul', 'Ankara', 'İzmir', 'Trabzon', 'Hatay']);
    const [city, setcity] = useState('');

    const test = (element) => {
        console.log(element);
        element.target.style.color = 'red';
    }

    return (
        <>
            <span>{city}</span>
            <ul>
                {
                    cities.map((item) => (<li>{item}</li>))
                }
            </ul>

            <div>
                <input type='text' onChange={(e) => test(e)} />
                <button onClick={() => setCities([...cities, city])}>Ekle</button>
            </div>


            {/* <h1>{sayac}</h1>
            <button onClick={() => setSayac(sayac + 1)}>Değiştir</button> */}
        </>
    )
}



export default Statesample
