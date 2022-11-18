import { connect } from "react-redux";
import { onChosenSite, onChosenPackage, onChosenFrequency, onChosenSchoolYear, getSites } from "../../../BLL/main_state_data_reducer";
import AgreementData from "./agreement_data";

export const mapStateToProps = (state) => {
    return (
        {
            sites: state.mainData.sites,
            chosenSite: state.mainData.chosenSiteObject.site,
            package: state.mainData.package,
            chosenPackage: state.mainData.chosenPackage,
            frequency: state.mainData.frequency,
            chosenFrequency: state.mainData.chosenFrequency,
            schoolYear: state.mainData.schoolYear,
            chosenSchoolYear: state.mainData.chosenSchoolYear,
            onceEffect: state.mainData.onceEffect
        }
    )
}

export const AgreementDataContainer = connect(mapStateToProps, {onChosenSite, onChosenPackage, onChosenFrequency, onChosenSchoolYear, getSites})(AgreementData)