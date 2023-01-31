import { FC, useEffect } from 'react'
//@ts-ignore
import Preloader from '../preloader/preloader.tsx'
import styles from './steps.module.scss'
import { Step3TextsType } from '../../types/types.js'

type PropsType = {
    setLocalesThunk: (language: string, section: string) => void
    step3Texts: Step3TextsType
    language: string
    section: string
}

const Step3: FC<PropsType> = (props) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { props.setLocalesThunk(props.language, props.section) }, [props.language])
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