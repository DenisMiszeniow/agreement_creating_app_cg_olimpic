import { LocalizationProvider } from "@mui/x-date-pickers"
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TextField from '@mui/material/TextField'
import styles from "../main_form.module.scss"
import classes from "./child_data.module.scss"

const ChildData = (props) => {
    
    //-------------child name-----------------
    const localOnChildName = ({ target: { value } }) => {
        props.onChildName(value)
    }

    //------------DatePickerHandler-----------------
    const handleChange = (newValue) => {
       props.onChildDayOfBirth(newValue)
      }

    
    // Accept on Child Foto--------------------------
    const localOnCheck = () => {
        props.onChildCheckbox()

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
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    className={classes.datePicker}
                                    inputFormat="DD/MM/YYYY"
                                    value={props.childDayOfBirthParam}
                                    minDate='01-01-2000'
                                    maxDate='01-01-2050'
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}/>
                                    
                            </LocalizationProvider>
                            {/* <input name='child_birthday' type='date' onChange={localOnChildDayOfBirth} value={props.childDayOfBirth} required /> */}
                        </div>
                    </div>
                    <div className={styles.sectionForm__Form__Alone}>
                        <div className={styles.div__checkbox}>
                            <input name='child_check' type="checkbox" className={styles.checkbox} onChange={localOnCheck} defaultChecked={props.childCheckbox}/>
                            <span>Zgoda na wykorzystanie wiezyrunku dziecka*</span>
                            <span className={styles.discription}>*Zachęcamy do pozostawiena tego punktu zaznaczonego aby mogliście Państwo cieszyć się zdjęciami swojej pociechy w naszych profilach spółecznościowych.</span>
                            
                        </div>
                        
                    </div>
        </>
    )
}
export default ChildData