import { connect } from "react-redux";
import { onTestingForm, onTestingFormText } from "../../../BLL/main_state_data_reducer";
import { onMotherPhoneNumber, onFatherPhoneNumber, onParrentEmail} from "../../../BLL/parrent_data_reducer";
import ContactData from "./contact_data";

export const mapStateToProps = (state) => {
    return (
        {
            motherPhoneNumber: state.parrentData.motherPhoneNumber,
            fatherPhoneNumber: state.parrentData.fatherPhoneNumber,
            parrentEmail: state.parrentData.parrentEmail,
            chosenSite: state.mainData.chosenSite,
            chosenPackage: state.mainData.chosenPackage,
            chosenFrequency: state.mainData.chosenFrequency,
            chosenSchoolYear: state.mainData.chosenSchoolYear,
            parrentName: state.parrentData.parrentName,
            parrentIdCard: state.parrentData.parrentIdCard,
            parrentCity: state.parrentData.parrentCity,
            parrentZipCode: state.parrentData.parrentZipCode,
            parrentAddress: state.parrentData.parrentAddress,
            childName: state.childData.childName,
            childDayOfBirth: state.childData.childDayOfBirth,
            testingFormText: state.mainData.testingFormText,
            testingForm: state.mainData.testingForm,
            agreementRoute: state.mainData.agreementRoute,
        }
    )
}

export const ContactDataContainer = connect(mapStateToProps, {onMotherPhoneNumber, onFatherPhoneNumber, 
    onParrentEmail, onTestingForm, onTestingFormText})(ContactData)