const PARRENT_NAME = 'PARRENT_NAME'
const PARRENT_ID_CARD = 'PARRENT_ID_CARD'
const PARRENT_CITY = 'PARRENT_CITY'
const PARRENT_ZIP_CODE = 'PARRENT_ZIP_CODE'
const PARRENT_ADDRESS = 'PARRENT_ADDRESS'
const MOTHER_PHONE_NUMBER = 'MOTHER_PHONE_NUMBER'
const FATHER_PHONE_NUMBER = 'FATHER_PHONE_NUMBER'
const PARRENT_EMAIL = 'PARRENT_EMAIL'
const PARRENT_DATA_CLEAR = 'PARRENT_DATA_CLEAR'
//---TEST PARRENT------------
const TEST_PARRENT = 'TEST_PARRENT'


const initialState = {
    parrentName: '',
    parrentIdCard: '',
    parrentCity: '',
    parrentZipCode: '',
    parrentAddress: '',
    motherPhoneNumber: '',
    fatherPhoneNumber: '',
    parrentEmail: ''
}

export const parrentDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case PARRENT_NAME: return ({...state, parrentName: action.valueName})
        case PARRENT_ID_CARD: return ({...state, parrentIdCard: action.valueIdCard})
        case PARRENT_CITY: return ({...state, parrentCity: action.valueCity})
        case PARRENT_ZIP_CODE: return ({...state, parrentZipCode: action.valueZipCode})
        case PARRENT_ADDRESS: return ({...state, parrentAddress: action.valueAddress})
        case MOTHER_PHONE_NUMBER: return({...state, motherPhoneNumber: action.valueMotherPhoneNumber})
        case FATHER_PHONE_NUMBER: return({...state, fatherPhoneNumber: action.valueFatherPhoneNumber})
        case PARRENT_EMAIL: return({...state, parrentEmail: action.valueParrentEmail})
        case PARRENT_DATA_CLEAR:
            const newStateParrentDataCleaer = {...state}
                newStateParrentDataCleaer.parrentName = ''
                newStateParrentDataCleaer.parrentIdCard = ''
                newStateParrentDataCleaer.parrentCity = ''
                newStateParrentDataCleaer.parrentZipCode = ''
                newStateParrentDataCleaer.parrentAddress = ''
                newStateParrentDataCleaer.motherPhoneNumber = ''
                newStateParrentDataCleaer.fatherPhoneNumber = ''
                newStateParrentDataCleaer.parrentEmail = ''
            return newStateParrentDataCleaer
        case TEST_PARRENT: return {...state, parrentName: 'Denis', parrentIdCard: 'ASD123456', parrentCity: 'Wro', parrentAddress: 'Kolorowa 2', parrentZipCode: '25-123', motherPhoneNumber: '126-125-856', parrentEmail: 'example@site.com'}
        default: return {...state}
    }
}

export const onParrentName = (valueName) => ({type: PARRENT_NAME, valueName})
export const onParrentIdCard = (valueIdCard) => ({type: PARRENT_ID_CARD, valueIdCard})
export const onParrentCity = (valueCity) => ({type:PARRENT_CITY, valueCity})
export const onParrentZipCode = (valueZipCode) => ({type:PARRENT_ZIP_CODE, valueZipCode})
export const onParrentAddress = (valueAddress) => ({type:PARRENT_ADDRESS, valueAddress})
export const onMotherPhoneNumber = (valueMotherPhoneNumber) => ({type:MOTHER_PHONE_NUMBER, valueMotherPhoneNumber})
export const onFatherPhoneNumber = (valueFatherPhoneNumber) => ({type: FATHER_PHONE_NUMBER, valueFatherPhoneNumber})
export const onParrentEmail = (valueParrentEmail) => ({type: PARRENT_EMAIL, valueParrentEmail})
export const onSendingParrentDataClear = () => ({type: PARRENT_DATA_CLEAR})
export const testParrent = () => ({type: TEST_PARRENT})
