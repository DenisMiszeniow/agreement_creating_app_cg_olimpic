import { FC, useEffect } from 'react'
//@ts-ignore
import Preloader from '../preloader/preloader.tsx'
import styles from './steps.module.scss'
import { Step4TextsType } from '../../types/types.js'

type PropsType = {
    setLocalesThunk: (language: string, section: string) => void
    step4Texts: Step4TextsType
    language: string
    section: string
}

const Step4: FC<PropsType> = (props) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { props.setLocalesThunk(props.language, props.section) }, [props.language])
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
