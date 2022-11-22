import { MainDataApi } from "../API/api"

const INITIAL_LOCALIZE = 'INITIAL_LOCALIZE'
const SWITCH_LOCALIZE = 'SWITCH_LOCALIZE'
const BUTTON_DISABLE = 'BUTTON_DISABLE'


const initialState = {
    initialized: true,
    localize: true,
    language: 'pl',
    buttonDisable: false,
    texts: {
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
    }
}

export const localizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_LOCALIZE: return { ...state, texts: action.data, language: 'ua' }
        case SWITCH_LOCALIZE:
            const newState = { ...state }
            newState.localize = !newState.localize
            newState.texts = action.data
            newState.localize ? newState.language = 'ua' : newState.language = 'pl'
            return newState
        case BUTTON_DISABLE: return {...state, buttonDisable: action.event}
        default: return { ...state }
    }
}





const initialLocales = (data) => ({ type: INITIAL_LOCALIZE, data })
const localesSwitch = (data) => ({ type: SWITCH_LOCALIZE, data })
const buttonDisable = (event) => ({type: BUTTON_DISABLE, event})


export const initialLocalesThunk = (language) => (dispatch) => {
    MainDataApi.setLocales(language).then(data => {
        dispatch(initialLocales(data.texts))
        console.log(data)
    })
}


export const localesSwitchThunk = (language) => (dispatch) => {
    dispatch(buttonDisable(true))
    MainDataApi.setLocales(language)
    
    .then(data => {
        dispatch(localesSwitch(data.texts))
        dispatch(buttonDisable(false))
        console.log(data)
    }
    )
}



