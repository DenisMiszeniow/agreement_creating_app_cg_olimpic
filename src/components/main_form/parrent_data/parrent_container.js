import { connect } from "react-redux";
import { onParrentName, onParrentIdCard, onParrentCity, onParrentZipCode, onParrentAddress} from "../../../BLL/parrent_data_reducer";
import { getParentText } from "../../../BLL/Selectors/locales_selectors";
import { getParentAddressSelector, getParentCitySelector, getParentIdCardSelector, getParentNameSelector, getParentZipCodeSelector } from "../../../BLL/Selectors/parent_data_selectors";
import ParrentData from "./parrent_data";

export const mapStateToProps = (state) => {
    return (
        {
            parrentName: getParentNameSelector(state),
            parrentIdCard: getParentIdCardSelector(state),
            parrentCity: getParentCitySelector(state),
            parrentZipCode: getParentZipCodeSelector(state),
            parrentAddress: getParentAddressSelector(state),
            localesTexts: getParentText(state)
        }
    )
}

export const ParrentDataContainer = connect(mapStateToProps, {onParrentName, onParrentIdCard, onParrentZipCode, 
    onParrentCity, onParrentAddress})(ParrentData)