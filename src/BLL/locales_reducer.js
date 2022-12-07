import { MainDataApi } from "../API/api"

const SET_LOCALES = 'locales_reducer/INSTRUCTION_LOCALES'

const ERROR_SENDING = 'locales_reducer/ERROR_SENDING'
const SENDING_TEXT = 'locales_reducer/SENDING_TEXT'

const SWITCH_LOCALIZE = 'locales_reducer/SWITCH_LOCALIZE'
const BUTTON_DISABLE = 'locales_reducer/BUTTON_DISABLE'


const initialState = {
    localize: true,
    language: 'pl',
    buttonDisable: false,
    errorSendingText:'',
    sendingButtonText: '',
    section: {
        header: 'header',
        instruction: 'instruction',
        mainForm: 'form',
        agreementReady: 'agreement',
        download: 'download',
        sending: 'sending',
        osTest: 'ostest',
        steps: 'steps'
    }
}

export const localesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCALES: return { ...state, ...action.data}
        case ERROR_SENDING: return {...state, errorSendingText: action.errorStatus === 426 ? state.sendingTexts.limitText : state.sendingTexts.errorText, sendingButtonText: state.sendingTexts.bottonText}
        case SENDING_TEXT: return {...state, sendingButtonText: ''}
        case SWITCH_LOCALIZE: return {...state, localize: !state.localize, language: !state.localize ? 'pl' : 'ua'}
        case BUTTON_DISABLE: return {...state, buttonDisable: action.event}
        default: return { ...state }
    }
}

// SWITCH LANGUAGE
export const localesSwitch = () => ({ type: SWITCH_LOCALIZE})
const buttonDisable = event => ({type: BUTTON_DISABLE, event})

// SET LOCALES
const setLocales = data => ({ type: SET_LOCALES, data })
export const setLocalesThunk = (language, section) => async dispatch => {
    dispatch(buttonDisable(true))
    const data = await MainDataApi.setLocales(language, section)
    dispatch(setLocales(data))
    dispatch(buttonDisable(false))
}

// SENDING LOCALES
export const ErrorSendingText = (errorStatus) => ({ type: ERROR_SENDING, errorStatus })
export const sendingText = () => ({type: SENDING_TEXT})