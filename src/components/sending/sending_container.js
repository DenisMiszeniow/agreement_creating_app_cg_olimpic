
import { connect } from "react-redux";
import Sending from "./sending";
import { onErrorSending, onLoader, onSendingMainClear } from '../../BLL/main_state_data_reducer'
import { onSendingParrentDataClear } from "../../BLL/parrent_data_reducer";
import { onSendingChildDataClear } from "../../BLL/child_data_reducer";
import { useNavigate } from "react-router-dom";



export const mapStateToProps = (state) => {
    return (
        {
            //mainData
            chosenSite: state.mainData.chosenSite,
            chosenPackage: state.mainData.chosenPackage,
            chosenFrequency: state.mainData.chosenFrequency,
            calculatePrice: state.mainData.calculatePrice,
            priceCjk: state.mainData.priceCjk,
            priceCjkWord: state.mainData.priceCjkWord,
            ownerName: state.mainData.ownerName,
            bankAccount: state.mainData.bankAccount,
            //parrentData
            parrentName: state.parrentData.parrentName,
            motherPhoneNumber: state.parrentData.motherPhoneNumber,
            fatherPhoneNumber: state.parrentData.fatherPhoneNumber,
            parrentEmail: state.parrentData.parrentEmail,
            //childData
            childName: state.childData.childName,
            childDayOfBirth: state.childData.childDayOfBirth,
            //otherData
            sendingText: state.mainData.sendingText,
            errorText: state.mainData.errorText,
            loader: state.mainData.loader,
            lastPage: state.mainData.lastPage
        }
    )
}

export const mapDispatchToProps = (dispatch) => {
    return (
        {
            onSendingMainClear: () => {dispatch(onSendingMainClear())},
            onSendingParrentDataClear: () => {dispatch(onSendingParrentDataClear())},
            onSendingChildDataClear: () => {dispatch(onSendingChildDataClear())},
            onLoader: () => {dispatch(onLoader())},
            onErrorSending: () => {dispatch(onErrorSending())}
        }
    )
}

export const SendingContainer = connect(mapStateToProps, mapDispatchToProps)(Sending)