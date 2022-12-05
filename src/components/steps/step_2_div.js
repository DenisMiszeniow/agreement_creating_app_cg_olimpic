import { useEffect } from 'react'
import Preloader from '../preloader/preloader'
import styles from './steps.module.scss'

const Step2 = (props) => {
    useEffect(() => { props.setStepsLocalesThunk(props.language) }, [props.language])
    return !props.step2Texts
        ? <Preloader />
        : <div className={styles.discription}>
            <h1>{props.step2Texts.step2Text}</h1>
            <h2>{props.step2Texts.h2Text}</h2>
            <p>{props.step2Texts.pText}</p>
        </div>
}

export default Step2
