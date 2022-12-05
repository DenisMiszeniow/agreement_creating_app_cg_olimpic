import { useEffect } from 'react'
import Preloader from '../preloader/preloader'
import styles from './steps.module.scss'

const Step4 = (props) => {
    useEffect(() => { props.setStepsLocalesThunk(props.language) }, [props.language])
    return !props.step4Texts
        ? <Preloader />
        : 
        <div className={styles.discription}>
            <h1>{props.step4Texts.step4Text}</h1> 
            <h2>{props.step4Texts.h2Text}</h2>
            <p>{props.step4Texts.pTextLine1}</p>
            <p>{props.step4Texts.pTextLine2}</p>
        </div>
    
}

export default Step4
