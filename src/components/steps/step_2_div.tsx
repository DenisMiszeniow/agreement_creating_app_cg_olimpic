import { FC, useEffect } from 'react'
//@ts-ignore
import Preloader from '../preloader/preloader.tsx'
import styles from './steps.module.scss'
import { Step2TextsType } from '../../types/types.js'

type PropsType = {
    setLocalesThunk: (language: string, section: string) => void
    step2Texts: Step2TextsType
    language: string
    section: string
}

const Step2: FC<PropsType> = (props) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { props.setLocalesThunk(props.language, props.section) }, [props.language])
    return !props.step2Texts
        ? <Preloader />
        : <div className={styles.discription}>
            <h1>{props.step2Texts.step2Text}</h1>
            <h2>{props.step2Texts.h2Text}</h2>
            <p>{props.step2Texts.pText}</p>
        </div>
}

export default Step2
