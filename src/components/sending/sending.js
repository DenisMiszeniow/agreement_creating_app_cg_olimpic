
import { useEffect, useRef, useState } from "react";
import { FileUploader } from 'react-drag-drop-files';
import { sendEmailJs } from '../../API/api.ts';
import EndPage from "../end_page/end_page";
import Preloader from "../preloader/preloader";
import { Step4Container } from "../steps/steps_container";
import styles from './sending.module.scss';

const Sending = (props) => {
    useEffect(() => {props.setLocalesThunk(props.language, props.section)}, [props.language])
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        file.length ? setFile(file) : setFile(null)
        
    };
    const fileTypes = ["PDF"]
    const form = useRef();
    const handleSending = () => {
        props.onLoader()
        props.sendingText()
    }
    
    const sendEmail = (e) => {
        e.preventDefault()
        sendEmailJs(form).then(() => {
                        props.onSendingMainClear()
                        props.onSendingParrentDataClear()
                        props.onSendingChildDataClear()
                        setFile(null)
                    }, (error) => {
                        props.onErrorSending()
                        props.ErrorSendingText(error.status)
                    }
                    )
    }
    return !props.localesTexts
    ? <Preloader/>
    :    <>
        <div className={props.lastPage ? `${styles.visibleDiv}` : ''}>
            <Step4Container/>
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
                                <label>{props.localesTexts.yourNameText}</label>
                                <input name="user_name" readOnly type='text' value={props.parrentName} />
                            </div>
                            <div>
                                <label>{props.localesTexts.yourEmailText}</label>
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
                                    children={<div className={styles.customFileUpload}><p>{file ? <u>{file[0].name}</u> : props.localesTexts.fileText}</p></div>}
                                />
                            </div>
                            
                            <div>
                            {
                            file && props.parrentEmail !== ''
                            ? <input className={!props.loader ? `${styles.buttonActive}` : `${styles.buttonSending}`} onClick={handleSending} type="submit" value={props.localesTexts.buttonText} />
                            : <span className={styles.linkActive}>{props.localesTexts.buttonText}</span>
                            }
                            </div>

                        </div>
                    </div>
                    <span className={styles.errorText}>{props.errorText}</span>
                </div>
            </form>
        </div>
        <EndPage texts={props.localesTexts} lastPage={props.lastPage}/>
        </>
    
}

export default Sending