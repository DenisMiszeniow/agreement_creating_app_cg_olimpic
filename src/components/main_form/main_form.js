import { AgreementDataContainer } from "./agreement_data/agreement_data_container"
import { ChildDataContainer } from "./child_data/child_container"
import { ContactDataContainer } from "./contact_data/contact_data_container"
import { ParrentDataContainer } from "./parrent_data/parrent_container"
import Step1 from "../steps/step_1_div"
import styles from "./main_form.module.css"


const MainForm = (props) => {

    return (
        <div className={styles.container}>
            <Step1/>
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