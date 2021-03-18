import React, {createContext, useState} from 'react'

const usercontex = createContext(null);

export const Userprovider = ({children}) =>{

    //Contextler birden fazla state de barındırabilir. Dilediğiniz kadar objeyi dışarı çıkarabilirisnizF
    const [users, setusers] = useState(['Çağatay','Ahmet']);
    const [cities, setcities] = useState(['İzmir','Çanakkale','Ankara'])
    let company = 'MKK';

    const values = {
        users,
        setusers,
        cities,
        setcities,
        company
    }

    return <usercontex.Provider value={values}>{children}</usercontex.Provider>
} 


export default usercontex;