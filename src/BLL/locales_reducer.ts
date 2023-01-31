//@ts-ignore
import { MainDataApi } from "../API/api.ts"
import {
    AgreementReadyTextsType, CheckFormTextType, ChildDataTextType, ChoseSiteTextType, ContactDataTextType,
    DownloadTextType, HeaderTextsType, InstructionTextsType, OsTestTextType, ParrentDataTextType, SendingTextType, Step1TextsType, Step2TextsType,
    Step3TextsType, Step4TextsType
} from "../types/types.js"

const SET_LOCALES: string = 'locales_reducer/INSTRUCTION_LOCALES'

const ERROR_SENDING: string = 'locales_reducer/ERROR_SENDING'
const SENDING_TEXT: string = 'locales_reducer/SENDING_TEXT'

const SWITCH_LOCALIZE: string = 'locales_reducer/SWITCH_LOCALIZE'
const IS_ANY_ASYNC_FN_RUN: string = 'locales_reducer/IS_ANY_ASYNC_FN_RUN'

type InitialStateType = {
    localize: boolean
    language: string
    asyncFnRunCounter: number
    errorSendingText: string
    sendingButtonText: string
    buttonDisable: boolean
    initialized?: boolean
    section: {
        header: string
        instruction: string
        mainForm: string
        agreementReady: string
        download: string
        sending: string
        osTest: string
        steps: string
    },
    headerTexts?: HeaderTextsType
    instructionTexts?: InstructionTextsType
    choseSiteText?: ChoseSiteTextType
    childDataText?: ChildDataTextType
    parrentDataText?: ParrentDataTextType
    contactDataText?: ContactDataTextType
    checkFormText?: CheckFormTextType
    agreementReadyTexts?: AgreementReadyTextsType
    downloadText?: DownloadTextType
    step1Texts?: Step1TextsType
    step2Texts?: Step2TextsType
    step3Texts?: Step3TextsType
    step4Texts?: Step4TextsType
    osTestTexts?: OsTestTextType
    sendingTexts?: SendingTextType
}

const initialState: InitialStateType = {
    localize: true,
    language: 'pl',
    asyncFnRunCounter: 0,
    errorSendingText: '',
    sendingButtonText: '',
    buttonDisable: false,
    sendingTexts: {
        limitText: null,
        errorText: null,
        buttonText: null,
        endPagetextLine1: null,
        endPagetextLine2: null,
        endPagetextLine3: null,
        endPagetextSpan: null
    },
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

export const localesReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_LOCALES: return { ...state, ...action.data }
        case ERROR_SENDING: return {
            ...state, errorSendingText: action.errorStatus === 426
                ? state.sendingTexts.limitText
                : state.sendingTexts.errorText, sendingButtonText: state.sendingTexts.buttonText
        }
        case SENDING_TEXT: return { ...state, sendingButtonText: '' }
        case SWITCH_LOCALIZE: return { ...state, localize: !state.localize, language: !state.localize ? 'pl' : 'ua' }

        case IS_ANY_ASYNC_FN_RUN: return {
            ...state,
            asyncFnRunCounter: action.event ? state.asyncFnRunCounter += 1 : state.asyncFnRunCounter -= 1,
            buttonDisable: state.asyncFnRunCounter > 0 ? true : false
        }

        default: return { ...state }
    }
}

// SWITCH LANGUAGE
type LocalesSwitchActionType = { type: typeof SWITCH_LOCALIZE }
export const localesSwitch = (): LocalesSwitchActionType => ({ type: SWITCH_LOCALIZE })

type FnRunStatusActionType = { type: typeof IS_ANY_ASYNC_FN_RUN, event: boolean }
const asyncFnRunStatus = (event: boolean): FnRunStatusActionType => ({ type: IS_ANY_ASYNC_FN_RUN, event })

// SET LOCALES
type SetLocalesActionType = { type: typeof SET_LOCALES, data: any }
const setLocales = (data: any): SetLocalesActionType => ({ type: SET_LOCALES, data })
export const setLocalesThunk = (language: string, section: string) => async (dispatch: any) => {
    dispatch(asyncFnRunStatus(true))
    const data = await MainDataApi.setLocales(language, section)
    dispatch(setLocales(data))
    dispatch(asyncFnRunStatus(false))
}

// SENDING LOCALES
type ErrorSendingTextActionData = { type: typeof ERROR_SENDING, errorStatus: number }
export const ErrorSendingText = (errorStatus: number): ErrorSendingTextActionData => ({ type: ERROR_SENDING, errorStatus })

type SendingTextActionData = { type: typeof SENDING_TEXT }
export const sendingText = (): SendingTextActionData => ({ type: SENDING_TEXT })