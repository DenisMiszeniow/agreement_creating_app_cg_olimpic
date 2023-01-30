import { connect } from "react-redux"
import { compose } from "redux"
import { withLocales } from "../../HOC/withLocales"
import Instruction from './instruction'
import { setLocalesThunk} from "../../BLL/locales_reducer.ts"
import { getInstructionTexts, getSectionInstruction } from "../../BLL/Selectors/locales_selectors.ts"


const MapStateToProps = state => ({instructionText: getInstructionTexts(state), section: getSectionInstruction(state)})

export const InstructionContainer = compose(connect (MapStateToProps, {setLocalesThunk}), withLocales)(Instruction)