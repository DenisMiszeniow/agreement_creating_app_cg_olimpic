import { MainDataApi } from "../API/api"


const SET_SITES = 'SET_SITES'


const VALUE_SITE = 'VALUE_SITE'
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

const groups = {
    gp60: '',
    gp90: '',
    gp901: '',
    gk60: '',
    gk90: '',
    gk902: '',
    gz: ''
}

const ownerOlga = {
    companyName: 'CG-Olimpic Olga Mishenova',
    bankAccount: '44 1050 1575 1000 0092 8223 1399',
    companyNip: '8992891301',
    companyRegon: '387860642',
    companyAdress: '52-129 Wrocław, ul. Johanna Straussa 28/2',
    ownerName: 'Olga Mishenova'
}

const ownerLiza = {
    companyName: 'CG-Olimpic Ielyzaveta Kanarova',
    bankAccount: '72 1050 1575 1000 0092 8876 4427',
    companyNip: '8992904995',
    companyRegon: '389760554',
    companyAdress: '53-024 Wrocław, ul. Wietrzna 137/13',
    ownerName: 'Ielyzaveta Kanarova'
}

const sites = [
    {
        owner: 'olga',
        site: 'OKiDZ Edukacja Sp. z o.o. - Krakowska 56-62, 50-425 Wrocław',
        groupOption: [
            {
                gp60: '',
                freq: [
                    { x1: '' },
                    { x2: '' }
                ]
            },
            {
                gk60: '',
                freq: [
                    { x1: '' },
                    { x2: '' },
                    { x3: '' }
                ]
            },
            {
                gk90: '',
                freq: [
                    { x1: '' },
                    { x2: '' },
                    { x3: '' }
                ]
            }
        ]
    },
    {
        owner: 'olga',
        site: 'ZSEO we Wrocławiu - Drukarska 50, 53-310 Wrocław',
        groupOption: [
            {
                gp60: '',
                freq: [
                    { x1: '' },
                    { x2: '' }
                ]
            },
            {
                gk60: '',
                freq: [
                    { x1: '' },
                    { x2: '' },
                    { x3: '' }
                ]
            },
            {
                gk90: '',
                freq: [
                    { x1: '' },
                    { x2: '' },
                    { x3: '' }
                ]
            },
            {
                gz: '',
                freq: [
                    { x2: '' },
                    { x3: '' },
                    { x4: '' }
                ]
            }
        ]
    },
    {
        owner: 'liza',
        site: 'Zespół Szkół NR 3 - Szkocka 64, 54-402 Wrocław',
        groupOption: [
            {
                gp60: '',
                freq: [
                    { x1: '' },
                    { x2: '' }
                ]
            },
            {
                gk90: '',
                freq: [
                    { x1: '' },
                    { x2: '' },
                    { x3: '' }
                ]
            },
            {
                gz: '',
                freq: [
                    { x2: '' },
                    { x3: '' },
                    { x4: '' }
                ]
            }
        ]
    }
]


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

//---PACKAGE OPTIONS------
const gp60 = 'GRUPA POCZĄTKUJĄCA (60 min)'
const gp90 = 'GRUPA POCZĄTKUJĄCA (90 min)'
const gp901 = 'GRUPA POCZĄTKUJĄCA  (90 min)'
const gk60 = 'GRUPA KONTYNUUJĄCA (60 min)'
const gk90 = 'GRUPA KONTYNUUJĄCA (90 min)'
const gk902 = 'GRUPA KONTYNUUJĄCA  (90 min)'
const gz = 'GRUPA ZAAWANSOWANA'

//---FREQUENCY OPTIONS----
const x1 = '1-x w tygodniu'
const x2 = '2-x w tygodniu'
const x3 = '3-x w tygodniu'
const x4 = '4-x w tygodniu'

