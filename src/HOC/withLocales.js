import { connect } from "react-redux"

const MapStateToProps = state => ({language: state.localizeReducer.language})

export const withLocales = Component => connect(MapStateToProps)(props => <Component {...props}/>)