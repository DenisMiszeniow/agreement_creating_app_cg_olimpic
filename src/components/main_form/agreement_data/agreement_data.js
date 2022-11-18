import { useEffect } from "react"
import styles from "../main_form.module.scss"

const AgreementData = (props) => {
    debugger
    useEffect(()=> props.getSites(), [props.onceEffect])

    //-------------select site-----------------
    const localonChangeSite = ({ target: { value } }) => {
        props.onChosenSite({value})
    }

    //-------------select packege--------------
    const localonChangePackage = ({ target: { value } }) => {
        props.onChosenPackage(value)
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
            <h3>Wybór placówki</h3>
            <div className={styles.sectionForm__Form__Alone}>
                <label>Wybierz placówkę:</label>
                <select className={styles.selectSite} onChange={localonChangeSite} value={props.chosenSite}>
                    <option value="" disabled hidden>Nie wybrano</option>
                    {props.sites.map((site, id) => {
                        return (
                            <option value={id} key={id}>{site.site}</option>
                        )
                    })}

                </select>
            </div>
            <div className={`${styles.sectionForm__Form__Triple} ${styles.sectionForm__Form__Alone}`}>
                <div>
                    <label>Wybierz grupę:</label>
                    {
                        !props.package
                            ? <select onChange={localonChangePackage} value={props.chosenPackage}>
                                <option value="" disabled hidden>najpierw placówkę :)</option>
                            </select>
                            : <select onChange={localonChangePackage} value={props.chosenPackage}>
                                <option value="" selected disabled hidden>wybierz grupę</option>
                                {props.package.map(packageName => {
                                    return (
                                        <option value={packageName} key={packageName}>{packageName}</option>
                                    )
                                })}
                            </select>
                    }
                </div>
                <div>
                    <label>Częstotliwość:</label>
                    {
                        !props.frequency
                            ? <select onChange={localonChangeFrequency} value={props.chosenFrequency}>
                                <option value="" disabled hidden>najpierw grupę :)</option>
                            </select>
                            : <select onChange={localonChangeFrequency} value={props.chosenFrequency}>
                                <option value="" disabled hidden>wybierz</option>
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