import { connect } from "react-redux"
import { initialLocalesThunk } from "../BLL/locales_reducer"

const MapStateToProps = state => ({language: state.localesReducer.language, initialized: state.localesReducer.initialized})

export const withLocales = Component => connect(MapStateToProps)(props => <Component {...props}/>)