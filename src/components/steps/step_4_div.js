import styles from './steps.module.css'

const Step4 = (props) => {
    return (
        <div className={styles.discription}>
            <h1>Krok: 4 / 4</h1> 
            <h2>Załącz ściągniętą (opcjonalnie ręcznie podpisaną) umowę i naciśnij przycisck "PODPISUJĘ"</h2>
            <p>Jeśli wszystko wykonasz prawidłowo otrzymasz za chwilę maile potwierdzające zawarcie umowy.</p> 
            <p>Pamiętaj! Umowa zostanie aktywowana TYLKO po wpłacie wpisowych (CJK)!</p>
        </div>
    )
}

export default Step4
