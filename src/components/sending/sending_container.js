
import { connect } from "react-redux";
import { onErrorSending, onLoader, onSendingMainClear } from '../../BLL/main_state_data_reducer.ts'
import { onSendingParrentDataClear } from "../../BLL/parrent_data_reducer.ts";
import { onSendingChildDataClear } from "../../BLL/child_data_reducer.ts";
import { compose } from "redux";
import {withLocales} from '../../HOC/withLocales' 
import {setLocalesThunk, ErrorSendingText, sendingText} from '../../BLL/locales_reducer.ts'
import { getBankAccount, getcalCulatePrice, getChosenFrequencySelector, getChosenPackageSelector, getChosenSiteSelector, getShowLastPage, getLoader, getOwnerName, getPriceCjk, getPriceCjkWord } from "../../BLL/Selectors/main_state_selectors";
import { getFatherNumberSelector, getMotherNumberSelector, getParentEmailSelector, getParentNameSelector } from "../../BLL/Selectors/parent_data_selectors";
import { getChildCheckboxSelector, getChildDayOfBirthSelector, getChildNameSelector } from "../../BLL/Selectors/child_data_selectors";
import { getErrorText, getSendingButtonText, getSendingSection, getSendingText } from "../../BLL/Selectors/locales_selectors";
import { lazy } from "react";
import { withLazyLoading } from "../../HOC/withLazyLoading";

const Sending = lazy (() => import ('./sending'))



export const mapStateToProps = (state) => {
    return (
        {
            //mainData
            chosenSite: getChosenSiteSelector(state),
            chosenPackage: getChosenPackageSelector(state),
            chosenFrequency: getChosenFrequencySelector(state),
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
    onLoader, onErrorSending, setLocalesThunk, ErrorSendingText, sendingText}), withLocales)(withLazyLoading(Sending))
