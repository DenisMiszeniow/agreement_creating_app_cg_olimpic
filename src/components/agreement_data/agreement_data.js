import styles from "../main_form/main_form.module.css"

const AgreementData = (props) => {
    //-------------select site-----------------
    const localonChangeSite = ({ target: { value } }) => {
        props.onChosenSite(value)
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
            <h3>Placówka i pakiet</h3>
            <div className={styles.sectionForm__Form__Alone}>
                <label>Wybierz placówkę:</label>
                <select className={styles.selectSite} onChange={localonChangeSite} value={props.chosenSite} key={props.chosenSiteId}>
                    <option value="" selected disabled hidden>Nie wybrano</option>
                    {props.sites.map(site => {
                        return (
                            <option value={site.siteName} key={site.key}>{site.siteName}</option>
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
                                <option value="" selected disabled hidden>najpierw placówkę :)</option>
                            </select>
                            : <select onChange={localonChangePackage} value={props.chosenPackage}>
                                <option value="" selected disabled hidden>wybierz grupę</option>
                                {props.package.map(packageName => {
                                    return (
                                        <option value={packageName}>{packageName}</option>
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
                                <option value="" selected disabled hidden>najpierw grupę :)</option>
                            </select>
                            : <select onChange={localonChangeFrequency} value={props.chosenFrequency}>
                                <option value="" selected disabled hidden>wybierz</option>
                                {props.frequency.map(frequencyItem => {
                                    return (
                                        <option value={frequencyItem}>{frequencyItem}</option>
                                    )
                                })}
                            </select>
                    }
                </div>
                <div>
                    <label>Rok szkolny:</label>
                    <select onChange={localonChangeSchoolYear} value={props.chosenSchoolYear}>
                        {
                            props.schoolYear.map(year => <option value={year}>{year}</option>)
                        }
                    </select>
                </div>
            </div>
        </>
    )
}
export default AgreementData