import { AppStateType } from './../../BLL/store';

import { connect } from "react-redux";
//@ts-ignore
import { onErrorSending, onLoader, onSendingMainClear } from '../../BLL/main_state_data_reducer.ts'
//@ts-ignore
import { onSendingParrentDataClear } from "../../BLL/parrent_data_reducer.ts";
//@ts-ignore
import { onSendingChildDataClear } from "../../BLL/child_data_reducer.ts";
import { compose } from "redux";
import {withLocales} from '../../HOC/withLocales' 
//@ts-ignore
import {setLocalesThunk, ErrorSendingText, sendingText} from '../../BLL/locales_reducer.ts'
import { getBankAccount, getcalCulatePrice, getChosenFrequencySelector, getChosenPackageSelector, 
    getChosenSiteSelector, getShowLastPage, getLoader, getOwnerName, getPriceCjk, 
    //@ts-ignore
    getPriceCjkWord, 
    getChosenSchoolYearSelector} from "../../BLL/Selectors/main_state_selectors.ts";
import { getFatherNumberSelector, getMotherNumberSelector, getParentEmailSelector, 
    //@ts-ignore
    getParentNameSelector } from "../../BLL/Selectors/parent_data_selectors.ts";
    //@ts-ignore
import { getChildCheckboxSelector, getChildDayOfBirthSelector, getChildNameSelector } from "../../BLL/Selectors/child_data_selectors.ts";
//@ts-ignore
import { getErrorText, getSendingSection, getSendingText } from "../../BLL/Selectors/locales_selectors.ts";
import { lazy } from "react";
import { withLazyLoading } from "../../HOC/withLazyLoading";
import { SendingTextType } from "../../types/types.js";

//@ts-ignore
const Sending = lazy (() => import ('./sending.tsx'))

type MapStateToPropsType = {
    //mainData
    chosenSite: string
    chosenPackage: string
    chosenFrequency: string
    chosenSchoolYear: string
    calculatePrice: number
    priceCjk: number
    priceCjkWord: string
    ownerName: string | undefined
    bankAccount: string | undefined
    //parrentData
    parrentName: string
    motherPhoneNumber: string
    fatherPhoneNumber: string
    parrentEmail: string
    //childData
    childName: string
    childDayOfBirth: string
    childCheckbox: boolean
    //otherData
    loader: boolean
    lastPage: boolean
    //locales
    localesTexts: SendingTextType
    section: string
    errorText: string
}


export const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return (
        {
            //mainData
            chosenSite: getChosenSiteSelector(state),
            chosenPackage: getChosenPackageSelector(state),
            chosenFrequency: getChosenFrequencySelector(state),
            chosenSchoolYear: getChosenSchoolYearSelector(state),
            calculatePrice: getcalCulatePrice(state),
            priceCjk: getPriceCjk(state),
            priceCjkWord: getPriceCjkWord(state),
            ownerName: getOwnerName(state),
            bankAccount: getBankAccount(state),
            //parrentData
            parrentName: getParentNameSelector(state),
            motherPhoneNumber: getMotherNumberSelector(state),
            fatherPhoneNumber: getFatherNumberSelector(state),
            parrentEmail: getParentEmailSelector(state),
            //childData
            childName: getChildNameSelector(state),
            childDayOfBirth: getChildDayOfBirthSelector(state),
            childCheckbox: getChildCheckboxSelector(state),
            //otherData
            loader: getLoader(state),
            lastPage: getShowLastPage(state),
            //locales
            localesTexts: getSendingText(state),
            section: getSendingSection(state),
            errorText: getErrorText(state)
        }
    )
}



export const SendingContainer = compose(connect(mapStateToProps, {onSendingMainClear, onSendingParrentDataClear, onSendingChildDataClear,
    //@ts-ignore 
    onLoader, onErrorSending, setLocalesThunk, ErrorSendingText, sendingText}), withLocales)(withLazyLoading(Sending))
