import styles from './main_form/main_form.module.css'

const Step1 = (props) => {
    return (
        <div className={styles.discription}>
            <h2>Krok 1: Wypełnij pola poniżej</h2>
            <p>Pamiętaj! Przy wypełnieniu danych osobowych zgadzasz się na przetwarzanie ich przez CG Olimpic w celu stworzenia oraz przechowywania umowy do momentu jej wygaśnięcia!</p>
        </div>
    )
}

export default Step1
