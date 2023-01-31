import { AppStateType } from './../../../BLL/store';
import { connect } from "react-redux";
//@ts-ignore
import { onChildCheckbox, onChildDayOfBirth, onChildName } from "../../../BLL/child_data_reducer.ts";
//@ts-ignore
import ChildData from "./child_data.tsx";
//@ts-ignore
import { getChildText } from '../../../BLL/Selectors/locales_selectors.ts'
import {
    getChildNameSelector, getChildDayOfBirthSelector, getChildCheckboxSelector,
    //@ts-ignore
    getChildDayOfBirthParamSelector
    //@ts-ignore
} from '../../../BLL/Selectors/child_data_selectors.ts'
import { ChildDataTextType } from "../../../types/types.js";

type MapStateToPropsType = {
    childName: string
    childDayOfBirth: string
    childCheckbox: boolean
    childDayOfBirthParam: string
    localesTexts: ChildDataTextType
}

export const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
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

export const ChildDataContainer = connect(mapStateToProps, { onChildName, onChildDayOfBirth, onChildCheckbox })(ChildData)