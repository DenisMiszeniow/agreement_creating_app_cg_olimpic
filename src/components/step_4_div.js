import styles from './main_form/main_form.module.css'

const Step4 = (props) => {
    return (
        <div className={styles.discription}>
            <h2>Krok 4: Wyślij podpisaną umowę</h2>
            <p>Dodaj podpisaną umowę w wyznaczone pole i wyślij.</p> 
            <p>Pamiętaj! Umowa zostanie aktywowana TYLKO po wpłacie wpisowych (CJK)!</p>
        </div>
    )
}

export default Step4
