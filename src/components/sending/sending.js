import Step4 from "../step_4_div"
import { useState } from "react";
import styles from './sending.module.css'


const Sending = (props) => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFileSelected, setIsFileSelected] = useState(false)

    const onSelectFile = (event) => {

        if (event.target.files[0]) {
            setSelectedFile(event.target.files[0])
            setIsFileSelected(true)
        } else {
            setIsFileSelected(false)
        }
    }

    return (
        <div>
            <Step4 />
            <form>
                <div className={styles.sectionForm}>
                    <div className={styles.sectionForm__Form}>
                        <div className={`${styles.sectionForm__Form__DoubleSame} ${styles.sectionForm__Form__Alone}`}>
                            <div>
                                <label> Twoje Imię i Nazwisko:</label>
                                <input name="mother_tel" type='text' value={props.motherPhoneNumber} />
                            </div>
                            <div>
                                <label>twój adres e-mail:</label>
                                <input type="text" name="father_tel" value={props.fatherPhoneNumber} />
                            </div>
                            <div>
                                <input name="file" id="file-upload" type="file" onChange={onSelectFile} accept="application/pdf"/>
                                <label for="file-upload" className={styles.customFileUpload}>
                                    {
                                        isFileSelected
                                            ? <span>{selectedFile.name}</span>
                                            : <span>PRZECIĄGNIJ LUB ZAŁĄCZ UMOWĘ</span>
                                    }
                                </label>
                                
                            </div>
                            <div>
                               <input type="button" value="WYŚLIJ" />
                            </div>

                        </div>
                    </div>
                </div>

                <input name="user_email" type="email" value={props.parrentEmail} />
                <input name="user_name" type="text" value={props.parrentName} />
                <input className={styles.unvisibleInput} name="user_address" type="text" value={`${props.parrentZipCode} ${props.parrentCity}, ${props.parrentAddress}`} />
                <input name="file" type="file" onChange={onSelectFile} />
                <input type="button" value="WYŚLIJ" />
                {
                    isFileSelected
                        ? <div><p>Wybrany plik: {selectedFile.name}</p></div>
                        : <div><p>Dołącz umowę!</p></div>
                }

            </form>
        </div>
    )
}

export default Sending