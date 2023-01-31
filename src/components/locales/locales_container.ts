//@ts-ignore
import { AppStateType } from './../../BLL/store.ts';
import { connect } from "react-redux"
//@ts-ignore
import Locales from "./locales.tsx"
//@ts-ignore
import { localesSwitch} from "../../BLL/locales_reducer.ts"

type MapStateToPropsType = {
    localize: boolean
    buttonDisable: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({localize: state.localesReducer.localize, buttonDisable: state.localesReducer.buttonDisable})

export const LocalesContainer = connect(mapStateToProps, {localesSwitch})(Locales)