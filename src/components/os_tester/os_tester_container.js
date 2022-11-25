import { connect } from "react-redux"
import { compose } from "redux"
import { withLocales } from "../../HOC/withLocales"
import {osTestLocalesThunk} from '../../BLL/locales_reducer'
import OsTester from "./os_tester"


const MapStateToProps = state => ({localesTexts: state.localesReducer.osTestTexts, section: state.localesReducer.section.osTest})

export const OsTesterContainer = compose(connect(MapStateToProps, {osTestLocalesThunk}), withLocales)(OsTester)