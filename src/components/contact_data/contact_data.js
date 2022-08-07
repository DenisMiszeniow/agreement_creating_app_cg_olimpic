import { NavLink } from "react-router-dom"
import styles from "../main_form/main_form.module.css"

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
            props.onTestingFormText ('UWAGA! WYBIERZ PLACÓWKĘ')
        } else if (props.chosenPackage === '') {
            props.onTestingFormText ('UWAGA! WYBIERZ PAKIET')
        } else if (props.chosenFrequency === '') {
            props.onTestingFormText ('UWAGA! WYBIERZ CZEŚTOTLIWOŚĆ ZAJĘĆ')
        } else if (props.chosenSchoolYear === '') {
            props.onTestingFormText ('UWAGA! WYBIERZ ROK SZKOLNY')
        } else if (props.childName === '') {
            props.onTestingFormText ('UWAGA! IMIĘ I NAZWISKO DZIECKA')
        } else if (props.childDayOfBirth === '') {
            props.onTestingFormText ('UWAGA! DATĘ URODZENIA DZIECKA')
        } else if (props.parrentName === '') {
            props.onTestingFormText ('UWAGA! WPROWADŹ IMIĘ I NAZWISKO RODZCA / OPIEKUNA PRAWNEGO')
        } else if (props.parrentIdCard === '') {
            props.onTestingFormText ('UWAGA! WPROWADŹ SERIE I NUMER DOWODU TOŻSAMOŚCI')
        } else if (props.parrentCity === '') {
            props.onTestingFormText ('UWAGA! WPROWADŹ MIEJSCOWOŚĆ')
        } else if (props.parrentZipCode === '') {
            props.onTestingFormText ('UWAGA! WPROWADŹ KOD POCZTOWY')
        } else if (props.parrentAddress === '') {
            props.onTestingFormText ('UWAGA! WPROWADŹ ADRES ZAMIESZKANIA')
        } else if ((props.motherPhoneNumber === '') && (props.fatherPhoneNumber === '')) {
            props.onTestingFormText ('UWAGA! WPROWADŹ NUMER TELEFONU PRZYNAJMNIEJ JEDNEGO Z RODZICÓW / OPIEKUNA PRAWNEGO')
        } else if (props.parrentEmail === '') {
            props.onTestingFormText ('UWAGA! WPROWADŹ ADRES EMAIL')
        } else if (!/@/.test(props.parrentEmail)) {
            props.onTestingFormText ('UWAGA! SPRAWDŹ POPRAWNOŚĆ EMAIL')
        } else if (!/\./.test(props.parrentEmail)) {
            props.onTestingFormText ('UWAGA! SPRAWDŹ POPRAWNOŚĆ EMAIL')
        } else {
            props.onTestingForm()
        }
    }
    //------------ invert test status to false------------
    const onLocalInvertTestStatus = () => {
        props.onTestingForm()
        props.onTestingFormText ('')
    }


    return (
        <>
            <h3>Dane kontaktowe</h3>
            <div className={`${styles.sectionForm__Form__DoubleSame} ${styles.sectionForm__Form__Alone}`}>
                <div>
                    <label>tel. matki / opiekuna prawnego:</label>
                    <input name="mother_tel" type='text' onChange={localOnMotherPhoneNumber} value={props.motherPhoneNumber} placeholder="w formacie: 654-321-987"/>
                </div>
                <div>
                    <label>tel. ojca / opiekuna prawnego:</label>
                    <input type="text" name="father_tel" onChange={localOnFatherPhoneNumber} value={props.fatherPhoneNumber} placeholder="w formacie: 654-321-987"/>
                </div>
            </div>
            <div className={styles.sectionForm__Form__Alone}>
                <label>Adres e-mail do kontaktu:</label>
                <input type="email" name="email" onChange={localOnParrentEmail} value={props.parrentEmail} required placeholder="np.: kowalski@name.com" />
            </div>
            <div className={`${styles.sectionForm__Form__Alone} ${styles.sectionForm__Form__DoubleSame}`}>
                <div>
                    {!props.testingForm ? <p className={styles.pError}>{props.testingFormText}</p> : <p className={styles.pGood}>{props.testingFormText}</p>}
                </div>
                <div>
                    {
                        !props.testingForm 
                        ? <input className={styles.buttonActive} type="button" onClick={localTestForm} value="SPRAWDŹ DANE" />
                        : <NavLink to={'/agreement'} onClick={onLocalInvertTestStatus} className={styles.linkActive} href="#">GENERUJ UMOWĘ</NavLink>
                    }
                </div>
            </div>
        </>
    )
}
export default ContactData