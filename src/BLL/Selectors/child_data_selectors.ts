import { AppStateType } from './../store';
export const getChildNameSelector = (state: AppStateType) => state.childData.childName
export const getChildDayOfBirthSelector = (state: AppStateType) => state.childData.childDayOfBirth
export const getChildCheckboxSelector = (state: AppStateType) => state.childData.childCheckbox
export const getChildDayOfBirthParamSelector = (state: AppStateType) => state.childData.childDayOfBirthParam