const initialState = {
    forecastDate: new Date(),
    schoolYear: [
        '2022/2023',
        '2023/2024'
    ],
    chosenSchoolYear: '2022/2023',
    institution: [
        olga1, olga2, liza1, olga3,
        olga4, olga5, olga6, liza2,
        liza3, liza6, liza7, olga7,
        liza4, liza5
    ],
    sites: [],
    chosenSiteObject: {site: ''},
    prices: {
        price60Ones: { price: 140, letter: 'Sto Czterdzieści zł 00/100' },
        price90Ones: { price: 175, letter: 'Sto Siedemdziesiąt Pięć zł 00/100' },
        price60Twise: { price: 240, letter: 'Dwieście Czterdzieści zł 00/100' },
        price90Twise: { price: 275, letter: 'Dwieście Siedemdziesiąt Pięć zł 00/100' },
        priceTriple: { price: 300, letter: 'Trzysta zł 00/100' },
        priceQuatro: { price: 350, letter: 'Trzysta Pięćdziesiąt zł 00/100' }
    },
    priceCjk: 100,
    priceCjkWord: 'sto zł 00/100',
    calculatePrice: 0,
    calculatePriceInWords: '',
    chosenSiteId: '',
    package: null,
    chosenPackage: '',
    frequency: null,
    chosenFrequency: '',
    companyName: '',
    companyAdress: '',
    companyNip: '',
    companyRegon: '',
    ownerName: '',
    bankAccount: '',
    sendingText: 'ZAWIERAM UMOWĘ',
    errorText: '',
    loader: false,
    lastPage: false,
    agreementRoute: '',
    downloadRoute: '',
    acceptAgreement: false,
    onceEffect: true
}

