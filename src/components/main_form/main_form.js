
import { AgreementDataContainer } from "./agreement_data/agreement_data_container"
import { ChildDataContainer } from "./child_data/child_container"
import { ContactDataContainer } from "./contact_data/contact_data_container"
import { ParrentDataContainer } from "./parrent_data/parrent_container"
import styles from "./main_form.module.scss"
import { TestButtonContainer } from './TEST-BUTTON/test_button_container';
import { Step1Container } from "../steps/steps_container"
import { useEffect } from "react"

const MainForm = (props) => {
    useEffect(() => {props.setLocalesThunk(props.language, props.section)}, [props.language])
    return (
        <div className={styles.container}>
            <Step1Container/>
            {/* <TestButtonContainer/> */}
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