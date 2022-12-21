import { connect } from "react-redux";
import {onChosenSite, onChosenFrequency, onChosenSchoolYear, getSites, getCompanyData } from "../../../BLL/main_state_data_reducer.ts";
import AgreementData from "./agreement_data";
import { getChosenFrequencySelector, getChosenPackageSelector, getChosenSchoolYearSelector, getChosenSiteSelector, getFrequency, getFrequencySelector, getOnceRequestSelector, getPackages, getPackageSelector, getSchoolYearSelector, getSiteOwnerSelector, getSitesSelector } from "../../../BLL/Selectors/main_state_selectors";
import { getChosenSiteTextSelector } from "../../../BLL/Selectors/locales_selectors";

export const mapStateToProps = (state) => {
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

export const AgreementDataContainer = connect(mapStateToProps, { onChosenFrequency, onChosenSchoolYear, onChosenSite, getSites, getCompanyData })(AgreementData)