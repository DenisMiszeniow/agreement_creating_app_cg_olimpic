
import { useRef, useState } from "react";
import { FileUploader } from 'react-drag-drop-files';
import { sendEmailJs } from '../../API/api';
import { EndPageContainer } from '../end_page/end_page_container';
import Step4 from "../steps/step_4_div";
import styles from './sending.module.scss';

const Sending = (props) => {

    const [file, setFile] = useState(null);
    const handleChange = (file) => { setFile(file) };
    const fileTypes = ["PDF"]
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault()
        sendEmailJs(form).then(() => {
                        props.onSendingMainClear()
                        props.onSendingParrentDataClear()
                        props.onSendingChildDataClear()
                        setFile(null)
                    }, (error) => {props.onErrorSending(error.status)}
                    )
    }

    return (
        <>
        <div className={props.lastPage ? `${styles.visibleDiv}` : ''}>
            <Step4 />
            <form ref={form} onSubmit={sendEmail}>
                <div className={styles.sectionForm}>
                    <div className={styles.sectionForm__Form}>
                        <div className={styles.sectionForm__Form__DoubleSame}>
                            <div className={styles.visibility}><input name="mother_tel" value={props.motherPhoneNumber} readOnly/></div>
                            <div className={styles.visibility}><input name="father_tel" value={props.fatherPhoneNumber} readOnly/></div>
                            <div className={styles.visibility}><input name="child_name" value={props.childName} readOnly/></div>
                            <div className={styles.visibility}><input name="child_birthday" value={props.childDayOfBirth} readOnly/></div>
                            <div className={styles.visibility}><input name="child_checkbox" value={props.childCheckbox ? 'TAK' : 'NIE'} readOnly/></div>
                            <div className={styles.visibility}><input name="user_site" value={props.chosenSite} readOnly/></div>
                            <div className={styles.visibility}><input name="user_package" value={props.chosenPackage} readOnly/></div>
                            <div className={styles.visibility}><input name="user_frequency" value={props.chosenFrequency} readOnly/></div>
                            <div className={styles.visibility}><input name="user_price" value={props.calculatePrice} readOnly/></div>
                            <div className={styles.visibility}><input name="owner_name" value={props.ownerName} readOnly/></div>
                            <div className={styles.visibility}><input name="owner_account" value={props.bankAccount} readOnly/></div>
                            <div className={styles.visibility}><input name="user_cjk" value={props.priceCjk} readOnly/></div>
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
                                    onSelect={handleChange}
                                    name="my_file"
                                    types={fileTypes}
                                    label={file ? `${file[0].name}` : ""}
                                    hoverTitle = ''
                                    children={<div className={styles.customFileUpload}><p>{file ? <u>{file[0].name}</u> : "Kliknij aby załączyć umowę (Nie może przekraczać 2Mb)"}</p></div>}
                                />
                            </div>
                            
                            <div>
                            {
                            file && props.parrentEmail !== ''
                            ? <input className={!props.loader ? `${styles.buttonActive}` : `${styles.buttonSending}`} onClick={props.onLoader} type="submit" value={props.sendingText} />
                            : <span className={styles.linkActive}>{props.sendingText}</span>
                            }
                            </div>

                        </div>
                    </div>
                    <span className={styles.errorText}>{props.errorText}</span>
                </div>
            </form>
        </div>
        <EndPageContainer/>
        </>
    )
}

export default Sending