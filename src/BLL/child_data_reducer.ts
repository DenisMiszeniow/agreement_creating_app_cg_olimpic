import moment from "moment"

const CHILD_NAME: string = 'child_data_reducer/CHILD_NAME'
const CHILD_DAY_OF_BIRTH_PARAM: string = 'child_data_reducer/CHILD_DAY_OF_BIRTH_PARAM'
const CHILD_DATA_CLEAR: string = 'child_data_reducer/CHILD_DATA_CLEAR'
const CHILD_CHECKBOX: string = 'child_data_reducer/CHILD_CHECKBOX'
//---TEST CHILD--------------
const TEST_CHILD: string = 'TEST_CHILD'

type InitialStateType = {
    childName: string,
    childDayOfBirth: string,
    childDayOfBirthParam: any | null,
    childCheckbox: boolean
}

const initialState: InitialStateType = {
    childName: '',
    childDayOfBirth: '',
    childDayOfBirthParam: null,
    childCheckbox: true

}

export const childDataReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case CHILD_NAME: return ({ ...state, childName: action.valueChildName })
        case CHILD_DAY_OF_BIRTH_PARAM:
            const newStateBirthday = { ...state }
            newStateBirthday.childDayOfBirthParam = action.valueDayOfBirth
            !newStateBirthday.childDayOfBirthParam
                ? newStateBirthday.childDayOfBirthParam = ''
                : newStateBirthday.childDayOfBirth = moment(newStateBirthday.childDayOfBirthParam.$d).format('YYYY-MM-DD')
            return newStateBirthday
        case CHILD_DATA_CLEAR: return { ...state, childName: '', childDayOfBirth: '', childDayOfBirthParam: '', childCheckbox: true }
        case CHILD_CHECKBOX: return { ...state, childCheckbox: !state.childCheckbox }
        case TEST_CHILD: return { ...state, childName: 'Eliza', childDayOfBirth: '23/06/2012' }
        default: return { ...state }
    }
}


type NameActionType = {type: typeof CHILD_NAME, valueChildName: string}
export const onChildName = (valueChildName: string): NameActionType => ({ type: CHILD_NAME, valueChildName })

type DayOfBirthActionType = {type: typeof CHILD_DAY_OF_BIRTH_PARAM, valueDayOfBirth: any}
export const onChildDayOfBirth = (valueDayOfBirth: any): DayOfBirthActionType => ({ type: CHILD_DAY_OF_BIRTH_PARAM, valueDayOfBirth })

type DataClearActionType = {type: typeof CHILD_DATA_CLEAR}
export const onSendingChildDataClear = (): DataClearActionType => ({ type: CHILD_DATA_CLEAR })

type CheckboxActionType = {type: typeof CHILD_CHECKBOX}
export const onChildCheckbox = (): CheckboxActionType => ({ type: CHILD_CHECKBOX })

type TestActionType = {type: typeof TEST_CHILD}
export const testChild = () => ({ type: TEST_CHILD })
