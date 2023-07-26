import { AppStateType } from './../store';


export const getSitesSelector = (state: AppStateType) => state.mainData.institution
export const getChosenSiteSelector = (state: AppStateType) => state.mainData.chosenSite
export const getPackageSelector = (state: AppStateType) => state.mainData.package
export const getChosenPackageSelector = (state: AppStateType) => state.mainData.chosenPackage
export const getChosenFrequencySelector = (state: AppStateType) => state.mainData.chosenFrequency
export const getSchoolYearSelector = (state: AppStateType) => state.mainData.schoolYear
export const getChosenSchoolYearSelector = (state: AppStateType) => state.mainData.chosenSchoolYear
export const getFrequencySelector = (state: AppStateType) => state.mainData.frequency
export const getSiteOwnerSelector = (state: AppStateType) => state.mainData.chosenSiteFullData.owner
export const getOnceRequestSelector = (state: AppStateType) => state.mainData.onceRequest
export const getTestingFormTextSelector = (state: AppStateType) => state.mainData.testingFormText
export const getTestingFormSelector = (state: AppStateType) => state.mainData.testingForm
export const getAgreementRouteSelector = (state: AppStateType) => state.mainData.agreementRoute
export const getCurrentDateSelector = (state: AppStateType) => state.mainData.currentDate
export const getcalCulatePrice = (state: AppStateType) => state.mainData.calculatePrice
export const getCalculatePriceInWords = (state: AppStateType) => state.mainData.calculatePriceInWords
export const getPriceCjk = (state: AppStateType) => state.mainData.prices.priceCjk
export const getPriceCjkWord = (state: AppStateType) => state.mainData.prices.priceCjkWord
export const getCompanyData = (state: AppStateType) => state.mainData.companyData
export const getCompanyName = (state: AppStateType) => state.mainData.companyData.companyName
export const getCompanyAddress = (state: AppStateType) => state.mainData.companyData.companyAdress
export const getCompanyNip = (state: AppStateType) => state.mainData.companyData.companyNip
export const getCompanyRegon = (state: AppStateType) => state.mainData.companyData.companyRegon
export const getCompanyKRS = (state: AppStateType) => state.mainData.companyData.companyKRS
export const getOwnerName = (state: AppStateType) => state.mainData.companyData.ownerName
export const getBankAccount = (state: AppStateType) => state.mainData.companyData.bankAccount
export const getDownloadRoute = (state: AppStateType) => state.mainData.downloadRoute
export const getAcceptAgreement = (state: AppStateType) => state.mainData.acceptAgreement
export const getLoader = (state: AppStateType) => state.mainData.loader
export const getShowLastPage = (state: AppStateType) => state.mainData.lastPage
export const getPackages = (state: AppStateType) => state.mainData.packageOptions
export const getFrequency = (state: AppStateType) => state.mainData.frequencyOptions



