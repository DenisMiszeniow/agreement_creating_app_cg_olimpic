import { onFatherPhoneNumber, onMotherPhoneNumber, onParrentAddress, onParrentCity, onParrentEmail, onParrentIdCard, onParrentName, onParrentZipCode, parrentDataReducer } from "./parrent_data_reducer"

const state = {
    parrentName: '',
    parrentIdCard: '',
    parrentCity: '',
    parrentZipCode: '',
    parrentAddress: '',
    motherPhoneNumber: '',
    fatherPhoneNumber: '',
    parrentEmail: ''
}

it ('parent name should be added with text', () => {
    const action = onParrentName('Emmy Brown')
    const newState = parrentDataReducer(state, action)
    expect(newState.parrentName).toBe('Emmy Brown')
})

it ('parent ID card should be added with text', () => {
    const action = onParrentIdCard('ADV 123456')
    const newState = parrentDataReducer(state, action)
    expect(newState.parrentIdCard).toBe('ADV 123456')
})

it ('parent city should be added with text', () => {
    const action = onParrentCity('London')
    const newState = parrentDataReducer(state, action)
    expect(newState.parrentCity).toBe('London')
})

it ('parent zipCode should be added with text', () => {
    const action = onParrentZipCode('12-123')
    const newState = parrentDataReducer(state, action)
    expect(newState.parrentZipCode).toBe('12-123')
})

it ('parent address should be added with text', () => {
    const action = onParrentAddress('Nowa str 25/2')
    const newState = parrentDataReducer(state, action)
    expect(newState.parrentAddress).toBe('Nowa str 25/2')
})

it ('mother phone should be added with text', () => {
    const action = onMotherPhoneNumber('+1 123-456-789')
    const newState = parrentDataReducer(state, action)
    expect(newState.motherPhoneNumber).toBe('+1 123-456-789')
})

it ('father phone should be added with text', () => {
    const action = onFatherPhoneNumber('+1 123-456-789')
    const newState = parrentDataReducer(state, action)
    expect(newState.fatherPhoneNumber).toBe('+1 123-456-789')
})

it ('parent email should be added with text', () => {
    const action = onParrentEmail('name@site.com')
    const newState = parrentDataReducer(state, action)
    expect(newState.parrentEmail).toBe('name@site.com')
})