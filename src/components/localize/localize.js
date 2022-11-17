import React, { useEffect } from "react"
import { MainDataApi } from "../../API/api"
import styles from './localize.module.scss'



const Localize = (props) => {
    useEffect (() => {props.initialLocalesThunk(props.language)}, [props.initialized])
    const localizeHandler = () => props.localesSwitchThunk(props.language)

    return (
        <div className={styles.main}>
            <input disabled={props.buttonDisable} onClick={localizeHandler} type="submit" className={`${styles.localize} ${props.buttonDisable ? styles.disable : (props.localize ? styles.ua: styles.pl)} `} value={`${props.localize ? "УКР" : "POL"}`}/>
        </div>
    )
}

export default Localize