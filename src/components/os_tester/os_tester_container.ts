import { connect } from "react-redux"
import { compose } from "redux"

//@ts-ignore
import { AppStateType } from './../../BLL/store.ts';
import { withLocales } from "../../HOC/withLocales"
//@ts-ignore
import {setLocalesThunk} from '../../BLL/locales_reducer.ts'
//@ts-ignore
import OsTester from "./os_tester.tsx"
import { OsTestTextType } from "../../types/types"

type MapStateToPropsType = {
    localesTexts: OsTestTextType
    section: string
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({localesTexts: state.localesReducer.osTestTexts, section: state.localesReducer.section.osTest})
//@ts-ignore
export const OsTesterContainer = compose(connect(MapStateToProps, {setLocalesThunk}), withLocales)(OsTester)