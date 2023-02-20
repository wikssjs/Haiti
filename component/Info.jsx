import styles from '../styles/Info.module.css'

export default function Info(props){
    console.log(props)
    return <div className={styles.info}>

        {props.text}

    </div>
}