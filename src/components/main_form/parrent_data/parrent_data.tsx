//@ts-ignore
import { FC } from "react"
import { ParrentDataTextType } from "../../../types/types.js"
//@ts-ignore
import Preloader from "../../preloader/preloader.tsx"
import styles from "../main_form.module.scss"

type PropsType = {
    parrentName: string
    parrentIdCard: string
    parrentCity: string
    parrentZipCode: string
    parrentAddress: string
    localesTexts: ParrentDataTextType

    onParrentName: (value: string) => void
    onParrentIdCard: (value: string) => void
    onParrentCity: (value: string) => void
    onParrentZipCode: (value: string) => void
    onParrentAddress: (value: string) => void
}

const ParrentData: FC<PropsType> = (props) => {

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

    return !props.localesTexts
        ? <Preloader />
        : <>
            <h3>{props.localesTexts.h3Text}</h3>
            <div className={`${styles.sectionForm__Form__Alone} ${styles.sectionForm__Form__Double}`}>
                <div>
                    <label>{props.localesTexts.nameText}</label>
                    <input name='user_name' type="text" onChange={localOnParrentName} value={props.parrentName} placeholder="np.: Joanna Kowalska" required />
                </div>
                <div>
                    <label>{props.localesTexts.idText}</label>
                    <input name='user_id_card' type="text" onChange={localOnParrentIdCard} value={props.parrentIdCard} placeholder="np.: FGH 987654" required />
                </div>
            </div>
            <div className={`${styles.sectionForm__Form__Alone} ${styles.sectionForm__Form__Double}`}>
                <div>
                    <label>{props.localesTexts.cityText}</label>
                    <input type="text" name='user_city' onChange={localOnParrentCity} value={props.parrentCity} placeholder="np.: Kobierzyce" required />
                </div>
                <div>
                    <label>{props.localesTexts.zipText}</label>
                    <input name='user_zip_code' onChange={localOnParrentZipCode} value={props.parrentZipCode} type="text" placeholder="np.: 50-555" required />
                </div>
            </div>
            <div className={styles.sectionForm__Form__Alone}>
                <label>{props.localesTexts.addressText}</label>
                <input type="text" name='user_address' onChange={localOnParrentAddress} value={props.parrentAddress} placeholder="np.: ul. Kwiatowa 25/56" required />
            </div>
        </>

}
export default ParrentData