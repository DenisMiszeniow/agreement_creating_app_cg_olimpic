import { MainDataApi } from "../API/api"

const SET_LOCALES = 'INSTRUCTION_LOCALES'
const STEPS_LOCALES = 'STEPS_LOCALES'

const ERROR_SENDING = 'ERROR_SENDING'
const SENDING_TEXT = 'SENDING_TEXT'

const SWITCH_LOCALIZE = 'SWITCH_LOCALIZE'
const BUTTON_DISABLE = 'BUTTON_DISABLE'


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
    }
}

export const localesReducer = (state = initialState, action) => {
    switch (action.type) {
        case STEPS_LOCALES: return {...state, ...action.data}
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

// SET STEPS
const setStepsLocales = data => ({type:STEPS_LOCALES, data})
export const setStepsLocalesThunk = language => dispatch => {
    dispatch(buttonDisable(true))
    MainDataApi.setStepsLocales(language)
    .then(data => {
        dispatch(setStepsLocales(data))
        dispatch(buttonDisable(false))
    })
} 

// SET LOCALES
const setLocales = data => ({ type: SET_LOCALES, data })
export const setLocalesThunk = (language, section) => dispatch => {
    dispatch(buttonDisable(true))
    MainDataApi.setLocales(language, section)
    .then(data => {
        dispatch(setLocales(data))
        dispatch(buttonDisable(false))
    })  
}

// SENDING LOCALES
export const ErrorSendingText = (errorStatus) => ({ type: ERROR_SENDING, errorStatus })
export const sendingText = () => ({type: SENDING_TEXT})