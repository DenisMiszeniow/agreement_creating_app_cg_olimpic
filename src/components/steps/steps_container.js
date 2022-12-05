import { connect } from "react-redux"
import { compose } from "redux"
import { getStep1Text, getStep2Text, getStep3Text, getStep4Text } from "../../BLL/Selectors/locales_selectors"
import Step1 from "./step_1_div"
import Step2 from "./step_2_div"
import Step3 from "./step_3_div"
import Step4 from "./step_4_div"
import { withLocales } from "../../HOC/withLocales"
import { setStepsLocalesThunk } from "../../BLL/locales_reducer"


const mapStateToProps = (state) => {
    return (
        {
            step1Texts: getStep1Text(state),
            step2Texts: getStep2Text(state),
            step3Texts: getStep3Text(state),
            step4Texts: getStep4Text(state)
        }
    )
}

export const Step1Container = compose(withLocales, connect(mapStateToProps, {setStepsLocalesThunk}))(Step1)
export const Step2Container = compose(withLocales, connect(mapStateToProps, {setStepsLocalesThunk}))(Step2)
export const Step3Container = compose(withLocales, connect(mapStateToProps, {setStepsLocalesThunk}))(Step3)
export const Step4Container = compose(withLocales, connect(mapStateToProps, {setStepsLocalesThunk}))(Step4)
