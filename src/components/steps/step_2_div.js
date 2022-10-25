import styles from './steps.module.scss'

const Step2 = (props) => {
    return (
        <div className={styles.discription}>
            <h1>Krok: 2 / 4</h1> 
            <h2>Dokładnie przeczytaj umowę!</h2>
            <p>Jeśli zauważysz pomyłkę - cofnij i popraw dane w pierwszym kroku.</p> 
        </div>
    )
}

export default Step2
