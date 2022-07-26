import { MainDataApi } from "../API/api"


const SET_SITES = 'main_state_data_reducer/SET_SITES'
const SET_PACKAGES = 'main_state_data_reducer/SET_PACKAGES'
const SET_FREQUENCES = 'main_state_data_reducer/SET_FREQUENCES'
const SET_PRICES = 'main_state_data_reducer/SET_PRICES'
const VALUE_SITE = 'main_state_data_reducer/VALUE_SITE'
const SET_OWNER = 'main_state_data_reducer/SET_OWNER'
const SET_SCHOOL_YEARS = 'main_state_data_reducer/SET_SCHOOL_YEARS'

const VALUE_PACKAGE = 'main_state_data_reducer/VALUE PACKAGE'
const VALUE_FREQUENCY = 'main_state_data_reducer/VALUE_FREQUENCY'
const VALUE_SCHOOL_YEAR = 'main_state_data_reducer/VALUE_SCHOOL_YEAR'
const TESTING_FORM = 'main_state_data_reducer/TESTING_FORM'
const TESTING_FORM_TEXT = 'main_state_data_reducer/TESTING_FORM_TEXT'
const SENDING_OK = 'main_state_data_reducer/SENDING_OK'
const LOADER = 'main_state_data_reducer/LOADER'
const ERROR_SENDING = 'main_state_data_reducer/ERROR_SENDING'
const DOWNLOAD_ROUTE = 'main_state_data_reducer/DOWNLOAD_ROUTE'

//---TEST BUTTON----------
const TEST_MAIN = 'main_state_data_reducer/TEST_MAIN'

const initialState = {
    
    //Dates
    currentDate: new Date(),
    schoolYear: [],
    chosenSchoolYear:'',

    //SITE
    institution: [],
    sites: [],
    chosenSiteFullData: {},
    chosenSite: '',

    // COMPANY DATA
    siteOwner: '',
    companyData: {},

    //GROUP
    package: null,
    chosenPackage: '',
    packageOptions: {},

    //FREQUENCY
    frequency: null,
    chosenFrequency: '',
    frequencyOptions: {},

    //PRICE
    prices: {},
    calculatePrice: 0,
    calculatePriceInWords: '',

    //TESTING FORM TEXT
    testingFormText: '',
    
    //SEND LOADER AND LAST PAGE VISIBLE
    loader: false,
    lastPage: false,

    // ROUTING
    agreementRoute: '',
    downloadRoute: '',

    //AGREEMENT ACCEPT
    acceptAgreement: false,

    //ONCE Request UseEffect
    onceRequest: true,
    
}

