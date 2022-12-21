import { connect } from "react-redux";
import { onTestingForm, onTestingFormText } from "../../../BLL/main_state_data_reducer.ts";
import { onMotherPhoneNumber, onFatherPhoneNumber, onParrentEmail} from "../../../BLL/parrent_data_reducer.ts";
import { getChildDayOfBirthSelector, getChildNameSelector } from "../../../BLL/Selectors/child_data_selectors";
import { getCheckFormText, getContactDataText } from "../../../BLL/Selectors/locales_selectors";
import { getAgreementRouteSelector, getChosenFrequencySelector, getChosenPackageSelector, getChosenSchoolYearSelector, getChosenSiteSelector, getTestingFormSelector, getTestingFormTextSelector } from "../../../BLL/Selectors/main_state_selectors";
import { getFatherNumberSelector, getMotherNumberSelector, getParentAddressSelector, getParentCitySelector, getParentEmailSelector, getParentIdCardSelector, getParentNameSelector, getParentZipCodeSelector } from "../../../BLL/Selectors/parent_data_selectors";
import ContactData from "./contact_data";

export const mapStateToProps = (state) => {
    return (
        {
            motherPhoneNumber: getMotherNumberSelector(state),
            fatherPhoneNumber: getFatherNumberSelector(state),
            parrentEmail: getParentEmailSelector(state),
            chosenSite: getChosenSiteSelector(state),
            chosenPackage: getChosenPackageSelector(state),
            chosenFrequency: getChosenFrequencySelector(state),
            chosenSchoolYear: getChosenSchoolYearSelector(state),
            parrentName: getParentNameSelector(state),
            parrentIdCard: getParentIdCardSelector(state),
            parrentCity: getParentCitySelector(state),
            parrentZipCode: getParentZipCodeSelector(state),
            parrentAddress: getParentAddressSelector(state),
            childName: getChildNameSelector(state),
            childDayOfBirth: getChildDayOfBirthSelector(state),
            testingFormText: getTestingFormTextSelector(state),
            testingForm: getTestingFormSelector(state),
            agreementRoute: getAgreementRouteSelector(state),
            localesTexts: getContactDataText(state),
            checkLocalesTexts: getCheckFormText(state)
        }
    )
}

export const ContactDataContainer = connect(mapStateToProps, {onMotherPhoneNumber, onFatherPhoneNumber, 
    onParrentEmail, onTestingForm, onTestingFormText})(ContactData)