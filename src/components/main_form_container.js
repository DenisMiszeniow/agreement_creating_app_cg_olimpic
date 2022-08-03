import { connect } from "react-redux";
import { onChosenSite, onChosenPackage } from "../BLL/main_state_data_reducer";
import MainForm from "./main_form";
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
            owner: state.mainData.ownerName

        }
    )
}

export const mapDispatchToProps = (dispatch) => {
    return (
        {
            onChosenSite: (valueSite) => {dispatch(onChosenSite(valueSite))},
            onChosenPackage: (valuePackage) => {dispatch(onChosenPackage(valuePackage))}
        }
    )
}

export const MainFormContainer = connect(mapStateToProps, mapDispatchToProps)(MainForm)