const CHILD_NAME = 'CHILD_NAME'
const CHILD_DAY_OF_BIRTH = 'CHILD_DAY_OF_BIRTH'
const CHILD_DATA_CLEAR = 'CHILD_DATA_CLEAR'
const CHILD_CHECKBOX = 'CHILD_CHECKBOX'

const initialState = {
    childName: '',
    childDayOfBirth: '',
    childCheckbox: true
    
}

export const childDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHILD_NAME: return ({...state, childName: action.valueChildName})
        case CHILD_DAY_OF_BIRTH: return ({...state, childDayOfBirth: action.valueDayOfBirth})
        case CHILD_DATA_CLEAR:
            const newStateChildDataCleaer = {...state}
            newStateChildDataCleaer.childName = ''
            newStateChildDataCleaer.childDayOfBirth = ''
            newStateChildDataCleaer.childCheckbox = true
        return newStateChildDataCleaer
        case CHILD_CHECKBOX: 
            const newState = {...state}
            newState.childCheckbox = !newState.childCheckbox
            return newState
        default: return {...state}
    }

}

export const onChildName = (valueChildName) => ({type: CHILD_NAME, valueChildName})
export const onChildDayOfBirth = (valueDayOfBirth) => ({type: CHILD_DAY_OF_BIRTH, valueDayOfBirth})
export const onSendingChildDataClear = () => ({type: CHILD_DATA_CLEAR})
export const onChildCheckbox = () => ({type: CHILD_CHECKBOX})
