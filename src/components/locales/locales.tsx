import { FC } from 'react'
import styles from './locales.module.scss'

type PropsType = {
    localesSwitch: () => void
    buttonDisable: boolean
    localize: boolean
}

const Locales: FC<PropsType> = (props) => {
    const localizeHandler = () => props.localesSwitch()
    return (
        <div className={styles.main}>
            <input disabled={props.buttonDisable} onClick={localizeHandler} type="submit" className={`${styles.localize} ${props.buttonDisable ? styles.disable : (props.localize ? styles.ua: styles.pl)} `} value={`${props.localize ? "УКР" : "POL"}`}/>
        </div>
    )
}

export default Locales