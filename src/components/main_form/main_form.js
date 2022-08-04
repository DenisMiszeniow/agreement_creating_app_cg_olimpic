import { AgreementDataContainer } from "../agreement_data/agreement_data_container"
import { ChildDataContainer } from "../child_data/child_container"
import { ContactDataContainer } from "../contact_data/contact_data_container"
import { ParrentDataContainer } from "../parrent_data/parrent_container"
import styles from "./main_form.module.css"


const MainForm = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.discription}>
                <h2>Krok 1: Wypełnij pola poniej</h2>
                <p>Pamiętaj! Przy wypełnieniu danych osobowych zgazasz się na przetwarzanie ich przez CG Olimpic w celu stworzenia oraz przechowywabia umowy do momentu jej wygaśnięcia!</p>
            </div>
            <div className={styles.sectionForm}>
                <div className={styles.sectionForm__Form}>
                    <AgreementDataContainer/>
                </div>
                <div className={styles.sectionForm__Form}>
                    <ChildDataContainer/>
                </div>
            </div>
            <div className={styles.sectionForm}>
                <div className={styles.sectionForm__Form}>
                    <ParrentDataContainer/>
                </div>
                <div className={styles.sectionForm__Form}>
                    <ContactDataContainer/>
                </div>
            </div>


        </div>
    )
}
export default MainForm