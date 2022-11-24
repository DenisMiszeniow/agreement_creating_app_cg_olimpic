
import { connect } from "react-redux";
import Downloading from "./downloading";

export const mapStateToProps = (state) => {
    return (
        {
            //mainData
            currentDate: state.mainData.currentDate,
            chosenSite: state.mainData.chosenSite,
            chosenPackage: state.mainData.chosenPackage,
            chosenFrequency: state.mainData.chosenFrequency,
            chosenSchoolYear: state.mainData.chosenSchoolYear,
            calculatePrice: state.mainData.calculatePrice,
            calculatePriceInWords: state.mainData.calculatePriceInWords,
            priceCjk: state.mainData.prices.priceCjk,
            priceCjkWord: state.mainData.prices.priceCjkWord,
            companyName: state.mainData.companyData.companyName,
            companyAdress: state.mainData.companyData.companyAdress,
            companyNip: state.mainData.companyData.companyNip,
            companyRegon: state.mainData.companyData.companyRegon,
            ownerName: state.mainData.companyData.ownerName,
            bankAccount: state.mainData.companyData.bankAccount,
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

        }
    )
}

export const DownloadingContainer = connect(mapStateToProps)(Downloading)