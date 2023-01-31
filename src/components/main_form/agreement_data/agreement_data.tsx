import { FC, useEffect } from "react"
//@ts-ignore
import Preloader from "../../preloader/preloader.tsx"
import styles from "../main_form.module.scss"
import { ChoseSiteTextType, FrequenciesType, PackageOptionsType } from "../../../types/types.js"

type PropsType = {
    sites: Array<string>
    chosenSite: string
    package: Array<string> | null
    packageOptions: PackageOptionsType,
    frequencyOptions: FrequenciesType,
    chosenPackage: string
    frequency: Array<string> | null
    chosenFrequency: string
    schoolYear: Array<number>,
    chosenSchoolYear: string
    siteOwner: string
    onceRequest: boolean
    localesTexts: ChoseSiteTextType

    getSites: ()=> void
    onChosenSite: (value: string) => void
    getCompanyData: (value: string, siteOwner: string) => void
    onChosenSchoolYear: (SchoolYear: string) => void
    onChosenFrequency: (frequency: string) => void
}

const AgreementData: FC<PropsType> = (props) => {
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {props.getSites()}, [props.onceRequest])
    
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
    return !props.localesTexts
    ? <Preloader/>
    :    <>
            <h3>{props.localesTexts.h3Text}</h3>
            {!props.schoolYear.length || !props.sites.length 
            || (Object.keys(props.packageOptions).length === 0) 
            || (Object.keys(props.frequencyOptions).length === 0)
            ? <Preloader/>
            : <><div className={styles.sectionForm__Form__Alone}>
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
                    <label>{props.localesTexts.schoolYear}</label>
                    <select onChange={localonChangeSchoolYear} value={props.chosenSchoolYear}>
                        {
                            props.schoolYear.map(year => <option value={year} key={year}>{year}</option>)
                        }
                    </select>
                </div>
            </div></>}
        </>
}

export default AgreementData