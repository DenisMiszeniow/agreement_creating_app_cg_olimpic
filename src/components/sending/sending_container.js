
import { connect } from "react-redux";
import Sending from "./sending";
import { onErrorSending, onLoader, onSendingMainClear } from '../../BLL/main_state_data_reducer'
import { onSendingParrentDataClear } from "../../BLL/parrent_data_reducer";
import { onSendingChildDataClear } from "../../BLL/child_data_reducer";
import { compose } from "redux";
import {withLocales} from '../../HOC/withLocales' 
import {sendingLocalesThunk, ErrorSendingText, sendingText} from '../../BLL/locales_reducer'



export const mapStateToProps = (state) => {
    return (
        {
            //mainData
            chosenSite: state.mainData.chosenSite,
            chosenPackage: state.mainData.chosenPackage,
            chosenFrequency: state.mainData.chosenFrequency,
            calculatePrice: state.mainData.calculatePrice,
            priceCjk: state.mainData.prices.priceCjk,
            priceCjkWord: state.mainData.prices.priceCjkWord,
            ownerName: state.mainData.companyData.ownerName,
            bankAccount: state.mainData.companyData.bankAccount,
            //parrentData
            parrentName: state.parrentData.parrentName,
            motherPhoneNumber: state.parrentData.motherPhoneNumber,
            fatherPhoneNumber: state.parrentData.fatherPhoneNumber,
            parrentEmail: state.parrentData.parrentEmail,
            //childData
            childName: state.childData.childName,
            childDayOfBirth: state.childData.childDayOfBirth,
            childCheckbox: state.childData.childCheckbox,
            //otherData
            // sendingText: state.mainData.sendingText,
            // errorText: state.mainData.errorText,
            loader: state.mainData.loader,
            lastPage: state.mainData.lastPage,
            //locales
            localesTexts: state.localesReducer.sendingTexts,
            section: state.localesReducer.section.sending,
            sendingButtonText: state.localesReducer.sendingButtonText,
            errorText: state.localesReducer.errorSendingText
        }
    )
}



export const SendingContainer = compose(connect(mapStateToProps, {onSendingMainClear, onSendingParrentDataClear, onSendingChildDataClear, 
    onLoader, onErrorSending, sendingLocalesThunk, ErrorSendingText, sendingText}), withLocales)(Sending)
