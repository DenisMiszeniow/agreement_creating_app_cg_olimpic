
//@ts-ignore
import { AgreementDataContainer } from "./agreement_data/agreement_data_container.ts"
//@ts-ignore
import { ChildDataContainer } from "./child_data/child_data_container.ts"
//@ts-ignore
import { ContactDataContainer } from "./contact_data/contact_data_container.ts"
//@ts-ignore
import { ParrentDataContainer } from "./parrent_data/parrent_data_container.ts"
import styles from "./main_form.module.scss"
// import { TestButtonContainer } from './TEST-BUTTON/test_button_container';
//@ts-ignore
import { Step1Container } from "../steps/steps_container.ts"
import { FC, useEffect } from "react"

type PropsTytpe = {
    language: string
    section: string
    setLocalesThunk: (language: string, section: string) => void
}

const MainForm: FC<PropsTytpe> = (props) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
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