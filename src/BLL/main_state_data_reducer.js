const VALUE_SITE = 'VALUE_SITE'
const VALUE_PACKAGE = 'VALUE PACKAGE'
const VALUE_FREQUENCY = 'VALUE_FREQUENCY'

//---OLGA SITES-----------
const olga1 = 'OKiDZ Edukacja Sp. z o.o. - Krakowska 56-62, 50-425 Wrocław'
const olga2 = 'ZSEO we Wrocławiu - Drukarska 50, 53-310 Wrocław'
const olga3 = 'Technikum NR 18 - Ślężna 2-24 (Naprzeciwko CH Wroclawia), 53-302 Wrocław'
const olga4 = 'Szkoła Podstawowa NR 9 - Nyska 66, 50-505 Wrocław'
const olga5 = 'Klub Samuraj - Bałtycka 19, 51-109 Wrocław'
const olga6 = 'Liceum Ogólnokształcące nr VII - Krucza 49, 53-410 Wrocław'

//---LIZA SITES-----------
const liza1 = 'Zespół Szkół NR 3 - Szkocka 64, 54-402 Wrocław'
const liza2 = 'Szkoła Podstawowa nr 61 - Skarbowców 8, 53-025 Wrocław'
const liza3 = 'Szkoła Podstawowa nr 33 - Kolista 17, 43-152 Wrocław'
const liza4 = 'Świetlica Wiejska - Główna 47, 55-080 Smolec'
const liza5 = 'Szkoła Podstawowa W Kobierzycach - Parkowa 7, 55-040 Kobierzyce'

const initialState = {
    forecastDate: new Date(),
    schoolYear:[
        '2022/2023',
    ],
    institution: [
        {site: olga1, id:1},
        {site: olga2, id:2},
        {site: liza1, id:3},
        {site: olga3, id:4},
        {site: olga4, id:5},
        {site: olga5, id:6},
        {site: olga6, id:7},
        {site: liza2, id:8},
        {site: liza3, id:9},
        {site: liza4, id:10},
        {site: liza5, id:11},
    ],
    // parentChoice: '',
    price: 0,
    priceInWords: '',
    chosenSite: '',
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
}

export const mainStateDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case VALUE_SITE:  
            const newState = {...state}
            newState.chosenSite = action.valueSite
            newState.chosenPackage = ''
            if ((newState.chosenSite === liza1) || (newState.chosenSite ===liza2) || (newState.chosenSite ===liza3) || (newState.chosenSite ===liza4) || (newState.chosenSite ===liza5)) {
                newState.companyName = 'CG-Olimpic Ielyzaveta Kanarova'
                newState.bankAccount = '72 1050 1575 1000 0092 8876 4427'
                newState.companyNip = '8992904995'
                newState.companyRegon = '389760554'
                newState.companyAdress ='53-024 Wrocław, ul. Wietrzna 137/13'
                newState.ownerName = 'Ielyzaveta Kanarova'
            } else {
                newState.companyName = 'CG-Olimpic Olga Mishenova'
                newState.bankAccount = '44 1050 1575 1000 0092 8223 1399'
                newState.companyNip = '8992891301'
                newState.companyRegon = '387860642'
                newState.companyAdress ='52-129 Wrocław, ul. Johanna Straussa 28/2'
                newState.ownerName = 'Olga Mishenova'
            }
            if (newState.chosenSite == olga1){
                 newState.package = [
                    'GRUPA POCZĄTKUJĄCA (60 min)',
                    'GRUPA KONTYNUUJĄCA (60 min)',
                    'GRUPA KONTYNUUJĄCA (90 min)'
                ]
            }
            if ((newState.chosenSite === olga2) || (newState.chosenSite === olga3) || (newState.chosenSite === liza1) || (newState.chosenSite === liza2) || (newState.chosenSite === liza3)) {
                newState.package = [
                    'GRUPA POCZĄTKUJĄCA (60 min)',
                    'GRUPA KONTYNUUJĄCA (90 min)'
                ]
            }
            if (newState.chosenSite === olga4) {
                newState.package = [
                    'GRUPA POCZĄTKUJĄCA (60 min)',
                    'GRUPA KONTYNUUJĄCA (60 min)'
                ]
            }
            if ((newState.chosenSite == olga5) || (newState.chosenSite === liza4)) {
                newState.package = [
                    'GRUPA POCZĄTKUJĄCA (60 min)',
                    'GRUPA POCZĄTKUJĄCA (90 min)'
                ]
            }
            if (newState.chosenSite === olga6) {
                newState.package = [
                    'GRUPA POCZĄTKUJĄCA (60 min)'
                ]
            }
            if (newState.chosenSite === liza5) {
                newState.package = [
                    'GRUPA POCZĄTKUJĄCA (90 min)'
                ]
            }
        return newState
        case VALUE_PACKAGE: return ({...state, chosenPackage: action.valuePackage})
        case VALUE_FREQUENCY: return ({...state, chosenFrequency: action.valueFrequency}) 
        default: return {...state}
    }

}

export const onChosenSite = (valueSite) => ({type: VALUE_SITE, valueSite})
export const onChosenPackage = (valuePackage) => ({type: VALUE_PACKAGE, valuePackage})
export const onChosenFrequency = (valueFrequency) => ({type:VALUE_FREQUENCY, valueFrequency})