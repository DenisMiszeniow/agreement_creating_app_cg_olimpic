import { MainDataApi } from "../API/api"


const SET_SITES = 'SET_SITES'
const SET_PACKAGES = 'SET_PACKAGES'
const SET_FREQUENCES = 'SET_FREQUENCES'
const SET_PRICES = 'SET_PRICES'
const VALUE_SITE = 'VALUE_SITE'
const SET_OWNER = 'SET_OWNER'
const SET_SCHOOL_YEARS = 'SET_SCHOOL_YEARS'

const VALUE_PACKAGE = 'VALUE PACKAGE'
const VALUE_FREQUENCY = 'VALUE_FREQUENCY'
const VALUE_SCHOOL_YEAR = 'VALUE_SCHOOL_YEAR'
const TESTING_FORM = 'TESTING_FORM'
const TESTING_FORM_TEXT = 'TESTING_FORM_TEXT'
const SENDING_OK = 'SENDING_OK'
const LOADER = 'LOADER'
const ERROR_SENDING = 'ERROR_SENDING'
const DOWNLOAD_ROUTE = 'DOWNLOAD_ROUTE'

//---TEST BUTTON----------
const TEST_MAIN = 'TEST_MAIN'


//---OLGA SITES-----------
const olga1 = 'OKiDZ Edukacja Sp. z o.o. - Krakowska 56-62, 50-425 Wrocław'
const olga2 = 'ZSEO we Wrocławiu - Drukarska 50, 53-310 Wrocław'
const olga3 = 'Liceum Ogólnokształcące nr V - Kuronia 14, 50-550 Wrocław'
const olga4 = 'Szkoła Podstawowa NR 9 - Nyska 66, 50-505 Wrocław'
const olga5 = 'Klub Samuraj - Bałtycka 19, 51-109 Wrocław'
const olga6 = 'Liceum Ogólnokształcące nr VII - Krucza 49, 53-410 Wrocław'
const olga7 = 'Zespół Szkolno-Przedszkolny Nr 17 - Wieczysta 105, 50-550 Wrocław'

//---LIZA SITES-----------
const liza1 = 'Zespół Szkół NR 3 - Szkocka 64, 54-402 Wrocław'
const liza2 = 'Szkoła Podstawowa nr 61 - Skarbowców 8, 53-025 Wrocław'
const liza3 = 'Szkoła Podstawowa nr 33 - Kolista 17, 43-152 Wrocław'
const liza4 = 'Świetlica Wiejska - Główna 47, 55-080 Smolec'
const liza5 = 'Szkoła Podstawowa W Kobierzycach - Parkowa 7, 55-040 Kobierzyce'
const liza6 = 'Szkoła Podstawowa nr 42 - Wałbrzyska 50, 52-314 Wrocław'
const liza7 = 'Szkoła Podstawowa nr 83 - Boya-Żeleńskiego 32, 51-160 Wrocław'

const initialState = {
    // LOCALES
    textsUa: {},
    textsLocales: {},

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
    
    sendingText: 'ZAWIERAM UMOWĘ',
    errorText: '',
    loader: false,
    lastPage: false,
    agreementRoute: '',
    downloadRoute: '',
    acceptAgreement: false,

    //ONCE Request UseEffect
    onceRequest: true,
    
}

