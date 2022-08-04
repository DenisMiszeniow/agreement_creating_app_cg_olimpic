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
                <input type="email" name="user_email" onChange={localOnParrentEmail} value={props.parrentEmail} required placeholder="np.: kowalski@name.com" />
            </div>
            <div className={`${styles.sectionForm__Form__Alone} ${styles.sectionForm__Form__DoubleSame}`}>
                <div>
                    <p>Czesne: {props.priceNumber} zł</p>
                </div>
                <div>

                    <input className={styles.buttonActive} type="button" value="GENERUJ UMOWĘ" />
                </div>
            </div>
        </>
    )
}
export default ContactData