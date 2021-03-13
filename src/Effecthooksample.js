import React, { useState, useEffect } from 'react'

function Effecthooksample() {

    const [sayac, setsayac] = useState(0);
    const [sayac2, setsayac2] = useState(0);

    //Component yüklendiğinde bir kereliğe mahsus çalışıyor!
    useEffect(() => {
        //data ÇEK!!
        console.log('Component HAZIR!!');
    }, []);


    //HERHANGİ bir state değiştiğinde
    useEffect(() => {
        console.log('Componentte herhangi bir state değişimi meydana geldi');
    });


    //sayac-2 state i değiştiğinde
    useEffect(()=>{
        console.log('Sayaç - 2 statinde değişim meydana gelmiştir!!');
    },[sayac2]);

    return (
        <>
            <div>
                <h1>{sayac}</h1>
                <button onClick={() => setsayac(sayac + 1)}>Sayac Değiş</button>
            </div>
            <div>
                <h1>{sayac2}</h1>
                <button onClick={() => setsayac2(sayac2 + 1)}>Sayac - 2 Değiş</button>
            </div>
        </>
    )
}

export default Effecthooksample
