import { AppStateType } from './../../BLL/store';

import { connect } from "react-redux";
import { compose } from "redux";
//@ts-ignore
import { onDownloadRoute } from "../../BLL/main_state_data_reducer.ts";
import { withLocales } from "../../HOC/withLocales";
//@ts-ignore
import { setLocalesThunk } from '../../BLL/locales_reducer.ts'
import { getAcceptAgreement, getBankAccount, getcalCulatePrice, getCalculatePriceInWords, 
    getChosenFrequencySelector, getChosenPackageSelector, getChosenSchoolYearSelector, 
    getChosenSiteSelector, getCompanyAddress, getCompanyName, getCompanyNip, getCompanyRegon, 
    getCurrentDateSelector, getDownloadRoute, getOwnerName, getPriceCjk, getPriceCjkWord, 
    //@ts-ignore
    getCompanyData } from "../../BLL/Selectors/main_state_selectors.ts";
import { getFatherNumberSelector, getMotherNumberSelector, getParentAddressSelector, getParentCitySelector, 
    getParentEmailSelector, getParentIdCardSelector, getParentNameSelector, 
    //@ts-ignore
    getParentZipCodeSelector } from "../../BLL/Selectors/parent_data_selectors.ts";
//@ts-ignore
import { getChildCheckboxSelector, getChildDayOfBirthSelector, getChildNameSelector } from "../../BLL/Selectors/child_data_selectors.ts";
//@ts-ignore
import { getAgreementReadySection, getAgreementReadyText } from "../../BLL/Selectors/locales_selectors.ts";
import { withLazyLoading } from "../../HOC/withLazyLoading";
import { lazy } from "react";
import { AgreementReadyTextsType, CompanyDataType } from '../../types/types.js';
//@ts-ignore
const Agreement = lazy(() => import ('./agreement_ready.tsx'))

type MapStateToPropsType = {
    //mainData
    currentDate: Date
    chosenSite: string
    chosenPackage: string
    chosenFrequency: string
    chosenSchoolYear: string
    calculatePrice: number
    calculatePriceInWords: string
    priceCjk: number,
    priceCjkWord: string
    companyData: CompanyDataType
    companyName: string,
    companyAdress: string
    companyNip: string
    companyRegon: string
    ownerName: string
    bankAccount: string
    //parrentData
    parrentName: string
    parrentIdCard: string
    parrentCity: string
    parrentZipCode: string
    parrentAddress: string
    motherPhoneNumber: string
    fatherPhoneNumber: string
    parrentEmail: string
    //childData
    childName: string
    childDayOfBirth: string
    childCheckbox: boolean
    
    //routing
    downloadRoute: string
    acceptAgreement: boolean
    //section
    agreementReady: string,
    //locales data
    localesTexts: AgreementReadyTextsType
}

export const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return (
        {
            //mainData
            currentDate: getCurrentDateSelector(state),
            chosenSite: getChosenSiteSelector(state),
            chosenPackage: getChosenPackageSelector(state),
            chosenFrequency: getChosenFrequencySelector(state),
            chosenSchoolYear: getChosenSchoolYearSelector(state),
            calculatePrice: getcalCulatePrice(state),
            calculatePriceInWords: getCalculatePriceInWords(state),
            priceCjk: getPriceCjk(state),
            priceCjkWord: getPriceCjkWord(state),
            companyData: getCompanyData(state),
            companyName: getCompanyName(state),
            companyAdress: getCompanyAddress(state),
            companyNip: getCompanyNip(state),
            companyRegon: getCompanyRegon(state),
            ownerName: getOwnerName(state),
            bankAccount: getBankAccount(state),
            //parrentData
            parrentName: getParentNameSelector(state),
            parrentIdCard: getParentIdCardSelector(state),
            parrentCity: getParentCitySelector(state),
            parrentZipCode: getParentZipCodeSelector(state),
            parrentAddress: getParentAddressSelector(state),
            motherPhoneNumber: getMotherNumberSelector(state),
            fatherPhoneNumber: getFatherNumberSelector(state),
            parrentEmail: getParentEmailSelector(state),
            //childData
            childName: getChildNameSelector(state),
            childDayOfBirth: getChildDayOfBirthSelector(state),
            childCheckbox: getChildCheckboxSelector(state),
            
            //routing
            downloadRoute: getDownloadRoute(state),
            acceptAgreement: getAcceptAgreement(state),
            //section
            agreementReady: getAgreementReadySection(state),
            //locales data
            localesTexts: getAgreementReadyText(state)
        }
    )
}
export const AgreementReadyContainer = compose(connect(mapStateToProps, {
    //@ts-ignore
    onDownloadRoute, setLocalesThunk}), withLocales)(withLazyLoading(Agreement)) 
