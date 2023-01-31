import React from 'react';
import { connect } from "react-redux"

const MapStateToProps = state => ({language: state.localesReducer.language, initialized: state.localesReducer.initialized})

export const withLocales = Component => connect(MapStateToProps)(props => <Component {...props}/>)