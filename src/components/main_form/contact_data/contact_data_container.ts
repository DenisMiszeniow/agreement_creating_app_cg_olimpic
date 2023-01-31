import { AppStateType } from './../../../BLL/store';
import { connect } from "react-redux";
//@ts-ignore
import { onTestingForm, onTestingFormText } from "../../../BLL/main_state_data_reducer.ts";
//@ts-ignore
import { onMotherPhoneNumber, onFatherPhoneNumber, onParrentEmail } from "../../../BLL/parrent_data_reducer.ts";
//@ts-ignore
import { getChildDayOfBirthSelector, getChildNameSelector } from "../../../BLL/Selectors/child_data_selectors.ts";
//@ts-ignore
import { getCheckFormText, getContactDataText } from "../../../BLL/Selectors/locales_selectors.ts";
import {
    getAgreementRouteSelector, getChosenFrequencySelector, getChosenPackageSelector, getChosenSchoolYearSelector,
    //@ts-ignore
    getChosenSiteSelector, getTestingFormSelector, getTestingFormTextSelector
    //@ts-ignore
} from "../../../BLL/Selectors/main_state_selectors.ts";
import {
    getFatherNumberSelector, getMotherNumberSelector, getParentAddressSelector, getParentCitySelector,
    getParentEmailSelector, getParentIdCardSelector, getParentNameSelector,
    //@ts-ignore
    getParentZipCodeSelector
    //@ts-ignore
} from "../../../BLL/Selectors/parent_data_selectors.ts";
//@ts-ignore
import ContactData from "./contact_data.tsx";
import { CheckFormTextType, ContactDataTextType } from "../../../types/types.js";

type MapStateToPropsType = {
    motherPhoneNumber: string
    fatherPhoneNumber: string
    parrentEmail: string
    chosenSite: string
    chosenPackage: string
    chosenFrequency: string
    chosenSchoolYear: string
    parrentName: string
    parrentIdCard: string
    parrentCity: string
    parrentZipCode: string
    parrentAddress: string
    childName: string
    childDayOfBirth: string
    testingFormText: string
    testingForm: boolean
    agreementRoute: string
    localesTexts: ContactDataTextType
    checkLocalesTexts: CheckFormTextType
}

export const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
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

export const ContactDataContainer = connect(mapStateToProps, {
    onMotherPhoneNumber, onFatherPhoneNumber,
    onParrentEmail, onTestingForm, onTestingFormText
})(ContactData)