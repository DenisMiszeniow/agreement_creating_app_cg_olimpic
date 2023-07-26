import { AppStateType } from './../../BLL/store';

import { connect } from "react-redux";
import { compose } from "redux";
import { withLocales } from "../../HOC/withLocales";
//@ts-ignore
import { setLocalesThunk } from '../../BLL/locales_reducer.ts'
import {
    getBankAccount, getcalCulatePrice, getCalculatePriceInWords,
    getChosenFrequencySelector, getChosenPackageSelector, getChosenSchoolYearSelector,
    getChosenSiteSelector, getCompanyAddress, getCompanyKRS, getCompanyName, getCompanyNip, getCompanyRegon,
    getCurrentDateSelector, getOwnerName, getPriceCjk, getPriceCjkWord
    //@ts-ignore
} from "../../BLL/Selectors/main_state_selectors.ts";
import {
    getFatherNumberSelector, getMotherNumberSelector, getParentAddressSelector,
    getParentCitySelector, getParentEmailSelector, getParentIdCardSelector, getParentNameSelector,
    getParentZipCodeSelector
    //@ts-ignore
} from "../../BLL/Selectors/parent_data_selectors.ts";
//@ts-ignore
import { getChildCheckboxSelector, getChildDayOfBirthSelector, getChildNameSelector } from "../../BLL/Selectors/child_data_selectors.ts";
//@ts-ignore
import { getDownloadSection, getDownloadText } from "../../BLL/Selectors/locales_selectors.ts";
import { lazy } from "react";
import { withLazyLoading } from "../../HOC/withLazyLoading";
import { DownloadTextType } from '../../types/types';
//@ts-ignore
const Downloading = lazy(() => import('./downloading.tsx'))

type MapStateToPropsType = {
    currentDate: Date
    chosenSite: string
    chosenPackage: string
    chosenFrequency: string
    chosenSchoolYear: string
    calculatePrice: number
    calculatePriceInWords: string
    priceCjk: number
    priceCjkWord: string
    companyName: string
    companyAdress: string
    companyNip: string
    companyRegon: string
    companyKRS: string
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

    //locales texts
    localesTexts: DownloadTextType,
    downloadSection: string
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
            companyName: getCompanyName(state),
            companyAdress: getCompanyAddress(state),
            companyNip: getCompanyNip(state),
            companyRegon: getCompanyRegon(state),
            companyKRS: getCompanyKRS(state),
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

            //locales texts
            localesTexts: getDownloadText(state),
            downloadSection: getDownloadSection(state),

        }
    )
}
//@ts-ignore
export const DownloadingContainer = compose(connect(mapStateToProps, { setLocalesThunk }), withLocales)(withLazyLoading(Downloading))