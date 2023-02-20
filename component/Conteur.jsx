import { useState } from "react";
import styles from "../styles/Conteur.module.css"


export default function Conteur(props) {
    const [nombre,setNombre] = useState(props.depart ? props.depart : 0)
    
    const incrementer = ()=>{
        setNombre(nombre + 1);
    }
    return <div className={styles.conteur}>
    
    <span className={styles.nombre}>{nombre}</span>
    <button className={styles.button} onClick={incrementer}>Icremente</button>
    </div>
    
    
    ;
}
