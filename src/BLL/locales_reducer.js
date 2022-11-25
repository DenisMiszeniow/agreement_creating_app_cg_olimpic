import { MainDataApi } from "../API/api"

const INITIAL_HEADER_LOCALIZE = 'INITIAL_HEADER_LOCALIZE'
const INITIAL_INSTRUCTION_LOCALES = 'INITIAL_INSTRUCTION_LOCALES'
const INITIAL_STEPS_LOCALES = 'INITIAL_STEPS_LOCALES'
const INITIAL_MAIN_FORM_LOCALES = 'INITIAL_MAIN_FORM_LOCALES'
const AGREEMENT_READY_LOCALES = 'AGREEMENT_READY_LOCALES'
const DOWNLOAD_LOCALES = 'DOWNLOAD_LOCALES'
const SENDING_LOCALES = 'SENDING_LOCALES'
const ERROR_SENDING = 'ERROR_SENDING'
const SENDING_TEXT = 'SENDING_TEXT'


const SWITCH_LOCALIZE = 'SWITCH_LOCALIZE'
const BUTTON_DISABLE = 'BUTTON_DISABLE'


const initialState = {
    initialized: true,
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
    },
    headerTexts: {
        nameText: '',
        discriptionText: ''
    },
    instructionTexts:{
        shortInstruction: '',
        easySteps: '',
        checkData: '',
        nextStep: '',
        downloadText: '',
        signAgree: '',
        letIsGo: '',
        instructionStep1: {
            step1: '',
            step1Line1: '',
            step1Line2: '',
            step1Line3: '',
            step1Line4: '',
            checkKontaktData: ''
        },
        instructionStep2: {
            step2: '',
            step2Line1: '',
            step2Line2: ''
        },
        instructionStep3: {
            step3Click: '',
            step3Line1: '',
            step4Line2: '',
            step4Remember: ''
        },
        instructionStep4: {
            step4Line1: '',
            step4Line2: '',
            step4Line3: '',
            step4Line4: ''
        },
        instructionWarning: {
            warningText: '',
            warningLine1: '',
            warningLine2: ''
        }
    },
    stepTexts: {
        step1Texts: {
            step1Text: '',
            h2Text: '',
            pText: ''
        },
        step2Texts: {
            step2Text: '',
            h2Text: '',
            pText: ''
        },
        step3texts: {
            step3Text: '',
            h2TextLine1: '',
            h2TextLine2: '',
            pTextLine1: '',
            pTextLine2: ''
        },
        step4Texts: {
            step4Text: '',
            h2Text: '',
            pTextLine1: '',
            pTextLine2: ''
        }
    },
    mainFormTexts: {
        choseSiteText : {
            h3Text: '',
            site: '',
            siteChosenText: '',
            package: '',
            siteFirst: '',
            chosePackage: '',
            frequency: '',
            packageFirst: '',
            choseFrequency: '',
            schoolYear: '',
        },
        childDataText: {
            h3Text: '',
            nameText: '',
            dateText: '',
            agreeText: '',
            lineText: '',
        },
        parrentDataText: {
            h3Text: '',
            nameText: '',
            idText: '',
            cityText: '',
            zipText: '',
            addressText: ''
        },
        contactDataText: {
            h3Text: '',
            motherTelText: '',
            fatherTelText: '',
            mailText: '',
            checkDataText: '',
            nextStepText: ''
        },
        checkFormText: {
            siteText: '',
            packageText: '',
            frequencyText: '',
            schoolYearText: '',
            childNameText: '',
            childDateText: '',
            parrentNameText: '',
            parrentIdText: '',
            parrentCityText: '',
            parrentZipText: '',
            parrentAddressText: '',
            telText: '',
            mailText: '',
            checkMailText: '',
            allRightText: ''
        },
    },
    agreementReadyTexts: {
        acceptAgreementText: '',
        nextStepText: ''
    },
    downloadTexts: {
        downloadText: '',
    },
    sendingTexts: {
        yourNameText: '',
        yourEmailText: '',
        fileText: '',
        limitText: '',
        errorText: '',
        bottonText: '',
        endPagetextLine1: '',
        endPagetextLine2: '',
        endPagetextLine2: '',
        endPagetextSpan: '',
    }
}

