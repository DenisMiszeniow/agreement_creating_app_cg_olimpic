import { onFatherPhoneNumber, onMotherPhoneNumber, onParrentAddress, onParrentCity, onParrentEmail, onParrentIdCard, onParrentName, onParrentZipCode, parrentDataReducer } from "./parrent_data_reducer"


describe ('parent reducer', () => {
    let state
    beforeEach(() => {
        state = {
            parrentName: '',
            parrentIdCard: '',
            parrentCity: '',
            parrentZipCode: '',
            parrentAddress: '',
            motherPhoneNumber: '',
            fatherPhoneNumber: '',
            parrentEmail: ''
        }
    })
    it ('name should be added with text', () => {
        const action = onParrentName('Emmy Brown')
        const newState = parrentDataReducer(state, action)
        expect(newState.parrentName).toBe('Emmy Brown')
        expect(newState.parrentName).toBeDefined()
    })
    
    it ('ID card should be added with text', () => {
        const action = onParrentIdCard('ADV 123456')
        const newState = parrentDataReducer(state, action)
        expect(newState.parrentIdCard).toBe('ADV 123456')
        expect(newState.parrentIdCard).toBeDefined()
    })
    
    it ('city should be added with text', () => {
        const action = onParrentCity('London')
        const newState = parrentDataReducer(state, action)
        expect(newState.parrentCity).toBe('London')
        expect(newState.parrentCity).toBeDefined()
    })
    
    it ('zipCode should be added with text', () => {
        const action = onParrentZipCode('12-123')
        const newState = parrentDataReducer(state, action)
        expect(newState.parrentZipCode).toBe('12-123')
        expect(newState.parrentZipCode).toBeDefined()
    })
    
    it ('address should be added with text', () => {
        const action = onParrentAddress('Nowa str 25/2')
        const newState = parrentDataReducer(state, action)
        expect(newState.parrentAddress).toBe('Nowa str 25/2')
        expect(newState.parrentAddress).toBeDefined()
    })
    
    it ('mother phone should be added with text', () => {
        const action = onMotherPhoneNumber('+1 123-456-789')
        const newState = parrentDataReducer(state, action)
        expect(newState.motherPhoneNumber).toBe('+1 123-456-789')
        expect(newState.motherPhoneNumber).toBeDefined()
    })
    
    it ('father phone should be added with text', () => {
        const action = onFatherPhoneNumber('+1 123-456-789')
        const newState = parrentDataReducer(state, action)
        expect(newState.fatherPhoneNumber).toBe('+1 123-456-789')
        expect(newState.fatherPhoneNumber).toBeDefined()
    })
    
    it ('email should be added with text', () => {
        const action = onParrentEmail('name@site.com')
        const newState = parrentDataReducer(state, action)
        expect(newState.parrentEmail).toBe('name@site.com')
        expect(newState.parrentEmail).toBeDefined()
    })
})
