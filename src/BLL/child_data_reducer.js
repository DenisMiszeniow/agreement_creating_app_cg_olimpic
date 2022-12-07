import moment from "moment"

const CHILD_NAME = 'child_data_reducer/CHILD_NAME'
const CHILD_DAY_OF_BIRTH_PARAM = 'child_data_reducer/CHILD_DAY_OF_BIRTH_PARAM'
const CHILD_DATA_CLEAR = 'child_data_reducer/CHILD_DATA_CLEAR'
const CHILD_CHECKBOX = 'child_data_reducer/CHILD_CHECKBOX'
//---TEST CHILD--------------
const TEST_CHILD = 'TEST_CHILD'

const initialState = {
    childName: '',
    childDayOfBirth: '',
    childDayOfBirthParam: '',
    childCheckbox: true

}

export const childDataReducer = (state = initialState, action) => {
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

export const onChildName = (valueChildName) => ({ type: CHILD_NAME, valueChildName })
export const onChildDayOfBirth = (valueDayOfBirth) => ({ type: CHILD_DAY_OF_BIRTH_PARAM, valueDayOfBirth })
export const onSendingChildDataClear = () => ({ type: CHILD_DATA_CLEAR })
export const onChildCheckbox = () => ({ type: CHILD_CHECKBOX })
export const testChild = () => ({ type: TEST_CHILD })
