import { connect } from "react-redux"
import Locales from "./locales"
import { localesSwitchThunk, initialLocalesThunk } from "../../BLL/locales_reducer"


const mapStateToProps = (state) => {
    return (
        {
            localize: state.localesReducer.localize,
            initialized: state.localesReducer.initialized,
            language: state.localesReducer.language,
            buttonDisable: state.localesReducer.buttonDisable
        }
    ) 
}

export const LocalesContainer = connect(mapStateToProps, {localesSwitchThunk})(Locales)