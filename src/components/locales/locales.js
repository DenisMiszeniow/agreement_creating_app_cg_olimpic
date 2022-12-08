import styles from './locales.module.scss'



const Locales = (props) => {
    const localizeHandler = () => props.localesSwitch()
    return (
        <div className={styles.main}>
            <input disabled={props.buttonDisable} onClick={localizeHandler} type="submit" className={`${styles.localize} ${props.buttonDisable ? styles.disable : (props.localize ? styles.ua: styles.pl)} `} value={`${props.localize ? "УКР" : "POL"}`}/>
        </div>
    )
}

export default Locales