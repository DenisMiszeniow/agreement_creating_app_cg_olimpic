import { connect } from "react-redux"
import Localize from "./localize"
import { localesSwitchThunk, initialLocalesThunk } from "../../BLL/localize_reducer"


const mapStateToProps = (state) => {
    return (
        {
            localize: state.localizeReducer.localize,
            initialized: state.localizeReducer.initialized,
            language: state.localizeReducer.language,
            buttonDisable: state.localizeReducer.buttonDisable
        }
    ) 
}

export const LocalizeContainer = connect(mapStateToProps, {localesSwitchThunk, initialLocalesThunk})(Localize)