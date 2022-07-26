const VALUE_SITE = 'VALUE_SITE'
const VALUE_PACKAGE = 'VALUE PACKAGE'
const VALUE_FREQUENCY = 'VALUE_FREQUENCY'

const initialState = {
    forecastDate: new Date(),
    schoolYear:[
        '2022/2023',
        '2023/2024'
    ],
    institution: [
        {
            site: 'OKiDZ Edukacja Sp. z o.o. - Krakowska 56-62, 50-425 Wrocław', 
            id: 1,
            package: [
                'GRUPA POCZĄTKUJĄCA (60 min)',
                'GRUPA KONTYNUUJĄCA (60 min)',
                'GRUPA KONTYNUUJĄCA (90 min)'
            ],
            frequency: [
                '1-x w tygodniu',
                '2-x w tygodniu'
            ]
        },
        {
            site: 'ZSEO we Wrocławiu - Drukarska 50, 53-310 Wrocław', 
            id:2,
            package: [
                'GRUPA POCZĄTKUJĄCA (60 min)',
                'GRUPA KONTYNUUJĄCA (90 min)'
            ],
            frequency: [
                '1-x w tygodniu',
                '2-x w tygodniu'
            ]
        },
        {
            site: 'Zespół Szkół NR 3 - Szkocka 64, 54-402 Wrocław', 
            id:3,
            package: [
                'GRUPA POCZĄTKUJĄCA (60 min)',
                'GRUPA KONTYNUUJĄCA (90 min)'
            ],
            frequency: [
                '1-x w tygodniu',
                '2-x w tygodniu'
            ]
        },
        {
            site: 'Technikum NR 18 - Ślężna 2-24 (Naprzeciwko CH Wroclawia), 53-302 Wrocław', 
            id:4,
            package: [
                'GRUPA POCZĄTKUJĄCA (60 min)',
                'GRUPA KONTYNUUJĄCA (90 min)'
            ],
            frequency: [
                '1-x w tygodniu',
                '2-x w tygodniu'
            ]
        },
        {
            site: 'Szkoła Podstawowa NR 9 - Nyska 66, 50-505 Wrocław', 
            id:5,
            package: [
                'GRUPA POCZĄTKUJĄCA (60 min)',
                'GRUPA KONTYNUUJĄCA (60 min)'
            ],
            frequency: [
                '1-x w tygodniu',
                '2-x w tygodniu'
            ]
        },
        {
            site: 'Klub Samuraj - Bałtycka 19, 51-109 Wrocław', 
            id:6,
            package: [
                'GRUPA POCZĄTKUJĄCA (60 min)',
                'GRUPA POCZĄTKUJĄCA (90 min)'
            ],
            frequency: [
                '1-x w tygodniu',
                '2-x w tygodniu'
            ]
        },
        {
            site: 'Liceum Ogólnokształcące nr VII - Krucza 49, 53-410 Wrocław', 
            id:7,
            package: [
                'GRUPA POCZĄTKUJĄCA (60 min)'
            ],
            frequency: [
                '1-x w tygodniu',
                '2-x w tygodniu'
            ]
        },
        {
            site: 'Szkoła Podstawowa nr 61 - Skarbowców 8, 53-025 Wrocław', 
            id:8,
            package: [
                'GRUPA POCZĄTKUJĄCA (60 min)',
                'GRUPA KONTYNUUJĄCA (90 min)'
            ],
            frequency: [
                '1-x w tygodniu',
                '2-x w tygodniu'
            ]
        },
        {
            site: 'Szkoła Podstawowa nr 33 - Kolista 17, 43-152 Wrocław', 
            id:9,
            package: [
                'GRUPA POCZĄTKUJĄCA (60 min)',
                'GRUPA KONTYNUUJĄCA (90 min)'
            ],
            frequency: [
                '1-x w tygodniu',
                '2-x w tygodniu'
            ]
        },
        {
            site: 'Świetlica Wiejska - Główna 47, 55-080 Smolec', 
            id:10,
            package: [
                'GRUPA POCZĄTKUJĄCA (60 min)',
                'GRUPA POCZĄTKUJĄCA (90 min)'
            ],
            frequency: [
                '1-x w tygodniu'
            ]
        },
        {
            site: 'Szkoła Podstawowa W Kobierzycach - Parkowa 7, 55-040 Kobierzyce', 
            id:11,
            package: [
                'GRUPA POCZĄTKUJĄCA (90 min)'
            ],
            frequency: [
                '1-x w tygodniu',
                '2-x w tygodniu'
            ]
        },
        {
            site: 'GRUPY SAAWANSOWANE', 
            id:12,
            package: [
                'GRUPA ZAAWANSOWANA'
            ],
            frequency: [
                '2-x w tygodniu',
                '3-x w tygodniu',
                '4-x w tygodniu'
            ]
        }
    ],
    // parentChoice: '',
    price: 0,
    priceInWords: '',
    chosenSite: '',
    chosenPackage: '',
    chosenFrequency: '',
    companyName: 'CG-Olimpic Olga Mishenova',
    companyAdress: '52-129 Wrocław, ul. Johanna Straussa 28/2',
    companyNip: 8992891301,
    companyRegon: 387860642,
    ownerName: 'Olga Mishenova',
    bankAccount: '44 1050 1575 1000 0092 8223 1399'
}

export const mainStateDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case VALUE_SITE: return ({...state, chosenSite: action.valueSite})
        case VALUE_PACKAGE: return ({...state, chosenPackage: action.valuePackage})
        case VALUE_FREQUENCY: return ({...state, chosenFrequency: action.valueFrequency}) 
        default: return {...state}
    }

}


export const onChosenSite = (valueSite) => ({type: VALUE_SITE, valueSite})
export const onChosenPackage = (valuePackage) => ({type: VALUE_PACKAGE, valuePackage})
export const onChosenFrequency = (valueFrequency) => ({type:VALUE_FREQUENCY, valueFrequency})