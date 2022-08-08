import { connect } from "react-redux";
import { onParrentName, onParrentIdCard, onParrentCity, onParrentZipCode, onParrentAddress} from "../../BLL/parrent_data_reducer";
import ParrentData from "./parrent_data";

export const mapStateToProps = (state) => {
    return (
        {
            parrentName: state.parrentData.parrentName,
            parrentIdCard: state.parrentData.parrentIdCard,
            parrentCity: state.parrentData.parrentCity,
            parrentZipCode: state.parrentData.parrentZipCode,
            parrentAddress: state.parrentData.parrentAddress
        }
    )
}

export const mapDispatchToProps = (dispatch) => {
    return (
        {
            onParrentName: (valueName) => {dispatch(onParrentName(valueName))},
            onParrentIdCard: (valueIdCard) => {dispatch(onParrentIdCard(valueIdCard))},
            onParrentCity: (valueCity) => {dispatch(onParrentCity(valueCity))},
            onParrentZipCode: (valueZipCode) => {dispatch(onParrentZipCode(valueZipCode))},
            onParrentAddress: (valueAddress) => {dispatch(onParrentAddress(valueAddress))},
        }
    )
}

export const ParrentDataContainer = connect(mapStateToProps, mapDispatchToProps)(ParrentData)