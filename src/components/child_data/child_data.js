import styles from "../main_form/main_form.module.css"

const ChildData = (props) => {
    
    //-------------child name-----------------
    const localOnChildName = ({ target: { value } }) => {
        props.onChildName(value)
    }

    //-------------child date of birth--------------
    const localOnChildDayOfBirth = ({ target: { value } }) => {
        props.onChildDayOfBirth(value)
    }
    

    return (
        <>
            <h3>Dane dziecka</h3>
                    <div className={`${styles.sectionForm__Form__Double} ${styles.sectionForm__Form__Alone}`}>
                        <div>
                            <label>Imię Nazwisko dziecka:</label>
                            <input name='child_name' type="text" onChange={localOnChildName} value={props.childName} placeholder="np.: Weronika Kowalska" required />
                        </div>
                        <div>
                            <label>Data urodzenia:</label>
                            <input name='child_birthday' type='date' onChange={localOnChildDayOfBirth} value={props.childDayOfBirth} required />
                        </div>
                    </div>
        </>
    )
}
export default ChildData