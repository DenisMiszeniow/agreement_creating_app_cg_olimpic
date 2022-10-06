import styles from './steps.module.css'

const Instruction = (props) => {
    return (
        <div className={styles.discription}>
            <h1>Krok: 1 / 4</h1> 
            <h2>Wypełnij pola poniżej</h2>
            <p>Pamiętaj! Przy wypełnieniu danych osobowych zgadzasz się na przetwarzanie ich przez CG Olimpic w celu stworzenia oraz przechowywania umowy do momentu jej wygaśnięcia!</p>
        </div>
    )
}

export default Instruction