export const localesReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_HEADER_LOCALIZE: return { ...state, headerTexts: action.data}
        case INITIAL_STEPS_LOCALES: return {...state, stepTexts: action.data}
        case INITIAL_INSTRUCTION_LOCALES: return { ...state, instructionTexts: action.data}
        case INITIAL_MAIN_FORM_LOCALES: return {...state, mainFormTexts: action.data}
        case AGREEMENT_READY_LOCALES: return {...state, agreementReadyTexts: action.data}
        case DOWNLOAD_LOCALES: return {...state, downloadTexts: action.data}
        case SENDING_LOCALES:
            const sendingState = {...state}
            sendingState.sendingTexts = action.data
            sendingState.sendingButtonText = sendingState.sendingTexts.bottonText
            return sendingState
        case ERROR_SENDING: return {...state, errorSendingText: action.errorStatus === 426 ? state.sendingTexts.limitText : state.sendingTexts.errorText, sendingButtonText: state.sendingTexts.bottonText}
        case SENDING_TEXT: return {...state, sendingButtonText: ''}

        case SWITCH_LOCALIZE:
            const newState = { ...state }
            newState.localize = !newState.localize
            newState.headerInstructionTexts = action.data
            newState.localize ? newState.language = 'pl' : newState.language = 'ua'
            return newState
        case BUTTON_DISABLE: return {...state, buttonDisable: action.event}
        default: return { ...state }
    }
}

export const localesSwitch = () => ({ type: SWITCH_LOCALIZE})
const buttonDisable = event => ({type: BUTTON_DISABLE, event})


//HEADER LOCALES
const initialHeaderLocales = data => ({ type: INITIAL_HEADER_LOCALIZE, data })
const initialStepsLocales = data => ({type:INITIAL_STEPS_LOCALES, data})

export const initialHeaderLocalesThunk = (language, section) => dispatch => {
    MainDataApi.setLocales(language, section)
    .then(data => dispatch(initialHeaderLocales(data)))
    .then (MainDataApi.setStepsLocales(language)
            .then(data => dispatch(initialStepsLocales(data)))
    )
}

//INSTRUCTION LOCALES
const initialInstructionLocales = data => ({ type: INITIAL_INSTRUCTION_LOCALES, data })

export const initialInsructionLocalesThunk = (language, section) => dispatch => {
    dispatch(buttonDisable(true))
    MainDataApi.setLocales(language, section)
    .then(data => {
        dispatch(initialInstructionLocales(data))
        dispatch(buttonDisable(false))
    })
}

//MAIN FORM LOCALES
const initialMainFormLocales = data => ({ type: INITIAL_MAIN_FORM_LOCALES, data })

export const initialMainFormLocalesThunk = (language, section) => dispatch => {
    dispatch(buttonDisable(true))
    MainDataApi.setLocales(language, section)
    .then(data => {
        dispatch(initialMainFormLocales(data))
        dispatch(buttonDisable(false))
    })
}

//AGREEMENT READY LOCALES
const agreementReadyLocales = data => ({ type: AGREEMENT_READY_LOCALES, data })

export const agreementReadyLocalesThunk = (language, section) => dispatch => {
    dispatch(buttonDisable(true))
    MainDataApi.setLocales(language, section)
    .then(data => {
        dispatch(agreementReadyLocales(data))
        dispatch(buttonDisable(false))
    })
}

//DOWNLOAD LOCALES
const downloadLocales = data => ({ type: DOWNLOAD_LOCALES, data })

export const downloadLocalesThunk = (language, section) => dispatch => {
    dispatch(buttonDisable(true))
    MainDataApi.setLocales(language, section)
    .then(data => {
        dispatch(downloadLocales(data))
        dispatch(buttonDisable(false))
    })
}

//SENDING LOCALES
const sendingLocales = data => ({type: SENDING_LOCALES, data})
export const ErrorSendingText = (errorStatus) => ({ type: ERROR_SENDING, errorStatus })
export const sendingText = () => ({type: SENDING_TEXT})

export const sendingLocalesThunk = (languge, section) => dispatch => {
    dispatch(buttonDisable(true))
    MainDataApi.setLocales(languge, section)
    .then(data => {
        dispatch(sendingLocales(data))
        dispatch(buttonDisable(false))
    })
} 