export const mainStateDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SITES: return {...state, sites: [...action.data], institution: [...action.data.map(site => site.site)]}
        case SET_PACKAGES: return {...state, packageOptions: {...action.data}}
        case SET_FREQUENCES: return {...state, frequencyOptions: {...action.data}}
        case SET_PRICES: return {...state, prices: {...action.data}}
        case SET_OWNER: return {...state, companyData: {...action.data}}
        case SET_SCHOOL_YEARS: return {...state, schoolYear: [...action.data], chosenSchoolYear: action.data[0]}
        case VALUE_SITE:
            const choseGroupState = { ...state, chosenPackage: '', chosenFrequency: '', frequency: '', chosenSite: action.valueSite}
            choseGroupState.sites.forEach(el => (el.site === choseGroupState.chosenSite) && (choseGroupState.chosenSiteFullData = el))
            choseGroupState.package = choseGroupState.chosenSiteFullData.groupOption.map(el=> el.group)
            return choseGroupState
        case VALUE_PACKAGE:
            const choseFrequencyState = { ...state, chosenFrequency: '', chosenPackage: action.valuePackage}
            choseFrequencyState.chosenSiteFullData.groupOption.forEach(el => {
                (el.group === choseFrequencyState.chosenPackage) && (choseFrequencyState.frequency = el.freq)
            })            
            return choseFrequencyState
        case VALUE_FREQUENCY:
            const setPriceState = { ...state }
            setPriceState.chosenFrequency = action.valueFrequency
            if ((setPriceState.chosenPackage === setPriceState.packageOptions.gp60) || (setPriceState.chosenPackage === setPriceState.packageOptions.gk60)) {
                if(setPriceState.chosenFrequency === setPriceState.frequencyOptions.x1){
                    setPriceState.calculatePrice = setPriceState.prices.price60Ones.price
                    setPriceState.calculatePriceInWords = setPriceState.prices.price60Ones.letter
                } else if (setPriceState.chosenFrequency === setPriceState.frequencyOptions.x2) {
                    setPriceState.calculatePrice = setPriceState.prices.price60Twise.price
                    setPriceState.calculatePriceInWords = setPriceState.prices.price60Twise.letter
                }
            } else if ((setPriceState.chosenPackage === setPriceState.packageOptions.gp90) 
                    || (setPriceState.chosenPackage === setPriceState.packageOptions.gk90)
                    || (setPriceState.chosenPackage === setPriceState.packageOptions.gz)) {
                        if(setPriceState.chosenFrequency === setPriceState.frequencyOptions.x1){
                            setPriceState.calculatePrice = setPriceState.prices.price90Ones.price
                            setPriceState.calculatePriceInWords = setPriceState.prices.price90Ones.letter
                        } else if (setPriceState.chosenFrequency === setPriceState.frequencyOptions.x2) {
                            setPriceState.calculatePrice = setPriceState.prices.price90Twise.price
                            setPriceState.calculatePriceInWords = setPriceState.prices.price90Twise.letter
                        } else if (setPriceState.chosenFrequency === setPriceState.frequencyOptions.x3) {
                            setPriceState.calculatePrice = setPriceState.prices.priceTriple.price
                            setPriceState.calculatePriceInWords = setPriceState.prices.priceTriple.letter
                        } else if (setPriceState.chosenFrequency === setPriceState.frequencyOptions.x4) {
                            setPriceState.calculatePrice = setPriceState.prices.priceQuatro.price
                            setPriceState.calculatePriceInWords = setPriceState.prices.priceQuatro.letter
                        }
                    }
            return setPriceState
        case VALUE_SCHOOL_YEAR: return ({ ...state, chosenSchoolYear: action.valueYear })
        case TESTING_FORM: return ({ ...state, testingForm: !state.testingForm, testingFormText: action.text, agreementRoute: '/agreement' })
        case TESTING_FORM_TEXT: return ({ ...state, testingFormText: action.text })
        case SENDING_OK: return {...state, chosenSite: '', chosenPackage: '', chosenFrequency: '', companyData: {...{}},
            prices: {...{}}, calculatePrice: 0, sendingText: '', loader: false, errorText: '', lastPage: true, agreementRoute: '',
            downloadRoute: '', acceptAgreement: false}
        case LOADER: return { ...state, loader: true, sendingText: '' }
        case ERROR_SENDING: return { ...state, loader: false }
        case DOWNLOAD_ROUTE: return {...state, downloadRoute: '/download', acceptAgreement: !state.acceptAgreement}
        default: return { ...state }
    }

}

export const onChosenSite = (valueSite) => ({ type: VALUE_SITE, valueSite })
export const onChosenFrequency = (valueFrequency) => ({ type: VALUE_FREQUENCY, valueFrequency })
export const onChosenSchoolYear = (valueYear) => ({ type: VALUE_SCHOOL_YEAR, valueYear })
export const onTestingForm = (text) => ({ type: TESTING_FORM, text })
export const onTestingFormText = (text) => ({ type: TESTING_FORM_TEXT, text })
export const onSendingMainClear = () => ({ type: SENDING_OK })
export const onLoader = () => ({ type: LOADER })
export const onErrorSending = () => ({ type: ERROR_SENDING})
export const onDownloadRoute = () => ({ type: DOWNLOAD_ROUTE })

// THUNK GET SITES, PACKAGES, FREQUENCES, SCHOOL YEARS
const setSites = (data) => ({ type: SET_SITES, data})
const setPackages = (data) => ({type: SET_PACKAGES, data})
const setFrequences = (data) => ({type: SET_FREQUENCES, data})
const setPrices = (data) => ({type: SET_PRICES, data})
const setOwner = (data) => ({type: SET_OWNER, data})
const setSchoolYears = (data) => ({type: SET_SCHOOL_YEARS, data})
export const getSites = () => async dispatch => {
    dispatch(setSites(await MainDataApi.getSites()))
    dispatch(setPackages(await MainDataApi.getPackages()))
    dispatch(setFrequences(await MainDataApi.getFrequences()))
    dispatch(setPrices(await MainDataApi.getPrices()))
    dispatch(setSchoolYears(await MainDataApi.getSchoolYerars()))
}

//THUNK SET PACKAGE AND SITE OWNER
const onChosenPackage = (valuePackage) => ({ type: VALUE_PACKAGE, valuePackage })
export const getCompanyData = (valuePackage, owner) => async dispatch => {
    dispatch(onChosenPackage(valuePackage))
    dispatch(setOwner(await MainDataApi.getCompanyData(owner)))
}

