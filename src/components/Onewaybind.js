import React from 'react'

function Onewaybind() {
    let ad = "Çağatay";

    let sehirler = ['İstanbul', 'Ankara', 'İzmir', 'Trabzon'];
    let status = true;

    return (
        <div>
            <h3>{ad}</h3>
            {
                status == true ? (<span>Pahalı</span>) : (<span>Ucuz</span>)
            }

            <ul>
                {
                    sehirler.map((item) => (<li>{item}</li>))
                }
            </ul>
        </div>
    )
}

export default Onewaybind

// eğer component içerisinde () işareti var ise onun içerisine JSX (yani html) yazılabilir
// react => JSX
// .php   
// .cshtml , .aspx , .asp   @Html.TextboxFor()

