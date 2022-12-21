
import { MainDataApi } from "../API/api"
import { ChosenSiteFullDataType, CompanyDataType, FrequenciesType, PackageOptionsType } from "../types/types"


const SET_SITES: string = 'main_state_data_reducer/SET_SITES'
const SET_PACKAGES: string  = 'main_state_data_reducer/SET_PACKAGES'
const SET_FREQUENCES: string  = 'main_state_data_reducer/SET_FREQUENCES'
const SET_PRICES: string  = 'main_state_data_reducer/SET_PRICES'
const VALUE_SITE: string  = 'main_state_data_reducer/VALUE_SITE'
const SET_OWNER: string  = 'main_state_data_reducer/SET_OWNER'
const SET_SCHOOL_YEARS: string  = 'main_state_data_reducer/SET_SCHOOL_YEARS'

const VALUE_PACKAGE: string  = 'main_state_data_reducer/VALUE PACKAGE'
const VALUE_FREQUENCY: string  = 'main_state_data_reducer/VALUE_FREQUENCY'
const VALUE_SCHOOL_YEAR: string  = 'main_state_data_reducer/VALUE_SCHOOL_YEAR'
const TESTING_FORM: string  = 'main_state_data_reducer/TESTING_FORM'
const TESTING_FORM_TEXT: string  = 'main_state_data_reducer/TESTING_FORM_TEXT'
const SENDING_OK: string  = 'main_state_data_reducer/SENDING_OK'
const LOADER: string  = 'main_state_data_reducer/LOADER'
const ERROR_SENDING: string  = 'main_state_data_reducer/ERROR_SENDING'
const DOWNLOAD_ROUTE: string  = 'main_state_data_reducer/DOWNLOAD_ROUTE'

//---TEST BUTTON----------
const TEST_MAIN: string = 'main_state_data_reducer/TEST_MAIN'


const initialState = {
    
    //Dates
    currentDate: new Date() as Date,
    schoolYear: [] as Array<number>,
    chosenSchoolYear:'' as string,

    //SITE
    institution: [] as Array<string>,
    sites: [] as Array<any>,
    chosenSiteFullData: {} as ChosenSiteFullDataType,
    chosenSite: '' as string,

    // COMPANY DATA
    siteOwner: '' as string,
    companyData: {} as CompanyDataType,

    //GROUP
    package: null as string[] | null,
    chosenPackage: '' as string,
    packageOptions: {} as PackageOptionsType,

    //FREQUENCY
    frequency: null as string[] | null,
    chosenFrequency: '' as string,
    frequencyOptions: {} as FrequenciesType,

    //PRICE
    prices: {} as any,
    calculatePrice: 0 as number,
    calculatePriceInWords: '' as string,

    //TESTING FORM TEXT
    testingForm: false as boolean,
    testingFormText: '' as string,
    
    //SEND LOADER AND LAST PAGE VISIBLE
    errorText: '' as string,
    sendingText: '' as string,
    loader: false as boolean,
    lastPage: false as boolean,

    // ROUTING
    agreementRoute: '' as string,
    downloadRoute: '' as string,

    //AGREEMENT ACCEPT
    acceptAgreement: false as boolean,

    //ONCE Request UseEffect
    onceRequest: true as boolean,
}

type InitialStateType = typeof initialState

export const mainStateDataReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_SITES: return {...state, sites: [...action.data], institution: [...action.data.map(site => site.site)]}
        case SET_PACKAGES: return {...state, packageOptions: {...action.data}}
        case SET_FREQUENCES: return {...state, frequencyOptions: {...action.data}}
        case SET_PRICES: return {...state, prices: {...action.data}}
        case SET_OWNER: return {...state, companyData: {...action.data}}
        case SET_SCHOOL_YEARS: return {...state, schoolYear: [...action.data], chosenSchoolYear: action.data[0]}
        case VALUE_SITE:
            const choseGroupState = { ...state, chosenPackage: '', chosenFrequency: '', frequency: null, chosenSite: action.valueSite}
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
type ChosenSiteActionType = {type: typeof VALUE_SITE, valueSite: string}
export const onChosenSite = (valueSite: string): ChosenSiteActionType => ({ type: VALUE_SITE, valueSite })

type ChosenFrequencyActionType = {type: typeof VALUE_FREQUENCY, valueFrequency: string}
export const onChosenFrequency = (valueFrequency: string): ChosenFrequencyActionType => ({ type: VALUE_FREQUENCY, valueFrequency })

type ChosenSchoolYearActionType = {type: typeof VALUE_SCHOOL_YEAR, valueYear: string}
export const onChosenSchoolYear = (valueYear: string): ChosenSchoolYearActionType => ({ type: VALUE_SCHOOL_YEAR, valueYear })

type TestingFormActionType = {type: typeof TESTING_FORM, text: string}
export const onTestingForm = (text: string): TestingFormActionType => ({ type: TESTING_FORM, text })

type TestingFormTextActionType = {type: typeof TESTING_FORM_TEXT, text: string}
export const onTestingFormText = (text: string): TestingFormTextActionType => ({ type: TESTING_FORM_TEXT, text })

type SendingMainClearActionType = {type: typeof SENDING_OK}
export const onSendingMainClear = (): SendingMainClearActionType => ({ type: SENDING_OK })

type LoaderActionType = {type: typeof LOADER}
export const onLoader = (): LoaderActionType => ({ type: LOADER })

type ErrorSendingActionType = {type: typeof ERROR_SENDING}
export const onErrorSending = (): ErrorSendingActionType => ({ type: ERROR_SENDING})

type DownloadRouteActionType = {type: typeof DOWNLOAD_ROUTE}
export const onDownloadRoute = (): DownloadRouteActionType => ({ type: DOWNLOAD_ROUTE })

// THUNK GET SITES, PACKAGES, FREQUENCES, SCHOOL YEARS
const setSites = (data: any) => ({ type: SET_SITES, data})
const setPackages = (data: any) => ({type: SET_PACKAGES, data})
const setFrequences = (data: any) => ({type: SET_FREQUENCES, data})
const setPrices = (data: any) => ({type: SET_PRICES, data})
const setOwner = (data: any) => ({type: SET_OWNER, data})
const setSchoolYears = (data: any) => ({type: SET_SCHOOL_YEARS, data})
export const getSites = () => async (dispatch: any) => {
    dispatch(setSites(await MainDataApi.getSites()))
    dispatch(setPackages(await MainDataApi.getPackages()))
    dispatch(setFrequences(await MainDataApi.getFrequences()))
    dispatch(setPrices(await MainDataApi.getPrices()))
    dispatch(setSchoolYears(await MainDataApi.getSchoolYerars()))
}

//THUNK SET PACKAGE AND SITE OWNER
const onChosenPackage = (valuePackage: string) => ({ type: VALUE_PACKAGE, valuePackage })
export const getCompanyData = (valuePackage: string , owner: string) => async (dispatch: any) => {
    dispatch(onChosenPackage(valuePackage))
    dispatch(setOwner(await MainDataApi.getCompanyData(owner)))
}

