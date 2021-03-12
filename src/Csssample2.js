import React from 'react'
import styles from './assets/css/main.module.css';
import styled from 'styled-components'

import { Mkkbutton2,Mkkbutton3,TomatoButton,Mkkbutton} from './assets/css/mkkcssset/mkkset'


function Csssample2() {





    return (
        <div>
            <Mkkbutton3 btncolor='red' btnbgcolor='yellow'>Kayıt</Mkkbutton3>
            <Mkkbutton2>Kayıt</Mkkbutton2>
            <TomatoButton>Kayıt</TomatoButton>
            <Mkkbutton>Kayıt</Mkkbutton>
            <Mkkbutton primary>Kayıt</Mkkbutton>
            {/* <Mkkcontainer>
                <Mkksection>
                    <Mkkh1>Liverpool</Mkkh1>

                </Mkksection>
                <h3 className={styles.title}>Barcelona</h3>
            </Mkkcontainer> */}

        </div>
    )
}

export default Csssample2
