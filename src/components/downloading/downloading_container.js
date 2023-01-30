
import { connect } from "react-redux";
import { compose } from "redux";
import { withLocales } from "../../HOC/withLocales";
import { setLocalesThunk } from '../../BLL/locales_reducer.ts'
import { getBankAccount, getcalCulatePrice, getCalculatePriceInWords, getChosenFrequencySelector, getChosenPackageSelector, getChosenSchoolYearSelector, getChosenSiteSelector, getCompanyAddress, getCompanyName, getCompanyNip, getCompanyRegon, getCurrentDateSelector, getDownloadRoute, getOwnerName, getPriceCjk, getPriceCjkWord } from "../../BLL/Selectors/main_state_selectors.ts";
import { getFatherNumberSelector, getMotherNumberSelector, getParentAddressSelector, getParentCitySelector, getParentEmailSelector, getParentIdCardSelector, getParentNameSelector, getParentZipCodeSelector } from "../../BLL/Selectors/parent_data_selectors.ts";
import { getChildCheckboxSelector, getChildDayOfBirthSelector, getChildNameSelector } from "../../BLL/Selectors/child_data_selectors.ts";
import { getDownloadSection, getDownloadText } from "../../BLL/Selectors/locales_selectors.ts";
import { lazy } from "react";
import { withLazyLoading } from "../../HOC/withLazyLoading";

const Downloading = lazy (() => import ('./downloading'))

export const mapStateToProps = (state) => {
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

export const DownloadingContainer = compose(connect(mapStateToProps, {setLocalesThunk}), withLocales)(withLazyLoading(Downloading))