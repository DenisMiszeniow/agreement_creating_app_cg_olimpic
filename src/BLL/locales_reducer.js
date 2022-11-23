import { MainDataApi } from "../API/api"

const INITIAL_HEADER_LOCALIZE = 'INITIAL_HEADER_LOCALIZE'
const INITIAL_INSTRUCTION_LOCALES = 'INITIAL_INSTRUCTION_LOCALES'
const SET_STEPS_LOCALES = 'SET_STEPS_LOCALES'


const SWITCH_LOCALIZE = 'SWITCH_LOCALIZE'
const BUTTON_DISABLE = 'BUTTON_DISABLE'


const initialState = {
    initialized: true,
    localize: true,
    language: 'pl',
    buttonDisable: false,
    section: {
        header: 'header',
        instruction: 'instruction',
        step1: 'step1',
        step2: 'step2',
        step3: 'step3',
        step4: 'step4'
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
    localesTexts: {
        headerText: {
            nameText: '',
            discriptionText: ''
        },
        instructionText: {
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
        groupTexts:{},
    },
    stepTexts: {
        step1Texts: {},
        step2Texts: {},
        step4Texts: {}
    }
}

export const localesReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_HEADER_LOCALIZE: return { ...state, headerTexts: action.data}
        case INITIAL_INSTRUCTION_LOCALES: return { ...state, instructionTexts: action.data}

        case SET_STEPS_LOCALES: return {...state, stepTexts: action.data}

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

const localesSwitch = () => ({ type: SWITCH_LOCALIZE})
const buttonDisable = (event) => ({type: BUTTON_DISABLE, event})
const initialStepLocales = (data) => ({type: SET_STEPS_LOCALES, data})

//HEADER LOCALES
const initialHeaderLocales = (data) => ({ type: INITIAL_HEADER_LOCALIZE, data })
export const initialHeaderLocalesThunk = (language, section) => dispatch => {
    MainDataApi.setLocales(language, section)
    .then(data => {
        dispatch(initialHeaderLocales(data))
        dispatch(buttonDisable(false))
    })
}

//INSTRUCTION LOCALES
const initialInstructionLocales = (data) => ({ type: INITIAL_INSTRUCTION_LOCALES, data })
export const initialInsructionLocalesThunk = (language, section) => dispatch => {
    MainDataApi.setLocales(language, section)
    .then(data => {
        dispatch(initialInstructionLocales(data))
        dispatch(buttonDisable(false))
    })
}



export const initialStepsLocalesThunk = (language) => dispatch => MainDataApi.setStepsLocales(language).then(data => dispatch(initialStepLocales(data)))


export const localesSwitchThunk = () => (dispatch) => {
    dispatch(buttonDisable(true))
    dispatch (localesSwitch())
}



