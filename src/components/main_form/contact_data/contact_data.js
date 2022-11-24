import { NavLink } from "react-router-dom"
import styles from "../main_form.module.scss"

const ContactData = (props) => {

    //-------------mother phone number-----------------
    const localOnMotherPhoneNumber = ({ target: { value } }) => {
        props.onMotherPhoneNumber(value)
    }

    //-------------father phone number--------------
    const localOnFatherPhoneNumber = ({ target: { value } }) => {
        props.onFatherPhoneNumber(value)
    }

    //------------parrent email------------
    const localOnParrentEmail = ({ target: { value } }) => {
        props.onParrentEmail(value)
    }

    //------------test form------------
    const localTestForm = () => {
        if (props.chosenSite === '') {
            props.onTestingFormText (props.checkLocalesTexts.siteText)
        } else if (props.chosenPackage === '') {
            props.onTestingFormText (props.checkLocalesTexts.packageText)
        } else if (props.chosenFrequency === '') {
            props.onTestingFormText (props.checkLocalesTexts.frequencyText)
        } else if (props.chosenSchoolYear === '') {
            props.onTestingFormText (props.checkLocalesTexts.schoolYearText)
        } else if (props.childName === '') {
            props.onTestingFormText (props.checkLocalesTexts.childNameText)
        } else if ((props.childDayOfBirth === '') || (props.childDayOfBirth === 'Invalid date')) {
            props.onTestingFormText (props.checkLocalesTexts.childDateText)
        } else if (props.parrentName === '') {
            props.onTestingFormText (props.checkLocalesTexts.parrentNameText)
        } else if (props.parrentIdCard === '') {
            props.onTestingFormText (props.checkLocalesTexts.parrentIdText)
        } else if (props.parrentCity === '') {
            props.onTestingFormText (props.checkLocalesTexts.parrentCityText)
        } else if (props.parrentZipCode === '') {
            props.onTestingFormText (props.checkLocalesTexts.parrentZipText)
        } else if (props.parrentAddress === '') {
            props.onTestingFormText (props.checkLocalesTexts.parrentAddressText)
        } else if ((props.motherPhoneNumber === '') && (props.fatherPhoneNumber === '')) {
            props.onTestingFormText (props.checkLocalesTexts.telText)
        } else if (props.parrentEmail === '') {
            props.onTestingFormText (props.checkLocalesTexts.mailText)
        } else if (!/@/.test(props.parrentEmail)) {
            props.onTestingFormText (props.checkLocalesTexts.checkMailText)
        } else if (!/\./.test(props.parrentEmail)) {
            props.onTestingFormText (props.checkLocalesTexts.checkMailText)
        } else {
            props.onTestingForm(props.checkLocalesTexts.allRightText)
        }
    }
    //------------ invert test status to false------------
    const onLocalInvertTestStatus = () => {
        props.onTestingForm('')
        props.onTestingFormText ('')
    }

    return (
        <>
            <h3>{props.localesTexts.h3Text}</h3>
            <div className={`${styles.sectionForm__Form__DoubleSame} ${styles.sectionForm__Form__Alone}`}>
                <div>
                    <label>{props.localesTexts.motherTelText}</label>
                    <input name="mother_tel" type='text' onChange={localOnMotherPhoneNumber} value={props.motherPhoneNumber} placeholder="w formacie: 654-321-987"/>
                </div>
                <div>
                    <label>{props.localesTexts.fatherTelText}</label>
                    <input type="text" name="father_tel" onChange={localOnFatherPhoneNumber} value={props.fatherPhoneNumber} placeholder="w formacie: 654-321-987"/>
                </div>
            </div>
            <div className={styles.sectionForm__Form__Alone}>
                <label>{props.localesTexts.mailText}</label>
                <input type="email" name="email" onChange={localOnParrentEmail} value={props.parrentEmail} required placeholder="np.: kowalski@name.com" />
            </div>
            <div className={`${styles.sectionForm__Form__Alone} ${styles.sectionForm__Form__DoubleSame}`}>
                <div>
                    {!props.testingForm ? <p className={styles.pError}>{props.testingFormText}</p> : <p className={styles.pGood}>{props.testingFormText}</p>}
                </div>
                <div>
                    {
                        !props.testingForm 
                        ? <input className={styles.buttonActive} type="button" onClick={localTestForm} value={props.localesTexts.checkDataText} />
                        : <NavLink to={props.agreementRoute} onClick={onLocalInvertTestStatus} className={styles.linkActive}>{props.localesTexts.nextStepText}</NavLink>
                    }
                </div>
            </div>
        </>
    )
}
export default ContactData