import styles from './main_form/main_form.module.css'

const Step2 = (props) => {
    return (
        <div className={styles.discription}>
            <h2>Krok 2: Dokładnie przyczyraj umowę i podpisz na końcu</h2>
            <p>Jeśli zauważysz pomyłkę - cofnij i popraw ję w pierwszym kroku.</p> 
            <p>Pamiętaj! Umowa zostanie aktywowana TYLKO po wpłacie wpisowych!</p>
        </div>
    )
}

export default Step2
