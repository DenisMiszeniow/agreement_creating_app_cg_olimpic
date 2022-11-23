import { connect } from "react-redux"
import { compose } from "redux"
import { withLocales } from "../../HOC/withLocales"
import Instruction from './instruction'
import { initialInsructionLocalesThunk } from "../../BLL/locales_reducer"


const MapStateToProps = state => ({instructionText: state.localesReducer.instructionTexts, section: state.localesReducer.section.instruction})

export const InstructionContainer = compose(connect (MapStateToProps, {initialInsructionLocalesThunk}), withLocales)(Instruction)