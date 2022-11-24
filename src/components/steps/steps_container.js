import { connect } from "react-redux"
import Step1 from "./step_1_div"
import Step2 from "./step_2_div"
import Step3 from "./step_3_div"
import Step4 from "./step_4_div"


const mapStateToProps = (state) => {
    return (
        {
            step1Texts: state.localesReducer.stepTexts.step1Texts,
            step2Texts: state.localesReducer.stepTexts.step2Texts,
            step3Texts: state.localesReducer.stepTexts.step3Texts,
            step4Texts: state.localesReducer.stepTexts.step4Texts
        }
    )
}

export const Step1Container = connect(mapStateToProps)(Step1)
export const Step2Container = connect(mapStateToProps)(Step2)
export const Step3Container = connect(mapStateToProps)(Step3)
export const Step4Container = connect(mapStateToProps)(Step4)

