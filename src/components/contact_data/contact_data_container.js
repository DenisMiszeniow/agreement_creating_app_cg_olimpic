import { connect } from "react-redux";
import { onMotherPhoneNumber, onFatherPhoneNumber, onParrentEmail} from "../../BLL/parrent_data_reducer";
import ContactData from "./contact_data";

export const mapStateToProps = (state) => {
    return (
        {
            motherPhoneNumber: state.parrentData.motherPhoneNumber,
            fatherPhoneNumber: state.parrentData.fatherPhoneNumber,
            parrentEmail: state.parrentData.parrentEmail,
            priceNumber: state.mainData.calculatePrice,
        }
    )
}

export const mapDispatchToProps = (dispatch) => {
    return (
        {
            onMotherPhoneNumber: (valueMotherPhoneNumber) => {dispatch(onMotherPhoneNumber(valueMotherPhoneNumber))},
            onFatherPhoneNumber: (valueFatherPhoneNumber) => {dispatch(onFatherPhoneNumber(valueFatherPhoneNumber))},
            onParrentEmail: (valueParrentEmail) => {dispatch(onParrentEmail(valueParrentEmail))},
        }
    )
}

export const ContactDataContainer = connect(mapStateToProps, mapDispatchToProps)(ContactData)