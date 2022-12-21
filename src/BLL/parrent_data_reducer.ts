const PARRENT_NAME: string = 'parent_data_reducer/PARRENT_NAME'
const PARRENT_ID_CARD: string = 'parent_data_reducer/PARRENT_ID_CARD'
const PARRENT_CITY: string = 'parent_data_reducer/PARRENT_CITY'
const PARRENT_ZIP_CODE: string = 'parent_data_reducer/PARRENT_ZIP_CODE'
const PARRENT_ADDRESS: string = 'parent_data_reducer/PARRENT_ADDRESS'
const MOTHER_PHONE_NUMBER: string = 'parent_data_reducer/MOTHER_PHONE_NUMBER'
const FATHER_PHONE_NUMBER: string = 'parent_data_reducer/FATHER_PHONE_NUMBER'
const PARRENT_EMAIL: string = 'parent_data_reducer/PARRENT_EMAIL'
const PARRENT_DATA_CLEAR: string = 'parent_data_reducer/PARRENT_DATA_CLEAR'
//---TEST PARRENT------------
const TEST_PARRENT: string = 'TEST_PARRENT'

export type InitialStateType = {
    parrentName: string,
    parrentIdCard: string,
    parrentCity: string,
    parrentZipCode: string,
    parrentAddress: string,
    motherPhoneNumber: string,
    fatherPhoneNumber: string,
    parrentEmail: string
}

const initialState: InitialStateType = {
    parrentName: '',
    parrentIdCard: '',
    parrentCity: '',
    parrentZipCode: '',
    parrentAddress: '',
    motherPhoneNumber: '',
    fatherPhoneNumber: '',
    parrentEmail: ''
}

export const parrentDataReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case PARRENT_NAME: return ({...state, parrentName: action.valueName})
        case PARRENT_ID_CARD: return ({...state, parrentIdCard: action.valueIdCard})
        case PARRENT_CITY: return ({...state, parrentCity: action.valueCity})
        case PARRENT_ZIP_CODE: return ({...state, parrentZipCode: action.valueZipCode})
        case PARRENT_ADDRESS: return ({...state, parrentAddress: action.valueAddress})
        case MOTHER_PHONE_NUMBER: return({...state, motherPhoneNumber: action.valueMotherPhoneNumber})
        case FATHER_PHONE_NUMBER: return({...state, fatherPhoneNumber: action.valueFatherPhoneNumber})
        case PARRENT_EMAIL: return({...state, parrentEmail: action.valueParrentEmail})
        case PARRENT_DATA_CLEAR: return {...state, parrentName : '', parrentIdCard : '', parrentCity : '', parrentZipCode : '',
                parrentAddress : '', motherPhoneNumber : '', fatherPhoneNumber : '', parrentEmail : ''}
        case TEST_PARRENT: return {...state, parrentName: 'Denis', parrentIdCard: 'ASD123456', parrentCity: 'Wro', parrentAddress: 'Kolorowa 2', parrentZipCode: '25-123', motherPhoneNumber: '126-125-856', parrentEmail: 'example@site.com'}
        default: return {...state}
    }
}

type NameActionType = {type: typeof PARRENT_NAME, valueName: string}
export const onParrentName = (valueName: string): NameActionType => ({type: PARRENT_NAME, valueName})

type IdCardActionType = {type: typeof PARRENT_ID_CARD, valueIdCard: string}
export const onParrentIdCard = (valueIdCard: string): IdCardActionType => ({type: PARRENT_ID_CARD, valueIdCard})

type CityActionType = {type: typeof PARRENT_CITY, valueCity: string}
export const onParrentCity = (valueCity: string): CityActionType => ({type:PARRENT_CITY, valueCity})

type ZipCodeActionType = {type: typeof PARRENT_ZIP_CODE, valueZipCode: string}
export const onParrentZipCode = (valueZipCode: string): ZipCodeActionType => ({type:PARRENT_ZIP_CODE, valueZipCode})

type AddressActionType = {type:typeof PARRENT_ADDRESS, valueAddress: string}
export const onParrentAddress = (valueAddress: string) => ({type:PARRENT_ADDRESS, valueAddress})

type MotherPhoneNumberActionType = {type: typeof MOTHER_PHONE_NUMBER, valueMotherPhoneNumber: string | null}
export const onMotherPhoneNumber = (valueMotherPhoneNumber: string | null): MotherPhoneNumberActionType => {
    return ({type:MOTHER_PHONE_NUMBER, valueMotherPhoneNumber})
}

type FatherPhoneNumberActionType = {type: typeof FATHER_PHONE_NUMBER, valueFatherPhoneNumber: string | null}
export const onFatherPhoneNumber = (valueFatherPhoneNumber: string | null): FatherPhoneNumberActionType => {
    return ({type: FATHER_PHONE_NUMBER, valueFatherPhoneNumber})
}

type EmailActionType = {type: typeof PARRENT_EMAIL, valueParrentEmail: string}
export const onParrentEmail = (valueParrentEmail: string): EmailActionType => ({type: PARRENT_EMAIL, valueParrentEmail})

type DataClearActionType = {type: typeof PARRENT_DATA_CLEAR}
export const onSendingParrentDataClear = (): DataClearActionType => ({type: PARRENT_DATA_CLEAR})

type TestParentActionType = {type: typeof TEST_PARRENT}
export const testParrent = (): TestParentActionType => ({type: TEST_PARRENT})
