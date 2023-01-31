import { AppStateType } from './../../BLL/store';
import { connect } from "react-redux"
import { compose } from "redux"
//@ts-ignore
import { getStep1Text, getStep2Text, getStep3Text, getStep4Text, getStepSection } from "../../BLL/Selectors/locales_selectors.ts"
//@ts-ignore
import Step1 from "./step_1_div.tsx"
//@ts-ignore
import Step2 from "./step_2_div.tsx"
//@ts-ignore
import Step3 from "./step_3_div.tsx"
//@ts-ignore
import Step4 from "./step_4_div.tsx"
import { withLocales } from "../../HOC/withLocales"
//@ts-ignore
import { setLocalesThunk } from "../../BLL/locales_reducer.ts"
import { Step1TextsType, Step2TextsType, Step3TextsType, Step4TextsType } from '../../types/types.js';

type MapStateToPropsType = {
    step1Texts: Step1TextsType
    step2Texts: Step2TextsType
    step3Texts: Step3TextsType
    step4Texts: Step4TextsType
    section: string
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return (
        {
            step1Texts: getStep1Text(state),
            step2Texts: getStep2Text(state),
            step3Texts: getStep3Text(state),
            step4Texts: getStep4Text(state),
            section: getStepSection(state)
        }
    )
}

export const Step1Container = compose(withLocales, connect(mapStateToProps, { setLocalesThunk }))(Step1)
export const Step2Container = compose(withLocales, connect(mapStateToProps, { setLocalesThunk }))(Step2)
export const Step3Container = compose(withLocales, connect(mapStateToProps, { setLocalesThunk }))(Step3)
export const Step4Container = compose(withLocales, connect(mapStateToProps, { setLocalesThunk }))(Step4)
