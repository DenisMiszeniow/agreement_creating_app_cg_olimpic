//@ts-ignore
import { AppStateType } from './../../BLL/store.ts';
import { connect } from "react-redux"
import { compose } from "redux"
import { withLocales } from "../../HOC/withLocales"
//@ts-ignore
import Instruction from './instruction.tsx'
//@ts-ignore
import { setLocalesThunk} from "../../BLL/locales_reducer.ts"
//@ts-ignore
import { getInstructionTexts, getSectionInstruction } from "../../BLL/Selectors/locales_selectors.ts"
import { InstructionTextsType } from '../../types/types';

type MapStateToPropsType = {
    instructionText: InstructionTextsType
    section: string
}

const MapStateToProps = (state:AppStateType): MapStateToPropsType => ({instructionText: getInstructionTexts(state), section: getSectionInstruction(state)})

//@ts-ignore
export const InstructionContainer = compose(connect (MapStateToProps, {setLocalesThunk}), withLocales)(Instruction)