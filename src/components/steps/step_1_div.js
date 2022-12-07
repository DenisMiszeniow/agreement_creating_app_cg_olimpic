import { useEffect } from "react"
import styles from "./steps.module.scss"
import Preloader from "../preloader/preloader"

const Step1 = (props) => {
    useEffect(() => { props.setLocalesThunk(props.language, props.section) }, [props.language])
    return !props.step1Texts
        ? <Preloader />
        : <div className={styles.discription}>
            <h1>{props.step1Texts.step1Text}</h1>
            <h2>{props.step1Texts.h2Text}</h2>
            <p>{props.step1Texts.pText}</p>
        </div>

}

export default Step1
