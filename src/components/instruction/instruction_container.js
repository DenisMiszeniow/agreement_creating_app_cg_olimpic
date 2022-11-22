import { connect } from "react-redux"
import { compose } from "redux"
import { withLocales } from "../../HOC/withLocales"
import Instruction from './instruction'


const MapStateToProps = state => ({instructionText: state.localizeReducer.texts.instructionText})

export const InstructionContainer = compose(connect (MapStateToProps), withLocales)(Instruction)