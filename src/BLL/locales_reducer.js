import { MainDataApi } from "../API/api"

const SET_LOCALES = 'locales_reducer/INSTRUCTION_LOCALES'

const ERROR_SENDING = 'locales_reducer/ERROR_SENDING'
const SENDING_TEXT = 'locales_reducer/SENDING_TEXT'

const SWITCH_LOCALIZE = 'locales_reducer/SWITCH_LOCALIZE'
const IS_ANY_ASYNC_FN_RUN = 'locales_reducer/IS_ANY_ASYNC_FN_RUN'


const initialState = {
    localize: true,
    language: 'pl',
    asyncFnRunCounter: 0,
    errorSendingText:'',
    sendingButtonText: '',
    buttonDisable: false,
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

        case IS_ANY_ASYNC_FN_RUN: return {...state, 
            asyncFnRunCounter: action.event ? state.asyncFnRunCounter += 1 : state.asyncFnRunCounter -= 1, 
            buttonDisable: state.asyncFnRunCounter > 0 ? true : false}

        default: return { ...state }
    }
}

// SWITCH LANGUAGE
export const localesSwitch = () => ({ type: SWITCH_LOCALIZE})
const asyncFnRunStatus = event => ({type: IS_ANY_ASYNC_FN_RUN, event})

// SET LOCALES
const setLocales = data => ({ type: SET_LOCALES, data })
export const setLocalesThunk = (language, section) => async dispatch => {
    dispatch(asyncFnRunStatus(true))
    const data = await MainDataApi.setLocales(language, section)
    dispatch(setLocales(data))
    dispatch(asyncFnRunStatus(false))
}

// SENDING LOCALES
export const ErrorSendingText = (errorStatus) => ({ type: ERROR_SENDING, errorStatus })
export const sendingText = () => ({type: SENDING_TEXT})