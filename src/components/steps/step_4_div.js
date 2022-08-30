import styles from './steps.module.css'

const Step4 = (props) => {
    return (
        <div className={styles.discription}>
            <h2>Krok 4: Dołącz ściągniętą (podpisaną) umowę i wyślij</h2>
            <p>Dodaj podpisaną umowę w wyznaczone pole i wyślij za pomocą przycisku.</p> 
            <p>Pamiętaj! Umowa zostanie aktywowana TYLKO po wpłacie wpisowych (CJK)!</p>
        </div>
    )
}

export default Step4
