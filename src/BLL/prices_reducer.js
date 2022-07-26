

const initialState = {
    priceJun60Ones: { price: 140, letter: 'Sto Czterdzieści zł 00/100' },
    priceJun90Ones: { price: 160, letter: 'Sto Sześćdziesiąt zł 00/100' },
    priceJun60Twise: { price: 240, letter: 'Dwieście Czterdzieści zł 00/100' },
    priceJun90Twise: { price: 260, letter: 'Dwieście Sześćdziesiąt zł 00/100' },
    priceMed60Ones: { price: 175, letter: 'Sto Siedemdziesiąt Pięć zł 00/100' },
    priceMed90Ones: { price: 195, letter: 'Sto Dziewięćdziesiąt Pięć zł 00/100' },
    priceMed60Twise: { price: 275, letter: 'Dwieście Siedemdziesiąt Pięć zł 00/100' },
    priceMed90Twice: { price: 295, letter: 'Dwieśćie Dziewięćdziesiąt Pięć zł 00/100' },
    priceSeniorTwise: { price: 295, letter: 'Dwieśćie Dziewięćdziesiąt Pięć zł 00/100' },
    priceSeniorTriple: { price: 300, letter: 'Trzysta zł 00/100' },
    priceSeniorQuatro: { price: 350, letter: 'Trzysta Pięćdziesiąt zł 00/100' },
}

export const pricesReducer = (state = initialState) => {
    return {...state}
}