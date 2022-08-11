import { connect } from "react-redux";
import { onChildCheckbox, onChildDayOfBirth, onChildName } from "../../BLL/child_data_reducer";
import ChildData from "./child_data";

export const mapStateToProps = (state) => {
    return (
        {
            childName: state.childData.childName,
            childDayOfBirth: state.childData.childDayOfBirth,
            childCheckbox: state.childData.childCheckbox,
        }
    )
}

export const mapDispatchToProps = (dispatch) => {
    return (
        {
            onChildName: (valueChildName) => {dispatch(onChildName(valueChildName))},
            onChildDayOfBirth: (valueDayOfBirth) => {dispatch(onChildDayOfBirth(valueDayOfBirth))},
            onChildCheckbox: () => {dispatch(onChildCheckbox())}
        }
    )
}

export const ChildDataContainer = connect(mapStateToProps, mapDispatchToProps)(ChildData)