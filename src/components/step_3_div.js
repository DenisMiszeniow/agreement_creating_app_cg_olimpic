import styles from './main_form/main_form.module.css'

const Step3 = (props) => {
    return (
        <div className={styles.discription}>
            <h2>Krok 3: Ściągnij umowę, jeśli chcesz wydrukuj, podpisz i zeskanuj (nie obowiązkowo)</h2>
            <p>Na tym etapie musimy upewnić się, e jesteś człowiekiem i świadomie podpisujesz umowę.</p> 
            <p>W nastęnym kroku dodaj ściągniętą (podpisaną) umowę do formularza i wyślij</p>
            <input type="submit"/>
        </div>
    )
}

export default Step3
