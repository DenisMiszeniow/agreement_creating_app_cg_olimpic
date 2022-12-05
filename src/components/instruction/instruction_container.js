import { connect } from "react-redux"
import { compose } from "redux"
import { withLocales } from "../../HOC/withLocales"
import Instruction from './instruction'
import { setLocalesThunk} from "../../BLL/locales_reducer"
import { getInstructionTexts, getSectionInstruction } from "../../BLL/Selectors/locales_selectors"


const MapStateToProps = state => ({instructionText: getInstructionTexts(state), section: getSectionInstruction(state)})

export const InstructionContainer = compose(connect (MapStateToProps, {setLocalesThunk}), withLocales)(Instruction)