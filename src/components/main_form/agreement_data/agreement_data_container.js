import { connect } from "react-redux";
import {onChosenSite, onChosenFrequency, onChosenSchoolYear, getSites, getCompanyData } from "../../../BLL/main_state_data_reducer";
import AgreementData from "./agreement_data";

export const mapStateToProps = (state) => {
    return (
        {
            sites: state.mainData.institution,
            chosenSite: state.mainData.chosenSite,
            package: state.mainData.package,
            chosenPackage: state.mainData.chosenPackage,
            frequency: state.mainData.frequency,
            chosenFrequency: state.mainData.chosenFrequency,
            schoolYear: state.mainData.schoolYear,
            chosenSchoolYear: state.mainData.chosenSchoolYear, 
            siteOwner: state.mainData.chosenSiteFullData.owner,
            onceRequest: state.mainData.onceRequest,
            localesTexts: state.localesReducer.mainFormTexts.choseSiteText
        }
    )
}

export const AgreementDataContainer = connect(mapStateToProps, { onChosenFrequency, onChosenSchoolYear, onChosenSite, getSites, getCompanyData })(AgreementData)