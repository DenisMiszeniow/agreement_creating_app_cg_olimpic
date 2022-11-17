import { connect } from "react-redux"
import Instruction from './instruction'


const MapStateToProps = (state) => {
    return (
        {
            instructionText: state.localizeReducer.texts.instructionText
        }
    )
}

export const InstructionContainer = connect (MapStateToProps)(Instruction)