export const mainStateDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SITES: return { ...state, sites: action.data }

        
        case VALUE_SITE:
            const newState = { ...state }
            newState.chosenSiteId = action.valueSite
            newState.chosenSiteObject = newState.sites[newState.chosenSiteId.value]

            newState.chosenPackage = ''
            newState.chosenFrequency = ''
            newState.frequency = ''
            if ((newState.chosenSite === liza1) || (newState.chosenSite === liza2) || (newState.chosenSite === liza3) || (newState.chosenSite === liza4) || (newState.chosenSite === liza5) || (newState.chosenSite === liza6) || (newState.chosenSite === liza7)) {
                newState.companyName = 'CG-Olimpic Ielyzaveta Kanarova'
                newState.bankAccount = '72 1050 1575 1000 0092 8876 4427'
                newState.companyNip = '8992904995'
                newState.companyRegon = '389760554'
                newState.companyAdress = '53-024 Wrocław, ul. Wietrzna 137/13'
                newState.ownerName = 'Ielyzaveta Kanarova'
            } else {
                newState.companyName = 'CG-Olimpic Olga Mishenova'
                newState.bankAccount = '44 1050 1575 1000 0092 8223 1399'
                newState.companyNip = '8992891301'
                newState.companyRegon = '387860642'
                newState.companyAdress = '52-129 Wrocław, ul. Johanna Straussa 28/2'
                newState.ownerName = 'Olga Mishenova'
            }
            if (newState.chosenSite === olga1) {
                newState.package = [gp60, gk60, gk90]
            }
            if (newState.chosenSite === olga7) {
                newState.package = [gp90]
            }
            if (newState.chosenSite === olga2) {
                newState.package = [gp60, gk60, gk90, gz]
            }
            if (newState.chosenSite === liza3) {
                newState.package = [gp60, gk90]
            }
            if ((newState.chosenSite === liza1) || (newState.chosenSite === liza2)) {
                newState.package = [gp60, gk90, gz]
            }
            if (newState.chosenSite === olga4) {
                newState.package = [gp60, gk60, gz]
            }
            if ((newState.chosenSite === olga5) || (newState.chosenSite === liza4) || (newState.chosenSite === liza6) || (newState.chosenSite === liza7)) {
                newState.package = [gp60, gp90]
            }
            if ((newState.chosenSite === olga6) || (newState.chosenSite === olga3)) {
                newState.package = [gp60]
            }
            if (newState.chosenSite === liza5) {
                newState.package = [gp901, gk90]
            }
            return newState
        case VALUE_PACKAGE:
            const newState1 = { ...state }
            newState1.chosenPackage = action.valuePackage
            newState1.chosenFrequency = ''
            if ((newState1.chosenPackage === gp60) || (newState1.chosenPackage === gp90)) {
                newState1.frequency = [x1, x2]
            } else if ((newState1.chosenPackage === gk60) || (newState1.chosenPackage === gk90)) {
                newState1.frequency = [x1, x2, x3]
            } else if (newState1.chosenPackage === gp901) {
                newState1.frequency = [x1]
            } else if (newState1.chosenPackage === gk902) {
                newState1.frequency = [x1, x2]
            }
            else {
                newState1.frequency = [x2, x3, x4]
            }
            return newState1
        case VALUE_FREQUENCY:
            const newState2 = { ...state }
            newState2.chosenFrequency = action.valueFrequency
            if ((newState2.chosenPackage === gp60) && (newState2.chosenFrequency === x1)) {
                newState2.calculatePrice = newState2.prices.price60Ones.price
                newState2.calculatePriceInWords = newState2.prices.price60Ones.letter
            }
            if ((newState2.chosenPackage === gp90) && (newState2.chosenFrequency === x1)) {
                newState2.calculatePrice = newState2.prices.price90Ones.price
                newState2.calculatePriceInWords = newState2.prices.price90Ones.letter
            }
            if ((newState2.chosenPackage === gp901) && (newState2.chosenFrequency === x1)) {
                newState2.calculatePrice = newState2.prices.price90Ones.price
                newState2.calculatePriceInWords = newState2.prices.price90Ones.letter
            }
            if ((newState2.chosenPackage === gp60) && (newState2.chosenFrequency === x2)) {
                newState2.calculatePrice = newState2.prices.price60Twise.price
                newState2.calculatePriceInWords = newState2.prices.price60Twise.letter
            }
            if ((newState2.chosenPackage === gp90) && (newState2.chosenFrequency === x2)) {
                newState2.calculatePrice = newState2.prices.price90Twise.price
                newState2.calculatePriceInWords = newState2.prices.price90Twise.letter
            }
            if ((newState2.chosenPackage === gk60) && (newState2.chosenFrequency === x1)) {
                newState2.calculatePrice = newState2.prices.price60Ones.price
                newState2.calculatePriceInWords = newState2.prices.price60Ones.letter
            }
            if ((newState2.chosenPackage === gk60) && (newState2.chosenFrequency === x2)) {
                newState2.calculatePrice = newState2.prices.price60Twise.price
                newState2.calculatePriceInWords = newState2.prices.price60Twise.letter
            }
            if ((newState2.chosenPackage === gk60) && (newState2.chosenFrequency === x3)) {
                newState2.calculatePrice = newState2.prices.price90Triple.price
                newState2.calculatePriceInWords = newState2.prices.priceTriple.letter
            }
            if ((newState2.chosenPackage === gk90) && (newState2.chosenFrequency === x1)) {
                newState2.calculatePrice = newState2.prices.price90Ones.price
                newState2.calculatePriceInWords = newState2.prices.price90Ones.letter
            }
            if ((newState2.chosenPackage === gk90) && (newState2.chosenFrequency === x2)) {
                newState2.calculatePrice = newState2.prices.price90Twice.price
                newState2.calculatePriceInWords = newState2.prices.price90Twice.letter
            }
            if ((newState2.chosenPackage === gk90) && (newState2.chosenFrequency === x3)) {
                newState2.calculatePrice = newState2.prices.priceTriple.price
                newState2.calculatePriceInWords = newState2.prices.priceTriple.letter
            }
            if ((newState2.chosenPackage === gz) && (newState2.chosenFrequency === x2)) {
                newState2.calculatePrice = newState2.prices.price90Twise.price
                newState2.calculatePriceInWords = newState2.prices.price90Twise.letter
            }
            if ((newState2.chosenPackage === gz) && (newState2.chosenFrequency === x3)) {
                newState2.calculatePrice = newState2.prices.priceTriple.price
                newState2.calculatePriceInWords = newState2.prices.priceTriple.letter
            }
            if ((newState2.chosenPackage === gz) && (newState2.chosenFrequency === x4)) {
                newState2.calculatePrice = newState2.prices.priceQuatro.price
                newState2.calculatePriceInWords = newState2.prices.priceQuatro.letter
            }
            return newState2
        case VALUE_SCHOOL_YEAR: return ({ ...state, chosenSchoolYear: action.valueYear })
        case TESTING_FORM: return ({ ...state, testingForm: !state.testingForm, testingFormText: 'WSZYSTKO SIĘ ZGADZA :)', agreementRoute: '/agreement' })
        case TESTING_FORM_TEXT: return ({ ...state, testingFormText: action.text })
        case SENDING_OK:
            const newStateClear = { ...state }
            newStateClear.chosenSite = ''
            newStateClear.chosenPackage = ''
            newStateClear.chosenFrequency = ''
            newStateClear.companyName = ''
            newStateClear.companyAdress = ''
            newStateClear.companyNip = ''
            newStateClear.companyRegon = ''
            newStateClear.ownerName = ''
            newStateClear.bankAccount = ''
            newStateClear.sendingText = 'WYŚLIJ'
            newStateClear.loader = false
            newStateClear.errorText = ''
            newStateClear.lastPage = true
            newStateClear.agreementRoute = ''
            newStateClear.downloadRoute = ''
            newStateClear.acceptAgreement = false
            return newStateClear
        case LOADER: return { ...state, loader: true, sendingText: '' }
        case ERROR_SENDING: return { ...state, loader: false, sendingText: 'WYŚLIJ', errorText: action.errorStatus === 426 ? 'ZA DUŻY ROZMIAR PLIKU, NIE MOŻE PRZEKRACZAĆ 2MB!' : 'COŚ POSZŁO NIE TAK. SPRÓBUJ JESZCZE RAZ!' }
        case DOWNLOAD_ROUTE:
            const newStateDownloading = { ...state }
            newStateDownloading.downloadRoute = '/download'
            newStateDownloading.acceptAgreement = !newStateDownloading.acceptAgreement
            return newStateDownloading
        case TEST_MAIN: return {
            ...state,
            chosenSite: olga1,
            chosenPackage: gp60,
            chosenFrequency: x1,
        }
        default: return { ...state }
    }

}

export const onChosenSite = (valueSite) => ({ type: VALUE_SITE, valueSite })
export const onChosenPackage = (valuePackage) => ({ type: VALUE_PACKAGE, valuePackage })
export const onChosenFrequency = (valueFrequency) => ({ type: VALUE_FREQUENCY, valueFrequency })
export const onChosenSchoolYear = (valueYear) => ({ type: VALUE_SCHOOL_YEAR, valueYear })
export const onTestingForm = () => ({ type: TESTING_FORM })
export const onTestingFormText = (text) => ({ type: TESTING_FORM_TEXT, text })
export const onSendingMainClear = () => ({ type: SENDING_OK })
export const onLoader = () => ({ type: LOADER })
export const onErrorSending = (errorStatus) => ({ type: ERROR_SENDING, errorStatus })
export const onDownloadRoute = () => ({ type: DOWNLOAD_ROUTE })
export const testMain = () => ({ type: TEST_MAIN })


const setSites = (data) => ({ type: SET_SITES, data })

export const getSites = () => (dispatch) => {
    MainDataApi.getSites()
        .then(data => {
                dispatch(setSites(data))
                console.log(data)
            }
        )
}

