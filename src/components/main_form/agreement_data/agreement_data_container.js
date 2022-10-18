import { connect } from "react-redux";
import { onChosenSite, onChosenPackage, onChosenFrequency, onChosenSchoolYear } from "../../../BLL/main_state_data_reducer";
import AgreementData from "./agreement_data";

export const mapStateToProps = (state) => {
    return (
        {
            sites: state.mainData.institution.map(site => {
                return {
                    siteName: site.site, 
                    key: site.id
                }
            }),
            chosenSite: state.mainData.chosenSite,
            package: state.mainData.package,
            chosenPackage: state.mainData.chosenPackage,
            frequency: state.mainData.frequency,
            chosenFrequency: state.mainData.chosenFrequency,
            schoolYear: state.mainData.schoolYear,
            chosenSchoolYear: state.mainData.chosenSchoolYear, 
        }
    )
}

export const AgreementDataContainer = connect(mapStateToProps, {onChosenSite, onChosenPackage, onChosenFrequency, onChosenSchoolYear})(AgreementData)