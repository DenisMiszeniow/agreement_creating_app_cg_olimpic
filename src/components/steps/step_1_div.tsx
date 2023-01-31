import { FC, useEffect } from "react"
import styles from "./steps.module.scss"
//@ts-ignore
import Preloader from "../preloader/preloader.tsx"
import { Step1TextsType } from "../../types/types"

type PropsType = {
    setLocalesThunk: (language: string, section: string) => void
    step1Texts: Step1TextsType
    language: string
    section: string
}

const Step1: FC<PropsType> = (props) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
