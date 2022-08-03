import styles from "./agreement_section.module.css"
import Pdf from "./agreement_pdf"

const Agreement = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.discription}>
                <h2>Krok 2: Zapoznaj się z umową i podpisz na końcu.</h2>
                <p>Pamiętaj! Umowa zostanie aktywowana TYLKO po wpłacie wpisowych!</p>
            </div>
            <div className={styles.sectionForm}>
            <Pdf/>
            </div>
        </div>
    )
}
export default Agreement