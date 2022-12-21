import { connect } from "react-redux"
import Locales from "./locales"
import { localesSwitch} from "../../BLL/locales_reducer.ts"


const mapStateToProps = (state) => ({localize: state.localesReducer.localize, buttonDisable: state.localesReducer.buttonDisable})

export const LocalesContainer = connect(mapStateToProps, {localesSwitch})(Locales)