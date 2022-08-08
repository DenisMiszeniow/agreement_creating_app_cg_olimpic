import Step4 from "../step_4_div"
import { useState } from "react";
import styles from './sending.module.css'
import { FileUploader } from 'react-drag-drop-files'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Sending = (props) => {

    const [file, setFile] = useState(null);
    const handleChange = (file) => { setFile(file) };
    const fileTypes = ["PDF"]
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_weofkil', 'template_jpopojg', form.current, 'rB9N2zoV8qvOchXfR')
            .then((result) => {
                console.log(result.text)
                // props.onSentMessage()
                // setTimeout(() => props.clearMessageStatus(), 5000)
            }, (error) => {
                console.log(error.text)
                // props.onSentMessageError()
            })
    }

    return (
        <div>
            <Step4 />
            <form ref={form} onSubmit={sendEmail}>
                <div className={styles.sectionForm}>
                    <div className={styles.sectionForm__Form}>
                        <div className={`${styles.sectionForm__Form__DoubleSame} ${styles.sectionForm__Form__Alone}`}>
                            <div className={styles.visibility}><input name="mother_tel" value={props.motherPhoneNumber} readOnly/></div>
                            <div className={styles.visibility}><input name="father_tel" value={props.fatherPhoneNumber} readOnly/></div>
                            <div className={styles.visibility}><input name="child_name" value={props.childName} readOnly/></div>
                            <div className={styles.visibility}><input name="child_birthday" value={props.childDayOfBirth} readOnly/></div>
                            <div className={styles.visibility}><input name="user_site" value={props.chosenSite} readOnly/></div>
                            <div className={styles.visibility}><input name="user_package" value={props.chosenPackage} readOnly/></div>
                            <div className={styles.visibility}><input name="user_frequency" value={props.chosenFrequency} readOnly/></div>
                            <div className={styles.visibility}><input name="user_price" value={props.calculatePrice} readOnly/></div>
                            <div className={styles.visibility}><input name="owner_name" value={props.ownerName} readOnly/></div>
                            <div className={styles.visibility}><input name="owner_account" value={props.bankAccount} readOnly/></div>
                            <div>
                                <label> Twoje Imię i Nazwisko:</label>
                                <input name="user_name" readOnly type='text' value={props.parrentName} />
                            </div>
                            <div>
                                <label>twój adres e-mail:</label>
                                <input name="user_email" readOnly type="email" value={props.parrentEmail} />
                            </div>
                            <div className={styles.fileDropDiv}>
                                <FileUploader
                                    multiple={true}
                                    handleChange={handleChange}
                                    name="my_file"
                                    types={fileTypes}
                                    label={file ? `${file[0].name}` : "Przeciągnij lub załącz plik"}
                                    children={<div className={styles.customFileUpload}><p>{file ? <u>{file[0].name}</u> : "Przeciągnij lub załącz plik"}</p></div>}
                                />
                            </div>
                            
                            <div>
                            {
                            file
                            ? <input className={styles.buttonActive} type="submit" value="WYŚLIJ" />
                            : <span className={styles.linkActive}>WYŚLIJ</span>
                            }
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Sending