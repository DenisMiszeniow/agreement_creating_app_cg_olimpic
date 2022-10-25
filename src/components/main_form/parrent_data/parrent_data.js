import styles from "../main_form.module.scss"

const ParrentData = (props) => {
    
    //-------------parrent name-----------------
    const localOnParrentName = ({ target: { value } }) => {
        props.onParrentName(value)
    }

    //-------------parrent id-card--------------
    const localOnParrentIdCard = ({ target: { value } }) => {
        props.onParrentIdCard(value)
    }

    //------------parrent city------------
    const localOnParrentCity = ({ target: { value } }) => {
        props.onParrentCity(value)
    }

    //------------parrent zip-code------------
    const localOnParrentZipCode = ({ target: { value } }) => {
        props.onParrentZipCode(value)
    }

        //------------parrent address------------
    const localOnParrentAddress = ({ target: { value } }) => {
        props.onParrentAddress(value)
    }

    return (
        <>
            <h3>Dane rodzica / opiekuna prawnego</h3>
            <div className={`${styles.sectionForm__Form__Alone} ${styles.sectionForm__Form__Double}`}>
                <div>
                    <label>Imię Nazwisko:</label>
                    <input name='user_name' type="text" onChange={localOnParrentName} value={props.parrentName} placeholder="np.: Joanna Kowalska" required/>
                </div>
                <div>
                    <label>Nr dokumentu tożsamości</label>
                    <input name='user_id_card' type="text" onChange={localOnParrentIdCard} value={props.parrentIdCard} placeholder="np.: FGH 987654" required/>
                </div>
            </div>
            <div className={`${styles.sectionForm__Form__Alone} ${styles.sectionForm__Form__Double}`}>
                <div>
                    <label>Miejscowość:</label>
                    <input type="text" name='user_city' onChange={localOnParrentCity} value={props.parrentCity} placeholder="np.: Kobierzyce" required/>
                </div>
                <div>
                    <label>Kod pocztowy:</label>
                    <input name='user_zip_code' onChange={localOnParrentZipCode} value={props.parrentZipCode} type="text" placeholder="np.: 50-555" required/>
                </div>
            </div>
            <div className={styles.sectionForm__Form__Alone}>
                <label>Ulica, nr domu / nr mieszkania:</label>
                <input type="text" name='user_address' onChange={localOnParrentAddress} value={props.parrentAddress} placeholder="np.: ul. Kwiatowa 25/56" required/>
            </div>
        </>
    )
}
export default ParrentData