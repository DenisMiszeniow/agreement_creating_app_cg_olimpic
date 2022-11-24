import { useEffect } from "react"
import styles from "../main_form.module.scss"

const AgreementData = (props) => {
    

    useEffect(()=> props.getSites(), [props.onceRequest])
    
    //-------------select site-----------------
    const localonChangeSite = ({ target: { value } }) => {
        
        props.onChosenSite(value)
    }

    //-------------select packege and set site owner--------------
    const localonChangePackage = ({ target: { value } }) => {
        props.getCompanyData(value, props.siteOwner)
    }

    //------------select frequency------------
    const localonChangeFrequency = ({ target: { value } }) => {
        props.onChosenFrequency(value)
    }

    //------------select school year------------
    const localonChangeSchoolYear = ({ target: { value } }) => {
        props.onChosenSchoolYear(value)
    }
    return (
        <>
            <h3>{props.localesTexts.h3Text}</h3>
            <div className={styles.sectionForm__Form__Alone}>
                <label>{props.localesTexts.site}</label>
                <select className={styles.selectSite} onChange={localonChangeSite} value={props.chosenSite} key={props.chosenSite}>
                    <option value="" disabled hidden>{props.localesTexts.siteChosenText}</option>
                    {props.sites.map((site, id) => {
                        return (
                            <option value={site} key={id}>{site}</option>
                        )
                    })}

                </select>
            </div>
            <div className={`${styles.sectionForm__Form__Triple} ${styles.sectionForm__Form__Alone}`}>
                <div>
                    <label>{props.localesTexts.chosePackage}</label>
                    {
                        !props.package
                            ? <select onChange={localonChangePackage} value={props.chosenPackage}>
                                <option value="" disabled hidden>{props.localesTexts.siteFirst}</option>
                            </select>
                            : <select onChange={localonChangePackage} value={props.chosenPackage}>
                                <option value="" selected disabled hidden>{props.localesTexts.package}</option>
                                {props.package.map(packageName => {
                                    return (
                                        <option value={packageName} key={packageName}>{packageName}</option>
                                    )
                                })}
                            </select>
                    }
                </div>
                <div>
                    <label>{props.localesTexts.frequency}</label>
                    {
                        !props.frequency
                            ? <select onChange={localonChangeFrequency} value={props.chosenFrequency}>
                                <option value="" disabled hidden>{props.localesTexts.packageFirst}</option>
                            </select>
                            : <select onChange={localonChangeFrequency} value={props.chosenFrequency}>
                                <option value="" disabled hidden>{props.localesTexts.choseFrequency}</option>
                                {props.frequency.map(frequencyItem => {
                                    return (
                                        <option value={frequencyItem} key={frequencyItem}>{frequencyItem}</option>
                                    )
                                })}
                            </select>
                    }
                </div>
                <div>
                    <label>Rok szkolny:</label>
                    <select onChange={localonChangeSchoolYear} value={props.chosenSchoolYear}>
                        {
                            props.schoolYear.map(year => <option value={year} key={year}>{year}</option>)
                        }
                    </select>
                </div>
            </div>
        </>
    )
}
export default AgreementData