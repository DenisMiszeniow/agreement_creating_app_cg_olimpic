
import { connect } from "react-redux";
import { onDownloadRoute } from "../../BLL/main_state_data_reducer";
import Agreement from "./agreement_ready";

export const mapStateToProps = (state) => {
    return (
        {
            //mainData
            forecastDate: state.mainData.forecastDate,
            chosenSite: state.mainData.chosenSite,
            chosenPackage: state.mainData.chosenPackage,
            chosenFrequency: state.mainData.chosenFrequency,
            chosenSchoolYear: state.mainData.chosenSchoolYear,
            calculatePrice: state.mainData.calculatePrice,
            calculatePriceInWords: state.mainData.calculatePriceInWords,
            priceCjk: state.mainData.priceCjk,
            priceCjkWord: state.mainData.priceCjkWord,
            companyName: state.mainData.companyName,
            companyAdress: state.mainData.companyAdress,
            companyNip: state.mainData.companyNip,
            companyRegon: state.mainData.companyRegon,
            ownerName: state.mainData.ownerName,
            bankAccount: state.mainData.bankAccount,
            //parrentData
            parrentName: state.parrentData.parrentName,
            parrentIdCard: state.parrentData.parrentIdCard,
            parrentCity: state.parrentData.parrentCity,
            parrentZipCode: state.parrentData.parrentZipCode,
            parrentAddress: state.parrentData.parrentAddress,
            motherPhoneNumber: state.parrentData.motherPhoneNumber,
            fatherPhoneNumber: state.parrentData.fatherPhoneNumber,
            parrentEmail: state.parrentData.parrentEmail,
            //childData
            childName: state.childData.childName,
            childDayOfBirth: state.childData.childDayOfBirth,
            childCheckbox: state.childData.childCheckbox,
            
            //agreementVisibility
            agreementVisibility: state.mainData.agreementVisibility,
            //routing
            downloadRoute: state.mainData.downloadRoute,
            acceptAgreement: state.mainData.acceptAgreement,

        }
    )
}

export const mapDispatchToProps = (dispatch) => {
    return (
        {
            onDownloadRoute: () => {dispatch(onDownloadRoute())}
        }
    )
}

export const AgreementReadyContainer = connect(mapStateToProps, mapDispatchToProps)(Agreement)