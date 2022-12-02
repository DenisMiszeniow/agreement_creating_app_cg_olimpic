import { connect } from "react-redux";
import { onChildCheckbox, onChildDayOfBirth, onChildName } from "../../../BLL/child_data_reducer";
import ChildData from "./child_data";
import { getChildText } from '../../../BLL/Selectors/locales_selectors'
import { getChildNameSelector, getChildDayOfBirthSelector, getChildCheckboxSelector, getChildDayOfBirthParamSelector} from '../../../BLL/Selectors/child_data_selectors'

export const mapStateToProps = (state) => {
    return (
        {
            childName: getChildNameSelector(state),
            childDayOfBirth: getChildDayOfBirthSelector(state),
            childCheckbox: getChildCheckboxSelector(state),
            childDayOfBirthParam: getChildDayOfBirthParamSelector(state),
            localesTexts: getChildText(state)
        }
    )
}

export const ChildDataContainer = connect(mapStateToProps, {onChildName, onChildDayOfBirth, onChildCheckbox})(ChildData)