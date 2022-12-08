

export const getSitesSelector = state => state.mainData.institution
export const getChosenSiteSelector = state => state.mainData.chosenSite
export const getPackageSelector = state => state.mainData.package
export const getChosenPackageSelector = state => state.mainData.chosenPackage
export const getChosenFrequencySelector = state => state.mainData.chosenFrequency
export const getSchoolYearSelector = state => state.mainData.schoolYear
export const getChosenSchoolYearSelector = state => state.mainData.chosenSchoolYear
export const getFrequencySelector = state => state.mainData.frequency
export const getSiteOwnerSelector = state => state.mainData.chosenSiteFullData.owner
export const getOnceRequestSelector = state => state.mainData.onceRequest
export const getTestingFormTextSelector = state => state.mainData.testingFormText
export const getTestingFormSelector = state => state.mainData.testingForm
export const getAgreementRouteSelector = state => state.mainData.agreementRoute
export const getCurrentDateSelector = state => state.mainData.currentDate
export const getcalCulatePrice = state => state.mainData.calculatePrice
export const getCalculatePriceInWords = state => state.mainData.calculatePriceInWords
export const getPriceCjk = state => state.mainData.prices.priceCjk
export const getPriceCjkWord = state => state.mainData.prices.priceCjkWord
export const getCompanyData = state => state. mainData.companyData
export const getCompanyName = state => state.mainData.companyData.companyName
export const getCompanyAddress = state => state.mainData.companyData.companyAdress
export const getCompanyNip = state => state.mainData.companyData.companyNip
export const getCompanyRegon = state => state.mainData.companyData.companyRegon
export const getOwnerName = state => state.mainData.companyData.ownerName
export const getBankAccount = state => state.mainData.companyData.bankAccount
export const getDownloadRoute = state => state.mainData.downloadRoute
export const getAcceptAgreement = state => state.mainData.acceptAgreement
export const getLoader = state => state.mainData.loader
export const getShowLastPage = state => state.mainData.lastPage
export const getPackages = state => state.mainData.packageOptions
export const getFrequency = state => state.mainData.frequencyOptions



