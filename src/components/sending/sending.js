import Step4 from "../step_4_div"
import { useState } from "react";
import styles from './sending.module.css'
import { FileUploader } from 'react-drag-drop-files'


const Sending = (props) => {

    const [file, setFile] = useState(null);
    const handleChange = (file) => { setFile(file) };
    const fileTypes = ["PDF"]

    return (
        <div>
            <Step4 />
            <form>
                <div className={styles.sectionForm}>
                    <div className={styles.sectionForm__Form}>
                        <div className={`${styles.sectionForm__Form__DoubleSame} ${styles.sectionForm__Form__Alone}`}>
                            <div>
                                <label> Twoje Imię i Nazwisko:</label>
                                <input name="user_name" type='text' value={props.parrentName} />
                            </div>
                            <div>
                                <label>twój adres e-mail:</label>
                                <input type="email" name="user_email" value={props.parrentEmail} />
                            </div>
                            <div className={styles.fileDropDiv}>
                                <FileUploader
                                    multiple={true}
                                    handleChange={handleChange}
                                    name="file"
                                    types={fileTypes}
                                    label={file ? `${file[0].name}` : "Przeciągnij lub załącz plik"}
                                    children={<div className={styles.customFileUpload}><p>{file ? <u>{file[0].name}</u> : "Przeciągnij lub załącz plik"}</p></div>}
                                />
                                

                            </div>
                            <div>
                            {
                            file
                            ? <input className={styles.buttonActive} type="button"  value="WYŚLIJ" />
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