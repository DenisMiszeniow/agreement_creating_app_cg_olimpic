import { AppStateType } from './../../../BLL/store';
import { connect } from "react-redux";
//@ts-ignore
import { onChosenSite, onChosenFrequency, onChosenSchoolYear, getSites, getCompanyData } from "../../../BLL/main_state_data_reducer.ts";
//@ts-ignore
import AgreementData from "./agreement_data.tsx";
import {
    getChosenFrequencySelector, getChosenPackageSelector, getChosenSchoolYearSelector, getChosenSiteSelector,
    getFrequency, getFrequencySelector, getOnceRequestSelector, getPackages, getPackageSelector, getSchoolYearSelector,
    //@ts-ignore
    getSiteOwnerSelector, getSitesSelector
    //@ts-ignore
} from "../../../BLL/Selectors/main_state_selectors.ts";
//@ts-ignore
import { getChosenSiteTextSelector } from "../../../BLL/Selectors/locales_selectors.ts";
import { ChoseSiteTextType, FrequenciesType, PackageOptionsType } from "../../../types/types.js";

type MapStateToPropsType = {
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
}

export const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return (
        {
            sites: getSitesSelector(state),
            chosenSite: getChosenSiteSelector(state),
            package: getPackageSelector(state),
            packageOptions: getPackages(state),
            frequencyOptions: getFrequency(state),
            chosenPackage: getChosenPackageSelector(state),
            frequency: getFrequencySelector(state),
            chosenFrequency: getChosenFrequencySelector(state),
            schoolYear: getSchoolYearSelector(state),
            chosenSchoolYear: getChosenSchoolYearSelector(state),
            siteOwner: getSiteOwnerSelector(state),
            onceRequest: getOnceRequestSelector(state),
            localesTexts: getChosenSiteTextSelector(state)
        }
    )
}

export const AgreementDataContainer = connect(mapStateToProps,
    { onChosenFrequency, onChosenSchoolYear, onChosenSite, getSites, getCompanyData })(AgreementData)