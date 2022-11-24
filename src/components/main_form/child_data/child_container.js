import { connect } from "react-redux";
import { onChildCheckbox, onChildDayOfBirth, onChildName } from "../../../BLL/child_data_reducer";
import ChildData from "./child_data";

export const mapStateToProps = (state) => {
    return (
        {
            childName: state.childData.childName,
            childDayOfBirth: state.childData.childDayOfBirth,
            childCheckbox: state.childData.childCheckbox,
            childDayOfBirthParam: state.childData.childDayOfBirthParam,
            localesTexts: state.localesReducer.mainFormTexts.childDataText
        }
    )
}

export const ChildDataContainer = connect(mapStateToProps, {onChildName, onChildDayOfBirth, onChildCheckbox})(ChildData)