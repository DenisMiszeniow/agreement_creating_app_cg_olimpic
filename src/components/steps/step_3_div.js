import { useEffect } from 'react'
import Preloader from '../preloader/preloader'
import styles from './steps.module.scss'

const Step3 = (props) => {
    useEffect(() => { props.setStepsLocalesThunk(props.language) }, [props.language])
    return !props.step3Texts
        ? <Preloader />
        : <div className={styles.discription}>
            <h1>{props.step3Texts.step3Text}</h1> 
            <h2>{props.step3Texts.h2TextLine1}</h2>
            <h2>{props.step3Texts.h2TextLine2}</h2>
            <p>{props.step3Texts.pTextLine1}</p>
            <p className={styles.warning}>{props.step3Texts.pTextLine2}</p>
        </div>
}

export default Step3