export const mainStateDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SITES:
            const setSitesState = {...state}
            setSitesState.sites = action.data
            setSitesState.institution = setSitesState.sites.map(site => site.site)
            setSitesState.chosenSchoolYear = setSitesState.schoolYear[0]
            return setSitesState

        case SET_PACKAGES: return {...state, packageOptions: action.data}

        case SET_FREQUENCES: return {...state, frequencyOptions: action.data}

        case SET_PRICES: return {...state, prices: action.data}

        case SET_OWNER: return {...state, companyData: action.data}

        case SET_SCHOOL_YEARS: return {...state, schoolYear: action.data}

        case VALUE_SITE:
            const choseGroupState = { ...state }
            choseGroupState.chosenSite = action.valueSite
            choseGroupState.sites.forEach(el => (el.site === choseGroupState.chosenSite) && (choseGroupState.chosenSiteFullData = el))
            choseGroupState.chosenPackage = ''
            choseGroupState.chosenFrequency = ''
            choseGroupState.frequency = ''
            choseGroupState.package = choseGroupState.chosenSiteFullData.groupOption.map(el=> el.group)
            return choseGroupState

        case VALUE_PACKAGE:
            const choseFrequencyState = { ...state }
            choseFrequencyState.chosenPackage = action.valuePackage
            choseFrequencyState.chosenFrequency = ''
            choseFrequencyState.chosenSiteFullData.groupOption.forEach(el => {
                if(el.group === choseFrequencyState.chosenPackage){
                    choseFrequencyState.frequency = el.freq
                }
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
        case TESTING_FORM: return ({ ...state, testingForm: !state.testingForm, testingFormText: 'WSZYSTKO SIĘ ZGADZA :)', agreementRoute: '/agreement' })
        case TESTING_FORM_TEXT: return ({ ...state, testingFormText: action.text })
        case SENDING_OK: return {...state,
            chosenSite: '',
            chosenPackage: '',
            chosenFrequency: '',
            companyData: {},
            prices: {},
            calculatePrice: 0,
            sendingText: 'WYŚLIJ',
            loader: false,
            errorText: '',
            lastPage: true,
            agreementRoute: '',
            downloadRoute: '',
            acceptAgreement: false
        }
        case LOADER: return { ...state, loader: true, sendingText: '' }
        case ERROR_SENDING: return { ...state, loader: false, sendingText: 'WYŚLIJ', errorText: action.errorStatus === 426 ? 'ZA DUŻY ROZMIAR PLIKU, NIE MOŻE PRZEKRACZAĆ 2MB!' : 'COŚ POSZŁO NIE TAK. SPRÓBUJ JESZCZE RAZ!' }
        case DOWNLOAD_ROUTE:
            const newStateDownloading = { ...state }
            newStateDownloading.downloadRoute = '/download'
            newStateDownloading.acceptAgreement = !newStateDownloading.acceptAgreement
            return newStateDownloading
        default: return { ...state }
    }

}

export const onChosenSite = (valueSite) => ({ type: VALUE_SITE, valueSite })
export const onChosenFrequency = (valueFrequency) => ({ type: VALUE_FREQUENCY, valueFrequency })
export const onChosenSchoolYear = (valueYear) => ({ type: VALUE_SCHOOL_YEAR, valueYear })
export const onTestingForm = () => ({ type: TESTING_FORM })
export const onTestingFormText = (text) => ({ type: TESTING_FORM_TEXT, text })
export const onSendingMainClear = () => ({ type: SENDING_OK })
export const onLoader = () => ({ type: LOADER })
export const onErrorSending = (errorStatus) => ({ type: ERROR_SENDING, errorStatus })
export const onDownloadRoute = () => ({ type: DOWNLOAD_ROUTE })





// THUNK GET SITES, PACKAGES, FREQUENCES, SCHOOL YEARS
const setSites = (data) => ({ type: SET_SITES, data})
const setPackages = (data) => ({type: SET_PACKAGES, data})
const setFrequences = (data) => ({type: SET_FREQUENCES, data})
const setPrices = (data) => ({type: SET_PRICES, data})
const setOwner = (data) => ({type: SET_OWNER, data})
const setSchoolYears = (data) => ({type: SET_SCHOOL_YEARS, data})

export const getSites = () => (dispatch) => {
    MainDataApi.getSites().then(data => dispatch(setSites(data)))
    MainDataApi.getPackages().then (data => dispatch(setPackages(data)))
    MainDataApi.getFrequences().then (data => dispatch(setFrequences(data)))
    MainDataApi.getPrices().then (data => dispatch(setPrices(data)))
    MainDataApi.getSchoolYerars().then (data => dispatch(setSchoolYears(data)))
}

//THUNK SET PACKAGE AND SITE OWNER
const onChosenPackage = (valuePackage) => ({ type: VALUE_PACKAGE, valuePackage })

export const getCompanyData = (valuePackage, owner) => (dispatch) => {
    dispatch(onChosenPackage(valuePackage))
    MainDataApi.getCompanyData(owner).then(data => dispatch(setOwner(data)))
}

