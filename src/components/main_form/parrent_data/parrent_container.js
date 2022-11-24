import { connect } from "react-redux";
import { onParrentName, onParrentIdCard, onParrentCity, onParrentZipCode, onParrentAddress} from "../../../BLL/parrent_data_reducer";
import ParrentData from "./parrent_data";

export const mapStateToProps = (state) => {
    return (
        {
            parrentName: state.parrentData.parrentName,
            parrentIdCard: state.parrentData.parrentIdCard,
            parrentCity: state.parrentData.parrentCity,
            parrentZipCode: state.parrentData.parrentZipCode,
            parrentAddress: state.parrentData.parrentAddress,
            localesTexts: state.localesReducer.mainFormTexts.parrentDataText
        }
    )
}

export const ParrentDataContainer = connect(mapStateToProps, {onParrentName, onParrentIdCard, onParrentZipCode, 
    onParrentCity, onParrentAddress})(ParrentData)