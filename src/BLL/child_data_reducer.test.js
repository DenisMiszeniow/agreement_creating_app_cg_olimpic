import { childDataReducer, onChildCheckbox, onChildDayOfBirth, onChildName } from "./child_data_reducer"

const state = {
    childName: '',
    childDayOfBirth: '',
    childDayOfBirthParam: '',
    childCheckbox: true
    
}

it ('child name should be added with text', () => {
    const action = onChildName('Emmy Brown')
    const newState = childDataReducer(state, action)
    expect(newState.childName).toBe('Emmy Brown')
})

it ('child date of birth should be added', () => {
    const action = onChildDayOfBirth('2022/05/10')
    const newState = childDataReducer(state, action)
    expect(newState.childDayOfBirth.length).toBeLessThanOrEqual(10)
})

it ('chekbox in child form is checked', () => {
    const action = onChildCheckbox()
    const newState = childDataReducer(state, action)
    expect(newState.childCheckbox.length).toBeFalsy()
})