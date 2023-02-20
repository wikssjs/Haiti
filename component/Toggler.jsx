import { useState } from 'react'
import styles from '../styles/Toggler.module.css'


export default function Toggler({titre,visible,children}){

    const [contenuVisible,setcontenuVisible] = useState(visible);
    const toggle = () =>{
        setcontenuVisible(!contenuVisible)
    }

    return <>
    
    <div className={styles.titre} onClick={toggle}>
        {titre}
    </div>
    
    {contenuVisible ?
    <div className={styles.contenu}>
        {children}
    </div>

    :
    <></>
}
    </>
}